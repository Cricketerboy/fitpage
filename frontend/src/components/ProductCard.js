import React from "react";
import ReviewForm from "./ReviewForm";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      {product.avgRating && <p>⭐ Average Rating: {product.avgRating}</p>}
      {product.tags.length > 0 && (
        <p>
          <strong>Tags:</strong> {product.tags.join(", ")}
        </p>
      )}
      <ReviewForm productId={product.id} />
      <div className="reviews">
        <h4>Reviews:</h4>
        {product.reviews.length > 0 ? (
          product.reviews.map((r, idx) => (
            <div className="review" key={idx}>
              <p>
                <strong>{r.userId}</strong>: {r.reviewText}{" "}
                {r.rating && <>({r.rating}⭐)</>}
              </p>
              {r.photoUrl && (
                <img
                  src={r.photoUrl}
                  alt="review"
                  style={{ width: "80px", marginTop: "4px" }}
                />
              )}
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
