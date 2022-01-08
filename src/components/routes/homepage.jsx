/*
 * This is the homepage.
 * I think this page only needs a big-ass title and a big-ass search bar.
 */

export default function Homepage(){
  return(
    <div className="homepage-container">
      <h3 className='homepage-introduction'>Welcome to Textbook Exchange! Start by searching a textbook you want ⬇</h3>
      <form className="homepage-search">
        <input type='text' className="homepage-search-bar"></input>
        <button className="homepage-search-submit-btn">Submit</button>
      </form>
    </div>
  )
}