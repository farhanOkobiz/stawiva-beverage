import Containar from "../containar/Containar";
import api from "../axios/Axios";
import { toast } from "react-toastify";

const GetQuote = () => {
  const handelContactForm = async (event) => {
    event.preventDefault();
    const formdata = {
      name: event.target.name.value,
      address: event.target.address.value,
      country: event.target.country.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      subject: event.target.subject.value,
      message: event.target.message.value,
    };

    try {
      const response = await api.post("/getquote", formdata);
      if (response) {
        toast.success("Message sent successfully!");
        event.target.reset();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="mt-4 w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Right side — Form */}
        <div className="w-full">
          <form onSubmit={handelContactForm} className="space-y-4">
            <div className="flex flex-col md:flex-row gap-3 w-full">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="text"
                name="address"
                placeholder="Your Address"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="text"
                name="country"
                placeholder="Your Country"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                name="phone"
                placeholder="Mobile / WhatsApp"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>

            <textarea
              name="message"
              placeholder="The product you are interested in, your market or any questions?"
              rows="4"
              required
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-800 text-white font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
            >
              Get A Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
