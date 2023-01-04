import React from 'react'
import NewNote from './NewNote'
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from "uuid"
import { useState } from 'react';

function NotesApp() {

    const [notes, setNotes] = useState([])

    const addNewNote = (newNote) => {
        
        // console.log("hii");
        const newNotes = [...notes, newNote];
        newNotes.filter((note) => !note.id && (note.id = uuidv4()))

        setNotes(newNotes)

        // console.log(newNote.id+" ---this is id");

    }


    // console.log(notes);

    const deleteNote= (id) =>{
        const newNotes=notes.filter((note)=>  note.id!==id );
        setNotes(newNotes)
    }

    return (
        <div>
            <Button 
                
                onClick={addNewNote}
             
            >+NewNote</Button>
{/* 
            <button
            onClick={addNewNote}
            >
                +Newnote
            </button> */}


            {notes.map((note) =>{

                return <NewNote note={note} key={note.id} deleteNote={deleteNote}/>

            } )}


            {/* {notes.map((n)=>{
                console.log(n.id);


                //this is to print all the id's of the notes


            })} */}
  
               
        </div>
    )
}

export default NotesApp