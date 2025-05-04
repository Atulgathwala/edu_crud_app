import React from "react";
import studentImage from "../../src/assets/images/mypic.png"; // replace with actual path to the image

const HeroSection = () => {
  return (
    <section className="bg-white min-h-screen flex items-center px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        {/* Left Section */}
        <div>
          <p className="text-sm text-blue-500 mb-2">
            Anywhere Access Easy Learning
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Best <span className="text-blue-600">Platform</span> For
            <br />
            Enhancing Skills
          </h1>
          <p className="text-gray-600 mb-6">
            Working collaboratively to ensure every student achieves
            academically, socially, and emotionally.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-100 transition">
              Know More
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <FeatureCard icon="🎓" label="Learn Anywhere" />
            <FeatureCard icon="🔒" label="Lifetime Access" />
            <FeatureCard icon="⏰" label="24/7 Support" />
            <FeatureCard icon="👨‍🏫" label="Expert Instructor" />
          </div>
        </div>

        {/* Right Section - Student Image */}
        <div className="flex justify-center relative">
          <div className="absolute w-72 h-72 bg-blue-500 rounded-full -z-10 top-12 left-10 blur-xl opacity-40" />
          <img
            src={studentImage}
            alt="Student"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, label }) => (
  <div className="flex flex-col items-center p-4 bg-blue-500 text-white rounded-lg shadow">
    <div className="text-2xl mb-2">{icon}</div>
    <p className="text-sm text-center">{label}</p>
  </div>
);

export default HeroSection;
