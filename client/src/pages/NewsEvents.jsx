import { useEffect, useState, useRef } from "react";
import Containar from "../components/containar/Containar";
import mixitup from "mixitup";
import api from "../components/axios/Axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import NE1 from "../assets/newsevent/NE1.png";
import NewsEventsCard from "../components/newsEvents/NewsEventsCard";
import BannerImage from "../components/bannerimage/BannerImage";

const NewsEvents = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("*");
  const containerRef = useRef(null);
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  // const router = useRouter();

  const getBlogs = async () => {
    try {
      const response = await api.get(`/blogs?page=${currentPage}&limit=20`);

      const formattedBlogs = response.data?.data?.doc?.map((blog) => ({
        id: blog?._id,
        title: blog?.title,
        author: blog?.author?.name,
        category: blog?.category,
        photos: blog?.photos,
        content: blog?.content,
        date: new Date(blog.createdAt).toLocaleString("en-US", {
          day: "2-digit",
          month: "short",
        }),
        slug: blog?.slug,
      }));
      const categoryMap = new Map();
      response.data?.data?.doc?.forEach((blog) => {
        const slug = blog?.category?.slug;
        const title = blog?.category?.title;
        if (!categoryMap.has(slug)) {
          categoryMap.set(slug, title);
        }
      });
      const uniqueCategories = Array.from(categoryMap, ([slug, title]) => ({
        slug,
        title,
      }));
      setUniqueCategories(uniqueCategories);
      setBlogs(formattedBlogs);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    // Initialize MixItUp when the component mounts and blogs are loaded
    let mixer;
    if (containerRef.current) {
      mixer = mixitup(containerRef.current, {
        selectors: {
          target: ".mix", // Target items with class `mix`
        },
        animation: {
          duration: 300,
        },
      });
    }

    return () => {
      // Clean up MixItUp instance on component unmount
      if (mixer) {
        mixer.destroy();
      }
    };
  }, [blogs]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  // Function to handle search
  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 1) {
      const res = await api(`/search/blogs?query=${value}`);
      setResults(res?.data?.data?.blogs);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const handleResultClick = (slug) => {
    window.location.href = `/blogs/${slug}`;
    setShowDropdown(false);
  };

  return (
    <>
      <div className="overflow-hidden mt-[85px] md:mt-[92px] lg:mt-[110px] 2xl:mt-[90px]">
        {/* Banner Section */}
        <BannerImage image={NE1} />
        <Containar>
          <div className="my-10 py-10 w-full">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1b2a36] mb-4 text-center">
              NEWS & EVENTS
            </h2>
            {loading ? (
              <div>
                <Skeleton height={480} />
              </div>
            ) : (
              <>
                <div
                  ref={containerRef}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full my-10"
                >
                  {blogs.length > 0 ? (
                    blogs.map((blog) => (
                      <div key={blog.id} className={`mix ${blog.category}`}>
                        <NewsEventsCard
                          key={blog.id}
                          blog={blog}
                          loading={loading}
                        />
                      </div>
                    ))
                  ) : (
                    <p className="h-32 flex items-center justify-center text-2xl font-semibold text-primary">
                      No NEWS & EVENTS Available Now!
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        </Containar>
      </div>
    </>
  );
};

export default NewsEvents;
