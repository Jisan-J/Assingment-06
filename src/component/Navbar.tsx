'use client'
import { CardDataType } from '@/app/cardType';
import { WorkContext } from '@/context/WorkoutsContext';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from "react";


const Navbar = () => {
    const { plan, save } = useContext(WorkContext) as {
        plan: CardDataType[];
        save: CardDataType[];
    };

    return (
        <div className='bg-body-bg text-gray-50'>
            <div className="navbar shadow-sm container mx-auto">
                <div className="navbar-start">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={24}
                        height={24}
                    />
                    <Link href='/' className='font-bold text-2xl'>FITLOG</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='bg-Primary-bg rounded-xl'><Link href='/' className='text-Primary'>Workouts</Link></li>
                        <li><Link href='/myPlan' className="text-gray-200">My Plan</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <Link href={`/myPlan/todays-plan`}>
                        <div className='flex gap-1.5'>
                            <p>Plan</p>
                            <div className='bg-Primary px-2 rounded-4xl text-center text-black font-bold'>
                                <p>{`${plan.length}`}</p>
                            </div>
                        </div></Link>
                    <Link href={`/myPlan/saved-plan`}> <div className='flex gap-1.5'>
                        <p>Saved</p>
                        <div className='border px-2 rounded-4xl text-center  font-bold'>
                            <p>{`${save.length}`}</p>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;