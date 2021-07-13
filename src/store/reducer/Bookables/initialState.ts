import { IBookableState } from "../../../interfaces/IBookableState";
import { bookables, sessions, days } from "../../../assets/static.json";
export const bookableInitialState: IBookableState = {
    group: 'Kit',
    bookableIndex: 0,
    hasDetails: true,
    bookables: bookables
}