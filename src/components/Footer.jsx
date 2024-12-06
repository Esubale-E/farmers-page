import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Logo from "../assets/konectar-logo.png";

const Footer = () => {
  return (
    <>
      <section className="w-full bg-white py-11 flex flex-col md:flex-row px-5 md:px-20 items-start md:items-center justify-center gap-3 md:gap-14">
        <div className="w-full md:w-1/3">
          <div>
            <img className="w-2/5" src={Logo} alt="Konectar Logo" />
          </div>
          <p className="mt-4">
            Connecting Farms to Businesses: Nigeria`s Leading Marketplace for
            Fresh Fruits and Vegetables
          </p>
          <p className="font-bold mt-5">Social Media</p>
          <div className="cursor-pointer mt-5 flex gap-8">
            <div className="text-blue-900 hover:text-orange-600">
              <a href="https://www.facebook.com/profile.php?id=61566026614806&mibextid=ZbWKwL">
                <FaFacebook />
              </a>
            </div>
            <div className="hover:text-orange-600">
              <a href="https://www.instagram.com/konectar_b2b?igsh=a2poM2JtejBxdnVt">
                <FaInstagram />
              </a>
            </div>
            <div className="text-blue-900 hover:text-orange-600">
              <a href="https://www.linkedin.com/company/konectar.com/">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:gap-4 cursor-pointer w-full md:w-1/6">
          <h1 className="font-bold">Company</h1>
          <a href="/about">
            <p className="hover:text-green-700">About</p>
          </a>
          <a href="/ContactForm">
            <p className="hover:text-green-700">Contact</p>
          </a>
          <p className="hover:text-green-700">Blog</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-4 cursor-pointer w-full md:w-1/6">
          <h1 className="font-bold">Resources</h1>
          <p className="hover:text-green-700">Product</p>
          <p className="hover:text-green-700">Blog</p>
          <a>
            <p className="hover:text-green-700">FAQs</p>
          </a>
        </div>
        <div className="flex flex-col gap-1 md:gap-4 cursor-pointer w-full md:w-1/5">
          <h1 className="font-bold">Legal</h1>
          <a href="/konectar-terms-of-use">
            <p className="hover:text-green-700">Terms and Conditions</p>
          </a>
          <a href="/konectar-privacy-policy">
            <p className="hover:text-green-700">Privacy Policy</p>
          </a>
          <p className="hover:text-green-700">FAQs</p>
        </div>
        <div className="flex flex-col gap-1 md:gap-4 w-full md:w-1/6">
          <h1 className="font-bold">Contact</h1>
          <p>
            Address: ITF House, Plot 12, Funsho Williams Avenue, Iponri Surulere
          </p>
          <p>Phone: 09070645178</p>
          <a
            className="hover:text-green-700"
            href="mailto:konectar.ag@gmail.com"
          >
            konectar.ag@gmail.com
          </a>
        </div>
      </section>
      <section className="w-full bg-green-900 py-3 text-center text-white px-3">
        <p>Konectar Copyright, 2024. All rights reserved.</p>
      </section>
    </>
  );
};

export default Footer;
