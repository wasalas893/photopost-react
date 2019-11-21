import React,{Component} from 'react';


//list
class List extends Component{
    render(){
        return(
            <ol>
                {this.props.tasks.map((task,index)=> <li key={index}>{task}</li>)}
            </ol>
        )
    }

}

export default List;