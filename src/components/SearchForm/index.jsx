export default function SearchForm(){
    return(
        <>
  {/*====== Search From ======*/}
  <div className="modal fade search-modal" id="search-modal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <form>
          <div className="form_group">
            <input
              type="search"
              className="form_control"
              placeholder="Search here"
              name="search"
            />
            <label>
              <i className="fa fa-search" />
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/*====== Search From ======*/}
</>

    )
}