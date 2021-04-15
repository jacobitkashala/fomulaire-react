import React from 'react';
// import Img './Imag/MAO.jpg';
import './style.css';
// import logo from './Imag/MAO.jpg';
import Contact from './Contact';



class  Contenaire extends React.Component {


        render() {
        	
            return (<div className="conteneur"> 
          				<div className="title">
						   <h1>Répertoire</h1>
		    	 		</div>	
		    	 		<div className="conteneur-form">	
			    	 		<div className="form-left">
				    	 		<form id="form2">
				    	 			<p>Formulaire de contact</p>
				    	 			<div>
					    	 			<label > Prenom </label>
					    	 			<input type="text"/>
					    	 			<label >Nom</label>
					    	 			<input type="text"/>
					    	 			<label >Groupe</label>
					    	 			<select name="GROUPE" id="groupe">
		                            		<option value="Informaticien">Informaticien</option>
		                            		<option value="Monsieur" selected>Monsieur</option>
		                            		<option value="professeur">professeur</option>
		                            		<option value="docteur">docteur</option>
	                     			   </select>
									   <label className="info" for="">Bio</label>
										<textarea name="TEXTBIO" id="text-bio"></textarea>
	                        			 <div className="charger-img">
	                        			 	<label for="telecharger"> </label>
	                                		<input type="file"  id="telecharger"/>
	                        			 </div>
										<div className="grpbt">
					                        <button type="submit" id="btn-creer" name="sauve">Créer</button>
					                        <button type="reset" id="btn-reinit" name="clear">Réinit.</button>
		                        		</div>
				    	 			</div>
				    	 		</form>
			    	 		</div>
			    	 		<div class="form-right">
				    	 		<form id="form2">
				    	 			<p>Liste de contact</p>
					    	 		<div>
					    	 			<Contact/>
					    	 		</div>
				    	 		</form>
			    	 		</div>
			    	 	</div>
		     		</div>
            		);
            
            }
}
 export default Contenaire;

