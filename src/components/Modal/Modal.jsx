import { Component } from "react"
import s from "./Modal.module.css"


export class Modal extends Component{
    componentDidMount(){
window.addEventListener('keydown', this.onEscapeClose)
} 
    


onEscapeClose = (e)=>{
    console.log(e.key);
        if(e.key === 'Control'){
            this.props.closeModal()
        }
}

componentWillUnmount(){
    window.removeEventListener('keydown', this.onEscapeClose)
}


onClose = (e )=>{
if (e.target=== e.targetTurget){
this.props.Show()


if(e.target.className === 'backdrop'){
    this.props.Show()
}
}
}

    render(){
        return(
            <>
            <div onClick={this.onClose} className={s.backdrop}>
            <div className={s.Modal}>
    {this.props.children}
            </div>
        </div>
        </>
        )
    }
}