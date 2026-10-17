import HeroSection from '@/component/HeroSection';
import Workouts from '@/component/Workouts';
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