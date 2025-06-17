import React, { useState } from "react";
import axios from "axios";
import "./ReviewForm.css";

const ReviewForm = ({ productId }) => {
  const [form, setForm] = useState({
    userId: "",
    rating: "",
    reviewText: "",
    photoUrl: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.userId || (!form.rating && !form.reviewText)) {
      alert("Please enter User ID and at least a rating or review.");
      return;
    }

    try {
      await axios.post("https://fitpage-6j0w.onrender.com/api/review", {
        ...form,
        productId,
        rating: form.rating ? parseInt(form.rating) : undefined
      });
      alert("Review added!");
      window.location.reload();
    } catch (err) {
      alert(err?.response?.data?.msg || "Error submitting review");
    }
  };

  return (
    <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="userId"
        placeholder="User ID"
        onChange={handleChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating (1-5)"
        onChange={handleChange}
      />
      <input
        type="text"
        name="reviewText"
        placeholder="Review Text"
        onChange={handleChange}
      />
      <input
        type="text"
        name="photoUrl"
        placeholder="Photo URL (optional)"
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;
