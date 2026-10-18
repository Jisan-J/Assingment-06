
'use client';

import { CardDataType } from "@/app/cardType";
import { WorkContext } from "@/context/WorkoutsContext";
import { useContext, type Dispatch, type SetStateAction } from "react";
import { CiCalendarDate } from "react-icons/ci";

const PlanButton = ({ card }: { card: CardDataType }) => {

    const { plan, setPlan } = useContext(WorkContext) as {
        plan: CardDataType[];
        setPlan: Dispatch<SetStateAction<CardDataType[]>>;
    };
    const handlebtn = () => {
        if (plan.length === 0) {
            setPlan([card]);
        }
        plan.find((el) => {
            if (el.id === card.id) {
                setPlan([...plan]);
                alert("Already added");
            } else {
                setPlan([...plan, card]);

            }
        })

    }
    return (
        <div onClick={() => handlebtn()} className={` btn flex items-center justify-center bg-Primary text-gray-900 rounded-xl`}>
            <div className='text-xl'><CiCalendarDate /></div>
            <div>Add Today&apos;s plan</div>
        </div>
    );
};

export default PlanButton;