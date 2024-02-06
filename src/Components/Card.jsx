import { Component } from 'react';
import './Card.css';


export default class Newsitem extends Component {
  

  constructor(props) {
    super(props);
    this.state = {
      count:0,
    };
  }

  componentDidMount() {
    this.countAnimation();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  countAnimation() {
    const countingElement = document.getElementById('counting');

    this.intervalId = setInterval(() => {
      countingElement.textContent = this.state.count;
      this.setState((prevState) => ({ count: prevState.count + 1}));

      if (this.state.count >=2500) {
        clearInterval(this.intervalId);
      }
    },);
  }




  render() {
    // eslint-disable-next-line react/prop-types
    let {list}=this.props
    return (
      <> 
      <div className="card">
        <div className="card-body">
          <h5 id='counting' className="card-title">{this.state.count}</h5><hr />
          <p className="card-text">{list}</p>
  </div>
      </div>
       </>       
       
    )
  }
}

