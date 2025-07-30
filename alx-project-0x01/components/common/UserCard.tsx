import React from "react";
import { UserProps } from "@/interfaces";
const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address: { city },
  company: { name: companyName },
}) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold">
        {name} <span className="text-gray-500">(@{username})</span>
      </h2>
      <p className="text-sm text-gray-700">Email: {email}</p>
      <p className="text-sm text-gray-700">Phone: {phone}</p>
      <p className="text-sm text-gray-700">City: {city}</p>
      <p className="text-sm text-gray-700">Company: {companyName}</p>
      <a
        href={`http://${website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline text-sm"
      >
        Visit Website
      </a>
    </div>
  );
};

export default UserCard;
