import React from 'react';
import picture from './a2.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Demo1';
import Card from './Box';
import Image from './dog.jpg';
import Contact from './Contact';
import GridAutoSizingColMixExample from './Form';
import Services from './Services';

function Home() {
  return (
    <>
    <div>

    
    <center><h1>Welcome To Animal</h1>  </center> 
    <GridAutoSizingColMixExample/>
   
   <br></br>
   
      <i style={ {fontSize:"larger"}}> The earliest remains generally accepted to be those of a domesticated dog were discovered in Bonn-Oberkassel, Germany. Contextual, isotopic, genetic, and morphological evidence shows that this dog was not a local wolf.[20] The dog was dated to 14,223 years ago and was found buried along with a man and a woman, all three having been sprayed with red hematite powder and buried under large, thick basalt blocks.</i>
      <br></br>
      <i style={{fontSize:"large"}}> The dog had died of canine distemper.[21] Earlier remains dating back to 30,000 years ago have been described as Paleolithic dogs, but their status as dogs or wolves remains debated[22] because considerable morphological diversity existed among wolves during the Late Pleistocene.[1]

This timing indicates that the dog was the first species to be domesticated[9][8] in the time of hunter–gatherers,[7] which predates agriculture.[1] DNA sequences show that all ancient and modern dogs share a common ancestry and descended from an ancient, extinct wolf population which was distinct from the modern wolf lineage.[6][7]

The dog is a classic example of a domestic animal that likely travelled a commensal pathway into domestication.[22][23] The questions of when and where dogs were first domesticated have taxed geneticists and archaeologists for decades.
[9] Genetic studies suggest a domestication process commencing over 25,000 years ago, in one or several wolf populations in either Europe, the high Arctic, or eastern Asia.[10] In 2021, 
a literature review of the current evidence infers that the dog was domesticated in Siberia 23,000 years ago by ancient North Siberians, then later dispersed eastward into the Americas and
 westward across Eurasia.</i>
 <br/>
 <br></br>
 <center>
 <img src="https://images.pexels.com/photos/1198802/pexels-photo-1198802.jpeg"  style={{width:500},{height:500}}></img>
 </center>
 
      
     
      
    </div>
    </>
  );
}

export default Home
