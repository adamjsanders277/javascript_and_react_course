import React, {Component} from 'react';
import './Pet.css';
import Pet from './Pet';

class HobbyList extends Component {
  render() {
    const hobbies = ["Sleeping","Eating","Cuddling"];
    return (
      <ul>
        {hobbies.map( (h,i) => {
          return <li key={i} style={Pet.liStyle}>{h}</li>
        })}
      </ul>
    );
  }
}

export default HobbyList;