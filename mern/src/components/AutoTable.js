import React from 'react';

const AutoTable = props => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Placa</th>
                    <th>Marca</th>
                    <th>Linea</th>
                    <th>Modelo</th>
                    <th>Potencia</th>
                    <th>Cilindraje</th>
                    <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                {props.autos.length > 0 ?
                    props.autos.map(auto => (
                        <tr key={auto.placa}>
                            <td>{auto.placa}</td>
                            <td>{auto.marca}</td>
                            <td>{auto.linea}</td>
                            <td>{auto.modelo}</td>
                            <td>{auto.potencia}</td>
                            <td>{auto.cilindraje}</td>
                            <td>
                                <button onClick={() => {
                                    props.editRow(auto)
                                }} className="button muted-button"
                                >Editar</button>
                                <button onClick={() => {
                                    props.deleteAuto(auto.placa)
                                }} className="button muted-button"
                                >Eliminar</button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={7}>No hay nada para mostrar</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default AutoTable;