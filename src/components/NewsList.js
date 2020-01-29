import React, {Component, Fragment} from 'react';
import NewsItem from './NewsItem';
const NewsList =  (props) => {
    let news = null;
    if (props.news.length == 0){
        return <h5>loading</h5>;
    } else if (props.searchedTitle !== ''){
        const newsItems = props.news.filter(news => news.title.includes(props.searchedTitle))
        news = newsItems.map(news => {
            return (
                <NewsItem key={news.id} title={news.title} url={news.url}/>
            )
        })
    } else {
         news = props.news.map(news => {
            return (
                <NewsItem key={news.id} title={news.title} url={news.url}/>
            )
        })
    }
    return (
        <Fragment> 
            <table align="center" className="table">{news}</table>
            
            </Fragment>
    )
}
export default NewsList;