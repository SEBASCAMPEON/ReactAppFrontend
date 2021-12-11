import logo from './logo.svg';
import React, { useState, Fragment, useEffect } from 'react';
import EditAutoForm from './components/EditAutoForm';
import AddAutoForm from './components/AddAutoForm';
import AutoTable from './components/AutoTable';
import './App.css';
import './main.css';
import axios from 'axios';

const url = "http://localhost:3001/api/autos";

function App() {
  //Listado para trabajar de forma local sin axios
  const autosData = [
    /*{
      marca: "Hyundai",
      linea: "Nueva",
      modelo: "2015",
      potencia: "600",
      cilindraje: "500",
      placa: "XAC1258"
    },
    {
      marca: "Chevrolet",
      linea: "Nueva",
      modelo: "2015",
      potencia: "600",
      cilindraje: "500",
      placa: "DAC1258"
    }*/
  ]

  useEffect(() => {
    axios.get(url)
      .then((result) => {
        setAutos(result.data)
      });
  }, [])

  const initialFormState = {
    marca: "",
    linea: "",
    modelo: "",
    potencia: "",
    cilindraje: "",
    placa: ""
  }

  const [autos, setAutos] = useState(autosData)
  const [currentAuto, setCurrentAuto] = useState(initialFormState)
  const [editing, setEditing] = useState(false)

  //CRUD
  //Función para guardar
  const addAuto = auto => {
    console.log(auto);
    axios.post(url, auto)
      .then(res => {
        (res.status == 200) ? alert("Auto guardado exitosamente") : Promise.reject()
      })
      .catch(err => alert("Ocurrió un error"))
    setAutos([...autos, auto])
  }
  //Función para editar
  const editAuto = (placa, editAuto) => {
    console.log(placa)
    console.log(editAuto.placa)
    setEditing(false)
    axios.put(url + '/' + editAuto.placa, editAuto)
      .then(res => {
        console.log(res);
        (res.status == 200) ? alert("Auto modificado exitosamente") : Promise.reject()
      })
      .catch((err) => alert("ocurrió un error"))
    setAutos(autos.map(auto => (auto.placa == placa ? editAuto : auto)))
  }

  //Funcion para borrar
  const deleteAuto = placa => {
    setEditing(false)
    axios.delete(url + '/' + placa)
      .then((res) => {
        (res.status == 200) ? alert("Auto eliminado") : Promise.reject()
      })
      .catch((err) => alert("Ocurrió un error"))
    setAutos(autos.filter(auto => auto.placa !== placa))
  }

  //Esta función llena el formulario de editar con la info de el registro
  const editRow = auto => {
    setEditing(true)
    setCurrentAuto({ placa: auto.placa, marca: auto.marca, linea: auto.linea, modelo: auto.modelo, potencia: auto.potencia, cilindraje: auto.cilindraje })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className='container AppContainer'>
        <h1>Manejo de Autos</h1>
        <div className='flex-row'>
          <div className='flex-large'>
            {editing ? (
              <Fragment>
                <h2>Editar Auto</h2>
                <EditAutoForm
                  editing={editing}
                  setEditing={setEditing}
                  currentAuto={currentAuto}
                  editAuto={editAuto}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Agregar Auto</h2>
                <AddAutoForm addAuto={addAuto} />
              </Fragment>
            )}
          </div>
          <div className='flex-large'>
            <h2>Listado de Autos</h2>
            <AutoTable
              autos={autos}
              editRow={editRow}
              deleteAuto={deleteAuto}
            />
          </div>
        </div>
      </div>


    </div>
  );
}

export default App;


//completar
/*
import React, { useState, Fragment } from 'react';
import EditAutoForm from './components/EditAutoForm';
import AddAutoForm from './components/AddAutoForm';
import AutoTable from './components/AutoTable';
const App = () => {
  return (
    <div className='container'>
      <h1>Manejo de Autos</h1>
      <div className='flex-row'>
        <div className='flex-large'>
          {editing ? (
            <Fragment>
              <h2>Editar Auto</h2>
              <EditAutoForm
                editing={editing}
                setEditing={setEditing}
                currentAuto={currentAuto}
                updateAuto={updateAuto}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Agregar Auto</h2>
              <AddAutoForm addAuto={addAuto} />
            </Fragment>
          )}
        </div>
        <div className='flex-large'>
          <h2>Listado de Autos</h2>
          <AutoTable
            autos={autos}
            editRow={editRow}
            deleteAuto={deleteAuto}
          />
        </div>
      </div>
    </div>
  )
}
*/