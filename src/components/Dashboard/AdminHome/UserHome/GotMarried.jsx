import React, { useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const GotMarried = () => {
  const axiosPublic = useAxiosPublic();
  const [formData, setFormData] = useState({
    selfBiodataNumber: '',
    partnerBiodataNumber: '',
    marriage_Date: '',
    couple_image: '',
    success_text: '',
    review_star: '',
  });

  const {
    selfBiodataNumber,
    partnerBiodataNumber,
    marriage_Date,
    couple_image,
    success_text,
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
    axiosPublic.post('/success', formData)
      .then(res => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Added your story Request`,
            showConfirmButton: false,
            timer: 1500
          });

          // Reset the form
          setFormData({
            selfBiodataNumber: '',
            partnerBiodataNumber: '',
            marriage_Date: '',
            couple_image: '',
            success_text: '',
            review_star: '',
          });
        }
      });
  };

  return (
    <div>
      <div className="text-2xl font-semibold text-center my-5"> Make Your Success Story  
      <span className='text-red-500'>  ❤❤</span></div>
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
              htmlFor="marriage_Date"
            >
              Marriage Date
            </label>
            <input
              type="date"
              id="marriage_Date"
              name="marriage_Date"
              value={marriage_Date}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Marriage Date"
              required
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="couple_image"
            >
              Couple Image Link
            </label>
            <input
              type="text"
              id="couple_image"
              name="couple_image"
              value={couple_image}
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
              id="success_text"
              name="success_text"
              value={success_text}
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
              type="range"
              id="review_star"
              name="review_star"
              value={review_star}
              onChange={handleChange}
              min="1"
              max="5"
              className="w-full"
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
    </div>
  );
};

export default GotMarried;
