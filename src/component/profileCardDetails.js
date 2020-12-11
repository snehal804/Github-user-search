import React, { Component, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';





class ProfileCardDetails extends Component {
    constructor(props) {
        super(props)
    }

    useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }));

    render() {
        const classes = this.useStyles

        let { followers, public_repos, public_gists, following, name, location, company, blog, email, repos_url } = this.props.profile
        return (
            <Fragment>
                <div className="card">
                    <div className="card-header ">
                        <span className="badge mx-5">{followers}<p style={{ color: '#808080' }}>Followers</p>  </span>
                        <span className="badge mx-5">{following}<p style={{ color: '#808080' }}>Following</p> </span>
                        <span className="badge mx-5">{public_repos}<p style={{ color: '#808080' }}>Repositories</p>  </span>
                        <span className="badge mx-5">{public_gists}<p style={{ color: '#808080' }}>Gists</p> </span>
                    </div>
                        <div className="card-body bg-light">
                            <div style={{ width: '100%' }}>
                                {
                                    name == null ? null :

                                        <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
                                            <label style={{ color: 'blue' }}>User Name</label>: {name}
                                        </Box>
                                }
                                {
                                    location == null ? null :
                                        <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
                                            <label style={{ color: 'blue' }}>Location</label>: {location}
                                        </Box>
                                }
                                {
                                    company == null ? null :
                                        <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
                                            <label style={{ color: 'blue' }}>Company</label>: {company}
                                        </Box>
                                }
                                {
                                    blog == (null | "") ? null :
                                        <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
                                            <label style={{ color: 'blue' }}>Blog</label>: {blog}
                                        </Box>
                                }

                                {
                                    this.props.profile.email == null ? null :
                                        <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
                                            <label style={{ color: 'blue' }}>Email</label>: {email}
                                        </Box>
                                }
                                {
                                    this.props.profile.repos_url == null ? null :
                                        <Box component="span" display="block" p={1} m={1} bgcolor="background.paper">
                                            <label style={{ color: 'blue' }}>Repos URL</label>: {repos_url}
                                        </Box>
                                }
                            </div>
                        </div>
                    </div>
            </Fragment>)
    }
}
export default ProfileCardDetails