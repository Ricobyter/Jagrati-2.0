interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
    style: string;
  }

const EventCards: React.FC<CardProps> = ({ imageSrc, title, description, style }) =>  {
  return (
    <div className="w-[620px] h-[400px] flex gap-2  shadow-xl text-white">
      <div className={style}>
        <div className="w-[300px] px-2 py-3">
        <h2 className="text-4xl text-white">{title}</h2>
        <p className="text-md italic mt-6">{description}</p>
        </div>
      </div>
      <div>
      <img src={imageSrc} alt={title} className="object-cover w-full h-full " />
        </div>
    </div>
  )
}

export default EventCards
