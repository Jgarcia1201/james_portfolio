import { RefObject } from "react";

export const pageChangeInterval: number = 750;

export function fadeOut(ref: RefObject<HTMLDivElement>) {
    if (ref && ref.current)
        ref.current.style.opacity = '0';
}

export function fadeIn(ref: RefObject<HTMLDivElement>) {
    if (ref && ref.current) {
        ref.current.style.opacity = '1';
    }
}

export const loadInterval: number = 2000;
