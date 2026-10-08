import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="navbar-start">
                <Image 
                    src="/logo.png"
                    alt="logo"
                    width={18}
                    height={18}
                />
                <p className='font-bold'>FITLOG</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='bg-Primary-bg rounded-xl'><a className='text-Primary'>Workouts</a></li>
                    <li><a href='/myPlan'>My Plan</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <div className='flex gap-1.5'>
                    <a className="">Plan</a>
                    <div className='bg-Primary px-2 rounded-4xl text-center text-black font-bold'>
                        <p>0</p>

                    </div>
                </div>
                <div>

                    <a className="">Saved</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;