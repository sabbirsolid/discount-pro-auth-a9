import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 md:space-x-12">
          
          {/* Services Links */}
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h4 className="font-semibold text-lg text-white">Services</h4>
            <a href="/shipping" className="text-gray-400 hover:text-white">Shipping</a>
            <a href="/returns" className="text-gray-400 hover:text-white">Return Policy</a>
            <a href="/customer-support" className="text-gray-400 hover:text-white">Customer Support</a>
            <a href="/faq" className="text-gray-400 hover:text-white">FAQ</a>
            <a href="/track-order" className="text-gray-400 hover:text-white">Track Order</a>
          </div>

          {/* Company Info Links */}
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <h4 className="font-semibold text-lg text-white">Company Info</h4>
            <a href="/about-us" className="text-gray-400 hover:text-white">About Us</a>
            <a href="/careers" className="text-gray-400 hover:text-white">Careers</a>
            <a href="/privacy-policy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="/terms-of-service" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="/contact-us" className="text-gray-400 hover:text-white">Contact Us</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/sabbir.solid"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://x.com/sabbir_solid?t=ENm4_g3Np2MDRdZwXRsuRg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sabbir-ahmed-b78668205?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()}, Discount Pro, All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
