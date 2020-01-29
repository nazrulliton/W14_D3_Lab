import React, {Component, Fragment} from 'react';
import NewsItem from './NewsItem';

const NewsList =  (props) => { 
    if (props.news.length == 0){
        return <h5>loading</h5>;
    } 
    const news = props.news.map(news => {
        return (
            <NewsItem key={news.id} title={news.title}/>

        )
    })
    return (
        <Fragment> {news}</Fragment>
       
    )
}


export default NewsList;



