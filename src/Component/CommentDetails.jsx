
import React from 'react';
import { format } from "date-fns";
const CommentDetails = ({item}) => {
  console.log('All item',item)
  return (
   <div className="bg-gray-100 rounded-lg p-4 mb-4 shadow-sm">
    <div className="flex items-center space-x-4 mb-2">
      <img
        src={"/profile.jpg"}
        alt="User"
        className="w-10 h-10 rounded-full"
      />
      <div>
        <h4 className="font-semibold text-gray-800">{item.author}</h4>
        <p className="text-sm text-gray-500">Posted on {new Date(item.created_at).toLocaleString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })} </p>
      </div>
    </div>
    <p className="text-gray-700">
    {item.comment}  .
    </p>
  </div>
  
  );
};

export default CommentDetails;