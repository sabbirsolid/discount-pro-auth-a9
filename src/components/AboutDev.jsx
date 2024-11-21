import React from "react";

const AboutDev = () => {
  return (
    <div className="bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        {/* Title Section */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">
          About the Developer
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-700 mb-6 text-center">
          Hello! I am a passionate web developer currently learning and building
          projects using modern web technologies. My focus is on creating clean
          and responsive user interfaces with robust functionality.
        </p>

        {/* Skills Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Skills</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>HTML and CSS for building well-structured and styled layouts</li>
          <li>
            Tailwind CSS for creating responsive, modern, and aesthetically
            pleasing designs
          </li>
          <li>JavaScript for adding interactivity and functionality</li>
          <li>React for developing reusable components and managing state</li>
        </ul>

        {/* Projects Section */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Projects</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong className="text-indigo-600">Discount Pro:</strong> A discount and coupon management
            platform with user authentication and Google sign-in.
          </li>
          <li>
            <strong className="text-indigo-600">Gadget Heaven:</strong> An e-commerce platform featuring a
            product catalog, shopping cart, and wishlist functionality.
          </li>
          <li>
            <strong className="text-indigo-600">Portfolio Website:</strong> A personal website showcasing
            my skills, projects, and contact information.
          </li>
        </ul>

        {/* Contact Info Section */}
        <div className="mt-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Contact Info</h3>
          <p className="text-lg text-gray-700">
            Feel free to reach out to me via email:{" "}
            <a
              href="mailto:sabbir.designer21@gmail.com"
              className="text-indigo-600 font-semibold hover:underline"
            >
              sabbir.designer21@gmail.com
            </a>
          </p>
        </div>

        {/* Closing Note */}
        <p className="text-lg text-gray-700 mt-6 text-center">
          I am excited to continue learning and building more projects to refine
          my skills and explore advanced concepts in web development.
        </p>
      </div>
    </div>
  );
};
export default AboutDev;
