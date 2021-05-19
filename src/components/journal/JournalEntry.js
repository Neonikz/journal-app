import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { activeNote } from '../../actions/notes';



export const JournalEntry = ( {id, date, title, body, url} ) => {
    
    const day = moment(date);
    const dispatch = useDispatch()

    const handleEntryClick = () => {
            dispatch( activeNote( id, {
                date, title, body, url
            })
        );
    }

    return (
        <div 
            className="journal__entry animate__animated animate__fadeIn animate_faster"
            onClick={ handleEntryClick }
        >
            
            {   
                url &&
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover',
                        backgroundImage: `url(${ url })`
                    }}
                ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-tittle">
                   { title }
                </p>
                <p className="journal__entry-content">
                    { body }
                </p>
            </div>   

            <div className="journal__entry-date-box">
                <span>{day.format("dddd")}</span>
                <h4>{day.format("Do")}</h4>
            </div>     

        </div>
    )
}
