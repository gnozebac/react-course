import React from 'react';
import confLogo from '../images/logo-blanco-suda.png';
import './styles/Badges.css';

import api from '../api';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import { Link } from 'react-router-dom';

class Badges extends React.Component{
state = {
    data: undefined,
    loading: true,
    error: null,

};


componentDidMount (){
    this.fetchData();
}

fetchData = async () => {
    this.setState({ loading: true, error:null});
    try{
        const data = await api.badges.list();
        this.setState({loading: false, data:data})
    }catch(error){
        this.setState({loading: false, error:error})
    }

};

render(){
    if(this.state.loading===true){
        return <PageLoading />;        
    }    
    if(this.state.error){
        //return `Error ${this.state.error.message}`;
        return <PageError error = {this.state.error}/>;
    }    
    
    return (

        <div>
           
            <div className="Badges">
                <div className="Badges__hero">
                    <div className="Badges__container">
                        <img
                            className="Badges_conf-logo"
                            src={confLogo}
                            alt="Conf Logo"
                        />
                    </div>
                </div>
            </div>

            <div className="Badges__container">
                <div className="Badges__buttons">
                <Link to="/badges/new" className="btn btn-primary">
                        New Badge
                    </Link>
                </div>
                <BadgesList badges={this.state.data}/>

            </div>

        </div>
    );

}

}

export default Badges;