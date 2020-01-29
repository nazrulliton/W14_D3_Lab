import React, {Component} from 'react';

const NewsItem = (props) => {
    return (
        <div className="newsItem">
            <h5 >{props.title}</h5>
            <a href={props.url} target='_blank'>Click for link</a>


        </div>

    
    
    )
}







export default NewsItem;