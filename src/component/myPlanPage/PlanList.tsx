'use client';
import { CardDataType } from '@/app/cardType';
import { WorkContext } from '@/context/WorkoutsContext';
import Link from 'next/link';
import { useContext, useState } from 'react';
import MyPlanCommonSection from './MyPlanCommonSection';
import PlanListDesign from './PlanListDesign';
import SavedListDesign from './SavedListDesign';
import SortBy from './SortBy';

const PlanList = ({ pln }: { pln: 'plan' | 'save' }) => {
    const { plan, save } = useContext(WorkContext) as {
        plan: CardDataType[];
        save: CardDataType[];
    };
    const [selectedPlan, setSelectedPlan] = useState<'plan' | 'save'>(pln);

    return (
        <div className='container mx-auto '>
            <MyPlanCommonSection plan={selectedPlan} />
            <SortBy by={selectedPlan}></SortBy>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-box bg-body-bg *:text-gray-50">
                <input type="radio" name="my_tabs_6" className="mx-1 tab checked:bg-card-bg w-36 h-12 shadow-none font-bold rounded-xl hover:bg-card-bg" aria-label="Today's Plan" checked={selectedPlan === 'plan'}
                    onChange={() => setSelectedPlan("plan")} />
                <div className="tab-content bg-card-bg  p-4">
                    <div className={`${plan.length == 0 ? 'block' : 'hidden'} text-gray-50 flex flex-col items-center justify-center border border-gray-600 rounded-xl h-60 lg:min-h-80 gap-2`}>
                        <h2 className='text-2xl font-bold'>Nothing Here yet</h2>
                        <p className='text-gray-500'>Browse the library and add a lift to get today moving.</p>
                        <Link href={"/"}><button className='bg-Primary text-gray-900 rounded-2xl p-2 font-bold w-45'>Go To Workouts</button></Link>

                    </div>
                    <div className='container text-green-50 w-full mx-auto px-5'>
                        <ul>
                            <li>
                                {plan.map((el: CardDataType) => {
                                    return (
                                        <PlanListDesign key={el.id} plan={el}></PlanListDesign>
                                    )
                                })}
                            </li>
                        </ul>
                    </div>
                </div>

                <input type="radio" name="my_tabs_6" className="mx-1 tab checked:bg-card-bg w-36 h-12 shadow-none font-bold rounded-xl hover:bg-card-bg" aria-label="Saved" checked={selectedPlan === 'save'}
                    onChange={() => setSelectedPlan("save")} />
                <div className="tab-content bg-card-bg  p-4">

                    <div className={`${save.length == 0 ? 'block' : 'hidden'} text-gray-50 flex flex-col items-center justify-center border border-gray-600 rounded-xl h-60 lg:min-h-80 gap-2`}>
                        <h2 className='text-2xl font-bold'>Nothing Here yet</h2>
                        <p className='text-gray-500'>Browse the library and add a lift to get today moving.</p>
                        <Link href={"/"}><button className='bg-Primary text-gray-900 rounded-2xl p-2 font-bold w-45'>Go To Workouts</button></Link>

                    </div>
                    <div className='container text-green-50 w-full mx-auto px-5'>
                        <ul>
                            <li>
                                {save.map((el: CardDataType) => {
                                    return (
                                        <SavedListDesign key={el.id} save={el}></SavedListDesign>
                                    )
                                })}
                            </li>
                        </ul>
                    </div>

                </div>

            </div>




        </div>
    );
};

export default PlanList;