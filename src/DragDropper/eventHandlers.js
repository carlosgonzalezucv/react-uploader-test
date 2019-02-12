export default {
  onDragOver: event => event.preventDefault(), 
  onDragEnter: event => console.log("En el evento", event.type, event), 
  onDragLeave: event => event.preventDefault() && console.log("En el evento", event.type, event), 
  onDrop: setTitle => (event, state) => {    
    event.preventDefault();
    event.stopPropagation();

    let file = event.dataTransfer.items[0].getAsFile();
    let fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onprogress = evt => {
      setTitle("Loading ... " + (evt.loaded/evt.total * 100).toFixed(2) + " %");
    }

    fileReader.onload = evt => {
      console.log("onLoad event", evt);
      setTitle(file.name);
    }
    
  }
};