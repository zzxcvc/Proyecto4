import MapView from './MapView'

const Footer = () => 

<footer className="page-footer font-small blue pt-4 bg-dark text-muted" >
  <MapView />
    <div className="container text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
            <img
              alt=""
              src="https://osinskiltd.com/wp-content/uploads/2022/08/1464899714.png"
              width="140"
              height="40"
              className="d-inline-block align-top"
            />
            <p>La Cucina se enorgullece de ofrecer todas las comodidades necesarias para el comensal moderno de hoy.</p>
               
            </div>
                <div className="col-md-6 mb-md-0 mb-3">
                <h5 >Visítanos en:</h5>
                <ul className="list-unstyled ">
                    <img
              alt=""
              src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png"
              width="40"
              height="40"
              className="d-inline-block align-top p-1"
            />
                    <img
              alt=""
              src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_twitter-1024.png"
              width="40"
              height="40"
              className="d-inline-block align-top p-1"
            />
                <img
              alt=""
              src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_instagram-1024.png"
              width="40"
              height="40"
              className="d-inline-block align-top p-1"
            />                   
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2022 Copyright, Todos los derechos reservados.
        Esta es una aplicación ficticia para fines académicos.
</div>

</footer>

export default Footer