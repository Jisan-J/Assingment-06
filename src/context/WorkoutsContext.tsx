'use client';
import {createContext, ReactNode, useState } from 'react';

export const WorkContext = createContext({});

const WorkoutProvider = ({
    children
}: {
    children:ReactNode
}) => {
    const [plan, setPlan] = useState([]);
    const [save, setSave] = useState([]);
    const shareData={
        plan, 
        setPlan, 
        save, 
        setSave
    }
    return (
        <WorkContext.Provider value={shareData}>{children}
        </WorkContext.Provider>
    );
};

export default WorkoutProvider;