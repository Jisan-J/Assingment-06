'use client';

import { CardDataType } from '@/app/cardType';
import { WorkContext } from '@/context/WorkoutsContext';
import { Dispatch, SetStateAction, useContext } from 'react';
import { toast } from 'react-toastify';

const MarkDoneBtn = ({ plan }: { plan: CardDataType }) => {
    const { setPlan } = useContext(WorkContext) as {
        setPlan: Dispatch<SetStateAction<CardDataType[]>>;
    };

    const markDone = () => {
        setPlan((currentPlan) => currentPlan.filter((item) => item.id !== plan.id));
        toast.success(`Marked ${plan.name} as done`);
    };

    return (
        <button
            onClick={markDone}
            className="btn bg-Primary rounded-2xl h-7 text-center shadow-none border-none text-black"
        >
            Mark as done
        </button>
    );
};

export default MarkDoneBtn;
