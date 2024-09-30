import Link from "next/link";

export default function Header(){
    return(
        <div className="parent">
            <div className="childrenLogo">
                <h1>Logo Space</h1>
            </div>
            <div className="childrenCenter">
                <ul className="childrenButton">
                    <Link href={"/"}>
                    <li>Home</li>
                    </Link>
                    <Link href={"/portfolio"}>
                    <li>Portfolio</li>
                    </Link>
                    <Link href={"/about"}>
                    <li>About</li>
                    </Link>
                    <Link href={"/contact"}>
                    <li>Contact Us</li>
                    </Link>
                </ul>
            </div>
            <Link href={"/getstarted"}>
            <div className="chidernGetStarted">Get Started</div>
            </Link>
        </div>
    )
}