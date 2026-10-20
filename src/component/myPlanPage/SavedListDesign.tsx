import { CardDataType } from '@/app/cardType';
import Image from 'next/image';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineStarBorder } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';
import SaveDeleteBtn from './SaveDeleteBtn';

const SavedListDesign = ({ save }: { save: CardDataType }) => {
    return (
        <div className='text-gray-50 flex justify-between py-2'>
            <div className='flex gap-2'>
                <Image
                    className="w-[144px] h-[80px] rounded-box object-cover"
                    alt="Tailwind CSS list item"
                    src={save.image}
                    width={144}
                    height={80}
                />
                <div>
                    <div>{save.name}</div>
                    <div className="text-xs  opacity-60">{save.equipment}</div>
                    <div className="card-details flex flex-col md:flex-row gap-4 text-gray-400">
                        <div className='flex items-center gap-1 text-[14px]'>
                            <IoMdTime className='text-Primary' />
                            {save.duration}
                            <p>min</p>
                        </div>
                        <div className='flex items-center gap-1 text-[14px]'>
                            <PiFireSimpleFill className='text-Primary' />
                            {save.caloriesBurned}
                            <p>kcal</p>
                        </div>
                        <div className='flex items-center gap-1 text-[14px]'>
                            <MdOutlineStarBorder className='text-Primary' />
                            {save.rating}
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col md:flex-row items-center justify-center'>
                <SaveDeleteBtn planArr={save} key={save.id}></SaveDeleteBtn>
            </div>
        </div>
    );
};

export default SavedListDesign;