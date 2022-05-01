interface IEmoji extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  symbol: string;
}

export const Emoji = ({ label, symbol, ...rest }: IEmoji) => {
  return (
    <span
      role="img"
      aria-label={label}
      aria-hidden={label ? false : true}
      {...rest}
    >
      {symbol}
    </span>
  );
};
