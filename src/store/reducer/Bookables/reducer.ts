import { IBookableState } from './../../../interfaces/IBookableState';
import { Reducer } from "redux";
import { BookableActionType } from "./types";
import { bookableInitialState } from './initialState';
import { BookableActions } from './BookableActions';



export const bookableReducer: Reducer<IBookableState, BookableActions> = (state = bookableInitialState, action) => {
    switch (action.type) {
        case BookableActionType.SET_BOOKABLE: {
            return {
                ...state,
                bookableIndex: action.payload.bookableIndex
            }
        }
        case BookableActionType.SET_GROUP: {
            return {
                ...state,
                group: action.payload.group,
                bookableIndex: 0
            }
        }
        case BookableActionType.TOGGLE_HAS_DETAILS: {
            return {
                ...state,
                hasDetails: !state.hasDetails
            }
        }
        // case BookableActionType.NEXT_BOOKABLE:{

        // }
        default:
            return state;

    }
}