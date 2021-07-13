import React, { FC } from 'react'
import { IBookablePage } from '../../interfaces/IBookablePage';
import BookablesListContainer from './BookablesListContainer';

const BookablePage: FC<IBookablePage> = (props) => {
    return (
        <main className="bookables-page">
            <BookablesListContainer></BookablesListContainer>
        </main>
    );
}
export default BookablePage;