import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

// components
import { ToggleButton } from "../button/ToggleButton";
import { Logo } from "../logo/logo";

// assets
import tv from "../../assets/img/tv.png";

interface INavbarProps { }

export const Navbar = ({ }: INavbarProps) => {
    const toggleTheme = () => {
        document.body.classList.toggle("dark");
    };

    return (
        <div className="flex justify-center">
            <div className="flex items-center container absolute">
                <nav className="flex w-full justify-between items-center py-5">
                    <Logo />
                    <ul className="flex">
                        <li>
                            <Link href="/projects">
                                <a className="btn btn-purple shadow-darker">
                                    Projects
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/components">
                                <a className="btn btn-green shadow-darker">
                                    Components
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className="btn btn-yellow shadow-darker">
                                    About
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div>
                    <ToggleButton onToggle={toggleTheme}>
                        {(toggle) => (
                            <Image
                                alt="color tv"
                                src={tv}
                                width="100px"
                                height="100px"
                                className={clsx({ grayscale: toggle })}
                            />
                        )}
                    </ToggleButton>
                </div>
            </div>
        </div>
    );
};
