import { CardDataType } from "@/app/cardType";
import WorkoutsCardStyle from "./WorkoutsCardStyle";

const cardPromise = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/fitlog');
    return res.json();
}
const Workouts = async () => {
    const data = await cardPromise();
    return (
        <div className=" container mx-auto py-10">
            <div className="py-10">
                <h2 className="font-bold text-3xl">THE LIBRARY</h2>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 w-full mx-auto">
                {data.map((card: CardDataType) => {
                    return (
                        <WorkoutsCardStyle card={card} key={card.id}></WorkoutsCardStyle>
                    )
                })}
            </div>
        </div>
    );
};

export default Workouts;