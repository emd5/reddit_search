import React from 'react';
import ReactDom from 'react-dom'
import SearchForm from './search_form';
import superagent from 'superagent';

const API_URL='https://www.reddit.com/r/';

class SearchResultList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redditLookup: {},
            redditSelected: null,
        };

        this.redditSelect = this.redditSelect.bind(this);
    }

    componentDidUpdate(){
        console.log('Search status: ', this.state);
    }

    componentDidMount(){

    }

    redditSelect(name){

    }

    render(){
        return(
            <React.Fragment>

            </React.Fragment>
        )
    }
}

export default SearchResultList
