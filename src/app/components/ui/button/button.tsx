import { IButton } from "./button.types";

export const Button: React.FC<IButton> = ({type, children}) => {
    return (
        <button>{children}</button>
    )
}