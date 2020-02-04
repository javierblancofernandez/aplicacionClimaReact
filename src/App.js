import React ,{Component} from 'react';
import LocationList from './components/LocationList';
import './App.css';

const cities =[
    'Buenos Aires,ar',
    'New York,us',
    'Madrid,es',
    'Lima,pe'
]


class App extends Component {
 
  render() {
    return (
      <div className="App">
        Weather APP (aplicacion de clima)
        <LocationList cities={cities}/>
      </div>
    );
  }
  
}

export default App;
