import Image1 from "../../public/images/section1_image1.jpeg";
import Image2 from "../../public/images/section1_image2.jpeg";
import IconArrow from "../../public/icons/Arrow.png";

const Page1Section1 = () => {
  return (
    <div className="relative w-full">
      {/* Section with Image 1 in the center */}
      <div className="relative w-full flex justify-center">
        <div className="relative w-[100%] md:w-[30%] h-auto">
          <img
            src={Image1}
            alt="Image 1"
            className="w-full h-auto object-cover"
          />
          {/* Overlay only for Image 1 */}
          <div className="absolute inset-0 bg-white bg-opacity-70 z-10"></div>
        </div>
      </div>

      {/* Section with Text and Image 2 side by side */}
      <div className="relative flex flex-col md:flex-row ml-[90px] -mt-[240px] z-20 md:ml-[120px]">
        {/* Text on the left */}
        <div className="text-center md:text-left md:w-1/2 px-4">
          <h1 className="
          font-gilda text-4xl text-black 
          md:text-6xl md:w-[500px]  
          ">
            We are Citizens
            <br />
            of the World
          </h1>
          <p className="text-xs font-normal font-raleway mt-2 mb-4">Handmade products from Guatemala</p>
          <p className="font-gilda">Shop our new collection</p>
          <img 
            src={IconArrow}
            alt="Icon Arrow"
            className="
            w-[36px] ml-[170px] -mt-[10px] "
          /> 
        </div>
      </div>

      {/* Image 2 on the right */}
      <div className="relative md:w-1/2 mt-4 md:mt-0 z-20">
        <img
          src={Image2}
          alt="Image 2"
          className="w-1/3 h-auto object-cover shadow-lg mx-auto 
          md:mx-0
          md:ml-[630px]
          md:-mt-[170px]"
        />
      </div>
    </div>
  );
};

export default Page1Section1;
