import DropdownList from "./DropdownList";

// Home List

export const homeList = [
  {
    title: "Driver",
    className:
      " hover:bg-gradient-to-r from-indigo-500 w-[150px] text-center cursor-pointer px-2 py-1 text-[18px] rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]",
    url: "/our-driver",
  },

  {
    title: "Services",
    className:
      "hover:bg-gradient-to-r from-indigo-500 cursor-pointer w-[150px] text-center px-2 py-1 text-[18px] rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]",
    url: "/services",
  },

  {
    title: "About Us",
    className:
      "hover:bg-gradient-to-r from-indigo-500 cursor-pointer w-[150px] text-center px-2 py-1 text-[18px] rounded-[6px] hover:w-full hover:text-center hover:bg-[#E8E8E8]",
    url: "/about",
  },
];

// Solution List Items
export const solutionList = [
  {
    title: "Emerging Technologies",
    className:
      "hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/emerging-tehcnologies",
  },

  {
    title: "Virtual & Agumented Reality",
    className:
      "hover:bg-gradient-to-r from-indigo-500 hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/virtual-and-agumented-reality",
  },

  {
    title: "Custom Application",
    className:
      "hover:bg-gradient-to-r from-indigo-500 hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/custom-application",
  },

  {
    title: " Enterprise Application",
    className:
      "hover:bg-gradient-to-r from-indigo-500 hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/enterprise-application",
  },
  {
    title: " Business Intelligence",
    className:
      "hover:bg-gradient-to-r from-indigo-500 hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/business-intelligence",
  },
  {
    title: "Infrastructure",
    className:
      "hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/infrastructure",
  },
  {
    title: "Mobile Business",
    className:
      "hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/mobile-business",
  },

  {
    title: "Utility Solutions",
    className:
      "hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/utility-solutions",
  },
  {
    title: "Government",
    className:
      "hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/government",
  },

  {
    title: " Professional Consulting",
    className:
      "hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/professional-consulting",
  },
  {
    title: " Strategic Outsourcing",
    className:
      "hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/strategic-outsourcing",
  },

  {
    title: "Co-Managed Services",
    className:
      "hover:bg-gradient-to-r from-indigo-500 cursor-pointer px-2 py-1 rounded-[6px] w-full text-center hover:bg-[#E8E8E8]",
    url: "/co-managed-services",
  },
];

// Navbar Menu List
export const navbarMenuList = [
  {
    title: "Home",
    Children: DropdownList,
    url: null,
    otherProps: homeList,
    className:
      "home-nav-desk-animation-ul flex items-center justify-center h-[93px] ",
  },
  {
    title: "Solutions",
    Children: DropdownList,
    url: null,
    otherProps: solutionList,
    className:
      "home-nav-desk-animation-ul flex items-center justify-center h-[93px]",
  },
  {
    title: " Partner Model",
    className: "cursor-pointer m-5",
    Children: null,
    otherProps: null,
    url: "/partner",
  },
  {
    title: "Careers",
    className: "cursor-pointer m-10",
    Children: null,
    otherProps: null,
    url: "/career",
  },
  {
    title: "Contact Us",
    className: "cursor-pointer m-10",
    Children: null,
    otherProps: null,
    url: "/contact",
  },
];
