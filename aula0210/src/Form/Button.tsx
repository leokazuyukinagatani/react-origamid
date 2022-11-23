interface IButtonProps {
  children: string;
}

export function Button({ children }: IButtonProps): JSX.Element {
  return <button>{children}</button>;
}
