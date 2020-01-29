import React, {Component} from 'react';


class MusicBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsIds: [],
            news: [],
            searchedTitle: ''
        }
    }
    render(){
        return(
            <h1>MusicBox</h1>
        )
    }

}

export default MusicBox;
