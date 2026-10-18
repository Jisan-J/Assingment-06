import { CardDataType } from '@/app/cardType';
import Image from 'next/image';
import { IoMdTime } from "react-icons/io";
import { PiFireSimpleFill } from "react-icons/pi";
import { MdOutlineStarBorder } from "react-icons/md";
import Link from 'next/link';

interface CardPropsType {
    card: CardDataType;
}
const WorkoutsCardStyle = ({ card }: CardPropsType) => {
    const { name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = card;

    return (
        <Link href={`/${card.id}`}>
            <div className="card bg-card-bg shadow-sm w-full h-[368px]">
                <figure>
                    <Image
                        className="w-full h-full object-cover"
                        src={image}
                        alt="Picture of the author"
                        width={395}
                        height={192}
                    />
                </figure>
                <div className="card-body">
                    <div className="card-actions justify-baseline *:bg-Primary *:border-none *:rounded-2xl *:text-black *:font-bold">
                        <div className="badge badge-outline">{muscleGroups[0]}</div>
                        <div className={`${muscleGroups[1] ? 'badge badge-outline' : 'hidden'} `}>{muscleGroups[1]}</div>
                    </div>
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p className='text-gray-400'>{equipment}</p>
                    <div className="divider my-0"></div>
                    <div className="card-details flex gap-4 text-gray-400">
                        <div className='flex items-center gap-1'>
                            <IoMdTime />
                            {duration}
                            <p>min</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <PiFireSimpleFill />
                            {caloriesBurned}
                            <p>kcal</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MdOutlineStarBorder />
                            {rating}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default WorkoutsCardStyle;