import HeroSection from '@/component/homePage/HeroSection';
import Loading from '@/component/homePage/loading';
import Workouts from '@/component/homePage/Workouts';
import { Suspense } from 'react';


const page = () => {
  return (
    <div className='mx-auto'>
      <HeroSection></HeroSection>
      <Suspense fallback={<Loading></Loading>}>
        <Workouts></Workouts>
      </Suspense>
    </div>
  );
};

export default page;