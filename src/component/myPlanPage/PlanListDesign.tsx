import { CardDataType } from '@/app/cardType';
import Image from 'next/image';
import Link from 'next/link';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineStarBorder } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';
import DeleteBtn from './DeleteBtn';
import MarkDoneBtn from './MarkDoneBtn';

const PlanListDesign = ({ plan }: { plan: CardDataType }) => {
    return (
        <div className='text-gray-50 flex justify-between py-2'>
            <div className='flex gap-2'>
                <Image
                    className=" w-[144px] h-[80px] rounded-box object-cover"
                    alt="Tailwind CSS list item"
                    src={plan.image}
                    width={144}
                    height={80}
                />
                <div>
                    <div>{plan.name}</div>
                    <div className="text-xs  opacity-60">{plan.equipment}</div>
                    <div className="card-details flex flex-col md:flex-row gap-4 text-gray-400">
                        <div className='flex items-center gap-1 text-[14px]'>
                            <IoMdTime className='text-Primary' />
                            {plan.duration}
                            <p>min</p>
                        </div>
                        <div className='flex items-center gap-1 text-[14px]'>
                            <PiFireSimpleFill className='text-Primary' />
                            {plan.caloriesBurned}
                            <p>kcal</p>
                        </div>
                        <div className='flex items-center gap-1 text-[14px]'>
                            <MdOutlineStarBorder className='text-Primary' />
                            {plan.rating}
                        </div>
                    </div>
                </div>
            </div>

            <div className=' flex flex-col md:flex-row gap-4 items-center'>
                <Link className='border rounded-2xl flex items-center justify-center h-8 w-30' href={`/${plan.id}`}><p>View Details</p></Link>
                <MarkDoneBtn plan={plan} />
               <DeleteBtn planArr={plan} key={plan.id}></DeleteBtn>
            </div>
        </div>
    );
};

export default PlanListDesign;