import React,{ Component } from 'react'

class FutureBooks extends Component {
  state = {
  }

  render() {
    return (
    	 <div className="bookshelf">
					<h2 className="bookshelf-title">Want to Read</h2>
					<div className="bookshelf-books">
						<ol className="books-grid">
							{
                              this.props.books.map((book)=>(
                                <li key={book.id}>
                                  <div className="book">
                                    <div className="book-top">
                                      <div className="book-cover" style={{width:128,height:192,backgroundImage:`url(${book.imageLinks.thumbnail})` }}></div>
                                      <div className="book-shelf-changer">
                                        <select onChange={(event)=>this.props.updateBookShelf(book,event.target.value)}>
                                          <option value="move" disabled>Move to...</option>
                                          <option value="" hidden></option>
                                          <option value="currentlyReading">Currently Reading</option>
                                          <option value="wantToRead" disabled>Want to Read</option>
                                          <option value="read">Read</option>
                                          <option value="none">None</option>
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

export default FutureBooks