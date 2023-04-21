import React from "react"
import { db } from "../config/firebase"
import { getDocs, collection } from 'firebase/firestore'
import { useEffect, useState } from "react"
import Mensaje from "../components/Mensaje"
import toast, { Toaster } from 'react-hot-toast'
import Footer from "../components/Footer"
import Table from 'react-bootstrap/Table';
import  Skeleton  from  'react-loading-skeleton' 
import  'react-loading-skeleton/dist/skeleton.css'
import  { SkeletonTheme } from 'react-loading-skeleton'


const Mensajes = () => {
    const [mensajes, setMensajes] = useState([])
    const [loading, setLoading] = useState(true)
    
    const obtenerMensajes = async () => {
        try{
            let response = await getDocs(collection(db, 'mensajes'))
            setMensajes(response.docs)

        } catch (error) {
            toast.error('Ocurrió un problema')

        }
        setLoading(false)
        

    }

    useEffect(() => {
        obtenerMensajes()
    },[])

    return(
        <div>
                <div className="container mt-3 mb-3 mensaje">
                     <Toaster />

                            <h1 className="text-center">Tareas</h1>
                      <Table striped bordered hover>
                            <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Correo</th>
                                        <th>Mensaje</th>
                                        <th>Acciones</th>
                                    </tr>
                            </thead>
                            <tbody> 
                                {loading === true ?  
                                <SkeletonTheme baseColor="#202020" highlightColor="#F2F2F2">  
                                <tr>
                                <td><Skeleton /></td>
                                <td><Skeleton /></td>
                                <td><Skeleton /></td>
                                <td><Skeleton /></td>
                                </tr> 
                                <tr>
                                <td><Skeleton /></td>
                                <td><Skeleton /></td>
                                <td><Skeleton /></td>
                                <td><Skeleton /></td>
                                </tr>     
                                
                                </SkeletonTheme> 
                               
                                : null}
                                         
                                            {mensajes.map(mensaje => <Mensaje key={ mensaje.id}  datos={mensaje} mensajes={mensajes} setMensajes={setMensajes} 
                                            />)}
                            </tbody>
                                                
                    </Table>   
                </div>
                    
            
            <Footer />
        </div>
        
    )
}

export default Mensajes