const { Product, Review } = require('../models');

exports.addReview = async (req, res) => {
  const { productId, userId, rating, reviewText, photoUrl } = req.body;

  if (!userId || (!rating && !reviewText)) {
    return res.status(400).json({ msg: "User ID and at least one of rating or review is required." });
  }

  const exists = await Review.findOne({ where: { productId, userId } });
  if (exists) return res.status(400).json({ msg: "Already reviewed this product." });

  const review = await Review.create({ productId, userId, rating, reviewText, photoUrl });
  res.json(review);
};

function extractTags(text) {
  const words = text.toLowerCase().match(/\b[a-z]{4,}\b/g);
  if (!words) return [];
  const freq = {};
  words.forEach(w => freq[w] = (freq[w] || 0) + 1);
  return Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([tag]) => tag);
}

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      include: [{
        model: Review,
        attributes: ['userId', 'rating', 'reviewText', 'photoUrl'],
        required: false
      }]
    });

    const result = products.map(product => {
      const reviews = product.Reviews || [];
      const ratings = reviews.map(r => r.rating).filter(r => typeof r === 'number');
      const avgRating = ratings.length ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1) : null;

      const allText = reviews.map(r => r.reviewText || '').join(' ');
      const tags = extractTags(allText);

      return {
        id: product.id,
        name: product.name,
        avgRating,
        tags,
        reviews
      };
    });

    res.json(result);
  } catch (error) {
    console.error("Error in getProducts:", error);
    res.status(500).json({ msg: "Failed to fetch products" });
  }
};
