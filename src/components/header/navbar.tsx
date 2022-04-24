import Link from "next/link";
import { Logo } from "../logo/logo";

interface INavbarProps { }

export const Navbar = ({ }: INavbarProps) => {
    return (
        <nav className="container mx-auto flex justify-between items-center py-5">
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
    );
};
