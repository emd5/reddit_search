import React from 'react';
import ReactDom from 'react-dom';
import SearchResultList from './reddit/search_result_list';


class App extends React.Component{
    render(){
        return(
            <React.Fragment>
            {/* Reddit specific components go here */}
                <SearchResultList></SearchResultList>
            </React.Fragment>
        )
    }
}

export default App