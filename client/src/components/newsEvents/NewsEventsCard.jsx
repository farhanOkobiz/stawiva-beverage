/* eslint-disable react/prop-types */
import { MdAccessTime } from "react-icons/md";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";

const NewsEventsCard = ({ blog, loading }) => {
  if (loading) {
    // Render skeleton if loading
    return (
      <div className="rounded-lg overflow-hidden pb- bg-white">
        <Skeleton height={280} /> {/* Image Skeleton */}
        <div className="relative">
          <div className="absolute right-3 -bottom-10">
            {/* Circle Skeleton for Date */}
            <Skeleton circle={true} height={80} width={80} />
          </div>
        </div>
        <div className="pl-4 my-7">
          <Skeleton width={100} /> {/* Author name skeleton */}
          <Skeleton height={30} width={200} className="my-4" />{" "}
          <Skeleton count={2} />
          <Skeleton height={40} width={120} className="mt-5" />{" "}
          {/* Button Skeleton */}
        </div>
      </div>
    );
  }
  // Safeguard against missing or undefined blog data
  if (!blog) {
    return <div></div>;
  }

  const formatDateWithTime = (dateString) => {
    if (!dateString) return { time: "", date: "" };
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return { time: "", date: "" };
    return {
      time: date.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      date: `${date.getDate()} ${date.toLocaleString("en-US", {
        month: "long",
      })} ${date.getFullYear()}`,
    };
  };
  console.log("blog", blog);

  return (
    <div className="rounded-lg overflow-hidden pb- border bg-white w-full">
      <div className="relative">
        <Link to={`/news-events/${blog?.slug || ""}`}>
          <img
            src={blog?.photos?.[0]} // Fallback to default image
            alt="Blog Cover"
            className="w-full h-72 object-cover"
          />
        </Link>
        {/* {blog?.date && (
          <div className="bg-green-800 absolute right-3 -bottom-5 text-white rounded-full w-20 h-20 border-[6px] border-white flex justify-center items-center">
            <p className="text-base font-medium leading-6 text-center text-white">
              {blog.category}
            </p>
          </div>
        )} */}
      </div>
      {/* Icon and Content */}
      <div className="text-left pl-4 my-7 w-full">
        <div className="flex  ">
          {/** compute formatted once and render safely */}
          {(() => {
            const formatted = formatDateWithTime(blog?.createdAt || blog?.date);
            return (
              <>
                <div className="flex items-center gap-1 mr-2">
                  <MdAccessTime />
                  <h4>{formatted.time || ""}</h4>
                </div>
                <span className="mx-2">|</span>
                <div className="flex items-center gap-1 ml-2">
                  <CiCalendarDate />
                  <h4>{formatted.date || ""}</h4>
                </div>
              </>
            );
          })()}
        </div>
        <Link to={`/blogs/${blog?.slug || ""}`}>
          <h2 className="font-bold text-xl mt-4">
            {blog?.title || "Untitled Blog"}
          </h2>
        </Link>
        <p
          className="text-gray-600 text-sm my-5 line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: blog?.content
              ? blog.content.replace(/<\/?[^>]+(>|$)/g, "")
              : "No content available.",
          }}
        />
        <div className="flex justify-between items-center mt-5 w-full">
          <Link to={`/news-events/${blog?.slug || ""}`}>
            <button className="inline-block w-full md:w-auto text-center rounded-md text-white text-[14px] bg-green-800 hover:bg-yellow-500 px-4 py-1">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsEventsCard;
