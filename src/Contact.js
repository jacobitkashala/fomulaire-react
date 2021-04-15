import React from 'react';
// import Img './Imag/MAO.jpg';
import './style.css';
// import logo from './Imag/MAO.jpg';

class Contact extends React.Component {

		// constructor(props){
		// 	surper(props);
		// 	this.state={n:0};
		// }
		dirbjr(e){
			e.preventDefault();
			console.log("Bonjour");


		}

        render() {
        	// let n=9;
            return (<> 
					   <table className="tableview">
					   		<tr>
					   			<td rowspan="3" className="conteneur-avatar">
					   			photo
					   			</td>
					   			<td id="user-nom">Nom:{"SK"}</td>
					   			<td id="user-prenom">Prenom:{"SKash"}</td>
					   		</tr>
					   			<td id="user-groupe" colspan="2"> Groupe:Monsieur</td>
					   		<tr >
					   		<td id="user-groupe" colspan="2"> Bio:</td>
					   		</tr>
					   		
					   </table>

					   <input type="submit" onClick={(e)=>{console.log(e)}} className="btn-creer" value="Ajouter ici"/>

		     		</>
            		);
            
            }
}
        export default Contact
