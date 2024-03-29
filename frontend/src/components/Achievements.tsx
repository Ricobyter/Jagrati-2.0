import EventCards from "./EventCards"
import events from '../assets/constants'
export default function Achievements() {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center">Achievements</h1>
        <div className="flex flex-wrap justify-center gap-4">
            {events.map((card) => (
            <EventCards key={card.title} imageSrc={card.img} title={card.title} description={card.description} style={card.style} />
            ))}
        </div>
      
    </div>
  )
}
