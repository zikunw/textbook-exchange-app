/*
 * This is the homepage.
 * I think this page only needs a big-ass title and a big-ass search bar.
 */
import './homepage.css';

export default function Homepage(){
  return(
    <div className="homepage-container">
      <h3 className='homepage-introduction'>Welcome to Textbook Exchange!<br></br>Start by searching a textbook or class of your choice ⬇</h3>
      <form className="homepage-search">
        <input type='text' className="homepage-search-bar"></input>
        <button className="homepage-search-submit-btn">Submit</button>
      </form>
    </div>
  )
}