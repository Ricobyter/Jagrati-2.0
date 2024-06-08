interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  style: string;
}

const EventCards: React.FC<CardProps> = ({ imageSrc, title, description, style }) => {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className=" lg:-[65vw] h-[650px] lg:h-[400px] flex shadow-xl text-white flex-col-reverse lg:flex-row">
        <div className={style}>
          <div className="w-full lg:w-[25vw] px-3 py-4">
            <h2 className="text-4xl text-white">{title}</h2>
            <p className="text-md italic mt-6">{description}</p>
          </div>
        </div>
        <div className="w-[40vw] h-full"> {/* Set height to full */}
          <img src={imageSrc} alt={title} className="object-cover w-full h-full object-center" /> {/* Set width and height to full */}
        </div>
      </div>
    </div>
  );
};

export default EventCards;
