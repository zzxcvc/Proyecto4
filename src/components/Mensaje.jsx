import Button from 'react-bootstrap/Button';
import { db } from "../config/firebase"
import { doc, deleteDoc} from 'firebase/firestore'
import toast from 'react-hot-toast'


const Mensaje = (props) => {
   let datos = props.datos.data()
   const {name, email, mensaje} = datos
   const {mensajes, setMensajes} = props

   const eliminar = async () => {
            try{
                await deleteDoc(doc(db , 'mensajes', props.datos.id))

                let mensajesResultantes = mensajes.filter(mensaje=>mensaje.id!==props.datos.id)

                setMensajes(mensajesResultantes)
                toast.success('Mensaje eliminado')

            }catch (error) {
                toast.error('Ocurrió un problema')
            }
    
   }

    return(
    
      
                    <tr>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{mensaje}</td>
                        <td>
                        
                        <Button className='m-1' variant="danger" onClick={eliminar}>Eliminar</Button>
                        </td>
                        
                    </tr>

          
                   
              
            
        
    )
}

export default Mensaje