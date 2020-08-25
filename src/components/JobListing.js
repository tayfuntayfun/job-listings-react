import React from 'react';

const JobListing = (props) => {

    return (
        <div className = 'job-listing'>
            <div className='company-logo'>
                <img src= {props.jobListing.logo}></img>
            </div>
            <div className='job-details'>
                <div className='job-details-company'>
                    <div className='job-company-name'>{props.jobListing.company}</div>
                    {props.jobListing.new  && 
                    <div className='label-new'>NEW!</div> }

                    {props.jobListing.featured  && 
                    <div className='label-featured'>FEATURED</div> }
                </div>
                <div className='job-details-position'>
                    <div>{props.jobListing.position} </div>
                </div>
                <div className='job-details-misc'>
                    <div>{props.jobListing.postedAt}</div>
                    <div>&bull;</div>
                    <div>{props.jobListing.contract}</div>
                    <div>&bull;</div>
                    <div>{props.jobListing.location}</div>
                </div>   
            </div>
            <div className='programming-languages'>
            <button className='language-buttons'
                    value={props.jobListing.role}
                    onClick={props.addFilter}
                    style={{cursor:'pointer'}}
                    >{props.jobListing.role}</button>
            <button className='language-buttons'
                    value={props.jobListing.level}
                    onClick={props.addFilter}
                    style={{cursor:'pointer'}}
                    
                    >{props.jobListing.level}</button>
            {   
                props.jobListing.languages.map((item , index) => 
                    <button key={index} className='language-buttons'
                            value={item}
                            onClick={props.addFilter}
                            style={{cursor:'pointer'}}
                            >
                         {item} 
                    </button>
                )
            }
            </div>
        </div>
    )
}
export default JobListing;