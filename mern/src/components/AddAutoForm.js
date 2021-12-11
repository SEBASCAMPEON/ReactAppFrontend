import React, { useState } from 'react';

const AddAutoForm = props => {
    //Definimos el estado inicial del formulario
    //que es poner lo del modelo con valores null o vacío
    const initialFormState = {
        marca: "",
        linea: "",
        modelo: "",
        potencia: "",
        cilindraje: "",
        placa: ""
    }


    const [auto, setAuto] = useState(initialFormState)

    //Otra constante para un evento de cambio en los inputs
    //Esto va a construir el objeto auto
    const handleInputChange = event => {
        const { name, value } = event.target
        setAuto({ ...auto, [name]: value })
    }
    return (
        <form onSubmit={event => {
            event.preventDefault()
            if (!auto.placa) return 
                props.addAuto(auto)
                setAuto(initialFormState)
            
        }}>
            <label>Placa</label>
            <input type="text" name="placa" value={auto.placa} onChange={handleInputChange} />

            <label>Marca</label>
            <input type="text" name="marca" value={auto.marca} onChange={handleInputChange} />

            <label>Linea</label>
            <input type="text" name="linea" value={auto.linea} onChange={handleInputChange} />

            <label>Modelo</label>
            <input type="text" name="modelo" value={auto.modelo} onChange={handleInputChange} />

            <label>Potencia</label>
            <input type="text" name="potencia" value={auto.potencia} onChange={handleInputChange} />

            <label>Cilindraje</label>
            <input type="text" name="cilindraje" value={auto.cilindraje} onChange={handleInputChange} />

            <button type="submit">
                Agregar
            </button>
        </form>
    )

}

export default AddAutoForm;