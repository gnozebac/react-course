import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component{
render (){
    return <div className="badge">
        <div className="badge_header">
        <img src ={confLogo} alt="logo suda"/>
        </div>

        <div className="badge_section-name">
            
            <img className="badge_avatar" src ="https://www.gravatar.com/avatar/bc4094ed3653b18eba2198d3872abc84" alt="Avatar"/>
            <h1>Marco <br/> Guaman</h1>
        </div>

        <div className="badge_section-info">            
            <p>Teacher</p>
            <p>@gnozebac</p>
        </div>
    
        <div className="badge_footer">
            #magbdigital
        </div>

    </div>;
}
}

export default Badge;