import Image from 'next/image';
import Link from 'next/link';
import { CardDataType } from '@/app/cardType';
import { CiCalendarDate } from "react-icons/ci";
import { FiBookmark } from "react-icons/fi";

const getWorkoutById = async (cardId: string): Promise<CardDataType | null> => {
  const response = await fetch('https://openapi.programming-hero.com/api/fitlog');
  const data = await response.json();

  return data.find((card: CardDataType) => String(card.id) === cardId) ?? null;
};

export default async function CardDetailsPage({
  params
}: {
  params: Promise<{ CardDetails: string }>;
}) {
  const { CardDetails } = await params;
  const card = await getWorkoutById(CardDetails);

  return (
    <main className="container mx-auto px-4 py-10 text-white">

      <div className="grid gap-8 rounded-3xl md:grid-cols-2">
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
            {card.muscleGroups.map((group) => (
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
              {card.instructions.map((instruction, index) => (
                <li key={`${index}`}>{instruction}</li>
              ))}
            </ol>

            <div className='flex justify-between w-85 py-10'>
              <Link href={`/myPlan`}>
                <div className={` btn flex items-center justify-center bg-Primary text-gray-900 rounded-xl`}>
                  <div className='text-xl'><CiCalendarDate /></div>
                  Add to today's plan
                </div>
              </Link>

              <Link href={`/myPlan`}>
                <div className='scn btn flex items-center justify-center rounded-xl hover:bg-Primary hover:text-gray-900'>
                  <div className='text-xl'><FiBookmark /></div>
                  Save for later
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
