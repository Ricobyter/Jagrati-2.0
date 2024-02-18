import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube, AiOutlineMail } from "react-icons/ai";
import logo from '../assets/images/logo.png'

function Footer() {
  const iconsTab = [
    { icon: <FaFacebookF /> },
    { icon: <AiOutlineInstagram /> },
    { icon: <AiFillYoutube /> },
    { icon: <AiOutlineMail /> },
  ];
  return (
    <>
      <footer className="bg-white">
        <div className="container mx-auto px-1 md:px-5 md:py-3 py-1 text-left">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:flex-row items-center md:items-start  md:gap-[5rem] ">
            {/* logo side */}
            <div className="flex flex-col h-full justify-center w-1/2 md:p-0 py-4 gap-8 ml-10">
              <img
                src={logo}
                alt="footer_logo"
                className="w-[18rem]"
              />
              <p className="text-[15px] font-medium text-[#646464]">
                You can check us out on other social media platforms
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
                {iconsTab.map(({ icon }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full cursor-pointer hover:bg-orange-500 hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      {icon}
                    </div>
                  );
                })}
              </div>

            </div>

            {/* middle div */}
            <div className="flex flex-col gap-8 relative ">
              <p className="text-[22px] font-bold footer-main text-center">Our Events</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-orange-500"></span>

              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                Blind School 
              </p>
              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                Old Age Visit
              </p>
              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                Republic Day
              </p>
              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                Cloth Donation
              </p>
              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                Village Visit 
              </p>
            </div>

            {/* right div */}
            <div className="flex flex-col gap-8 relative overflow-hidden">
              <p className="text-[22px] font-bold footer-main text-center">Quick Links</p>

              <span className="top-[33px] absolute w-[7rem] h-[4px] bg-orange-500"></span>

              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                Home
              </p>
              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                Gallery
              </p>
              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">About Us</p>
              <p className="text-[16px] hover:text-orange-500 cursor-pointer text-[#646464] font-medium hover:font-bold">
                Contact Us
              </p>
              <p className="text-[16px] hover:text-orange-500  cursor-pointer text-[#646464] font-medium hover:font-bold">
                Sign In
              </p>
            </div>

            {/* bottom message */}
            <span></span>
          </div>
        </div>
        <p className="text-[18px] font-medium text-[#646464] text-center pb-1 sm:pb-2">
                Made with ❤️ by <span className="text-orange-500">Jagrati</span> Volunteers
              </p>
      </footer>
    </>
  );
}

export default Footer;