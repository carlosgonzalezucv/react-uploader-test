const onChangeFile = (state,setState) => evt => {
  
  let { files } = evt.target;
  
  readFile(files[0]).result(state, setState)
    .then(() => console.log("epa epa", state));
};

const onDrop = (state,setState) => e => {    
  e.preventDefault();
  e.stopPropagation();

  if(state.content)
    return;

  let file = e.dataTransfer.items[0].getAsFile();

  readFile(file).result(state, setState)
    .then(() => console.log("carga desde el drag", state));
};

const readFile = file => ({  
  result : (state, setState) => new Promise((resolve, reject) => {  
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onprogress = e => {
      setState({...state, title: "Loading ... " + (e.loaded/e.total * 100).toFixed(2) + " %"});
    }
    fileReader.onload = e => {
      console.log("onLoad event", e.target);
      console.log("test", e.target.result.match(/\w+:(\w+)\/.*/))
      let [,fileType, extension] = e.target.result.match(/\w+:(\w+)\/(\w+).*/);
      setState({...state, title: file.name, loaded: true, content: e.target.result, value:e.target.value, fileType, extension});
      resolve(1);    
    }
  })
});

const prDefault = e => e.preventDefault();



export default {
  onDragOver: prDefault, 
  onChangeFile,
  onDragLeave: prDefault, 
  onDrop
}