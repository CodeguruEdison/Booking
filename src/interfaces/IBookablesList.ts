
import { IBookable } from './IBoookable';
import { ISetBookablePayload } from './ISetBookablePayload';
import { ISetGroupPayload } from './ISetGroupPayload';
export interface IBookablesListStateFromProps {
    group?: string;
    bookableIndex?: number;
    bookables?: IBookable[];
    hasDetails?: boolean
}
export interface IBookablesListDispatchFromProps {
    setGroup?: (payload: ISetGroupPayload) => void;
    setBookable?: (payload: ISetBookablePayload) => void;
    setToggleDetails?: () => void;
    
}
export interface IBookablesListProps extends IBookablesListStateFromProps, IBookablesListDispatchFromProps {

}