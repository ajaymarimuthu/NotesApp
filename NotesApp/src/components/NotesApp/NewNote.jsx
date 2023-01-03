import React from 'react'
import { NoteStyle, Icons, DeleteIcon } from './NoteStyle'

import { MdOutlineNoteAlt, MdDeleteForever } from "react-icons/md"

function NewNote() {
    return (
        <NoteStyle className='card'>
            <div className="card-header text-right">
                <Icons>
                    <MdOutlineNoteAlt />
                    <DeleteIcon>
                        <MdDeleteForever />
                    </DeleteIcon>

                </Icons>

            </div>

            <div className="card-body">
                <textarea style={{border:"none", outline:""}}></textarea>
            </div>
        </NoteStyle>
    )
}

export default NewNote