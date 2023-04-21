import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";
import ReacipeIndex from "./RecipeIndex";

const Meal = () => {
    const [show,setShow]=useState(false);
    const [item,setItem]=useState("");
    const [url,setUrl]=useState("https://www.themealdb.com/api/json/v1/1/search.php?f=a");
   
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=> {
            setItem(data.meals);
            setShow(true);
        })
     },[url])

     
    const setIndex=(alpha)=>{
        setUrl(`https://www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    }
return (
    <>
        <div>
                 <div className="contenedor">
                {
                    show ?<MealItem data={item} /> :"Not Found"
                
                }
                </div>
                
                <div className="indexContainer">
                    <ReacipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
                </div>
       
                </div>
               
    </>
)
}
export default Meal;