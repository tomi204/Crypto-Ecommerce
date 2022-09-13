import React from 'react'

const Form = () => {

    return (
        <div className='formulario'>
            <form>
                <label>Nombre</label>
                <input type='text' placeholder='Nombre' />
                <label>Apellido</label>
                <input type='text' placeholder='Apellido' />
                <label>Email</label>
                <input type='email' placeholder='Email' />
                <label>Telefono</label>
                <input type='number' placeholder='Telefono' />
                <label>Direccion</label>
                <input type='text' placeholder='Direccion' />
                <label >Localidad</label>
                <input type='text' placeholder='Localidad' />
                <label>Provincia</label>
                <input type='text' placeholder='Provincia' />
                <label>Codigo Postal</label>
                <input type='number' placeholder='Codigo Postal' />
                <button >Enviar</button>
            </form>
        </div>
    )
}

export default Form