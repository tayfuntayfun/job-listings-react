import React from 'react'


const Favorites = (props) => {
 
    return(
      <div className={props.jobFilter.length >0 ? "favorites-Container" : 'no-show'} >
         {props.jobFilter
         .map((element) => {
         return(
         <div className={'language-buttons'}
              onClick={() => props.removeFilter(element)}>{element}</div>)
         })}
     </div>
   );
}

export default Favorites;