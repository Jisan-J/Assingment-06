import Image from 'next/image';
const HeroSection = () => {
    return (
        <div className='bg-body-bg text-gray-50'>
            <div className="hero bg-card-bg  container mx-auto rounded-2xl border-card-border border-2 lg:h-[448px] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <Image className='hidden sm:block'
                        src="/banner.png"
                        alt="logo"
                        width={300}
                        height={300}
                    />
                    <div>
                        <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG <br />
                            EVERY SET.</h1>
                        <p className="py-6">
                            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                            into today&apos;s plan, and watch the week&apos;s work add up.
                        </p>
                        <a
                            href="#workouts"
                            className="btn bg-Primary shadow-none border-none font-bold text-gray-900"
                        >
                            BROWSE WORKOUTS
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default HeroSection;