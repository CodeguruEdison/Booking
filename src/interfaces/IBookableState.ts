import { IBookable } from "./IBoookable";

export interface IBookableState {
    group: string;
    bookableIndex: number;
    hasDetails: boolean,
    bookables: IBookable[]
}