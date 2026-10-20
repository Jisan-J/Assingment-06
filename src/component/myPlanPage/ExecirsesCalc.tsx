'use client';
import { CardDataType } from '@/app/cardType';
import { WorkContext } from '@/context/WorkoutsContext';
import { Dispatch, SetStateAction, useContext } from 'react';

const ExecirsesCalc = ({ type }: { type: string }) => {
    const { plan, save } = useContext(WorkContext) as {
        save: CardDataType[];
        setSave: Dispatch<SetStateAction<CardDataType[]>>;
        plan: CardDataType[];
        setPlan: Dispatch<SetStateAction<CardDataType[]>>;
    };
    const PlanExercises = plan.length;
    let PlanCalories = 0;
    let PlanMinutes = 0;
    plan.map((el) => {
        PlanCalories += el.caloriesBurned;
        PlanMinutes += el.duration;
    })
    const SaveExercises = save.length;
    let SaveCalories = 0;
    let SaveMinutes = 0;
    save.map((el) => {
        SaveCalories += el.caloriesBurned;
        SaveMinutes += el.duration;
    })
    if (type === 'exercisesPlan') return PlanExercises;
    if (type === 'minutesPlan') return PlanMinutes;
    if (type === 'caloriesPlan') return PlanCalories;

    if (type === 'exercisesSave') return SaveExercises;
    if (type === 'minutesSave') return SaveMinutes;
    if (type === 'caloriesSave') return SaveCalories;
};

export default ExecirsesCalc;