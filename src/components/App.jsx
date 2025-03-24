
import { Component} from "react"
// import initialTodos from "../todo.json"
import { TodoList } from "./TodoList/TodoList";
import { TodoEditor } from "./TodoEditor/TodoEditor";

export class  App  extends Component{
  state={
    todos: [
      { "id": "id-1", "text": "Вивчити основи React", "completed": true },
      { "id": "id-2", "text": "Розібратися з React Router", "completed": false },
      { "id": "id-3", "text": "Пережити Redux", "completed": false }
    ],
    filter: '',

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
  <TodoEditor  addTodo={this.addTodo} />
 <TodoList  todos={this.state.todos} 
 toggleComplete={this.toggleComplete}
 onDelete = {this.deleteTodo}/>
 {/* <Filter/>
<Info/> */}
    </>
  )

}


};



