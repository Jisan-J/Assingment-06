'use client'
import { CardDataType } from '@/app/cardType';
import { WorkContext } from '@/context/WorkoutsContext';
import React, { Dispatch, SetStateAction, useContext } from 'react';
import { FiBookmark } from 'react-icons/fi';

const SaveButton = ({ card }: { card: CardDataType }) => {
       const { save, setSave } = useContext(WorkContext) as {
            save: CardDataType[];
            setSave: Dispatch<SetStateAction<CardDataType[]>>;
        };
        const handlebtn = () => {
            if (save.length === 0) {
                setSave([card]);
            }
            save.find((el) => {
                if (el.id === card.id) {
                    setSave([...save]);
                    alert("Already added");
                } else {
                    setSave([...save, card]);
    
                }
            })
    
        }
    return (
        <div onClick={() => handlebtn()}className='scn btn flex items-center justify-center rounded-xl hover:bg-Primary hover:text-gray-900'>
            <div className='text-xl'><FiBookmark /></div>
            <div>Save for later</div>
        </div>

    );
};

export default SaveButton;