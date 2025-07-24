
import CommentDetails from "./CommentDetails";

 const BlogDetails = ({details}) => {
    // console.log(details.postComments)
    return (
<div className="min-h-screen">
 
  <div className="flex flex-col lg:flex-row lg:h-screen">

    <div className="w-full lg:w-1/2 relative">
   
      <div className="lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:left-4 lg:w-[48%] w-full px-4 z-40">
        <div className="card glass shadow-xl w-full sm:max-w-md mx-auto">
          <figure>
            <img
              src={details.postDetails.img}
              alt="details"
              className="object-cover w-full max-h-60"
            />
          </figure>
          <div className="card-body p-4 sm:p-5">
            <h2 className="card-title text-red-800 text-lg sm:text-xl">
              ID# {details.postDetails.list_id}
            </h2>
            <p className="text-sm sm:text-base">{details.postDetails.content}</p>
          </div>
        </div>
      </div>
    </div>

    {/* Comment Section */}
    <div className="w-full lg:w-1/2 px-4 pt-6 mt-6 lg:mt-15 lg:ml-[50%] overflow-visible">
      <h1 className="text-red-700 text-xl sm:text-2xl mb-4">Comment Section</h1>
      <div className="space-y-4">
        {details?.postComments?.map((item, index) => (
          <CommentDetails key={index} item={item} />
        ))}
      </div>
    </div>

  </div>
</div>

);
 };
 
 export default BlogDetails;