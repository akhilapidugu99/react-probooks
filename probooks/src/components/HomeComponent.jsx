import React, { Component } from 'react';
import axios from 'axios'; 
import './HomeComponent.css';

export default class HomeComponent extends Component {
    constructor(){
        super();
        this.state={
            userInput: '',
            datas:[]
        }
    }

    handleChange = event=> {
        event.preventDefault();
        this.setState({userInput: event.target.value});
      }
    
      handleSubmit = event=> {
        event.preventDefault();
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+this.state.userInput)
        .then(res => {
            console.log(res);
            this.setState({datas:res.data.items});
            console.log(this.state.userInput);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <React.Fragment>
                <form action="/search">
            <input type="text" value={this.state.userInput} className="sesrch_text" onChange={this.handleChange} placeholder="Search Book" name="query" id="userText"/>
            <button type="submit" className="searchbtn" onClick={this.handleSubmit}><i>Search</i></button>
          </form>
                    <h2 >Reading</h2>
                    <div className="read">
                    {this.state.datas.length>0 &&
                    this.state.datas.map(items=>(
                        <span>
                        <img className="image" src={items.volumeInfo.imageLinks.thumbnail} alt={items.volumeInfo.title}/>
                        <p className="title">{items.volumeInfo.title}</p>
                        <p className="author">{items.volumeInfo.authors}</p>
                        </span>
                    ))}
                    </div>
                    <div><h2 >Like</h2></div>
                    <div><h2 >Dislike</h2></div>
                </React.Fragment>
            </div>
        );
    }
}
