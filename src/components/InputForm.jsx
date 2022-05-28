import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'


export const InputForm = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        /* タスクを追加する */
        setTaskList([
            ...taskList,
            {
                id: taskList.length,
                text: inputText,
                completed: false
            }
        ]);

        /* エンターを押した後、入力ボックスをからにする */
        setInputText("")

    }

    const handleChange = (e) => {
        setInputText(e.target.value)

    }

    return (
        <div className='inputForm'>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={inputText}/>
                <button>
                <FontAwesomeIcon icon={faPlusCircle} />
                </button>
            </form>
        </div>
    )
}
