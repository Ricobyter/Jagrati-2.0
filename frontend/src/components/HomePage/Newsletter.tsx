import { IoMdSend } from "react-icons/io";

export default function Newsletter() {
  return (
    <div className="flex flex-col lg:flex-row  justify-between mt-40 mb-40  px-20">
        <div className="font-jk">
            <h1 className="text-4xl">
                Subscribe to our <span className="text-orange-500">Newsletter</span>
            </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-3">
            <input type="text" placeholder="Name" className="text-md border-2 outline-none text-gray-500 px-2 py-1 rounded-lg w-[78vw] lg:w-[15vw]"/>
            <input type="text" placeholder="Email" className="text-md outline-none text-gray-500 px-2 border-2 py-1 rounded-lg w-[78vw] lg:w-[20vw]"/>
            <button>
                <IoMdSend size={30} className="text-white bg-orange-500 rounded-lg px-2 py-1"/>
            </button>
        </div>
      
    </div>
  )
}
