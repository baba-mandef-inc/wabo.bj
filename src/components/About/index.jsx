export default function About() {
  return (
    <>
      <>
        {/*====== Start About Section ======*/}
        <section className="about-section pt-100 pb-50">
          <div className="container">
            <div className="row align-items-xl-center">
              <div className="col-lg-6">
                {/*=== About Content Box ===*/}
                <div className="about-two_content-box mb-35 wow fadeInLeft">
                  <div className="section-title mb-30">
                    <span className="sub-title">A Propos</span>
                    <h2>Nous vous offrons une aventure unique.</h2>
                  </div>
                  <p>
                    Wabo, une agence de tourisme, vise à encourager le tourisme
                    local en révélant toute la richesse du Bénin. Notre mission
                    consiste à vous faire explorer l'intégralité du pays à
                    travers un itinéraire soigneusement conçu. Nous vous offrons des
                    concepts uniques pour enrichir votre aventure.
                  </p>
                  <div className="card-list">
                    <div className="card-item">
                      <i className="fas fa-badge-check" />
                      Camping
                    </div>
                    <div className="card-item">
                      <i className="fas fa-badge-check" />
                    Pêche
                    </div>
                    <div className="card-item">
                      <i className="fas fa-badge-check" />
                      Randonnée
                    </div>
                    <div className="card-item">
                      <i className="fas fa-badge-check" />
                     Art culinaire
                    </div>
                    <div className="card-item">
                      <i className="fas fa-badge-check" />
                    Safari
                    </div>
                    <div className="card-item">
                      <i className="fas fa-badge-check" />
                      chasse aux trésors
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== About Image Box ===*/}
                <div className="about-one_image-box mb-50 wow fadeInRight">
                  <img
                    src="assets/images/about/about-1.jpg"
                    className="radius-top-left-right-288"
                    alt="About image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*====== End About Section ======*/}
      </>
    </>
  );
}
