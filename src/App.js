import React from 'react'
import MyBooks from './MyBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books:[]
  }
	
  componentDidMount(){
    BooksAPI.getAll().then((allBooks)=>{
      
      this.setState(()=>({
        books:allBooks
      }))
    })
  }

  updateBookShelf = (book,shelf)=>{
    console.log(shelf)
    BooksAPI.update(book,shelf).then(()=>{
      BooksAPI.getAll().then((allBooks)=>{
      this.setState(()=>({
        books:allBooks
      }))
    })
    })
  };

  onSearch=(query)=>{
  	BooksAPI.search(query,50)
  };

  render() {
    return (
    <div  className="app">
     <Route path='/search-books' render={()=>(
         <SearchBooks books={this.state.books} updateBookShelf={this.updateBookShelf}/>
  	   )}></Route>
     <Route exact path='/' render={()=>(
         <MyBooks  books={this.state.books} updateBookShelf={this.updateBookShelf}/>
       )}></Route>

    </div>
    )
  }
}

export default BooksApp
