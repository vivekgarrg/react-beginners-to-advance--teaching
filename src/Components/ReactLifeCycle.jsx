import  { Component } from 'react'


//Life cycle methods
export default class App extends Component {
  //ye wala page que m aaya hai render hone ke liye
  constructor(){
    super();
    this.state = {count:0};
    console.log('1');
  }

  //page screen par lagg chuka hai 
  componentDidMount(){
    console.log('3');
  }

  componentDidUpdate(){
    console.log('4');
  }

 componentWillUnmount(){
  console.log('5');
 }

  handleCount =()=>{
    this.setState(prev=> {return {count:prev.count+1}})
  }

  //jsx render ho gyi hai screen par
  render() {
    return (
      <div>Count:{this.state.count} {console.log('2')}
      <button onClick={this.handleCount}>+</button>
      </div>
    )
  }
}
