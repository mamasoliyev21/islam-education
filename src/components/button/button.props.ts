import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children : ReactNode
    oppearance :  "primary" | "ghost"
    arrow?: "right" | "down" | "none" 
}