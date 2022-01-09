import './share-filter-bar.css'

export default function ShareFilterBar() {
  return (
    <>
      <div className='sidebar-container'>
        <h3 className='sidebar-title'>Filters</h3>
      </div>

      <div className='sidebar-container downward-shadow'>
        <h3 className='sidebar-title'>Subject</h3>
      </div>

      <div className='sidebar-container input-grid'>
        <p className='form-label'>Colleges</p>
        <p className='checkbox-element'>CAS</p>
        <p className='checkbox-element'>CGS</p>
        <p className='checkbox-element'>COM</p>
        <p className='checkbox-element'>QST</p>
        <p className='checkbox-element'>ENG</p>
        <p className='checkbox-element'>CFA</p>
        <p className='checkbox-element checkbox-element-other'>Other</p>
        <p className='form-label'>Classname</p>
        <input type='text' placeholder='CS112' className='side-bar-search'></input>
      </div>

      <div className='sidebar-container downward-shadow'>
        <h3 className='sidebar-title'>Condition</h3>
      </div>

      <div className='sidebar-container input-grid'>
        <p className='checkbox-element'>New</p>
        <p className='checkbox-element'>Half New</p>
        <p className='checkbox-element'>Used</p>
        <p className='checkbox-element'>Scratched</p>
        <p className='checkbox-element'>Damaged</p>
      </div>
    </>
  )
}