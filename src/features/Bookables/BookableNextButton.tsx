import React, { FC } from 'react'
import { FaArrowRight } from 'react-icons/fa'
export interface IBookableNextButton {
    nextBookable(): void
}
const BookableNextButton: FC<IBookableNextButton> = (props) => {
    const { nextBookable } = props;
    return (
        <p>
            <button className="btn" onClick={nextBookable} autoFocus>
                <FaArrowRight />
                <span>Next</span>
            </button>
        </p>
    )
}
export default BookableNextButton