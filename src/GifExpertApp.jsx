import { useState } from "react";
import {AddCategory} from '/src/components/AddCategory';
import { GifGrid } from "./components/GifGrid";
export const GifExpertApp = () => { 
    //para mantener el estado se utilizan Hooks
    const [categories, setCategories] = useState(['Rick and Morty','Fight Club','Steven Universe']);
    

    const onAddCategory = (newCategory) => {
        
        if(categories.includes(newCategory ) ) return;
        setCategories([newCategory,...categories]);
    }

    return(
        <>
       
            <h1>GoodGiffsOnly</h1>
     
        <AddCategory 
            onNewCategory={event => onAddCategory(event)}
        />
        {/*listado de gif */}        
        
       
       

            {
            
            categories.map((category) =>(
            <GifGrid key={category} 
            category={category}/>
            ))

            }
            
        
        </>

    )
}
