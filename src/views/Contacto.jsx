import Footer  from '../components/Footer';
import Input from '../components/Input';
import { useState} from 'react'
import { db } from '../config/firebase'
import { collection, addDoc } from 'firebase/firestore'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';



const Contacto = () => {
const [nuevoMensaje, setNuevoMensaje] = useState({})
const [saving, setSaving] = useState(false)

const handleInput = (e) => {
    setNuevoMensaje({
        ...nuevoMensaje,
        [e.target.name]: e.target.value
        
    })
    
}

const guardarMensaje = async (e) => {
   try{
    e.preventDefault()
    setSaving(true)
    await addDoc(collection(db, 'mensajes'),nuevoMensaje)
    setSaving(false)
    toast.success('Mensaje enviado correctamente!')
    
   }catch(error){
    toast.error("Hubo un problema. Intente más tarde")

   }
}

    return(
        <div>
                <div className="container mt-3 mb-3">
                    <h1>Contacto</h1>
                    <Toaster />
                        <Form>
                        <label className="mt-2">Nombre</label>
                        <Input 
                        id='name'
                        type='text'
                        handleInput={(e)=>handleInput(e)}
                        />
                        <label className="mt-2" >Email</label>
                        <Input 
                        id='email'
                        type='email'
                        handleInput={(e)=>handleInput(e)}
                        />
                        <label htmlFor="mensaje" className="mt-2" >Mensaje o comentario</label>
                        <Form.Control as="textarea" rows={5} name="mensaje" id="mensaje" onChange={(e)=>handleInput(e)}/>
                        
                        <Button className="mt-3" variant="primary" size="lg" onClick={(e)=>guardarMensaje(e)} disabled={saving} >
                        Enviar mensaje
                        </Button>
                        </Form>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
}

export default Contacto

