import React,{ Fragment}from'react';
import {Card, ListGroup, ListGroupItem}from 'react-bootstrap';
class Repos extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Fragment>
                <Card>
                    <Card.Header> <h5>GitHub Repositories</h5></Card.Header>
                    <Card.Body>
                        <ListGroup>
                        {
                            this.props.repos.map((repo)=>{
                                return(
                                    <ListGroupItem>
                                        <a href={repo.html_url} target="_blank" style={{fontSize:20}}>{repo.name}</a><br></br>
                                      <span className="badge"> {repo.stargazers_count} <span style={{color:'#808080'}}>Stars</span></span>
                                      <span className="badge mx-5">{repo.watchers_count} <span style={{color:'#808080'}}>Watchers</span></span>
                                      <span className="badge">{repo.forks_count} <span style={{color:'#808080'}}>Forks</span></span>
                                                                      
                                    </ListGroupItem>
                                )
                            })
                        }
                        </ListGroup>
                    </Card.Body>

                </Card>
        
            </Fragment>
        )
    }
}
export default Repos