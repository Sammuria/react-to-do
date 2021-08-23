import React, {Component} from 'react';

class App extends Component
{
  constructor(props)
  {
    super(props);

    this.state= {
      newItem:"",
      list:[]
    }
  }

updateInput(key,value){
  this.setState({
    [key]: value
  })
}



  addItem(){
    //to create a new item
    const newItem={
      id: 1+Math.random(),
      value: this.state.newItem.slice()

    };

    //original or active list

    const list= [...this.state.list];

    //adding a new task

    list.push(newItem);

    //updating
    this.setState({
      list, 
      newItem:""
    });
  }


  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item => item.id !== id);

    this.setState({list: updatedList});
  }


  render()
  {
    return (
      <div className="App">
        <div>
          Add task here
          <br/>
          <input
            type = "text"
            placeholder = "Today I'm gonna "
            value = {this.state.newItem}
            onChange = {e=> this.updateInput("newItem", e.target.value)}
          />
          <button
          onClick= {()=> this.addItem()}
          >

          Add 

          </button>
          <br/>
          <ul>
            {this.state.list.map(item => {

              return(

                <li key={item.id}>
                  {item.value}
                  <button
                    onClick={()=> this.deleteItem(item.id)}

                  >
                  x
                  </button>
                </li>
              )
            })}
          </ul>

        </div>
      </div>
    );
  }

}

export default App;