import React from 'react';

import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import logo from '../images/logo-blanco-suda.png';
import './styles/BadgeNew.css';
class BadgeNew extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={logo} alt="logo"/>
                </div>

                <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstname="Marco"
                lastname="Guamán"
                tw="choloviejo"
                job="Teacher"
                
              />
            </div>
            <div className="col-6">
                <BadgeForm />
            </div>

          </div>
        </div>

            </div>
        );
    }
  
}
export default BadgeNew;

