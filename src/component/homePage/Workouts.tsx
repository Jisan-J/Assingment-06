import { CardDataType } from "@/app/cardType";
import WorkoutsCardStyle from "./WorkoutsCardStyle";

const cardPromise = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/fitlog');
    return res.json();
}
const Workouts = async () => {
    const data = await cardPromise();
    return (
        <div id="workouts" className="container mx-auto py-10 scroll-mt-6">
            <div className="py-10  text-gray-50">
                <h2 className="font-bold text-3xl">THE LIBRARY</h2>
                <p>Twelve lifts covering every major muscle group.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 w-full mx-auto text-gray-50">
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