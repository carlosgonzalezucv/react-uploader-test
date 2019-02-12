import React, { useState } from 'react';
import handlers from './eventHandlers.js';

const styles = {
  inputFile: {
    width: "0.1px",
    height: "0.1px",
    opacity: 0,
    overflow: "hidden",
    position: "absolute",
    zIndex: -1
  }
}

const DragDropper = ({onDragOver, onDragEnter, onDragLeave, onDrop}) => (props) => {  
  let [ title, setTitle ] = useState("Un titulo")
  return (
    <div 
      style={{display: "flex", justifyContent: "center", width: "100%", height: "300px", backgroundColor: "white"}} 
      className="dropzone"
      onDragOver={onDragOver}
      onDrop={onDrop(setTitle)}
    >
      <input type="file" style={styles.inputFile} id="customInput"/>
      <label htmlFor="customInput">{title}</label>
    </div>
  )
};

export default DragDropper(handlers);