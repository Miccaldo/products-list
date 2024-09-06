type ButtonType = 'primary' | 'secondary';

export interface IButton extends React.PropsWithChildren, React.ButtonHTMLAttributes<HTMLButtonElement> {
	color?: ButtonType;
}
