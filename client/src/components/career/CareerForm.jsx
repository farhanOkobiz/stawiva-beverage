import React, { useState } from "react";
import api from "../axios/Axios";
import { toast } from "react-toastify";

const CareerForm = () => {
  const [cvFile, setCvFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", event.target.name.value);
    formData.append("Address", event.target.address.value);
    formData.append("phone", event.target.phone.value);
    formData.append("email", event.target.email.value);
    formData.append("coverLatter", event.target.coverLatter.value);
    if (cvFile) formData.append("cv", cvFile);

    try {
      const response = await api.post("/career", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      toast.success("Career application submitted successfully");
      event.target.reset();
      setCvFile(null);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Submission failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto">
      <input type="text" name="name" placeholder="Your Name" required className="mb-2 w-full px-2 py-3 border rounded"/>
      <input type="text" name="address" placeholder="Address" required className="mb-2 w-full px-2 py-3 border rounded"/>
      <input type="text" name="phone" placeholder="Phone Number" required className="mb-2 w-full px-2 py-3 border rounded"/>
      <input type="email" name="email" placeholder="Email" required className="mb-2 w-full px-2 py-3 border rounded"/>
      <textarea name="coverLatter" placeholder="Cover Letter" required className="mb-2 w-full px-2 py-5 border rounded"></textarea>
      <input type="file" accept="application/pdf" onChange={(e) => setCvFile(e.target.files[0])} required className="mb-2 w-full"/>
      <button type="submit" className="w-full bg-[#001802] text-white px-2 py-3 rounded hover:bg-[#c1af0f] mt-4">Submit</button>
    </form>
  );
};

export default CareerForm;
