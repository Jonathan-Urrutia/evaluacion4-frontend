import React, { useState } from 'react';
import ListaProductos from './ListaProductos';

const Formulario = () => {
    const [totalProductos, setTotalProductos] = useState([]);
    const agregarProducto = (e) => {
        e.preventDefault();
        const codigo = e.target.codigo.value;
        const nombre = e.target.nombre.value;
        const descripcion = e.target.descripcion.value;
        const precio = e.target.precio.value;
        const cantidad = e.target.cantidad.value;
        const total = precio * cantidad;
       
        if (codigo.trim().length === 0) {        
            return alert("El código no puede quedar vacío");
        }

        if (nombre.trim().length === 0) {        
            return alert("El nombre no puede quedar vacío");
        }

        if (descripcion.trim().length === 0) {        
            return alert("La descripción no puede quedar vacía");
        }

        if (precio === 0 || precio < 1  || isNaN(precio)  ) {        
            return alert("El precio no puede ser 0 ni ser menor a 1");
        } 

        if (cantidad === 0 || cantidad < 1 || isNaN(cantidad)) {        
            return alert("La cantidad no puede ser 0 ni ser menor a 1");
        } 

        const producto = {
            codigo,
            nombre,
            descripcion,
            precio,
            cantidad,
            total,
            totalDescuento: Math.round(total * 0.90)    
        };

        setTotalProductos([...totalProductos, producto]);
        e.target.codigo.value = ''; 
        e.target.nombre.value = ''; 
        e.target.descripcion.value = '';
        e.target.precio.value = '';
        e.target.cantidad.value = '';

    }

  return (
    <div>
        <div className='container'>
            <form className='mt-5' onSubmit={agregarProducto}>
                <div className="mb-3 row">
                    <div className="col-md-4 col-sm-12">
                        <label className="form-label">Código</label>
                        <input 
                            type="text" 
                            name="codigo"
                            placeholder="Ingrese código del producto" 
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label className="form-label">Nombre del Producto</label>
                        <input 
                            type="text" 
                            name="nombre"
                            placeholder="Ingrese nombre del producto" 
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label className="form-label">Descripción</label>
                        <input 
                            type="text" 
                            name="descripcion"
                            placeholder="Ingrese descripción del producto" 
                            className="form-control"
                            required
                        />
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-md-4 col-sm-12">
                        <label className="form-label">Precio</label>
                            <input 
                                type="number" 
                                name="precio"
                                placeholder="Ingrese el Precio" 
                                className="form-control"
                                required
                            />
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <label className="form-label">Cantidad</label>
                        <input 
                            type="number" 
                            name="cantidad"
                            placeholder="Ingrese la Cantidad" 
                            className="form-control"
                            required
                        />
                    </div>
                </div>

                <button className='btn btn-primary' type="submit">
                    Ingresar producto
                </button>
            </form>

        </div>
        <ListaProductos productos={totalProductos}/>
    </div>
  )
}

export default Formulario;