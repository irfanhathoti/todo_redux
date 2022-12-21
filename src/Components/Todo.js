import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteTodo, removeTodo } from '../actions/todoActions'
import './todo.css'
const Todo = () => {
    const [inputData, setInputData] = useState('')
    const list = useSelector(state => state.todoReducer.list)
    const dispatch = useDispatch()



    


    const add_Todo = () => {
        dispatch(addTodo(inputData))

        setInputData('')
    }

    return (
        <>
            <div className='main_div'>
                <div className='child_div'>
                    <figure>
                        <figcaption>
                            Add your list here ✌🏽
                        </figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type='text' placeholder='✍🏽 Add Items...' value={inputData} onChange={e => setInputData(e.target.value)} />
                        <i className="fa-solid fa-plus" onClick={add_Todo} ></i>
                    </div>

                </div>

                <div className='show_items'>
                    {
                        list.map((CurElem) => {
                            const { id, data } = CurElem

                            return (
                                <div key={id} className='todo_container'>
                                    <div className='todo_item'> {data} </div>
                                    <div>
                                        <i className="fa-solid fa-trash" onClick={() => dispatch(deleteTodo(id))} ></i>
                                    </div>
                                </div>
                            )
                        })

                    }

                </div>
                <div className='remove_todo'>
                    <button onClick={()=>dispatch(removeTodo())} > Remove List </button>
                </div>

            </div>

        </>
    )
}

export default Todo