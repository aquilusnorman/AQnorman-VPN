import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardImage, MDBRipple, MDBCol } from 'mdb-react-ui-kit';
import './Home.css';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
  render(){
    return (
      <div className="myCard">
        <MDBCol>
          <MDBCard className="my-card" style={{ maxWidth: '20rem' }}>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
              <MDBCardImage className="image" src={this.props.img} fluid alt='...' />
              <Link to={this.props.link}>
                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
              </Link>
            </MDBRipple>
            <MDBCardBody className="my-card-body">
              <MDBCardTitle className="card-title">{this.props.title}</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </div>
    );
  }
}