export default function Header() {
  return (
    <>
      <header className="header-area header-one transparent-header">
        {/*====== Header Navigation ======*/}
        <div className="header-navigation navigation-white">
          <div className="nav-overlay" />
          <div className="container-fluid">
            <div className="primary-menu">
              {/*====== Site Branding ======*/}
              <div className="site-branding">
                <a href="index-2.html" className="brand-logo">
                  <img
                    src="assets/images/logo/logo-white.png"
                    alt="Site Logo"
                  />
                </a>
              </div>
              {/*====== Nav Menu ======*/}
              <div className="nav-menu">
                {/*====== Site Branding ======*/}
                <div className="mobile-logo mb-30 d-block d-xl-none">
                  <a href="index-2.html" className="brand-logo">
                    <img
                      src="assets/images/logo/logo-black.png"
                      alt="Site Logo"
                    />
                  </a>
                </div>
                {/*=== Nav Search ===*/}
                <div className="nav-search mb-30 d-block d-xl-none ">
                  <form>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Search Here"
                        name="email"
                        required=""
                      />
                      <button className="search-btn">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
                {/*====== main Menu ======*/}
                <nav className="main-menu">
                  <ul>
                    <li className="menu-item has-children">
                      <a href="#">Home</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index-2.html">Home 01</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home 02</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home 03</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home 04</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Tours</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="tour.html">Tours</a>
                        </li>
                        <li>
                          <a href="tour-details.html">Tours Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Destination</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="destination.html">Destination</a>
                        </li>
                        <li>
                          <a href="destination-details.html">
                            Destination Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Blog</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item has-children">
                      <a href="#">Pages</a>
                      <ul className="sub-menu">
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="gallery.html">Our Gallery</a>
                        </li>
                        <li>
                          <a href="events.html">Our Events</a>
                        </li>
                        <li>
                          <a href="shop.html">Our Shop</a>
                        </li>
                        <li>
                          <a href="product-details.html">Product Details</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item search-item">
                      <div
                        className="search-btn"
                        data-bs-toggle="modal"
                        data-bs-target="#search-modal"
                      >
                        <i className="far fa-search" />
                      </div>
                    </li>
                  </ul>
                </nav>
                {/*====== Menu Button ======*/}
                <div className="menu-button mt-40 d-xl-none">
                  <a href="contact.html" className="main-btn secondary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </a>
                </div>
              </div>
              {/*====== Nav Right Item ======*/}
              <div className="nav-right-item">
                <div className="menu-button d-xl-block d-none">
                  <a href="contact.html" className="main-btn primary-btn">
                    Book Now
                    <i className="fas fa-paper-plane" />
                  </a>
                </div>
                <div className="navbar-toggler">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/*====== End Area ======*/}
    </>
  );
}
