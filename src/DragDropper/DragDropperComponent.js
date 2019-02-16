import React, { useState } from 'react';
import handlers from './eventHandlers.js';

const styles = state => ({
  inputFile: {
    width: "0.1px",
    height: "0.1px",
    opacity: 0,
    overflow: "hidden",
    position: "absolute",
    zIndex: -1
  },
  containerIn: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: state && state.content ? "50px" : "300px",
    backgroundColor: "white",
    flexDirection: "column"
  },
  containerOut: {
    border: "1px #ababab",
    borderStyle: state && state.loaded ? "solid" : "dashed"
  },
  buttonsContainer: {
    position: "absolute",
    top: "100%",
    right: 0,
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between"
  },
  previewContainer: {
    display: "flex", 
    justifyContent: "space-around", 
    alignItems: "center", 
    padding: state && (state.fileType === "application" || state.fileType === "video")  ? 0 : "20px", 
    height: state && (state.fileType === "application") ? "100%" : (state && (state.fileType === "video") ? "250px" : "auto"), 
    margin: "5px", 
    marginLeft: 0, 
    background: "#ababab"
  }
});

const handleInputClick = state => e => state.content ? e.preventDefault() : null;
const clearFile = (props,setState) => e => {
  setState({ title: "Ningun archivo cargado.", loaded: false, file: "", content: ""});
  props.onChangeFile("");
}
const DragDropper = ({ onDragOver, onDragEnter, onChangeFile, onDrop }) => (props) => {
  let [state, setState] = useState({ title: "Ningun archivo cargado.", loaded: false, content: "", file: "" });
  return (
    <div className="w-75">      
      { 
        state.content && ["image","video","application"].indexOf(state.fileType) > -1 &&
        <div className="col-12" style={styles(state).previewContainer}>
          {/* <h2> Preview {state.extension} </h2> */}
          { 
            state.fileType === "image" && 
            <img src={ state.content } width="200" height="200" alt="preview"></img>
          }
          { 
            state.fileType === "video" && 
            <video src={ state.content } className="w-100" height="100%" controls>
            </video>
          }
          {
            state.fileType === "application" && state.extension === "pdf" && 
            <object className="w-100" style={{height: "200px"}} data={ state.content } > Some file </object>
          }
        </div>
      }
      <div style={styles(state).containerOut}>
        <div className="col-12 p-0">
          <div className="text-center m-t-lg">
            <div
              style={styles(state).containerIn}
              className="dropzone"
              onDragOver={onDragOver}
              onDrop={onDrop(state, setState)}
            >
              <input type="file" style={styles().inputFile} id="customInput" 
                onClick={handleInputClick(state, setState)} 
                onChange={onChangeFile(state, setState)} 
                value={state.file}
              />              
              <label htmlFor="customInput">
                {
                  !state.content && 
                  <div>
                    <span className="fa fa-upload"></span><br />
                  </div>
                }
                {state.title}
              </label>
              {
                state.loaded &&
                <div style={styles(state).buttonsContainer} className="w-50">
                  { (state.fileType === "image" || 
                     state.fileType === "video" || 
                    (state.fileType === "application" && state.extension === "pdf")) &&
                    <button className="btn btn-primary w-100 mr-1" onClick={() => props.onChangeFile(state.content)}>Upload</button>
                  }
                  <button className="btn btn-danger w-100" style={{marginRight: "0"}} onClick={clearFile(props, setState)}>Clear</button>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default DragDropper(handlers);