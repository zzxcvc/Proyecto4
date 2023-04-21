import Carousel from 'react-bootstrap/Carousel';

function Hero() {
  return (
    <div className="container mt-3 mb-3">
      <div className='row'>
        <div className='col'>
          <Carousel variant="dark">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://img.freepik.com/foto-gratis/sabrosas-apetitosas-almejas-caseras-frescas-alle-vongole-pasta-mariscos-ajo-vino-blanco-plato-cerca_1220-5461.jpg?w=2000&t=st=1664331806~exp=1664332406~hmac=3f8e0798b5e1665de6053fbb42159b8304db4295d2746a931954e687f3b38b75"
                      alt="First slide"
                    />
                   </Carousel.Item>
                    <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://img.freepik.com/foto-gratis/placa-albahaca-cereza-menu-gourmet_1220-1184.jpg?w=2000&t=st=1664331764~exp=1664332364~hmac=3135e9253e9cc783d4d0502c2d078bdaee77d7c2c975eeea712cc15da4537c69"
                      alt="Second slide"
                    />
                    <Carousel.Caption>
                      <h3>Bienvenido a  La Cucina</h3>
                  </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="https://img.freepik.com/foto-gratis/chef-cortando-pizza-margarita-tradicional-clientes-cuchillo-especial_613910-14078.jpg?w=2000&t=st=1664332000~exp=1664332600~hmac=0bfd3892df62588a1b2cff25a10f964c339a86e120e46039ed44eeb22434c014"
                      alt="Third slide"
                    />
               </Carousel.Item>
                </Carousel>
  </div>

<div className='col-md-6'>
  <h1>La Cucina</h1>
  <p>La conexión entre dos mundos hace que nazca un proyecto ligado a ideales comunes entre la cultura italiana y la chilena, donde se comulga en un sentido, el gozar con la buena mesa y la bella arquitectura.</p>
  <p>Cocina tradicional italiana: Pastas, pizzas, postres y cocktelería generan la base del cálido ambiente de La Finestra, la ventana que se abre para conocer la mesa italiana, con tradición y estilo.</p>

</div>

</div >
<div className='m-5'>
<h2>El restaurant</h2>
<p>Tres salones que permiten un ambiente ideal para compartir y conocerse bajo la música que resalta la maravillosa labor de nuestro Chef y nuestro maestro pizzero.</p>  
<p>Además hay un bello rincón al aire libre, donde alrededor de las velas y hermosa vegetación se puede disfrutar al aire libre de un spritz, una exquisita tabla, una pizza o unas pastas.</p>
</div>


    </div>
    
  );
}

export default Hero;