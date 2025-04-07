
import { Component} from "react"
// import initialTodos from "../todo.json"
import { TodoList } from "./TodoList/TodoList";
import { TodoEditor } from "./TodoEditor/TodoEditor";
import { Modal } from "./Modal/Modal";


export class  App  extends Component{
  state={
    todos: [
      { "id": "id-1", "text": "Вивчити основи React", "completed": true },
      { "id": "id-2", "text": "Розібратися з React Router", "completed": false },
      { "id": "id-3", "text": "Пережити Redux", "completed": false }

    
    ],
    showModal: false,

    filter: '',



  }





  componentDidMount(){
   const todos = localStorage.getItem('todos')
   const parsedTodos =  JSON.parse(todos)
   this.setState({todos: parsedTodos})
   console.log(todos);
  }


  componentDidUpdate(prevProps, prevState){
    if (prevState.todos ===  this.setState.todos ){
return 
    }
    localStorage.setItem("todos", JSON.stringify(this.state.todos))
    console.log(prevState.todos);
    console.log(this.state.todos);
   
   
  }

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

addTodo=(labelText)=>{
  const newTodo ={
    id: Date.now(),
    text: labelText,
    completed: false
  }

  this.setState((prevState)=>({
    todos: [...prevState.todos, newTodo]
  }))
}

handelShowModal = ()=>{
  this.setState((prevState)=>({
    showModal: !prevState.showModal
  }))
}


toggleComplete=(id)=>{
this.setState((prevState)=>({
  todos: prevState.todos.map((todo)=>(
    todo.id == id ? {...todo, completed: !todo.completed} : todo
  ))
}))
}



render(){
  return(

    <>
 <TodoList  todos={this.state.todos} 
 toggleComplete={this.toggleComplete}
 onDelete = {this.deleteTodo}/>
<button onClick={this.handelShowModal}>Відкрити модалку</button>

{this.state.showModal && <Modal closeModal={this.handelShowModal}>
<TodoEditor  addTodo={this.addTodo} onClose={this.handelShowModal}/>
</Modal>}
 {/* <Filter/>
<Info/> */}
    </>
  )

}


};



