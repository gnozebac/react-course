import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/logo-blanco-suda.png';

class Badge extends React.Component{
render (){

    return <div className="Badge">
        <div className="Badge__header">
        <img src ={confLogo} alt="logo suda"/>
        </div>

        <div className="Badge__section-name">
            
            <img className="Badge__avatar" src ="https://s.gravatar.com/avatar/bc4094ed3653b18eba2198d3872abc84?s=500" alt="Avatar"/>
            <h1>{this.props.firstname} <br/> {this.props.lastname}</h1>
        </div>

        <div className="Badge__section-info">            
            <p>{this.props.jobtittle}</p>
            <p>@{this.props.twitter}</p>
        </div>
    
        <div className="Badge__footer">
            #casaAbiertaITS
        </div>

    </div>;
}
}

export default Badge;