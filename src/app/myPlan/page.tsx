import ExecirsesCalc from '@/component/myPlanPage/ExecirsesCalc';
import Link from 'next/link';

const page = () => {


    return (
        <div className='container mx-auto *:my-10 p-5'>
            <div>
                <h2 className='text-4xl font-bold py-2'>My Plan</h2>
                <p className='text-gray-400'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className="flex bg-card-bg border-card-border border h-40 rounded-2xl justify-around items-center mx-auto border-gray-600 border *:text-center **:[&_p]:text-gray-400">
                <div className='flex '>
                    <div>
                        <p>Exercises</p>
                        <div className='text-4xl font-bold text-Primary'><ExecirsesCalc type='exercises'></ExecirsesCalc></div>
                    </div>
                </div>
                <div className='flex'>
                    <div className=" divider divider-horizontal"></div>
                    <div>
                        <p>Minutes</p>
                        <div className='text-4xl font-bold'><ExecirsesCalc type='minutes'></ExecirsesCalc></div>
                    </div>
                </div>

                <div className='flex'>
                    <div className=" divider divider-horizontal"></div>
                    <div>
                        <p>Calories</p>
                        <div className='text-4xl font-bold'>
                            <ExecirsesCalc type='calories'></ExecirsesCalc>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-between'>
                <div className="flex gap-3 *:w-30 lg:*:w-40 p-0.5 rounded-xl w-fit bg-base-600 border-gray-700 border *:rounded-xl *:border-none *:shadow-none *:hover:bg-base-300 ">
                    <button className="btn bg-body-bg">Today&apos;s plan</button>
                    <button className="btn">Saved</button>
                </div>
                <div className='flex justify-center items-center text-nowrap gap-2'>
                    <div><p>Sort By</p></div>
                    <select defaultValue="Pick a color" className="select appearance-none focus-visible:border-none border-none focus:outline-none">
                        <option >Duration</option>
                        <option>Calories</option>
                        <option>Rating </option>
                    </select>

                </div>
            </div>



            <div className='flex flex-col items-center justify-center border border-gray-600 rounded-xl h-60 lg:min-h-80 gap-2'>
                <h2 className='text-2xl font-bold'>Nothing Here yet</h2>
                <p className='text-gray-500'>Browse the library and add a lift to get today moving.</p>
                <Link href={"/"}><button className='bg-Primary text-gray-900 rounded-2xl p-2 font-bold w-45'>Go To Workouts</button></Link>
            </div>

        </div>
    );
};

export default page;