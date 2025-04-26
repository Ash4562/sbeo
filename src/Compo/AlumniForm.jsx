import img from "../assets/bg-alumniimg.png";
import React, { useState } from "react";
import { useAddAlumniDataMutation } from "../redux/EnquiryApi";

const AlumniForm = () => {
  const [name, setName] = useState("");
  const [passOutYear, setPassOutYear] = useState("");
  const [currentDesignation, setCurrentDesignation] = useState("");
  const [stream, setStream] = useState("");
  const [university, setUniversity] = useState("");
  const [profilePhoto, setProfilePhoto] = useState(null);

  const [addAlumniData, { isLoading, isSuccess, isError }] =
    useAddAlumniDataMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("passOutYear", passOutYear);
    formData.append("currentDesignation", currentDesignation);
    formData.append("stream", stream);
    formData.append("University", university); // 🔥 IMPORTANT: backend expects "University" (capital U)
    formData.append("profilePhoto", profilePhoto);

    try {
      await addAlumniData(formData);
      alert("Form submitted successfully!");
      // Reset form after success
      setName("");
      setPassOutYear("");
      setCurrentDesignation("");
      setStream("");
      setUniversity("");
      setProfilePhoto(null);
    } catch (error) {
      console.error("Form submission failed:", error);
    }
  };

  return (
    <div>
      <div
        className="relative h-screen w-full bg-cover bg-center font-playfair flex items-center justify-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="bg-white p-8 shadow-lg w-full max-w-[600px] h-[600px] flex mx-6 flex-col justify-between">
          <h2 className="text-center text-lg sm:text-xl mb-4">ENROLL ALUMNI</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between h-full text-[10px] sm:text-sm"
            encType="multipart/form-data" // 🔥 Important for uploading files
          >
            <input
              className="bg-[#D9D9D969] text-black w-full h-[40px] mb-4 p-3"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="bg-[#D9D9D969] text-black w-full h-[40px] mb-4 p-3"
              type="text"
              placeholder="Year of Passout"
              value={passOutYear}
              onChange={(e) => setPassOutYear(e.target.value)}
              required
            />
            <input
              className="bg-[#D9D9D969] text-black w-full h-[40px] mb-4 p-3"
              type="text"
              placeholder="Current Designation"
              value={currentDesignation}
              onChange={(e) => setCurrentDesignation(e.target.value)}
              required
            />
            <input
              className="bg-[#D9D9D969] text-black w-full h-[40px] mb-4 p-3"
              type="text"
              placeholder="Graduate & Undergraduate Stream"
              value={stream}
              onChange={(e) => setStream(e.target.value)}
              required
            />
            <input
              className="bg-[#D9D9D969] text-black w-full h-[40px] mb-4 p-3"
              type="text"
              placeholder="Graduation University"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
              required
            />
            <input
              className="bg-[#D9D9D969] text-black w-full h-[40px] mb-4 p-2"
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePhoto(e.target.files[0])}
              required
            />
            <button
              className="w-[200px] py-3 mx-auto rounded-lg bg-[#00AFEF] text-white disabled:bg-gray-400"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit"}
            </button>
          </form>

          {isSuccess && (
            <p className="text-green-500 text-center mt-4">
              Successfully submitted!
            </p>
          )}
          {isError && (
            <p className="text-red-500 text-center mt-4">
              Something went wrong. Please try again.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AlumniForm;
