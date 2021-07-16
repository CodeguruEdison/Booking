import { FC } from "react";
import { FaCalendarDay, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface IWeek {
    start: Date,
    end: Date
}
export interface IWeekPicker {
    week?: IWeek
    date: Date
}
export const WeekPicker: FC<IWeekPicker> = (props) => {
    const { week, date } = props;
    const changeDate = () => {

    }
    return (
        <div>
            <p className="date-picker">
                <button className="btn" onClick={changeDate}>
                    <FaChevronLeft />
                    <span>Prev</span>
                </button>
                <button className="btn" onClick={changeDate}>
                    <FaCalendarDay />
                    <span>Today</span>
                </button>
                <button className="btn" onClick={changeDate}>
                    <FaChevronRight />
                    <span>Next</span>
                </button>
            </p>
            <p>{week?.start.toDateString()}- {week?.end.toDateString()}</p>
        </div>
    )
}