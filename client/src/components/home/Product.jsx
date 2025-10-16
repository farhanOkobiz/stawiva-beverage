import Containar from "../containar/Containar";
import { useEffect, useState, useRef } from "react";
import api from "../axios/Axios";
import { addToAgroCart } from "../../redux/slices/cart/agroCartSlice";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link, useNavigate } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const swiperRef = useRef(null); // Reference for Swiper
  const token = useSelector((state) => state.auth.token);

  const handleBuyNow = (product) => {
    dispatch(addToAgroCart({ ...product, quantity: 1 }));
    navigate(`/checkout/${product?._id}`);
  };

  const getProducts = async () => {
    try {
      const response = await api.get(`/products?limit=12`);
      setProducts(response.data?.data); // Set the product data
      setLoading(false); // Set loading to false once data is fetched
    } catch (error) {
      setError(error.message); // Handle error
      setLoading(false); // Set loading to false if error occurs
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="bg-[#FBF7F0] py-8 md:py-12 lg:py-16 font-robo relative group">
      <Containar>
        <div className="">
          <div className="text-center">
            <div className="text-center">
              <h5 className="text-[#c1af0f] font-bold text-3xl md:text-4xl xl:text-5xl mb-8 md:mb-16 leading-8 sm:leading-[58px] uppercase tracking-widest">
                Our Latest Products
              </h5>
            </div>
            <div>
              {loading ? (
                <div>
                  <Skeleton height={480} />
                </div>
              ) : (
                <>
                  {products?.doc?.length > 0 ? (
                    <>
                      <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {products?.doc?.map((product) => (
                            <>
                              <div
                                key={product._id}
                                className="rounded-lg overflow-hidden bg-white pb-4 group/edit flex flex-col justify-between"
                              >
                                <div className="">
                                  <Link to={`/shop/${product?.slug}`}>
                                    <img
                                      src={product?.photos[0]}
                                      alt={product?.title || "Product Image"}
                                      className="w-full h-[305px] rounded-none object-cover aspect-square"
                                    />
                                  </Link>
                                </div>

                                <div className="p-4 flex flex-col justify-between">
                                  <div className="">
                                    <Link
                                      to={`/shop/${product?.slug}`}
                                      className="font-bold text-xl mb-2 capitalize"
                                    >
                                      {product?.title}
                                    </Link>
                                    {/* <p className="flex items-center justify-center space-x-1 text-gray-600 text-[16px] mt-5">
                                      <FaBangladeshiTakaSign className="inline" />
                                      <span>{product?.price}</span>
                                    </p> */}
                                  </div>
                                  {/* <div className="flex justify-between items-center mt-5">
                                    <button
                                      onClick={() => handleBuyNow(product)}
                                      className="rounded-full text-white bg-primary hover:bg-secondary hover:text-primary border-primary border-2 transition-all ease-linear duration-150 px-4 py-2 text-sm w-full"
                                    >
                                      Order Now
                                    </button>
                                  </div> */}
                                </div>
                              </div>
                            </>
                          ))}
                        </div>
                        <div className="mt-8 text-center">
                          <Link
                            to="/shop"
                            className="w-28 mx-auto px-6 py-3 text-lg font-medium text-white bg-[#c1af0f] hover:bg-[#001802] rounded-full hover:transform hover:scale-110 transition-all ease-linear duration-200"
                          >
                            See all products
                          </Link>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="h-32 flex items-center justify-center text-2xl font-semibold text-[#c1af0f]">
                      No Products Available!
                    </p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </Containar>
    </div>
  );
};

export default Product;
