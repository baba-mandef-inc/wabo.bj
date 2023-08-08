import Slider from "react-slick";

export default function HomeHero(options) {
  const settings = {
    dots: false,
    infinite: true,

    speed: 400,
  
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
    

  
  };
  return (
    <>
      {/*====== Start Hero Section ======*/}
      <section className="hero-section">
        {/*=== Hero Wrapper ===*/}
        <div className="hero-wrapper-two">
          {/*=== Hero Slider ===*/}
          <div className="hero-slider-two">

            <Slider {...settings}>

              {/*=== Single Slider ===*/}
              <div className="single-slider">
                <div
                  className="image-layer bg_cover"
                  style={{
                    backgroundImage:
                      "url(assets/images/hero/hero-two_img-1.jpg)",
                      
                  }}
                />
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-xl-9">
                      {/*=== Hero Content ===*/}
                      <div className="hero-content text-white text-center">
                        <span className="ribbon">Wabo Art  & Tourisme</span>
                        <h1 data-animation="fadeInDown" data-delay=".4s">
                        L'art et le tourisme à votre portée
                        </h1>
                        <div
                          className="hero-button"
                          data-animation="fadeInRight"
                          data-delay=".6s"
                        >
                          <a href="about.html" className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*=== Single Slider ===*/}
              <div className="single-slider">
                <div
                  className="image-layer bg_cover"
                  style={{
                    backgroundImage:
                      "url(assets/images/hero/hero-two_img-2.jpg)",
                      
                  }}
                />
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-xl-9">
                      {/*=== Hero Content ===*/}
                      <div className="hero-content text-white text-center">
                        <span className="ribbon">Wabo Art  & Tourisme</span>
                        <h1 data-animation="fadeInDown" data-delay=".4s">
                        A la découverte du Bénin
                        </h1>
                        <div
                          className="hero-button"
                          data-animation="fadeInRight"
                          data-delay=".6s"
                        >
                          <a href="about.html" className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*=== Single Slider ===*/}
              <div className="single-slider">
                <div
                  className="image-layer bg_cover"
                  style={{
                    backgroundImage:
                      "url(assets/images/hero/hero-two_img-3.jpg)",
                      
                  }}
                />
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-xl-9">
                      {/*=== Hero Content ===*/}
                      <div className="hero-content text-white text-center">
                        <span className="ribbon">Wabo Art  & Tourisme</span>
                        <h1 data-animation="fadeInDown" data-delay=".4s">
                        Voyagez au cœur de l'authenticité béninoise
                        </h1>
                        <div
                          className="hero-button"
                          data-animation="fadeInRight"
                          data-delay=".6s"
                        >
                          <a href="about.html" className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*=== Single Slider ===*/}
              <div className="single-slider">
                <div
                  className="image-layer bg_cover"
                  style={{
                    backgroundImage:
                      "url(assets/images/hero/hero-two_img-4.jpg)",
                      
                  }}
                />
                <div className="container-fluid">
                  <div className="row justify-content-center">
                    <div className="col-xl-9">
                      {/*=== Hero Content ===*/}
                      <div className="hero-content text-white text-center">
                        <span className="ribbon">Wabo Art  & Tourisme</span>
                        <h1 data-animation="fadeInDown" data-delay=".4s">
                        Éveillez vos sens à la beauté de la culture
                        </h1>
                        <div
                          className="hero-button"
                          data-animation="fadeInRight"
                          data-delay=".6s"
                        >
                          <a href="about.html" className="main-btn primary-btn">
                            Explore More
                            <i className="fas fa-paper-plane" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </Slider>

          </div>
        </div>
      </section>
      {/*====== End Hero Section ======*/}
    </>
  );
}
