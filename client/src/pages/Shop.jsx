import React, { useEffect, useRef, useState } from "react";
import Containar from "../components/containar/Containar";
import Product from "../components/home/Product";
import BradCumbs from "../components/shared/BradCumbs";
import HeroBanner from "../components/shop/HeroBanner";
import Skeleton from "react-loading-skeleton"; // Import skeleton loader
import "react-loading-skeleton/dist/skeleton.css";
import managementImg from "../assets/management/Pruduct.jpg";
import { FaBangladeshiTakaSign, FaChevronRight } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";

import { FaChevronLeft, FaList } from "react-icons/fa";
import ProductGridShopPage from "../components/shop/ProductGridShopPage";
import api from "../components/axios/Axios";
import { Link, Outlet, useLocation } from "react-router-dom";
import PriceRange from "../components/shop/PriceRange";
import { FaFilter } from "react-icons/fa6";

const Shop = () => {
  const swiperRef = useRef(null);
  const [newRelease, setNewRelease] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [deals, setDeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading
  const location = useLocation();
  const isCategoryPath = location.pathname.startsWith("/shop/category");
  const isBrandPath = location.pathname.startsWith("/shop/brand");
  const categoryName = isCategoryPath ? location.pathname.split("/").pop() : "";
  const brandName = isBrandPath ? location.pathname.split("/").pop() : "";

  const getBanners = async () => {
    try {
      const response = await api.get(`/banners`);
      const groupedBanners = response?.data?.data?.doc.reduce((acc, banner) => {
        const { bannerType } = banner;
        if (!acc[bannerType]) {
          acc[bannerType] = [];
        }
        acc[bannerType].push(banner);
        return acc;
      }, {});
      setNewRelease(groupedBanners?.newRelease);
      setDeals(groupedBanners?.deals);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getCategory = async () => {
    try {
      const response = await api.get(`/category`);
      setCategoryList(response.data.data.categories);
    } catch (error) {
      console.error(error.message);
    }
  };
  const getBrand = async () => {
    try {
      const response = await api.get(`/brand`);
      setBrandList(response.data.data.brands);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCategory();
    getBanners();
    getBrand();
  }, []);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const lastSlug = location.pathname.split("/").pop();

  return (
    <>
      <div className="h-[68px] sm:h-[110.4px] bg-[#f5f5f5] font-robo "></div>
      <Containar>
        <div className="flex gap-2 items-center py-10">
          <Link className="font-medium" to={"/"}>
            Home
          </Link>
          <FaChevronRight className="text-[12px]" />
          <Link className="font-medium" to={"/products"}>
            Products
          </Link>
          {/* {isCategoryPath && (
            <>
              <FaChevronRight className="text-[12px]" />
              <h3 className="capitalize">{categoryName}</h3>
            </>
          )}
          {isBrandPath && (
            <>
              <FaChevronRight className="text-[12px]" />
              <h3 className="capitalize">{brandName}</h3>
            </>
          )} */}
        </div>
      </Containar>
      <div className="pb-5 md:pb-8 lg:pb-14 bg-[#f5f5f5]">
        <Containar>
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-12 sm:col-span-12">
              {/* Banner Section */}
              <div className="relative w-full min-h-[50vh] flex items-center justify-center text-white perspective-1000">
                {/* Background Image */}
                <div
                  className="absolute inset-0 w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${managementImg})` }}
                />
                <div
                  className="relative z-10 text-center px-4 p-6 rounded"
                >
                  <h2 className=" max-w-7xl text-4xl md:text-5xl xl:text-7xl font-bold mb-4 text-green-900">
                    Products
                  </h2>
                  <p className="mt-2 xl:mt-8 font-medium text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-5xl mx-auto lg:leading-relaxed xl:leading-relaxed">
                  </p>
                </div>
              </div>
              <div className="bg-white w-full">
                <Outlet />
              </div>
            </div>
          </div>
        </Containar>
      </div>
    </>
  );
};

export default Shop;
