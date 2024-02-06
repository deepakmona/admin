import { Component } from 'react';
import '../Components/Dashboard.css';
import Card from '../Components/Card';


export default class News extends Component {

  constructor() {
    super();
    console.log("Hello, this is constructor from news component ");
    this.state = {
      articles: [],
      loading: false
    };
  }

  componentDidMount() {
    // Simulating an API call with setTimeout
    setTimeout(() => {
      // Replace this with your actual API call or data fetching logic
      const fetchedData = [
        {
          
            "rent": " $ 1500",
            "list":"#Housing",
        },
        
        {
            
            "rent": " $ 2500",
            "list":"#Building",
          },

          {
            
            "rent": " $ 20000",
            "list":"#Molls",
          },

          {
            
            "rent": " $1100",
            "list":"#House",
          },

          {
            
            "rent": " $ 2300",
            "list":"#Condo",
          },
          
          {
            
            "rent": " $ 1500",
            "list":"#Apartment",
          },


      ];

      this.setState({
        articles: fetchedData,
        loading: false
      });
    }, 1000); 
  }

  render() {
    return (
      
      <div>
        
        <div className="dashboard">

            <div className="cardfctor">
          <p id="head">Welcome to Dashboard!</p>
          <div className="row">
            {this.state.articles.map((element, index) => (
              <div className="col" key={index}>
                <Card
                  list={element.list ? element.list : ""}
                  
                />
              </div>
            ))}
          </div>
        </div>

        </div>
      </div>
    );
  }
}
