import { IconType } from "react-icons";

export interface IMenu {
    linkTo: string,
    linkText: string
    iconType: string
    className: string
}
export type Menus = IMenu[];