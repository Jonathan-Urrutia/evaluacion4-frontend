import React from 'react';

const ListaProductos = (props) => {
  return (
    <div>
        <div className='container'>
            <table className='mt-4 table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Total con descuento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.productos.length > 0 ? 
                            props.productos.map((producto) => (
                                <tr key={producto.codigo}>
                                    <td>{producto.codigo}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.cantidad}</td>
                                    <td>{producto.total}</td>
                                    <td>{producto.totalDescuento}</td>
                                </tr>)
                            ) :
                                (<tr>
                                    <td colSpan="7">No se encontraron registros</td>
                                </tr>)

                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ListaProductos;
















