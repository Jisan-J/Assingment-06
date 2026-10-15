import HeroSection from '@/component/shared/HeroSection';
import Workouts from '@/component/shared/Workouts';
import { Suspense } from 'react';


const page = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Suspense fallback={"Loading"}>
        <Workouts></Workouts>
      </Suspense>
    </div>
  );
};

export default page;