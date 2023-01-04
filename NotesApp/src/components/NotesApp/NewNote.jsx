import React from 'react'
import { NoteStyle, Icons, DeleteIcon } from './NoteStyle'

import { MdOutlineNoteAlt, MdDeleteForever } from "react-icons/md"

function NewNote({note,deleteNote,text}) {
    return (
        <NoteStyle className='card'>
            <div className="card-header text-right">
                <Icons>
                    <MdOutlineNoteAlt />
                    <DeleteIcon>
                        <MdDeleteForever onClick={()=>deleteNote(note.id)} />
                    </DeleteIcon>

                </Icons>

            </div>

            <div className="card-body">
                <textarea style={{border:"none", outline:"none"}}  max="1000">{text}</textarea>
            </div>
        </NoteStyle>
    )
}

export default NewNote