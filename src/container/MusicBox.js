import React, {Component} from 'react';
import { promised } from 'q';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';


class MusicBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsIds: [],
            news: [],
            searchedTitle: ''
        }
        this.handleSearchType = this.handleSearchType.bind(this);
    }
    componentDidMount(){
        // const newsurl= this.state.newsIds.map(newsId => {

        //     return
        //     "https://hacker-news.firebaseio.com/v0/item/" + newsId + ".json"
        // })

        const idsurl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
        fetch(idsurl)
            .then(res => res.json())
            .then (ids => {
                const promises = ids.map(newsId => {
                    return fetch("https://hacker-news.firebaseio.com/v0/item/" + newsId + ".json")
                            .then(res => res.json());
                })
                Promise.all(promises)
                    .then(news => this.setState({news: news}))
            })
        .catch(err => console.log(err))
     
    }
    handleSearchType(text){
        this.setState({searchedTitle: text})
        
    }

    render(){
        return(
            <div>
            <SearchBar searchedby={this.handleSearchType}/>
            <NewsList news={this.state.news} />
            </div>
        )
    }

}

export default MusicBox;
