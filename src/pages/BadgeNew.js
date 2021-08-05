import React from 'react';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import logo from '../images/logo-blanco-suda.png';
import './styles/BadgeNew.css';
class BadgeNew extends React.Component{
  
  state = {form:{ 
    firstName:'',
    lastName:'',
    email:'df',
    jobtittle:'',
    twitter:'',
   }};

  handleChange = e =>{
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

    render(){
        return (
            <div>
         
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo} alt="logo"/>
                </div>

                <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstname={this.state.form.firstName}
                lastname={this.state.form.lastName}
                email={this.state.form.email}
                jobtittle={this.state.form.jobtittle}
                twitter={this.state.form.twitter}
              />
            </div>
            <div className="col-6">
                                                       
                <BadgeForm 
                onChange={this.handleChange} 
                formValues ={this.state.form} 
                />
            </div>

          </div>
        </div>

            </div>
        );
    }
  
}
export default BadgeNew;

