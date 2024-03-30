import Navbar from "../components/DashBoardNavbar"

const NavLinks = [
    {title: "Home Page",
    link: "/"
  },
    {title: "About Us",
    link: "/about"
  },
    {title: "Our Gallery",
    link: "/gallery"
  },
    {title: "Our Events",
    link: "/events"
  },
    {title: "Contact Us",
    link: "/contact"
  }, 
  

  ]

  export default function DashboardPage() {
    return (
        <div>
        {/* NavBar  */}
        <Navbar />
        <div className="w-full">
            Profile Page

        </div>
        </div>


        
    )
  }
  