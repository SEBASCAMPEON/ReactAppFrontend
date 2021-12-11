import React, { useEffect, useState } from 'react';

const EditAutoForm = props => {

    const [auto, setAuto] = useState(props.currentAuto)

    useEffect(
        () => {
            setAuto(props.currentAuto)
        },
        [props]
    )

    const handleInputChange = event => {
        const { name, value } = event.target
        setAuto({ ...auto, [name]: value })
    }
    return (
        <form onSubmit={event => {
            event.preventDefault()
            props.editAuto(auto.placa, auto)
        }}
        >
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
            <button>Actualizar</button>
            <button onClick={() => props.setEditing(false)} type="submit"
                className="button muted-button">
                Cancelar
            </button>
        </form>
    )
}

export default EditAutoForm;