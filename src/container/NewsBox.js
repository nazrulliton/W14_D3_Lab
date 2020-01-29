import React, {Component} from 'react';
import { promised } from 'q';
import NewsList from '../components/NewsList';
import SearchBar from '../components/SearchBar';



class NewsBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: [],
            searchedTitle: ''
        }
        this.handleSearchType = this.handleSearchType.bind(this);
    }
    handleSearchType(text) {
        this.setState({ searchedTitle: text })
    }
    componentDidMount(){
        // this.searchCountryByInput();
        const idsurl = 'https://hacker-news.firebaseio.com/v0/topstories.json';
        fetch(idsurl)
            .then(res => res.json())
            .then(ids => ids.slice(1, 20))
            .then (ids => {
                const promises = ids.map(newsId => {
                    return fetch("https://hacker-news.firebaseio.com/v0/item/"+ newsId + ".json")
                            .then(res => res.json());
                })
                Promise.all(promises)
                    .then(news => this.setState({news: news}))
            })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <div>
            <SearchBar filterNews={this.searchCountryByInput} searchedby={this.handleSearchType}/>
            <NewsList news={this.state.news} searchedTitle={this.state.searchedTitle}/>
            </div>
        )
    }
}
export default NewsBox;