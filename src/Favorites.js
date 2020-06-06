import React from 'react'


const Favorites = (props) => {
 
    return(
      <div className={props.jobFilter.length >0 ? "favorites-Container" : null } >
         {props.jobFilter
         .map((element) => {
         return(
           <div className='tags-and-close' 
              style={{
              display: 'flex',
              flexDirection:'row'
         }}>
              <div className={'language-buttons'}
              >{element}</div>
              <i style={{padding:'5px', 
                        background:'red',
                        borderRadius:'3px',
                      }}
              onClick={() => props.removeFilter(element)}><b>X</b></i>
           </div>)
         
         })}
     </div>
   );
}

export default Favorites;