import Link from "next/link";
import { Logo } from "../logo/logo";

interface INavbarProps { }

export const Navbar = ({ }: INavbarProps) => {

    const toggleTheme = () => {
        document.body.classList.toggle("dark");
    };

    return (
        <div className="flex items-center container mx-auto">
            <nav className="flex w-full justify-between items-center py-5">
                <Logo />
                <ul className="flex">
                    <li>
                        <Link href="/projects">
                            <a className="nav-link">Projects</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/components">
                            <a className="nav-link">Components</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                </ul>

            </nav>
            <div>
                <button onClick={toggleTheme} className="whitespace-nowrap">
                    Toggle Theme
                </button>
            </div>
        </div>
    );
};
