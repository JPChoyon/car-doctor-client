import { AiOutlineArrowRight } from "react-icons/ai";


const ServiceCard = ({ service }) => {
  const { title, img, price } = service;
  console.log(service);
  return (
    <div className="card  bg-base-100 shadow-xl mt-4">
      <figure>
        <img className="h-56 w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="flex  text-[#FF3811] justify-between">
          <div className="">{price} $</div>
          <div className=""><AiOutlineArrowRight></AiOutlineArrowRight></div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
