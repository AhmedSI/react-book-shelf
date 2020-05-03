import React,{ Component } from 'react'
import PastBooks from './PastBooks'
import PresentBooks from './PresentBooks'
import FutureBooks from './FutureBooks'
import { Link } from 'react-router-dom'


class MyBooks extends Component {
  
  state = {
    
  }
    
  render() {
    return (
      <div  className="list-books">
       <div className="list-books-title">
			<h1>MyReads</h1>
		</div>
        <div className="list-books-content">
			<div>
              <PresentBooks books={this.props.books.filter((book)=>{
                  return book.shelf==="currentlyReading"
              })} updateBookShelf={this.props.updateBookShelf} />
              <FutureBooks books={this.props.books.filter((book)=>{
                return book.shelf==="wantToRead"
              })} updateBookShelf={this.props.updateBookShelf} />
              <PastBooks books={this.props.books.filter((book)=>{
                  return book.shelf==="read"
              })} updateBookShelf={this.props.updateBookShelf} />
			</div>
		</div>
		<div className="open-search">
			<Link to="/search-books">Add a book</Link>
		</div>
      </div>
    )
  }
}

export default MyBooks
