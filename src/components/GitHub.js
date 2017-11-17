import React, { Component } from 'react';

class GitHub extends Component {

    handleSubmit(e){
        e.preventDefault();
        console.log(this.refs.username);
    }

    render() {
      return (
        <div className="container">
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input 
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="Ex: eltonjf" />
                        </div>
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </form>
                </div>
            </div>
        </div>
      );
    }
  }

  export default GitHub;