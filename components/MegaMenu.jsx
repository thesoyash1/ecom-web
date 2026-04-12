import React, { useState } from "react";

const megaMenuData = [
  {
    id: "categories",
    label: "Categories",
    type: "dropdown",
    children: [
      { id: "c1", label: "Tea Coffee ", link: "/categories/tea-coffee" },
      { id: "c2", label: "Snacks & Jars", link: "/categories/snacks" },
      { id: "c3", label: "Lemon Views", link: "/categories/lemon-views" }
    ]
  },
  {
    id: "bestseller",
    label: "Best Seller",
    type: "link",
    link: "/best-seller"
  },
  {
    id: "collections",
    label: "Collections",
    type: "dropdown",
    children: [
      { id: "col1", label: "Summer Collection", link: "/collections/summer" },
      { id: "col2", label: "Nordic Minimalist", link: "/collections/nordic" }
    ]
  },
  {
    id: "contact",
    label: "Contact Us",
    type: "link",
    link: "/contact"
  },
  
];

const MegaMenu = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="border-b border-gray-100 py-3 flex justify-center gap-10">
      {megaMenuData.map((item) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setHovered(item.id)}
          onMouseLeave={() => setHovered(null)}
        >
          {/* Menu Label */}
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[17px] font-normal text-gray-500">{item.label}</span>

            {/* Show dropdown arrow if children exist */}
            {item.children && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>

          {/* Dropdown */}
          {item.children && hovered === item.id && (
            <div className="absolute top-full left-0 bg-white shadow-md mt-0 min-w-[180px] p-3 rounded">
              {item.children.map((child) => (
                <a
                  key={child.id}
                  href={child.link}
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                >
                  {child.label}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;