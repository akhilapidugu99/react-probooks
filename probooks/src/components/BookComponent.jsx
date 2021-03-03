import React, { Component } from "react";
import Select from "react-select";
import './BookComponent.css';

class BookComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            options:[
            {label:"Read" ,value:"Read"},
            {label:"Like" ,value:"Like"},
            {label:"DisLike" ,value:"DisLike"},
            {label:"Delete" ,value:"Delete"}
        ]
        }
    }
    onOptionsChange=(selectedOption)=>{
        let value=selectedOption.value;
        if(value==="Like"){
            this.props.addToLikedList(this.props.book);
        }
        else if(value==="Read"){
            this.props.addToReadingList(this.props.book);
        }
        else if(value==="DisLike"){
            this.props.addToDislikedList(this.props.book);
        }
        else {
            this.props.deleteBook(this.props.book);
        }
    }
    render() {
        return (
            <div className="book">
            <React.Fragment key={this.props.book.id}>
                <img src={this.props.book.imageLinks.smallThumbnail} alt={"Image"+this.props.book.title}/>
                <h4>{this.props.book.title}</h4>
                <div>
                <Select className="option" options={this.state.options} onChange={(value)=>this.onOptionsChange(value)}/>
                </div>
            </React.Fragment>
            </div>
        );
    }
}

export default BookComponent;