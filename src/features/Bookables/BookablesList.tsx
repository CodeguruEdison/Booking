import React, { FC, useState } from 'react'
import { bookables, sessions, days } from '../../assets/static.json'
import { IBookablesListProps } from '../../interfaces/IBookablesList';
import BookableNextButton from './BookableNextButton';
const BookablesList: FC<IBookablesListProps> = (props) => {
    const { setGroup, group, bookableIndex, bookables, setBookable,setToggleDetails } = props;
    //const group = "Rooms";
    //    const [bookableIndex, setBookableIndex] = useState<number>(0);
    const [hasDetails, setHasDetails] = useState(false);
    //const [group, setGroup] = useState("Kit");
    const groups = [...new Set(bookables?.map(b => b.group))];
    const bookablesInGroup = bookables?.filter(b => b.group === group);
    const bookable = bookablesInGroup ? bookablesInGroup[bookableIndex!] : undefined;
    const changeBookable = (selectedIndex: number) => {
        setBookable?.({ bookableIndex: selectedIndex });
        console.log(bookableIndex);
    }
    const changeGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGroup?.({ group: e.target.value, bookableIndex: 0 });
    }
    const nextBookable = () => {
        //setBookableIndex(i => (i + 1) % bookablesInGroup.length);
    }
    const toggleDetails = () => {

    }
    return (
        <>

            <div>
                <select value={group} onChange={changeGroup}>
                    {groups && groups.map(g => <option value={g} key={g}>{g}</option>)}
                </select>
                <ul className="bookables items-list-nav">
                    {bookablesInGroup && bookablesInGroup.map((b, i) => (
                        <li key={b.id} className={i === bookableIndex ? "selected" : ''} onClick={() => changeBookable(i)}>
                            <button className="btn">{b.title}</button>
                        </li>
                    ))}
                </ul>
                <BookableNextButton nextBookable={nextBookable}></BookableNextButton>
            </div>
            {bookable && (
                <div className="bookable-detail">
                    <div className="item">
                        {/* <!-- item header --> */}
                        <div className="item-header">
                            <h2>{bookable.title}</h2>
                            <span className="controls">
                                <label>
                                    <input type="checkbox" checked={hasDetails} onChange={() => setHasDetails(has => !has)} />
                                    Show Details
                                </label>
                            </span>
                        </div>
                        {/* <!--end item header --> */}
                        {hasDetails && (
                            //   <!-- item avilability --> 
                            <div className="item-details">
                                <h3>Availability</h3>
                                <div className="bookable-availability">
                                    <ul>
                                        {bookable?.days.sort().map(d => <li key={d}>{days[d]}</li>)}
                                    </ul>
                                    <ul>
                                        {bookable?.sessions.map(s => <li key={s}>{sessions[s]}</li>)}
                                    </ul>
                                </div>
                            </div>
                            // <!-- enditem avilability --> 
                        )}
                    </div>
                </div>
            )}

        </>
    )
}
export default BookablesList;

