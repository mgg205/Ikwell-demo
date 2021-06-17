import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getMediaQuery } from '../queries/queries';

// components

class MediaList extends Component {
    constructor(props){
        super(props);
        this.state = {
            selected: null
        }
    }
    displayMedias(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
            debugger;
            return data.mediaslist.map(book => {
                return(
                    <div className="book-list">
                           <h2>{ book.id }</h2>
                    <h2>{ book.title }</h2>
                    <p>{ book.description }</p>
                    <p>{ book.image }</p>
                                    
                </div>
                   // <li key={ book.id } onClick={ (e) => this.setState({ selected: book.id }) }>{ book.title }</li>
                );
            })
        }
    }
    render(){
        return(
            <div>
                <ul id="book-list">
                    { this.displayMedias() }
                </ul>
             
            </div>
        );
    }
}

export default graphql(getMediaQuery)(MediaList);
