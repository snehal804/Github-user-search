import React, { Component, Fragment } from 'react';
import Axios from 'axios'
import Profile from './profile';
import Repos from './repos';

class GitHubApi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            profile: null,
            repos: null,
        }
    }

    updateInput = (e) => {
        this.setState({
            username: e.target.value

        });

    }
    // Form submit
      userSearch = (e) => {
        e.preventDefault()
        this.searchUserProfile()
        this.searchRepos()
    }
 //search profile 
 searchUserProfile = () => {
        Axios.get(`https://api.github.com/users/${this.state.username}`)
            .then((respone) => {
               this.setState({
                   profile : respone.data
                })
            })
    }
  // search repos
    searchRepos =()=>{
        Axios.get(`https://api.github.com/users/${this.state.username}/repos`)
        .then((respone) => {
           this.setState({
               repos : respone.data
            })
        })

    }

    render() {
        return (
            <Fragment>
                <div style={{ marginTop: 10 }}>
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-header bg-secondary text-white">
                                    <h3>Github User Info</h3>
                                </div>
                                <div className="card-body">
                                    <form className="form-inline" onSubmit={this.userSearch}>
                                        <div className="form-group" >
                                            <input
                                                value={this.state.username}
                                                onChange={this.updateInput}
                                                type="text"
                                                size={40}
                                                className="form-control" placeholder="User Name" />
                                            <button type='submit' value="Search" className="btn btn-primary btn-sm" style={{ marginLeft: 18 }}>Search</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col">
                            {
                         this.state.profile?
                         <Profile profile={this.state.profile}/>:null
                            }
                    </div>

                    </div>
                </div>
                <div className="container mt-3 mb-5">
                    <div className="row">
                        <div className="col">
                            {
                         this.state.repos?
                         <Repos repos={this.state.repos}/>:null
                            }
                    </div>

                    </div>
                </div>
            </Fragment>
        )
    }
}
export default GitHubApi