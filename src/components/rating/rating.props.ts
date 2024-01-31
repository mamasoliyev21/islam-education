import { DetailedHTMLProps, HtmlHTMLAttributes } from "react";

export interface RatingProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    rating: number;
    isEditabled?: boolean;
    setRating: (rating: number) => void;
}