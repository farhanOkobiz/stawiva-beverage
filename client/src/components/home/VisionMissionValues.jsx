import Containar from "../containar/Containar";

export default function MissionVision() {
  return (
    <div className="bg-gradient-to-br from-yellow-50 via-green-50 to-emerald-50 py-8 md:py-12 lg:py-16">
      <Containar>
        <div className="">
          {/* Header */}
          <div className="text-center mb-8 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-yellow-600 to-green-600 bg-clip-text text-transparent mb-4">
              Mission & Vision
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 via-green-500 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          {/* Cards Container */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 via-green-500 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Decorative Circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative p-8 z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-100 to-green-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 mb-4">
                    <svg
                      className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                    Mission
                  </h3>
                </div>

                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed text-lg transition-colors duration-300">
                  Our mission at Stamina+ Beverage Limited is to deliver safe,
                  refreshing, and high-quality flavored beverages that inspire
                  energy, confidence, and a healthy lifestyle. We are committed
                  to ensuring customer satisfaction through innovation,
                  integrity, and uncompromising quality standards.
                </p>

                <div className="mt-8 flex gap-2">
                  <div className="w-2 h-2 bg-yellow-500 group-hover:bg-white rounded-full transition-colors duration-300"></div>
                  <div className="w-2 h-2 bg-green-500 group-hover:bg-white/80 rounded-full transition-colors duration-300"></div>
                  <div className="w-2 h-2 bg-emerald-500 group-hover:bg-white/60 rounded-full transition-colors duration-300"></div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 via-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Decorative Circles */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

              <div className="relative p-8 z-10">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center transition-all duration-300 mb-4">
                    <svg
                      className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                    Vision
                  </h3>
                </div>

                <p className="text-gray-600 group-hover:text-white/90 leading-relaxed text-lg transition-colors duration-300">
                  Our vision is to establish Stamina+ Beverage Limited as a
                  trusted global brand. With world-class quality and modern
                  technology, we aim to expand beyond the borders of Bangladesh
                  and proudly export our beverages to international markets,
                  representing the strength and potential of our nation on the
                  global stage.
                </p>

                <div className="mt-8 flex gap-2">
                  <div className="w-2 h-2 bg-green-500 group-hover:bg-white rounded-full transition-colors duration-300"></div>
                  <div className="w-2 h-2 bg-emerald-500 group-hover:bg-white/80 rounded-full transition-colors duration-300"></div>
                  <div className="w-2 h-2 bg-yellow-500 group-hover:bg-white/60 rounded-full transition-colors duration-300"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Decoration */}
          <div className="mt-16 flex justify-center items-center gap-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
              <div
                className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-10 animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-32 h-32 bg-green-200 rounded-full opacity-10 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
      </Containar>
    </div>
  );
}
