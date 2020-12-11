import React, { Component, Fragment } from 'react'

class ProfileCard extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let { name, avatar_url, bio, html_url,login } = this.props.profile
        return (
            <Fragment>
                {/* <pre>{JSON.stringify(avatar_url)}</pre> */}
                <div className="card">
                    <img src={avatar_url} alt="" className="img-fluid" />
                    <div className="card-body">
                        <h5>{name}</h5>
                        <p style={{color:'#cccccc'}}>{login}</p>
                        <p>{bio}</p>
                        <a href={html_url} target="_blank" className="btn btn-outline-info btn-sm">Profile</a>
                    </div>

                </div>
            </Fragment>
        )
    }
}
export default ProfileCard