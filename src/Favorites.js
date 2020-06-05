import React from 'react'


const Favorites = ({jobFilter}) => {
    return(
      <div className={(jobFilter.length >0) ? "favorites-Container" : 'no-show'} >
         {jobFilter
         .map((element) => {
         return(
         <div className={'language-buttons'}>{element}</div>)
         })}
     </div>
   );
}

export default Favorites;