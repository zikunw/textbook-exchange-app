/*
 * This page is for users to see the currently avaliable books on the website.
 * This page will only show limited book informations, the detailed information
 * will be displayed on each books' individual pages.
 * 
 * This page needs:
 * - A search box
 * - A filter bar
 * - display of books (with hyperlinks to each books' detail information)
 * 
 */
import BookCardContainer from "../book-card-container";

export default function Share(){
  return(
    <div>
      <h1>This is the book sharing page where you suppose to see all the books avaliable (TODO)</h1>
      <BookCardContainer />
    </div>
  )
}