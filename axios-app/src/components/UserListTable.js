import React from 'react';
import { useTable } from 'react-table';
import '../styles/styles.css';

const UserListTable = ()=>{
    
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

    const data = React.useMemo(()=>users,[]);
    const columns = React.useMemo(()=>[
            {Header: 'Clave', accessor: 'id'},
            {Header: 'Usuario', accessor: 'name'},
            {Header: 'Correo', accessor: 'email'}
        ],[]);
    const {getTableProps, getTableBodyProps, headerGroups, rows, 
        prepareRow} = 
        useTable({columns,data});

    return (
        <table {...getTableProps()} className="data-table">
            <thead>
                {headerGroups.map(hg => (
                    <tr {...hg.getHeaderGroupProps()}>
                        {hg.headers.map(col=>(
                            <th {...col.getHeaderProps()}>
                                {col.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map( r => {
                    prepareRow(r);
                    return(
                        <tr {...r.getRowProps()}>
                            {r.cells.map(celda =>(
                            <td {...celda.getCellProps()}>
                                {celda.render('Cell')}
                            </td>
                        ))}
                    </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
export default UserListTable;
