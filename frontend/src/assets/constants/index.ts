import clothDonation1 from "../images/clothDonation1.jpg";
import clothDonation2 from "../images/clothDonation2.jpg";
import clothDonation3 from "../images/clothDonation3.jpg";
import clothDonation4 from "../images/clothDonation4.jpg";
import clothDonation5 from "../images/clothDonation5.jpg";

interface Event {
    img: string;
    title: string;
    description: string;
    style: string;
}

export const events: Event[] = [
    {
        img: clothDonation1,
        title: "Cloth Donation",
        description: "This event involves donating clothes to the needy.",
        style: "bg-orange-500 h-full"
    },
    {
        img: clothDonation2,
        title: "Blind School Visit",
        description: "This event involves visiting a blind school to interact with and support visually impaired individuals.",
        style: "bg-green-500"
    },
    {
        img: clothDonation3,
        title: "Republic Day Celebration",
        description: "This event involves celebrating Republic Day with various activities and cultural programs.",
        style: "bg-blue-500"
    },
    {
        img: clothDonation4,
        title: "Blood Donation",
        description: "This event involves donating blood to save lives.",
        style: "bg-red-500"
    },
    {
        img: clothDonation5,
        title: "Old Age Home Visit",
        description: "This event involves visiting an old age home to spend time with and provide support to the elderly residents.",
        style: "bg-yellow-500"
    }
];
