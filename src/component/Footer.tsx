import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className=" footer sm:footer-horizontal bg-neutral text-neutral-content items-center h-20">
            <div className='container mx-auto flex items-center p-4 justify-between'>

                <div className='flex'>
                    <Image
                        src="/SVG.png"
                        alt="logo"
                        width={20}
                        height={20}
                    />
                    <p className='font-bold'>FITLOG</p>

                </div>

                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;