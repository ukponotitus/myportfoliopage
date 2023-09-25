import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface IData{
    icon:ReactNode,
    title:string,
    description:string,
    id:number,
}

export interface INextData{
    img:StaticImageData | string,
    title:string,
    favorite:string
    description:string,
    id:number,
}