import React from 'react'
import NewNote from './NewNote'
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from "uuid"
import { useState } from 'react';

function NotesApp() {

    const [notes, setNotes] = useState([])

    const addNewNote = (newNote) => {
        const newNotes = [...notes, newNote];
        newNotes.filter((note) => !note.id && (note.id = uuidv4()))

        setNotes(newNotes)

        console.log(newNotes);

    }


    return (
        <div>
            <Button className='success'
                variant="success"
                onClick={addNewNote}
            >+NewNotasdases</Button>

            <div className="container">
                {notes.map((note) => {
                    <NewNote note={note} />
                })}



            </div>

        </div>
    )
}

export default NotesApp