import React,{Component} from 'react';

import ReactDom from 'react-dom';


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

//title
class Title extends Component{
    render(){
    return  <h1>{this.props.title}</h1>
    }
}

//main
class Main extends Component{
    render(){
        return <div>
            <Title title={'toDos'}/>
            <List tasks={['mow the lawn','walk the dog']}/>
            <List tasks={['mow the lawn','walk the dog']}/>
        </div>
    }
}




ReactDom.render(<Main/>,document.getElementById('root'));