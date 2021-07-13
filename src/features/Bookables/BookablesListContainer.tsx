
import { connect } from "react-redux";
import { AnyAction, Dispatch } from "redux";
import { IApplicationState } from "../../interfaces/IApplicationState";
import { IBookablesListDispatchFromProps, IBookablesListProps, IBookablesListStateFromProps } from "../../interfaces/IBookablesList";
import { ISetBookablePayload } from "../../interfaces/ISetBookablePayload";
//import { IBookableState } from "../../interfaces/IBookableState";
import { ISetGroupPayload } from "../../interfaces/ISetGroupPayload";
import { setBookable, setGroup, setToggleDetails } from "../../store/reducer/Bookables/BookableActions";
import BookablesList from "./BookablesList";

const mapStateProps = (state: IApplicationState, ownProps: IBookablesListProps): IBookablesListStateFromProps => ({
    group: state.boookable.group,
    bookableIndex: state.boookable.bookableIndex,
    bookables: state.boookable.bookables,
    hasDetails: state.boookable.hasDetails
})

const mapDispatchToProps = (dipatch: Dispatch<AnyAction>): IBookablesListDispatchFromProps => ({
    setGroup: (payload: ISetGroupPayload) => dipatch(setGroup(payload)),
    setBookable: (payload: ISetBookablePayload) => dipatch(setBookable(payload)),
    setToggleDetails: () => dipatch(setToggleDetails())
})

export default connect(mapStateProps, mapDispatchToProps)(BookablesList);