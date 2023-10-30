import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
import img6 from "../../../assets/images/banner/6.jpg";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="carousel w-full h-[597px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex items-center gap-2 transform h-full   top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="w-1/2 ml-3 space-y-7">
            <h1 className="text-6xl font-bold text-white ">
              Affordable Price For <br /> Car Servicing
            </h1>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FF3811] btn text-white">
                Discover More
              </button>
              <button className=" btn btn-outline text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide6"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide3"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex items-center gap-2 transform h-full   top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="w-1/2 ml-3 space-y-7">
            <h1 className="text-6xl font-bold text-white ">
              Affordable Price For <br /> Car Servicing
            </h1>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FF3811] btn text-white">
                Discover More
              </button>
              <button className=" btn btn-outline text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide1"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide3"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex items-center gap-2 transform h-full   top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="w-1/2 ml-3 space-y-7">
            <h1 className="text-6xl font-bold text-white ">
              Affordable Price For <br /> Car Servicing
            </h1>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FF3811] btn text-white">
                Discover More
              </button>
              <button className=" btn btn-outline text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide2"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide4"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex items-center gap-2 transform h-full   top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="w-1/2 ml-3 space-y-7">
            <h1 className="text-6xl font-bold text-white ">
              Affordable Price For <br /> Car Servicing
            </h1>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FF3811] btn text-white">
                Discover More
              </button>
              <button className=" btn btn-outline text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide3"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide5"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      <div id="slide5" className="carousel-item relative w-full">
        <img src={img5} className="w-full" />
        <div className="absolute flex items-center gap-2 transform h-full   top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="w-1/2 ml-3 space-y-7">
            <h1 className="text-6xl font-bold text-white ">
              Affordable Price For <br /> Car Servicing
            </h1>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FF3811] btn text-white">
                Discover More
              </button>
              <button className=" btn btn-outline text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide4"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide6"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
      <div id="slide6" className="carousel-item relative w-full">
        <img src={img6} className="w-full" />
        <div className="absolute flex items-center gap-2 transform h-full   top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
          <div className="w-1/2 ml-3 space-y-7">
            <h1 className="text-6xl font-bold text-white ">
              Affordable Price For <br /> Car Servicing
            </h1>
            <p className="text-gray-300">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex gap-4">
              <button className="bg-[#FF3811] btn text-white">
                Discover More
              </button>
              <button className=" btn btn-outline text-white">
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href="#slide5"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowLeft></AiOutlineArrowLeft>
          </a>
          <a
            href="#slide1"
            className="btn btn-circle outline-none bg-[#FF3811]"
          >
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
