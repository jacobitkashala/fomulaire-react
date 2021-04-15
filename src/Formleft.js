import React from 'react';
import './style.css';
import Contenaire from './Contenaire';


class  Formleft extends React.Component {


        render() {
        	
            return (<> 
            			<div className="title">
						   <h1>Répertoire</h1>
		    	 		</div>
		    	 		<div className="">
			    	 		<from>
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
                                		<input type="file" id="telecharger"/>
                        			 </div>
									<div className="grpbt">
				                        <button type="submit" id="btn-creer" name="sauve">Créer</button>
				                        <button type="reset" id="btn-reinit" name="clear">Réinit.</button>
	                        		</div>
			    	 			</div>
			    	 		</from>
		    	 		</div>
		     		</>
            		);
            
            }
}
        export default Formleft;
