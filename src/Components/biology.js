import React from "react";
import "./MaterialCss/all.min.css";
import "./MaterialCss/bootstrap.min.css";
import "./MaterialCss/templatemo-video-catalog.css";
import video1 from "./MaterialCss/img/video1.jpg";
import chap3Chem from "./MaterialCss/img/chap3Chem.png";

export default function Biology() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Videos</title>
      <link rel="stylesheet" href="fontawesome/css/all.min.css" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="css/bootstrap.min.css" />
      <link rel="stylesheet" href="css/templatemo-video-catalog.css" />
      <div className="tm-page-wrap mx-auto">
        <div className="container-fluid">
          <div id="content" className="mx-auto tm-content-container">
            <main>
              <div className="row tm-catalog-item-list">
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src={video1}
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="https://youtu.be/JdnQyfzg1sg"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-4 tm-bg-gray tm-catalog-item-description">
                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
                      Title
                    </h3>
                    <p className="tm-catalog-item-text">
                      Main text
                      <span className="tm-text-secondary">
                        Just secondary text
                      </span>
                      Main Again.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src={video1}
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-4 tm-bg-gray tm-catalog-item-description">
                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
                      Mauris in odio vel odio
                    </h3>
                    <p className="tm-catalog-item-text">
                      Main
                      <span className="tm-text-secondary">
                        font-family: 'Source Sans Pro', sans-serif; for this
                        template.
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src={chap3Chem}
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="https://youtu.be/JdnQyfzg1sg"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-4 tm-bg-gray tm-catalog-item-description">
                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
                      Chap 3
                    </h3>
                    <p className="tm-catalog-item-text">Oxydation...</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src={video1}
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-4 tm-bg-gray tm-catalog-item-description">
                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
                      Nam tincidunt consectetur
                    </h3>
                    <p className="tm-catalog-item-text">
                      You can apply this template for your commercial CMS theme.
                      Nam sem leo, imperdiet non lacinia eget, volutpat ac
                      massa. Donec mattis in velit quis commodo. Cras nec rutrum
                      arcu.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src={video1}
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-4 tm-bg-gray tm-catalog-item-description">
                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
                      Praesent posuere rhoncus
                    </h3>
                    <p className="tm-catalog-item-text">
                      Duis vulputate nisl metus, eget dapibus nunc ultricies id.
                      Ut augue mauris, varius quis nulla non, sollicitudin
                      consectetur nisl. Donec eget arcu placerat, ullamcorper.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src={video1}
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-4 tm-bg-gray tm-catalog-item-description">
                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
                      Turpis massa aliquam
                    </h3>
                    <p className="tm-catalog-item-text">
                      Nunc neque risus, ultrices sed luctus at, iaculis at arcu.
                      Pellentesque rutrum velit nec sapien ullamcorper ultrices.
                      Vestibulum lectus risus, laoreet pretium ipsum
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src={video1}
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-4 tm-bg-gray tm-catalog-item-description">
                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
                      Class aptent taciti sociosqu
                    </h3>
                    <p className="tm-catalog-item-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus bibendum orci sit amet dignissim rhoncus.
                      Pellentesque pretium faucibus vestibulum.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src={video1}
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-4 tm-bg-gray tm-catalog-item-description">
                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
                      Donec ac nisl ul elit
                    </h3>
                    <p className="tm-catalog-item-text">
                      Suspendisse in odio congue, lobortis metus sed, venenatis
                      nisl. In dapibus et massa feugiat facilisis. Maecenas
                      venenatis aliquet nulla, a tincidunt erat suscipit eget.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 tm-catalog-item">
                  <div className="position-relative tm-thumbnail-container">
                    <img
                      src={video1}
                      alt="Image"
                      className="img-fluid tm-catalog-item-img"
                    />
                    <a
                      href="video-page.html"
                      className="position-absolute tm-img-overlay"
                    >
                      <i className="fas fa-play tm-overlay-icon" />
                    </a>
                  </div>
                  <div className="p-4 tm-bg-gray tm-catalog-item-description">
                    <h3 className="tm-text-primary mb-3 tm-catalog-item-title">
                      Sed mattis nisi erat
                    </h3>
                    <p className="tm-catalog-item-text">
                      Integer ultricies mi eu aliquet cursus. Nam sem leo,
                      imperdiet non lacinia eget, volutpat ac massa. Donec
                      mattis in velit quis commodo. Cras nec rutrum arcu.
                    </p>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
