import React, { useState } from 'react';

const GotMarried = () => {
  const [formData, setFormData] = useState({
    selfBiodataNumber: '',
    partnerBiodataNumber: '',
    marriageDate: '',
    coupleImageLink: '',
    successStoryReview: '',
    review_star: '', // Add this field
  });

  const {
    selfBiodataNumber,
    partnerBiodataNumber,
    marriageDate,
    coupleImageLink,
    successStoryReview,
    review_star,
  } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="selfBiodataNumber"
          >
            Self Biodata Number
          </label>
          <input
            type="text"
            id="selfBiodataNumber"
            name="selfBiodataNumber"
            value={selfBiodataNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Self Biodata Number"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="partnerBiodataNumber"
          >
            Partner Biodata Number
          </label>
          <input
            type="text"
            id="partnerBiodataNumber"
            name="partnerBiodataNumber"
            value={partnerBiodataNumber}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Partner Biodata Number"
            required
          />
        </div>
        <div className="mb-4 col-span-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="marriageDate"
          >
            Marriage Date
          </label>
          <input
            type="text"
            id="marriageDate"
            name="marriageDate"
            value={marriageDate}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Marriage Date"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="coupleImageLink"
          >
            Couple Image Link
          </label>
          <input
            type="text"
            id="coupleImageLink"
            name="coupleImageLink"
            value={coupleImageLink}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Couple Image Link"
          />
        </div>
        <div className="mb-4 col-span-full">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="successStoryReview"
          >
            Success Story Review
          </label>
          <textarea
            id="successStoryReview"
            name="successStoryReview"
            value={successStoryReview}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
            placeholder="Share your feelings about using this website..."
            required
          />
        </div>
        <div className="mb-4 col-span-1">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="review_star"
          >
            Review Star
          </label>
          <input
            type="text"
            id="review_star"
            name="review_star"
            value={review_star}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Review Star"
          />
        </div>
        <div className="col-span-full flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GotMarried;
