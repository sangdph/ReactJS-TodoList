import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {taskName: '', tasks: []}
  }

  myTaskChangeHandler = (event) =>{
    //console.log(event.target.value);
    // this.setState({ taskname: event.target.value});
    // console.log('myTaskChangeHandler', this.state.taskName);

    this.setState({taskName: event.target.value});
    //console.log('Sang', this.state.taskName);
  }

  addTask = ()=>{
    //console.log('addTask', this.state.taskName);
    if(this.state.taskName === ''){
      return;
    }
    this.state.tasks.push(this.state.taskName);
    this.setState({taskName: ''});
  }
  render(){
    return (
      <div className="App">
          To do List Sin236
          <br/>
          <div className='aligned'>
          <img
            src='./assets/24212_package_install_icon.png'
            alt='Add Task'
            width='25'
            style={{cursor: 'pointer'}}
            title='Bấm vào đây để thêm task'
            onClick={()=>this.addTask()}
          />
          <input 
            type='text'
            value={this.state.taskName}
            onChange={this.myTaskChangeHandler}
          />
          </div>
          <ul>
            {this.state.tasks.map((value, index)=>{
              return <li key={index}>{value}</li>
            })}
          </ul>
      </div>
    );
  }
}

export default App;
