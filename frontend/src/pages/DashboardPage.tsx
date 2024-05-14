import React from "react";
import Navbar from "../components/DashBoardNavbar";

const NavLinks: NavLink[] = [
  { title: "Home Page", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Our Gallery", link: "/gallery" },
  { title: "Our Events", link: "/events" },
  { title: "Contact Us", link: "/contact" },
];

interface NavLink {
  title: string;
  link: string;
}

const DashboardPage: React.FC = () => {
  return (
    <div>
      {/* NavBar  */}
      <Navbar />
      <div className="w-full">
        Profile Page
      </div>
    </div>
  );
};

export default DashboardPage;
