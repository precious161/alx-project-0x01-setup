import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(), // temporary unique ID
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
    },
    geo: {
      lat: "",
      lng: "",
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    path?: string
  ) => {
    const { name, value } = e.target;

    if (path === "address" || path === "company" || path === "geo") {
      setFormData((prev) => ({
        ...prev,
        [path]: {
          ...prev[path],
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg relative">
        <h2 className="text-xl font-semibold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            name="name"
            placeholder="Name"
            className="input"
            onChange={handleChange}
          />
          <input
            name="username"
            placeholder="Username"
            className="input"
            onChange={handleChange}
          />
          <input
            name="email"
            placeholder="Email"
            type="email"
            className="input"
            onChange={handleChange}
          />
          <input
            name="phone"
            placeholder="Phone"
            className="input"
            onChange={handleChange}
          />
          <input
            name="website"
            placeholder="Website"
            className="input"
            onChange={handleChange}
          />

          <input
            name="city"
            placeholder="City"
            className="input"
            onChange={(e) => handleChange(e, "address")}
          />
          <input
            name="name"
            placeholder="Company"
            className="input"
            onChange={(e) => handleChange(e, "company")}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded"
          >
            Save User
          </button>
        </form>

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default UserModal;
