interface INLink extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType<any>;
  to?: any;
}

export function Button({ className, as, ...rest }: INLink) {
  const Component = as || "button";
  return <Component className={`btn ${className}`} {...rest} />;
}
