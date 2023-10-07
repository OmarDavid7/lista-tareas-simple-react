import React from "react";

export default function ListaTareas({ tareas, eliminar }) {
    
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-12 d-flex flex-wrap align-items-center justify-content-center">
          {tareas.map(task =>(
            <div className="card m-2" key={task.id}>
                <div className="card-body">
                    <p className="card-text">{task.titulo}</p>
                    <div>
                    <button className="btn btn-danger m-2" onClick={()=> eliminar(task.id)}>eliminar</button>
                    </div>
                </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
