import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Resena = () => {
    return(
        <div className='m-5'>
            <h1 className='text-center m-4'>¿Qué dicen sobre nosotros?</h1>
            <div className='m-5'>
            <CardGroup>
                    <Card className='m-1'>
                        <Card.Img variant="top" src="https://www.mundopsicologos.com/site/article/60606/50895/las-10-cualidades-de-una-persona-mas-valoradas-0_ai1.jpg" />
                        <Card.Body>
                        <Card.Title>- Verónica Leiva</Card.Title>
                        <Card.Text>
                        “Excelente comida buen servicio grato ambiente recomendable”
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <img src="https://www.talacantarestaurant.cl/wp-content/uploads/2019/09/stars.png" alt="" srcset="" />
                        </Card.Footer>
                    </Card>
                    <Card className='m-1'>
                        <Card.Img  variant="top"  src="https://idehpucp.pucp.edu.pe/wp-content/uploads/2014/11/IMG_5233.jpg" />
                        <Card.Body>
                        <Card.Title>- Isabel Opazo</Card.Title>
                        <Card.Text>
                        “Muy buena experiencia, todo exquisito y la atención maravillosa”
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <img src="https://www.talacantarestaurant.cl/wp-content/uploads/2019/09/stars.png" alt="" srcset="" />
                        </Card.Footer>
                    </Card>
                    <Card className='m-1'>
                        <Card.Img variant="top" src="https://solsarasua.com/wp-content/uploads/2019/02/retrato-feliz-joven-barbudo-gafas-pie-al-aire-libre_171337-14763.jpg" />
                        <Card.Body>
                        <Card.Title>- José Antonio Hurtado Baeza</Card.Title>
                        <Card.Text>
                        “Excelente comida buen servicio grato ambiente recomendable”
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <img src="https://www.talacantarestaurant.cl/wp-content/uploads/2019/09/stars.png" alt="" srcset="" />
                        </Card.Footer>
                    </Card>
                    <Card className='m-1'>
                        <Card.Img variant="top" src="https://sobrehistoria.com//wp-content/uploads/2021/08/dia-del-hombre-2021-cuando-es-se-celebra-istock.jpg" />
                        <Card.Body>
                        <Card.Title>- Carlos Rojas</Card.Title>
                        <Card.Text>
                        “Muy buen lugar. Buena atención y excelente comida. Recomendable”
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <img src="https://www.talacantarestaurant.cl/wp-content/uploads/2019/09/stars.png" alt="" srcset="" />
                        </Card.Footer>
                    </Card>
            </CardGroup>
            </div>
            
                
    </div>
    )
    }

    export default Resena