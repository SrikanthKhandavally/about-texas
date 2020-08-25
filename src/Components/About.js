import React from 'react'
import seal from '../assets/tx-seal.png'
import flag from '../assets/tx-flag.png'
import map from '../assets/tx-map.jpg'
import { textAlign } from '@material-ui/system';
import  './styles.css'
class About extends React.Component {
  render() {
    return <div style={{backgroundColor: "#f1f1f1"}}>
        <div style={{height: "150px",display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingTop: "100px"}}>
            <img src={seal} style={{height: "150px", width: "150px"}}></img>
            <h1 style={{height: "100px", width: "250px", paddingLeft: "80px"}}>About Texas</h1>
        </div>
        <br />
        <div className="imageClass" style={{display: "flex", alignItems: "center", }}>
            <div style={{display: "flex", justifyContent: "center", width: "25%"}}>
                <img src={flag} style={{height: "150px", width: "250px"}}></img>
            </div>
            <div style={{width: "75%"}}>
                <p style={{fontSize: "20px"}}>Texas is a state in the South Central Region of the United States. It is the second largest U.S. state by both area (after Alaska) 
                and population (after California). Texas shares borders with the states of Louisiana to the east, Arkansas to the northeast, 
                Oklahoma to the north, New Mexico to the west, and the Mexican states of Chihuahua, Coahuila, Nuevo León, and Tamaulipas 
                to the southwest, and has a coastline with the Gulf of Mexico to the southeast.</p>
                <br />
                <p style={{fontSize: "20px"}}>
                Houston is the most populous city in Texas and the fourth largest in the U.S., while San Antonio is the second-most populous
                 in the state and seventh largest in the U.S. Dallas–Fort Worth and Greater Houston are the fourth and fifth largest metropolitan
                 statistical areas in the country, respectively. Other major cities include Austin, the second-most populous state capital in the 
                 U.S., and El Paso. Texas is nicknamed the "Lone Star State" for its former status as an independent republic, and as a reminder 
                 of the state's struggle for independence from Mexico. The "Lone Star" can be found on the Texas state flag and on the Texas state seal.[11] The origin of Texas's name is from the word táyshaʼ, which means "friends" in the Caddo language.
                </p>
            </div>
        </div>
        
        <div style={{display: "flex", alignItems: "center"}}>
            <div style={{width: "75%"}}>
            <p style={{fontSize: "20px"}}>Due to its size and geologic features such as the Balcones Fault, Texas contains diverse landscapes common to both the U.S.
             Southern and the Southwestern regions.[13] Although Texas is popularly associated with the U.S. southwestern deserts, less 
             than ten percent of Texas's land area is desert.[14] Most of the population centers are in areas of former prairies, grasslands, 
             forests, and the coastline. Traveling from east to west, one can observe terrain that ranges from coastal swamps and piney
            woods, to rolling plains and rugged hills, and finally the desert and mountains of the Big Bend.

</p>
<br />
            <p style={{fontSize: "20px"}}>
            The term "six flags over Texas"[note 1] refers to several nations that have ruled over the territory. Spain was the first European 
            country to claim and control the area of Texas. France held a short-lived colony. Mexico controlled the territory until 1836 
            when Texas won its independence, becoming an independent republic. In 1845,[15] Texas joined the union as the 28th state. 
            The state's annexation set off a chain of events that led to the Mexican–American War in 1846. A slave state before the 
            American Civil War, Texas declared its secession from the U.S. in early 1861, and officially joined the Confederate States of
             America on March 2 of the same year. After the Civil War and the restoration of its representation in the federal government, 
             Texas entered a long period of economic stagnation.

                </p>          
              </div>
            <div className="imageClass" style={{width: "25%", display: "flex", justifyContent:"center"}}>
            <img src={map} style={{height: "200px", width: "300px", backgroundColor: "#f1f1f1"}}></img>
            </div>
        </div>
    </div>
  }
}
export default About