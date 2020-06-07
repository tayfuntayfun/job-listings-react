import React from 'react'
// import Image from './x-button.svg'


const Favorites = (props) => {
 
    return(
      <div className={props.jobFilter.length > 0 ? "favorites-Container" : null } >
        <div style={{
              display: 'flex',
              flexDirection:'row'
         }}>
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
              <span className='x-remove'
                    onClick={() => props.removeFilter(element)}>{'\u274C'}</span>
           </div>
           )
         })}
        </div>
         
          <div className={props.jobFilter.length > 0 ? "favorites-Container-Clearer" : null }
            onClick={() => props.setJobFilter([])}>{props.jobFilter.length > 0 ? "Clear Favorites" : null }
          </div>
     </div>
   );
}

export default Favorites;