
import { useEffect, useState } from "react"
import initialTodos from "../todo.json"
import { TodoList } from "./TodoList/TodoList";
import { TodoEditor } from "./TodoEditor/TodoEditor";
import { Modal } from "./Modal/Modal";


export const  App = ()=>{
  const [todos, setTodos] = useState(initialTodos)
  const [showModal, setShowModal] = useState(false)
  const [ filter, setFilter]= useState('')

  const  addTodo=(labelText)=>{
    const newTodo ={
      id: Date.now(),
      text: labelText,
      completed: false
    }


useEffect(()=>{
  const  todos = localStorage.getItem('todos')
  if(todos){
    const parsedTodos = JSON.parse(todos)
    setTodos(parsedTodos)
  }
  console.log('Виклик useEffect');

},[todos])

    setTodos((prevState)=> [newTodo, ...prevState])
  }

    const  deleteTodo = (id) => {
   setTodos((prevState) => prevState.filter((todo) => todo.id !== id),
   )
    };
    const  toggleComplete=(id)=>{
      setTodos((prevState)=>prevState.map((todo)=>(
          todo.id == id ? {...todo, completed: !todo.completed} : todo
        )))
      
      }

const handelShowModal = ()=>{setShowModal((prevState)=>  !prevState.showModal
)
}

  





  

  // state={
  //   todos: [
  //     { "id": "id-1", "text": "Вивчити основи React", "completed": true },
  //     { "id": "id-2", "text": "Розібратися з React Router", "completed": false },
  //     { "id": "id-3", "text": "Пережити Redux", "completed": false }

    
    // ],
    // showModal: false,

    // filter: '',



  





//   componentDidMount(){
//    const todos = localStorage.getItem('todos')
//    const parsedTodos =  JSON.parse(todos)
//    this.setState({todos: parsedTodos})
//    console.log(todos);
//   }


//   componentDidUpdate(prevProps, prevState){
//     if (prevState.todos ===  this.setState.todos ){
// return 
//     }
//     localStorage.setItem("todos", JSON.stringify(this.state.todos))
//     console.log(prevState.todos);
//     console.log(this.state.todos);
   
   
  // }

 





  return(

    <>
 <TodoList  todos={todos} 
 toggleComplete={toggleComplete}
 onDelete = {deleteTodo}/>
<button onClick={handelShowModal}>Відкрити модалку</button>

{showModal && <Modal closeModal={handelShowModal}>
<TodoEditor  addTodo={addTodo} onClose={handelShowModal}/>
</Modal>}
 {/* <Filter/>
<Info/> */}
    </>
  )

}






