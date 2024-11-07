import IconBurger from "../../public/icons/Burger.png"
import IconSearch from "../../public/icons/circum_search.png"
import LogoWakami from "../../public/icons/Logo.png"

const Navbar = () => {
  return (
    <div className="p-2">
      <nav className="flex flex-col md:flex-row justify-between items-center px-4 py-2">
        {/* Left Section */}
        <div className="flex items-center space-x-6">
          <img src={IconBurger} alt="IconBurger" />
          <span className="font-workSans text-[11px] font-medium">SHOP</span>
          <span className="font-workSans text-[11px] font-medium">OUR STORY</span>
          <span className="font-workSans text-[11px] font-medium">FOUNDATION</span>
        </div>

        {/* Center Section */}
        <div className="my-4 md:my-0">
          <img src={LogoWakami} alt="LogoWakami" className="w-[170px] md:w-[100px]" />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          <span className="font-workSans text-[11px] font-medium">FOLLOW</span>
          <span className="font-workSans text-[11px] font-medium">BLOG</span>
          <span className="font-workSans text-[11px] font-medium">WHOLESALE</span>
          <img src={IconSearch} alt="IconSearch" className="w-[24px] md:w-[24px]" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
