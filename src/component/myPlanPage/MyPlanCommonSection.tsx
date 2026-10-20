import ExecirsesCalc from "./ExecirsesCalc";

const MyPlanCommonSection = ({ plan }: { plan: string }) => {
    return (
        <div className='container mx-auto *:my-10 p-5'>
            <div className='text-gray-50'>
                <h2 className='text-4xl font-bold py-2'>My Plan</h2>
                <p className='text-gray-400'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className="text-gray-50 flex bg-card-bg border-card-border border h-40 rounded-2xl justify-around items-center mx-auto *:text-center **:[&_p]:text-gray-400">
                <div className='flex '>
                    <div>
                        <p>Exercises</p>
                        <div className='text-4xl font-bold text-Primary'><ExecirsesCalc type={`${plan === "save" ? "exercisesSave" : "exercisesPlan"}`}></ExecirsesCalc></div>
                    </div>
                </div>
                <div className='flex'>
                    <div className=" divider divider-horizontal"></div>
                    <div>
                        <p>Minutes</p>
                        <div className='text-4xl font-bold'><ExecirsesCalc type={`${plan === "save" ? "minutesSave" : "minutesPlan"}`}></ExecirsesCalc></div>
                    </div>
                </div>

                <div className='flex'>
                    <div className=" divider divider-horizontal"></div>
                    <div>
                        <p>Calories</p>
                        <div className='text-4xl font-bold'>
                            <ExecirsesCalc type={`${plan === "save" ? "caloriesSave" : "caloriesPlan"}`}></ExecirsesCalc>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MyPlanCommonSection;