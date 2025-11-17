import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        
        {/* About Us */}
        <div>
          <h4 className="font-semibold text-lg mb-4">About Us</h4>
          <p className="text-sm text-muted-foreground">
            Limpopo Furniture Store Roysambu is Kenya’s trusted destination…
          </p>

          <div className="mt-4 flex space-x-4">
            <Link to="https://www.facebook.com/profile.php?id=100095257727801" target="_blank">
              <Facebook className="h-5 w-5 text-gray-500 hover:text-amber-600" />
            </Link>
            <Link to="#">
              <Twitter className="h-5 w-5 text-gray-500 hover:text-amber-600" />
            </Link>
            <Link to="https://www.instagram.com/limpopofurniture_ke" target="_blank">
              <Instagram className="h-5 w-5 text-gray-500 hover:text-amber-600" />
            </Link>
            <Link to="https://lite.tiktok.com/t/ZMA83Y7Bu/" target="_blank">
              <FaTiktok className="h-5 w-5 text-gray-500 hover:text-amber-600" />
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Contact</h4>
          <div className="text-sm space-y-2">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:limpopofurniture@gmail.com">limpopofurniture@gmail.com</a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <a href="tel:+254719845898">+254 719 845 898</a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Roysambu, Thika Road, Nairobi, Kenya</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
          <nav className="flex flex-col text-sm space-y-2">
            <Link to="/" className="hover:text-amber-600">Home</Link>
            <Link to="/shop" className="hover:text-amber-600">Shop</Link>
            <Link to="/categories" className="hover:text-amber-600">Categories</Link>
            <Link to="/about" className="hover:text-amber-600">About Us</Link>
            <Link to="/contact" className="hover:text-amber-600">Contact</Link>
          </nav>
        </div>

        {/* My Account */}
        <div>
          <h4 className="font-semibold text-lg mb-4">My Account</h4>
          <nav className="flex flex-col text-sm space-y-2">
            <Link to="/my-orders" className="hover:text-amber-600">My Orders</Link>
            <Link to="/track-order" className="hover:text-amber-600">Track Order</Link>
            <Link to="/shop?sort=newest" className="hover:text-amber-600">New Arrivals</Link>
            <Link to="/shop?maxPrice=50000" className="hover:text-amber-600">Offers</Link>
          </nav>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-12 py-4 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Limpopo Furniture Store Roysambu. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
