import React from 'react';
import ReactDom from 'react-dom'
import SearchForm from './search_form.js';
import superagent from 'superagent';

const API_URL='https://www.reddit.com/r/';


class SearchResultList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            subRedditName: null,
            subRedditPosts: null
        };

        this.subRedditSelect = this.subRedditSelect.bind(this);
    }

    componentDidUpdate(){
        console.log('Search status: ', this.state);
    }


    subRedditSelect(name, limit){
        superagent.get(`${API_URL}${name}.json?limit=${limit}`)
        .then( data => {
            let results = data;
            let subreds = results.body.data.children;
            let subRedditPosts = subreds.filter(child => child.data.stickied !== true);
            this.setState({noError: true});
            this.setState({ subRedditPosts, subRedditName:name });
        })
        .catch(console.error);
    }

    render() {
        return (
          <React.Fragment>
              <h1>Reddit Searcher</h1>
              <SearchForm subRedditSelect={this.subRedditSelect}/>
              {!this.state.subRedditPosts ?
                  <p>Search a sub reddit post</p> :
                  <section className="subreddit">
                      <h3>Subreddit: r/{this.state.subRedditName}</h3>
                      <ul>
                          {this.state.subRedditPosts.map((item, i) =>{
                          return(
                              <li key={i}>
                                  <a href={item.data.url}>{item.data.title}</a>
                              </li>
                          )
                          })}
                      </ul>
                  </section>
              }
          </React.Fragment>
        )
    }
}

export default SearchResultList;
