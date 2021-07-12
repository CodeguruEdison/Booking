import React, { FC } from 'react'
import { IBookablePage } from '../../interfaces/IBookablePage';
import BookablesList from './BookablesList';

const BookablePage: FC<IBookablePage> = (props) => {
    return (
        <main className="bookables-page">
            <BookablesList></BookablesList>
        </main>
    );
}
export default BookablePage;