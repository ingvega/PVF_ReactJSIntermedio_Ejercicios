import React,{useState,useEffect} from 'react';
import API from '../services/API';
import '../styles/styles.css'

const UserList = ()=>{
    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        //Obtener los usuarios
        const fetchUsers = async()=>{
            try{
                const response = await API.get('/users');
                setUsers(response.data);
            }catch(e){
                setError('Error al obtener los datos');
            }finally{
                setLoading(false);
            }
        };
        fetchUsers();
    },[]);

    if(loading) return <div className='loading-message'>
        <strong>vvv</strong>
        <span>Cargando...{loading}</span>
            <p>Otro parrafo</p>
        </div>
    if(error) return <p className='error-message'>{error}</p>
    return (
        <div className='user-list'>
            {/* <h2>Lista de usuarios</h2> */}
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        <p><strong>Nombre: </strong>{user.name}</p>
                        <p><strong>Correo: </strong>{user.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;