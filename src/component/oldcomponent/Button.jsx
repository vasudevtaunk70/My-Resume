import { useState } from "react";
export default function Button(){
    const[test , settest] = useState('Nitin')
    return(
        <div><h1>{test}</h1><button onClick={()=>{test == 'Nitin' ? settest("Vasu") : settest("Nitin")}}>Change Name</button></div>
    )
}