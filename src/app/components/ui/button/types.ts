import { ReactNode } from "react";

type ButtonType = "primary" | "secondary";

interface NativeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export interface IButton extends React.PropsWithChildren, NativeButtonProps {
    color?: ButtonType
}