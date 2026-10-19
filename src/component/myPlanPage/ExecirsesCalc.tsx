'use client';
import { CardDataType } from '@/app/cardType';
import { WorkContext } from '@/context/WorkoutsContext';
import { Dispatch, SetStateAction, useContext } from 'react';

const ExecirsesCalc = ({ type }: { type: string }) => {
    const { plan, setPlan, save, setSave } = useContext(WorkContext) as {
        save: CardDataType[];
        setSave: Dispatch<SetStateAction<CardDataType[]>>;
        plan: CardDataType[];
        setPlan: Dispatch<SetStateAction<CardDataType[]>>;
    };
    const exercises = plan.length;
    let calories = 0;
    let minutes = 0;
    plan.map((el) => {
        calories += el.caloriesBurned;
        minutes += el.duration;
    })
     if (type === 'exercises') return exercises;
    if (type === 'minutes') return minutes;
    if (type === 'calories') return calories;
};

export default ExecirsesCalc;