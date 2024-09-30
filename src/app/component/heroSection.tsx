import Image from 'next/image';
import Link from "next/link"
export default function HeroSection (){
    return(
        <div className="hs-parent">
            <div className="hs-text">
                <h1>Syed Abdul Sami</h1>
                <p>I&apos;m a passionate Graphic Designer currently expanding my skills into web development with Next.js. With experience in creative tools and a focus on modern design, I aim to bring innovative ideas to life. Join me on this journey as I explore new ways to blend design and technology.</p>
                <div className="hs-buttonMain">
                    <Link href={"/getstarted"}>
                    <div className="chidernGetStarted">Get Started Now</div>
                    </Link>
                    <Link href={"/contact"}>
                    <div className="hs-button2">Contact us</div>
                    </Link>
                </div>
            </div>
            <div className="hs-image">
                <Image src="/images/img-crop.jpg" alt="My image" width={900} height={900}/>

            </div>
        </div>
    )
}