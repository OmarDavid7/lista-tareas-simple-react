import './App.css'
import AgregarTareas from './components/AgregarTareas'
import { useReducer} from 'react';
import ListaTareas from './components/ListaTareas';

//creacion del reducer
const reducer = (tareas,action) =>{
  switch(action.type){
    case 'agregar': {
      return [
        ...tareas, {
          id: action.id,
          titulo: action.titulo
        }
      ]
    }
    
    case 'eliminar':{
      return tareas.filter(t => t.id !== action.id)
    }
  }
}

function App() {

  const[tareas, dispatch] = useReducer(reducer, estadoInitial)

  const agregar = (titulo)=>{
    dispatch({
      type: 'agregar',
      id: nextId++,
      titulo: titulo
    })
  }

  const eliminar = (taskId)=>{
    dispatch({
      type: "eliminar",
      id: taskId
    })
  }

  const editar = (id, titulo)=>{
    dispatch({
      type: "editar",
      id: id, 
      titulo: titulo 
    })
  }

  return (
    <>
    <div className='container py-5'>
      <h1 className='text-center'>Lista de Tareas</h1>
      <AgregarTareas agregar={agregar}/>
      <ListaTareas tareas={tareas} eliminar={eliminar} editar={editar}/>
    </div>
    </>
  )
}

let nextId = 1;
const estadoInitial = []

export default App
