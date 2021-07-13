//import { createAction } from 'redux-actions';
import { action } from 'typesafe-actions';
import { ISetBookablePayload } from '../../../interfaces/ISetBookablePayload';
import { ISetGroupPayload } from '../../../interfaces/ISetGroupPayload';
import { BookableActionType } from './types';

export const setBookable = (payload: ISetBookablePayload) => action(BookableActionType.SET_BOOKABLE, payload);
export const setGroup = (payload: ISetGroupPayload) => action(BookableActionType.SET_GROUP, payload);
export const setToggleDetails = () => action(BookableActionType.TOGGLE_HAS_DETAILS);

export type BookableActions = ReturnType<typeof setBookable> | ReturnType<typeof setGroup> | ReturnType<typeof setToggleDetails>;