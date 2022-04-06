import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
  return (
    <div className="d-flex h-100">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5 align-self-center">
          <h6 className="display-1 text-center mb-3">Sign in</h6>
          <p className="text-muted text-center mb-5">Login pages</p>
          <form className="mt-5">
            <div className="form-group mb-4">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" name="email" placeholder="name@address.com" />
            </div>
            <div className="form-group mb-4">
              <div className="row">
                <div className="col">
                  <label htmlFor="password" className="form-label">Password</label>
                </div>
                <div className="col-auto">
                  <a href="#0" className="form-text small text-muted">Forgot password?</a>
                </div>
              </div>
              <div className="input-group input-group-merge">
                <input type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                />
                <span className="input-group-text">
                  
                </span>
              </div>

              <div class="form-group">
                <br/>
                
        <button type="submit" class="btn btn-primary btn-block"> Login  </button>
    </div>
            </div>
           
          </form>
          <p className="text-muted text-center">
            <small>
               Don't have an account yet?  
              <a href="#1" className="form-text small text-muted">
                <span>Sign up</span>
              </a>.
            </small>
          </p>
        </div>
        <div className="vh-100 col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block signin" />
      </div>
    </div>
  </div>
);
}

export default App;

