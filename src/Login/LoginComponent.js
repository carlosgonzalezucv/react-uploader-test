import React from 'react';
import md5 from 'md5-hash';
import './Login.css';
import Main from '../Main/MainComponent.js';

class Login extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      isLoggedIn: false
    };
  }
  loginAction() {
    console.log("La data", this.state);
    // Http().post("https://flexipos.us/web/Login", this.state)
    //   .then(response => {
    //     console.log("La respuesta del servicio", response);
    //   })
    this.props.onUpdateStatus(true, {
      name: "Carlos",
      id: 1
    });
  }

  render () {
    return  (
      <div className="row" style={{maxWidth: "400px", margin: "auto"}}>
        <div className="col-12">
          <div style={{display: "flex", justifyContent: "center", margin: "30px"}}>
            <span className="fa fa-upload fa-5x" style={{padding: "25px", borderStyle: "solid", borderRadius: "50%"}}></span>
          </div>
          <form className="p-lg">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input name="email" type="email" className="form-control" onChange={e=>this.setState({Email: e.target.value})}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input name="password" type="password" className="form-control" onChange={e=>this.setState({Password: md5(e.target.value)})}/>
            </div>
            <div className="form-group" style={{display: "flex", justifyContent: "center"}}>
              <button className="btn btn-primary" style={{width: "60%"}} type="button" onClick={() => this.loginAction()}> Login </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;