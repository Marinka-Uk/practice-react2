import { Component } from "react";

export class TodoEditor extends Component {

    state={
        textValue: '',
    }


    handleChange = (e) =>{
        this.setState({textValue: e.currentTarget.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault()

        this.props.addTodo(this.state.textValue)
        this.props.onClose()
        e.currentTarget.reset()
    }

    render(){
        
        return<>
        <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="">
                <textarea name="edit" id="" value={this.state.textValue} onChange={this.handleChange}></textarea>
            </label>
        
            <button>Додати</button>
        </form>
        

        </>
    }
}