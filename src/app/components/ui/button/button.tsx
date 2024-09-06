import { IButton } from "./types";

export const Button: React.FC<IButton> = ({color, children, className, disabled, ...props}) => {

    const getSpecificStyles = () => {
        switch(color){
            case "primary":
                return `px-4 bg-blue-600 text-white ${disabled ? 'bg-gray-600' : ''}`;
            case 'secondary':
                return 'px-6 border border-blue-600 bg-white text-blue-600 hover:bg-blue-600 hover:text-white';
        }
    }

    return (
        <button className={`${className ? className : ""} py-2 transition-all rounded-md hover:opacity-90 ${disabled ? 'pointer-events-none' : ''} ${getSpecificStyles()}`} {...props}>{children}</button>
    )
}