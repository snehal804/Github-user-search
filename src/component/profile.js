import React, { Component } from 'react';
import ProfileCard from './profilecard';
import ProfileCardDetails from './profileCardDetails';


class Profile extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        {
                            Object.keys(this.props).length !== 0 ?
                                <ProfileCard profile={this.props.profile} /> : null
                        }
                    </div>
                    <div className="col-md-9">
                        {
                            Object.keys(this.props).length !== 0 ?
                                <ProfileCardDetails profile={this.props.profile} /> : null
                        }

                    </div>
                </div>

            </div>
        )
    }
}

export default Profile