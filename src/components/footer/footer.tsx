interface IFooterProps { }

export const Footer = ({ }: IFooterProps) => {
    return (
        <footer className="bg-black text-white text-center py-3">
            Visit my github for more information{" "}
            <a className="text-yellow-200 hover:text-yellow-300" href="https://github.com/automateeverythingM" rel="noopener noreferrer" target="_blank">
                @automateeverythingM
            </a>
        </footer>
    );
};
