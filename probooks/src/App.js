import HomeComponent from './components/HomeComponent.jsx';
import React, { Component } from "react";
import SearchComponent from './components/SearchComponent';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import axios from 'axios';
import './App.css';
class App extends Component{
  constructor()
    {
        super();
        this.state={
            booksList:[],
            likesList:[],
            dislikesList:[],
            readList:[]
        }
    }
    componentDidMount=()=>{
      const api = "https://reactnd-books-api.udacity.com/books";
      let data;
      if (!data)
          data = localStorage.token = Math.random().toString(36).substr(-8)
      const headers = {
      'Accept': 'application/json',
      'Authorization': data
      };
      axios.get(api,{headers})
      .then((response)=>{
          this.setState({booksList:response.data.books})
      })
      .catch((error)=>console.log(error));
  }
  addToLikedList=(book)=>{
      this.state.likesList.push(book)
      let modifiedList=this.state.likesList;
      this.setState({
          likesList:modifiedList
      });
  }
  addToReadingList=(book)=>{
      this.state.readList.push(book)
      let modifiedList=this.state.readList;
      this.setState({
          readList:modifiedList
      })
  }
  addToDislikedList=(book)=>{
      this.state.dislikesList.push(book)
      let modifiedList=this.state.dislikesList;
      this.setState({
          dislikesList:modifiedList
      });
  }
  deleteBook=(book)=>{
      let bookId=book.id;
      let modifiedList=this.state.booksList.filter((book)=>(book.id!==bookId));
      let modifiedLikedList=this.state.likesList.filter((book)=>(book.id!==bookId));
      let modifiedDislikedList=this.state.dislikesList.filter((book)=>(book.id!==bookId));
      let modifiedReadingList=this.state.readList.filter((book)=>(book.id!==bookId));
      this.setState({
          booksList:modifiedList,
          likesList:modifiedLikedList,
          dislikesList:modifiedDislikedList,
          readList:modifiedReadingList
      });
  }
  updateBooksList=(booksList)=>{
      this.setState({booksList:booksList})
  }
  render()
  {
      console.log(this.state.booksList);
      return (
        <div className="App">
        <Router>
          <Switch>
                <Route exact path="/"><HomeComponent booksList={this.state.booksList} likesList={this.state.likesList} dislikesList={this.state.dislikesList} readList={this.state.readList} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)} updateBooksList={(booksList)=>this.updateBooksList(booksList)}/></Route>
                <Route path="/Search"><SearchComponent booksList={this.state.booksList} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/></Route>
                </Switch>
          </Router>
        </div>
      );
  }
}
export default App;
