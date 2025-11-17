import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

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

const MobileNav = ({ isMobileMenuOpen, closeMenu }) => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  if (!isMobileMenuOpen) return null;

  return (
    <div className="md:hidden bg-white border-t shadow-inner max-h-[calc(100vh-5rem)] overflow-y-auto">
      <div className="px-4 py-4 space-y-4">

        <nav className="space-y-2">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() =>
                      setExpanded(expanded === item.name ? null : item.name)
                    }
                    className={`w-full flex justify-between px-3 py-2 rounded-md ${
                      isActive(item.href)
                        ? "bg-amber-50 text-amber-600"
                        : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition ${
                        expanded === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expanded === item.name && (
                    <div className="pl-4 mt-1 space-y-1">
                      <Link
                        to={item.href}
                        onClick={closeMenu}
                        className="block px-3 py-2 text-gray-600 hover:text-amber-600 rounded-md"
                      >
                        All {item.name}
                      </Link>

                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={closeMenu}
                          className="block px-3 py-2 text-gray-600 hover:text-amber-600 rounded-md"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.href}
                  onClick={closeMenu}
                  className={`block px-3 py-2 rounded-md ${
                    isActive(item.href)
                      ? "bg-amber-50 text-amber-600"
                      : "text-gray-700 hover:text-amber-600 hover:bg-amber-50"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

      </div>
    </div>
  );
};

export default MobileNav;
