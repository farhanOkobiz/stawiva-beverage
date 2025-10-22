import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Contact from "./pages/Contact";

import Login from "./pages/Login";
import RegistrationUser from "./pages/Registration";
import Shop from "./pages/Shop";

import SingleBlogPage from "./pages/SingleBlogPage";

import SingleShopPage from "./pages/SingleShopPage";
import UserProfile from "./pages/UserProfile";

import CheckOut from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import Thankyou from "./pages/Thankyou";
import ForgotPassword from "./pages/ForgotPassword";

import VerifyEmail from "./pages/VerifyEmail";
import ProductGridShopPage from "./components/shop/ProductGridShopPage";
import CategoryShop from "./components/shop/CategoryShop";
import RegistrationChoose from "./pages/RegistrationChoose";
import RegistrationDealer from "./pages/RegistrationDealer";
import Forgot from "./pages/Forgot";
import ResetPassword from "./pages/ResetPassword";
import BrandShop from "./components/shop/BrandShop";
import Clients from "./pages/Clients";
import History from "./pages/History";
import Management from "./pages/Management";
import Policy from "./pages/Policy";
import Career from "./pages/Career";
import Environmental from "./pages/Environmental";
import EmploymentWelfare from "./pages/EmploymentWelfare";
import FoodBeverage from "./pages/FoodBeverage";
import { useState } from "react";
import { useEffect } from "react";
import img from "./assets/logo/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import NewsEvents from "./pages/NewsEvents";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/company/about-us" element={<About />} />
      <Route path="/company/management" element={<Management />} />
      <Route path="/company/history" element={<History />} />
      <Route path="/industries/food-beverage" element={<FoodBeverage />} />
      <Route
        path="/sustainability/environmental-sustainability"
        element={<Environmental />}
      />
      <Route
        path="/sustainability/employment-welfare"
        element={<EmploymentWelfare />}
      />
      <Route path="/news-events" element={<NewsEvents />} />
      <Route path="/career" element={<Career />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/news-events/:slug" element={<SingleBlogPage />} />
      <Route path="/clients" element={<Clients />} />
      <Route path="/checkout/:id" element={<CheckOut />} />
      <Route path="/order-confirm" element={<OrderConfirmation />} />
      <Route path="/thank-you" element={<Thankyou />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgotpassword" element={<Forgot />} />
      <Route path="/resetPassword/:token" element={<ResetPassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Shop />}>
        <Route index element={<ProductGridShopPage />} />
        <Route path="category/:slug" element={<CategoryShop />} />
        <Route path="brand/:slug" element={<BrandShop />} />
      </Route>
      <Route path="/verify" element={<VerifyEmail />} />
      <Route path="/shop/:slug" element={<SingleShopPage />} />
      <Route path="/registration-user" element={<RegistrationUser />} />
      <Route path="/registration-dealer" element={<RegistrationDealer />} />
      <Route path="/registration-choose" element={<RegistrationChoose />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const [loading, setLoading] = useState(true);
  const [showWebsite, setShowWebsite] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setShowWebsite(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {/* Loader Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 flex items-center justify-center bg-[#001802] z-[9999] overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4 } }}
          >
            <motion.img
              src={img}
              alt="logo"
              className="w-40 h-40 z-20 relative"
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

            {/* <motion.div
              className="absolute bottom-0 left-0 w-full bg-[#c1af0f]"
              initial={{ height: 0 }}
              animate={{ height: "100%" }}
              transition={{
                duration: 2.5,
                ease: [0.83, 0, 0.17, 1],
              }}
            /> */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website */}
      {showWebsite && <RouterProvider router={router} />}
    </>
  );
}

export default App;
