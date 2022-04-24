import Link from "next/link";

interface ILogoProps { }

export const Logo = ({ }: ILogoProps) => {
    return (
        <div className="flex w-full sm:w-auto justify-center">
            <Link href="/">
                <a className="f_center rounded-full bg-black text-white h-24 w-24 mx-3">MP</a>
            </Link>
        </div>
    );
};
