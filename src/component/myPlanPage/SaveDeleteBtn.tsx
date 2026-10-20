'use client';
import { CardDataType } from '@/app/cardType';
import { WorkContext } from '@/context/WorkoutsContext';
import { Dispatch, SetStateAction, useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import { toast } from 'react-toastify';


const DeleteBtn = ({ planArr }: { planArr: CardDataType }) => {

    const {  setSave } = useContext(WorkContext) as {
      
        setSave: Dispatch<SetStateAction<CardDataType[]>>;
    };
    const deletePlan = () => {
        setSave((prevPlan) =>
            prevPlan.filter((item) => item.id !== planArr.id)
        );
        toast.success(`Removed ${planArr.name} from your saved list`);
    }
    return (
        <div>
            <button onClick={() => deletePlan()} className='btn bg-card-bg border-none shadow-none'><RxCross2 className='text-gray-500' /></button>
        </div>
    );
};

export default DeleteBtn;