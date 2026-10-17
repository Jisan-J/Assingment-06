import { createContext } from 'node:vm';
import React, { useState } from 'react';

const WorkContext = createContext();

const WorkoutProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [plan, setPlan] = useState([]);
    const [planSaved, setPlanSave] = useState([]);
    const shareData={
        plan, setPlan, planSaved, setPlanSave
    }
    return (
        <WorkContext.Provider value={shareData
            
        }>{children}</WorkContext.Provider>
    );
};

export default WorkoutProvider;