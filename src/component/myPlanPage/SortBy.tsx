'use client';
import { CardDataType } from '@/app/cardType';
import { WorkContext } from '@/context/WorkoutsContext';
import { Dispatch, SetStateAction, useContext, useState } from 'react';

type SortOption = 'Duration' | 'Calories' | 'Rating';

const SortBy = ({ by }: { by: 'plan' | 'save' }) => {
    const { setPlan, setSave } = useContext(WorkContext) as {
        setSave: Dispatch<SetStateAction<CardDataType[]>>;
        setPlan: Dispatch<SetStateAction<CardDataType[]>>;
    };
    const [sortOption, setSortOption] = useState<SortOption>('Duration');

    const handleSort = (option: SortOption) => {
        setSortOption(option);
        const compare = (a: CardDataType, b: CardDataType) => {
            if (option === 'Duration') return a.duration - b.duration;
            if (option === 'Calories') return b.caloriesBurned - a.caloriesBurned;
            return b.rating - a.rating;
        };

        if (by === 'plan') {
            setPlan((currentPlan) => [...currentPlan].sort(compare));
        } else {
            setSave((currentSave) => [...currentSave].sort(compare));
        }
    };

    return (
        <div>
            <div className='flex justify-end text-gray-50 '>
                <div className='flex justify-center items-center text-nowrap gap-2'>
                    <div><p>Sort By</p></div>
                    <select
                        value={sortOption}
                        onChange={(event) => {
                            const option = event.currentTarget.value;
                            if (option === 'Duration' || option === 'Calories' || option === 'Rating') {
                                handleSort(option);
                            }
                        }}
                        className="select appearance-none focus-visible:border-none border-none focus:outline-none bg-card-bg"
                    >
                        <option value="Duration">Duration</option>
                        <option value="Calories">Calories</option>
                        <option value="Rating">Rating</option>
                    </select>

                </div>
            </div>
        </div>
    );
};

export default SortBy;