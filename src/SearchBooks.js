import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {
  state = {
    books:[],
    query:""
  }
  
  onSearch=(query)=>{
    this.setState({
        	books:[],
      		query:query
        },function(){ 
      		if(query!=="")
              BooksAPI.search(query,50).then((resultBooks)=>{
                this.
                //console.log(resultBooks)
                this.setState((prevState)=>({
                  books:resultBooks
                }))
              })
        })
  };

  render() {
    return (
    <div className="search-books">
		<div className="search-books-bar">
			<Link to="/" className="close-search" >Close</Link>
			<div className="search-books-input-wrapper">
				{/*
				NOTES: The search from BooksAPI is limited to a particular set of search terms.
				You can find these search terms here:
				https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

				However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
				you don't find a specific author or title. Every search is limited by search terms.
				*/}
				<input type="text" placeholder="Search by title or author" onChange={(event)=>this.onSearch(event.target.value)} />

			</div>
		</div>
		<div className="search-books-results">
			<ol className="books-grid">
    			{
                              this.state.books.map((book)=>(
                                <li key={book.id}>
                                  <div className="book">
                                    <div className="book-top">
                                      <div className="book-cover" style={{width:128,height:192,backgroundImage:`url(${book.imageLinks.thumbnail})` }}></div>
                                      <div className="book-shelf-changer">
                                        <select onChange={(event)=>{this.props.updateBookShelf(book,event.target.value);this.onSearch(this.state.query);}}>
                                          <option value="move" disabled>Move to...</option>
                                          <option value="" hidden></option>
                                          <option value="currentlyReading" disabled={book.shelf==="currentlyReading"?true:false}>Currently Reading</option>
                                          <option value="wantToRead" disabled={book.shelf==="wantToRead"?true:false}>Want to Read</option>
                                          <option value="read" disabled={book.shelf==="read"?true:false}>Read</option>
                                          <option value="none"  disabled={book.shelf==="none"?true:false}>None</option>
                                        </select>
                                      </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">
                                      {book.authors.map((author,index)=>(
                                        <span className='badge badge-info' key={index}>{index===0?"":" & "}{author}</span>
                                      ))}
                                    </div>
                                  </div>
                                </li>
                              ))
                          }
    		</ol>
		</div>
	</div>
    )
  }
}

export default SearchBooks
