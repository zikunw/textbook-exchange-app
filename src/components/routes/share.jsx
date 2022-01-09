/*
 * This page is for users to see the currently avaliable books on the website.
 * This page will only show limited book informations, the detailed information
 * will be displayed on each books' individual pages.
 * 
 * This page needs:
 * - A search box
 * - A filter side bar
 * - display of books (with hyperlinks to each books' detail information)
 * 
 */
import BookCardContainer from "../book-card-container";
import ShareFilterBar from "../share-filter-bar";
import './share.css';

export default function Share(){
  return(
    <div className="share-container">
      <nav className="share-side-bar">
        <ShareFilterBar />
      </nav>
      <div className="share-content">
        <form className="search-bar-container">
          <input type='text' className="share-search-bar" placeholder="Search your textbook here"></input>
        </form>
        <BookCardContainer />
      </div>
    </div>
  )
}