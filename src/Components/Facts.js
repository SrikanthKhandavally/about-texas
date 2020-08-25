import React from 'react'
import data from '../assets/copies_facts.json'

class Facts extends React.Component {
  render() {
    var listItems = data.facts;
    listItems = Object.values(listItems)
    listItems = listItems.map((d) => <li style={{fontSize: "25px"}} key={d}>{d}</li>);
    return <div>
        <div style={{display: "flex", justifyContent: "center"  }}>
            <h1>Fun Facts About Texas</h1>
        </div>
        <div style={{paddingLeft: "30px"}}>
            {listItems}
        </div>
    </div>

  }
}
export default Facts