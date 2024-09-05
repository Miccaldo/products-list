type ButtonType = "primary" | "secondary";

export interface IButton extends React.PropsWithChildren {
    type?: ButtonType
}