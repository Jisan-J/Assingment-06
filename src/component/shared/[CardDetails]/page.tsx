import Image from 'next/image';
import Link from 'next/link';
import { CardDataType } from '@/app/cardType';

const getWorkoutById = async (cardId: string): Promise<CardDataType> => {
  const res = await fetch('https://openapi.programming-hero.com/api/fitlog');

  const data = await res.json();

  return data.find((card: CardDataType) => String(card.id) === cardId) ?? null;
};

type CardDetailsPageProps = {
  params: Promise<{ CardDetails: string }>;
};

const CardDetailsPage = async ({ params }: CardDetailsPageProps) => {
  const { CardDetails } = await params;
  const card = await getWorkoutById(CardDetails);

  if (!card) {
    return (
      <main className="container mx-auto py-10 px-4 text-white">
        <Link href="/" className="mb-6 inline-block text-primary hover:underline">
          ← Back to workouts
        </Link>
        <div className="rounded-xl border border-dashed border-white/20 bg-white/5 p-8 text-center text-gray-200">
          Workout not found.
        </div>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10 text-white">
      <Link href="/" className="mb-6 inline-block text-primary hover:underline">
        ← Back to workouts
      </Link>

      <div className="grid gap-8 rounded-3xl bg-white/5 p-6 shadow-lg md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={card.image}
            alt={card.name}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="space-y-5">
          <div className="flex flex-wrap gap-2">
            {card.muscleGroups.map((group) => (
              <span key={group} className="rounded-full border border-primary/60 bg-primary/10 px-3 py-1 text-sm text-primary">
                {group}
              </span>
            ))}
          </div>

          <div>
            <h1 className="text-3xl font-bold">{card.name}</h1>
            <p className="mt-2 text-gray-300">{card.description}</p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl bg-body-bg p-4">
              <p className="text-sm text-gray-400">Difficulty</p>
              <p className="font-semibold text-white">{card.difficulty}</p>
            </div>
            <div className="rounded-2xl bg-body-bg p-4">
              <p className="text-sm text-gray-400">Duration</p>
              <p className="font-semibold text-white">{card.duration} min</p>
            </div>
            <div className="rounded-2xl bg-body-bg p-4">
              <p className="text-sm text-gray-400">Calories</p>
              <p className="font-semibold text-white">{card.caloriesBurned} kcal</p>
            </div>
          </div>

          <div className="rounded-2xl bg-body-bg p-4 text-sm text-gray-200">
            <p>
              <span className="font-semibold text-white">Equipment:</span> {card.equipment}
            </p>
            <p>
              <span className="font-semibold text-white">Sets/Reps:</span> {card.sets} sets • {card.reps}
            </p>
            <p>
              <span className="font-semibold text-white">Rating:</span> {card.rating}/5
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-white">Instructions</h2>
            <ol className="list-decimal space-y-2 pl-5 text-gray-300">
              {card.instructions.map((instruction, index) => (
                <li key={`${instruction}-${index}`}>{instruction}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CardDetailsPage;
