import React from 'react';
import DragDropper from '../DragDropper/DragDropperComponent.js';

const handleFile = file => console.log("El archivo", file);

const Main = (props) => (
  <div style={{
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "justifyContent": "space-around",
    "height": "520px",
    "width": "100%"
  }}>
    <div className="row">
      <div className="col-12">
        <div className="text-center m-t-lg">
          <h1>
            Flexipos resource loader. <br/>
          </h1>
          <h2>
            Hola, { props.user.name }! 
          </h2>
          <button onClick={()=>props.onUpdateStatus()}>Logout</button>
        </div>
      </div>
    </div>
    <DragDropper onChangeFile={handleFile}/>
  </div>
);

export default Main