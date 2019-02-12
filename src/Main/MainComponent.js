import React, { Component } from 'react';
import DragDropper from '../DragDropper/DragDropperComponent.js';

const Main = (props) => (
  <div>
    <div className="row">
      <div className="col-12">
        <div className="text-center m-t-lg">
          <h1>
            Flexipos resource loader. <br/>
          </h1>
          <h2>
            Hola, { props.user.name }!
          </h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <div className="text-center m-t-lg">
          <DragDropper />
        </div>
      </div>
    </div>
  </div>
);

export default Main