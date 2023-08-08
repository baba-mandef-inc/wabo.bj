export default function Footer() {
  return (
    <>
      <footer className="main-footer black-bg pt-230">
        <div className="container">
          {/*=== Footer CTA ===*/}
          <div className="footer-cta pb-40">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Single CTA Item ===*/}
                <div className="single-cta-item pr-lg-60 mb-40 wow fadeInLeft">
                  <div className="icon">
                    <img src="assets/images/icon/support.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">
                      Besoin d'aide pour votre prochaine sortie ?
                    </h3>
                    <a href="#" className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== Single CTA Item ===*/}
                <div className="single-cta-item pl-lg-60 mb-40 wow fadeInRight">
                  <div className="icon">
                    <img src="assets/images/icon/travel.png" alt="Icon" />
                  </div>
                  <div className="content">
                    <h3 className="title">
                      Pret à découvrir le Bénin pendant vos vacances ?
                    </h3>
                    <a href="#" className="icon-btn">
                      <i className="fal fa-long-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Footer Widget ===*/}
          <div className="footer-widget-area pt-75 pb-30">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget about-company-widget mb-40 wow fadeInUp">
                  <h4 className="widget-title">A propos</h4>
                  <div className="footer-content">
                    <p>
                      Notre mission consiste à vous faire explorer l'intégralité
                      du pays à travers un itinéraire soigneusement conçu. Nous
                      vous offrons des concepts uniques pour enrichir votre
                      aventure.
                    </p>
                    <a href="#" className="footer-logo">
                      <img
                        width={"90"}
                        height={"90"}
                        src="assets/images/logo/logo-white.png"
                        alt="Site Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget service-nav-widget mb-40 pl-lg-70 wow fadeInDown">
                  <h4 className="widget-title">Nos services</h4>
                  <div className="footer-content">
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">Répertoire de guide touristique</a>
                      </li>
                      <li>
                        <a href="#">Sortie touristique</a>
                      </li>
                      <li>
                        <a href="#">Tourisme en réalité virtuelle</a>
                      </li>
                    </ul>
                    <ul className="footer-widget-nav">
                      <li>
                        <a href="#">Épargne touristique</a>
                      </li>
                      <li>
                        <a href="#">Boutique d'art</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                {/*=== Footer Widget ===*/}
                <div className="footer-widget footer-newsletter-widget mb-40 pl-lg-100 wow fadeInUp">
                  <h4 className="widget-title">Newsletter</h4>
                  <div className="footer-content">
                    <p>
                      Enregistrez vous à notre newsletter pour avoir
                      régulièrement de nos nouvelles
                    </p>
                    <form>
                      <div className="form_group">
                        <label>
                          <i className="far fa-paper-plane" />
                        </label>
                        <input
                          type="email"
                          className="form_control"
                          placeholder="Votre Adresse Email"
                          name="email"
                          required=""
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*=== Footer Copyright ===*/}
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-6">
                {/*=== Footer Text ===*/}
                <div className="footer-text">
                  <p>
                    Copyright © {new Date().getFullYear()}{" "}
                    <span style={{ color: "#F7921E" }}>Wabo</span>, Tout droits
                    réservés
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                {/*=== Footer Nav ===*/}
                <div className="footer-nav float-lg-end">
                  <ul>
                    <li>
                      <a href="#">Paramètres &amp; confidentialité</a>
                    </li>
                    <li>
                      <a href="#">Faqs</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
