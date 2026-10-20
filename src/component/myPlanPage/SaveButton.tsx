'use client'
import { CardDataType } from '@/app/cardType';
import { WorkContext } from '@/context/WorkoutsContext';
import { Dispatch, SetStateAction, useContext } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { toast } from 'react-toastify';

const SaveButton = ({ card }: { card: CardDataType }) => {
    const { save, setSave } = useContext(WorkContext) as {
        save: CardDataType[];
        setSave: Dispatch<SetStateAction<CardDataType[]>>;
    };
    const handlebtn = () => {
        if (save.some((item) => item.id === card.id)) {
            toast.info("Already in your saved list");
            return;
        }

        setSave((currentSave) => [...currentSave, card]);
        toast.success("Saved for later");
    }
    return (
        <div onClick={() => handlebtn()} className='bg-card-bg btn flex items-center justify-center rounded-xl hover:bg-Primary hover:text-gray-900 text-gray-50 '>
            <div className='text-xl'><FiBookmark /></div>
            <div>Save for later</div>
        </div>

    );
};

export default SaveButton;