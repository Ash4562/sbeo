import { useState } from "react";
import bgImage from "../assets/46.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useAddEnquiryMutation } from "../redux/EnquiryApi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [addEnquiry, { isLoading, isSuccess, isError }] =
    useAddEnquiryMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEnquiry(formData).unwrap();
    //   alert("Enquiry submitted successfully!");
      setFormData({ name: "", email: "", message: "" }); // reset form
    } catch (err) {
      console.error("Failed to send enquiry", err);
    //   alert("Something went wrong!");
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="relative bg-white border border-blue-800 bg-opacity-95 max-w-2xl w-full min-h-[450px] rounded-md p-8 shadow-xl text-center mb-30 mt-20">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-36 h-32 object-contain rounded-full bg-white p-2 hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </div>

        <div className="">
          <h2 className="text-lg text-center uppercase font-playfair text-gray-800 mt-10">
            Get In Touch With Us
          </h2>
          <p className="text-blue-600 text-sm mt-2">
            Have Questions? We're Here to Help!
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Whether you're a parent, student, or visitor, we'd love to assist
            you. Fill out the form below, and our team will get back to you
            promptly.
          </p>
        </div>

        <form
          className="mt-6 flex flex-col gap-4 text-left"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Name"
            required
            className="w-full px-4 py-2 border border-blue-300 rounded outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email / Number"
            required
            className="w-full px-4 py-2 border border-gray-200 rounded outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message or enquiry here..."
            required
            rows={3}
            className="w-full px-4 py-2 border border-gray-200 rounded outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="w-36 text-black bg-gray-200 py-2 mt-2 transition rounded-lg"
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </div>

          {isSuccess && (
            <p className="text-green-500 text-center">
              Enquiry sent successfully!
            </p>
          )}
          {isError && (
            <p className="text-red-500 text-center">Something went wrong!</p>
          )}
        </form>
      </div>
    </div>
  );
}
