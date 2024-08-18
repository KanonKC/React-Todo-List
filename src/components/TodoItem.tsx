import { useState } from 'react'
import './TodoItem.css'

const TodoItem = ({ name }: {
    name: string
}) => {

  const [display, setDisplay] = useState(true)

  return (
    display ? (<div className='todo-item'>
        <span>{name}</span>
        <button onClick={() => setDisplay(false)}>Remove</button>
    </div>) : null
  )
}

export default TodoItem