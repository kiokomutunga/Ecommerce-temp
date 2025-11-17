import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Shop",
    href: "/shop",
    dropdown: [
      { name: "All Products", href: "/shop" },
      { name: "New Arrivals", href: "/shop?sort=newest" },
      { name: "Best Sellers", href: "/shop?sort=popular" },
      { name: "Sale Items", href: "/shop?filter=sale" },
      { name: "My Orders", href: "/my-orders" },
      { name: "Track Order", href: "/track-order" },
    ],
  },
  {
    name: "Categories",
    href: "/categories",
    dropdown: [
      { name: "Tables", href: "/category/tables" },
      { name: "Bedroom", href: "/category/bedroom" },
      { name: "Dining Room", href: "/category/dining-room" },
      { name: "Office", href: "/category/office" },
      { name: "Kitchen", href: "/category/kitchen" },
      { name: "Outdoor", href: "/category/outdoor" },
      { name: "Storage", href: "/category/storage" },
      { name: "Decor", href: "/category/decor" },
      { name: "Sofas", href: "/category/sofas" },
      { name: "TV Stand", href: "/category/tv-stand" },
      { name: "Shoe Rack", href: "/category/shoe-rack" },
    ],
  },
  { name: "Offers", href: "/shop?maxPrice=50000" },
  { name: "Contact", href: "/contact" },
];

const DesktopNav = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="hidden md:flex items-center space-x-8">
      {navigation.map((item) => (
        <div key={item.name} className="relative group">
          {item.dropdown ? (
            <>
              <Link
                to={item.href}
                className={`text-sm font-medium hover:text-amber-600 flex items-center ${
                  isActive(item.href) ? "text-amber-600" : "text-gray-700"
                }`}
              >
                {item.name}
                <ChevronDown className="ml-1 h-3 w-3" />
              </Link>

              {/* Dropdown */}
              <div className="absolute left-0 mt-2 w-48 bg-white border shadow-lg rounded-md p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {item.dropdown.map((subItem) => (
                  <Link
                    key={subItem.name}
                    to={subItem.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-amber-50 hover:text-amber-600 rounded-md text-sm"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <Link
              to={item.href}
              className={`text-sm font-medium hover:text-amber-600 ${
                isActive(item.href) ? "text-amber-600" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

export default DesktopNav;
