import React, { Component } from 'react';
import './HomeComponent.css';
import {Link} from 'react-router-dom';
import BookComponent from './BookComponent.jsx';

export default class HomeComponent extends Component {
    constructor(props){
        super(props);
        this.addToLikedList=(book)=>this.props.addToLikedList(book);
        this.addToDislikedList=(book)=>this.props.addToDislikedList(book);
        this.addToReadingList=(book)=>this.props.addToReadingList(book);
        this.deleteBook=(book)=>this.props.deleteBook(book);
        this.updateBooksList=(booksList)=>this.props.updateBooksList(booksList);
    }

    render() {
        return (
            <div>
                <React.Fragment>
                <Link to="/search"><button className="btn">Search Book</button></Link>
          <h1>Liked Books</h1>
            <div className="books">
               {(this.props.likesList)&&this.props.likesList.map((book)=>{
                  return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                }
            </div>
            <h1>DisLiked Books</h1>
            <div className="books">
               {(this.props.dislikesList)&&this.props.dislikesList.map((book)=>{
                  return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                }
            </div>
            <h1>Reading Books</h1>
            <div className="books">
               {(this.props.readList)&&this.props.readList.map((book)=>{
                  return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                }
            </div>
            <h1>All books</h1>
            <div className="books">
               {(this.props.booksList)&&this.props.booksList.map((book)=>{
                  return  <BookComponent book={book} key={book.id} addToLikedList={(book)=>this.addToLikedList(book)} addToDislikedList={(book)=>this.addToDislikedList(book)} addToReadingList={(book)=>this.addToReadingList(book)} deleteBook={(book)=>this.deleteBook(book)}/>})
                }
            </div>
            </React.Fragment>
            </div>
        );
    }

}
