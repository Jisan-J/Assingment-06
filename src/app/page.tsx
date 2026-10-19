import HeroSection from '@/component/homePage/HeroSection';
import Workouts from '@/component/homePage/Workouts';
import { Suspense } from 'react';
import Loading from './loading';


const page = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <Suspense fallback={<Loading></Loading>}>
        <Workouts></Workouts>
      </Suspense>
    </div>
  );
};

export default page;