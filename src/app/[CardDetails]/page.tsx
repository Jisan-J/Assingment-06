import Image from 'next/image';
import Link from 'next/link';
import { CardDataType } from '@/app/cardType';
import { CiCalendarDate } from "react-icons/ci";
import { FiBookmark } from "react-icons/fi";
import PlanButton from '@/component/myPlanPage/PlanButton';
import SaveButton from '@/component/myPlanPage/SaveButton';

export default async function CardDetailsPage({
  params
}: {
  params: Promise<{ CardDetails: string }>;
}) {
  const { CardDetails } = await params;

  const response = await fetch(
    'https://openapi.programming-hero.com/api/fitlog'
  );

  const data = await response.json();

  const card = data.find(
    (card: CardDataType) => String(card.id) === CardDetails
  );

  return (
    <main className="container mx-auto px-4 py-10 text-white">

      <div className="grid gap-8 rounded-3xl lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl ">
          <Image
            src={card.image}
            alt={card.name}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-5">
          <div>
            <h1 className="text-3xl font-bold">{card.name}</h1>
            <p className="mt-2 text-gray-300">{card.description}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {card.muscleGroups.map((group:string) => (
              <span key={group} className="bg-Primary rounded-full px-3 py-1 text-sm text-gray-900">
                {group}
              </span>
            ))}
          </div>
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 ">
            <table className="table bg-gray-900">
              {/* head */}
              <tbody className='  *:flex *:justify-between *:uppercase [&_td]:even:capitalize '>
                {/* row 1 */}
                <tr>
                  <td>equipment</td>
                  <td>{card?.equipment}</td>

                </tr>
                {/* row 2 */}
                <tr>
                  <td>difficulty</td>
                  <td>{card?.difficulty}</td>

                </tr>
                <tr>
                  <td>sets</td>
                  <td>{card?.sets}</td>
                </tr>
                <tr>
                  <td>reps</td>
                  <td>{card?.reps}</td>
                </tr>
                <tr>
                  <td>duration</td>
                  <td>{card?.duration}</td>
                </tr>
                <tr>
                  <td>calories</td>
                  <td>{card?.caloriesBurned}</td>
                </tr>
                <tr>
                  <td>rating</td>
                  <td>{card?.rating}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">Instructions</h2>
            <ol className="list-decimal space-y-2 pl-5 text-gray-300">
              {card.instructions.map((instruction: string, index: number) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>

            <div className='flex justify-between w-85 py-10 *:shadow-none *:border-none'>
                <PlanButton card={card}></PlanButton>
                <SaveButton card={card}></SaveButton>
             
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
