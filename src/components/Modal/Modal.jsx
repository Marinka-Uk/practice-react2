import { Component } from "react"
import s from "./Modal.module.css"


export class Modal extends Component{
    componentDidMount(){
window.addEventListener('keypress', (e)=>{
    if(e.target.key === 'Escape'){
        this.props.closeModal()
    }
} )
    }
    render(){
        return(
            <>
            <div className={s.backdrop}>
            <div className={s.Modal}>
    {this.props.children}
            </div>
        </div>
        </>
        )
    }
}