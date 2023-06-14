import { useState } from "react"

const TodoCreate = ({createTodo})=>{

  const [title,setTitle] = useState("")

  const handleSubmitAddTodo= (e)=>{
    e.preventDefault()

    if(!title.trim()){
      return setTitle("")
    }
    createTodo(title)
    setTitle("")
  }
    return(
        <form onSubmit={handleSubmitAddTodo} className=" dark:bg-gray-800 overflow-hidden rounded-md bg-white py-4 flex gap-4 items-center px-4 ">
          <input 
            className=" dark:bg-gray-800 w-full text-gray-500  dark:text-gray-400 outline-none" 
            type="text" 
            placeholder="Create new todo..."
            value = {title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </form> 
    )
}

export default TodoCreate