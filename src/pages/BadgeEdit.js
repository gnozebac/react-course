import React from 'react';

import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import PageLoading from '../components/PageLoading';
import logo from '../images/logo-blanco-suda.png';
import './styles/BadgeEdit.css';
import api from '../api';

class BadgeEdit extends React.Component{
  
  state = {
    loading: true,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async e => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.read(this.props.match.params.badgeId);

      this.setState({ loading: false, form: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({loading: true, error:null})
    try{
      await api.badges.update(this.props.match.params.badgeId,this.state.form)
      this.setState({loading: false})

      this.props.history.push('/badges');
      
  }catch(error){
      this.setState({loading: false, error:error})
  }

  };

  handleChange = e =>{
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

    render(){

      if(this.state.loading){
        return <PageLoading />;
      }

        return (
            <div>
         
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image" src={logo} alt="logo"/>
                </div>

                <div className="container">
          <div className="row">
            <div className="col-6">
    
              <Badge
                firstname={this.state.form.firstName || 'FIRST_NAME'}
                lastname={this.state.form.lastName || 'LAST_NAME'}
                email={this.state.form.email || 'EMAIL'}
                jobtittle={this.state.form.jobtittle || 'JOB'}
                twitter={this.state.form.twitter || 'TW'}
              />
            </div>
            <div className="col-6">
            <h1>Edit Attendant</h1>                    
                <BadgeForm 
                onChange={this.handleChange} 
                onSubmit={this.handleSubmit}
                formValues ={this.state.form} 
                error={this.state.error}
                />
            </div>

          </div>
        </div>

            </div>
        );
    }
  
}
export default BadgeEdit;

