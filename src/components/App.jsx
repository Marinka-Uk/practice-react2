
import { Component} from "react"
import initialTodos from "../todo.json"
import { TodoList } from "./TodoList/TodoList";

export class  App  extends Component{
  state={
    todos: initialTodos,
    filter: '',

  }
deleteTodo=(id)=>{
  this.setState((prevState)=>{{todos: prevState.todos.filter((todo) => todo.id !== id 
)}
  })
}

render(){
  return(

    <>
  {/* <TodoEditor/> */}
 <TodoList  todos={this.state.todos} 
 onDelete = {this.deleteTodo}/>
 {/* <Filter/>
<Info/> */}
    </>
  )

}


};



