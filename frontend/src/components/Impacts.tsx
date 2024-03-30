import {  impact1, impact2, impact3, impact4 } from "../assets/images";
const impact = [
    {
        img: impact1,
        title: "1000+ students",
        description: "Till Now we have helped 1000+ students" 
    },
    {
        img: impact2,
        title: "300+ Volunteers",
        description: "Till Now we have helped 1000+ students" 
    },
    {
        img: impact3,
        title: "50+ Studenst to Navodaya",
        description: "Till Now we have helped 1000+ students" 
    },
    {
        img: impact4,
        title: "3 villages reached",
        description: "Till Now we have helped 1000+ students" 
    },
    {
        img: impact1,
        title: "300+ Families",
        description: "Till Now we have helped 1000+ students" 
    }
]
export default function Impacts() {

  return (
    <div>
        <h1 className="text-4xl mb-40 font-jk text-center"><span className="text-orange-500">Our</span> Impact</h1>
        <div className="grid grid-cols-3 items-center place-content-center justify-between gap-20 ">

        
        {impact.map((card) => {
            return (
                <div className='flex flex-col justify-around items-center  h-[200px] w-[350px] relative rounded-lg shadow-xl' key={card.title}>
                    <div className="absolute top-[-50px] z-10 opacity-100">
                        <img src={card.img} alt="img" className="object-cover rounded-full h-[110px] w-[110px] border-1 border-gray-500 hover:scale-105 duration-200 cursor-pointer ease-in-out" />
                    </div>
                    <div className="flex flex-col gap-4">
                    <div>
                        <h1 className='text-2xl text-center'>{card.title}</h1>
                    </div>
                    <div>
                        <p className='text-xs italic'>{card.description}</p>
                    </div>
                    </div>

                </div>
            )
        })}
        </div>
    </div>
  )
}
