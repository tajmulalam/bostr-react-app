import React, { Component } from 'react'
import './BostrBox.css'
import favIcon from '../../../images/fav_not_pressed.png'
import shareIcon from '../../../images/share.png'
import NumberFormat from 'react-number-format';
class BostrBox extends Component {
    render() {
       const homeDetails=this.props.box;
        return (
            <div className="col-4 mb-3">
                <div className="card">
                    <div className="card-header pl-0 pr-0 pt-0 pb-0">
                        <div className="position-absolute w-100">
                            <span className="badge badge-pill badge-light mt-3 ml-3"><span className="text-success">100% Matched</span></span>
                            <button className="mt-2 mr-3 btn btn-sm float-right"><img alt="fav" src={favIcon} width="25" /></button>
                        </div>
                        <img className="card-img-top" src={homeDetails.imgThumbUrls} alt="bg" height="220" />
                    </div>
                    <div className="card-body pt-1">
                        <div className="w-100">
                            <p className="d-inline text-muted pr-3"><small>2 Likes</small></p>
                            <p className="d-inline text-muted"><small>50 Views</small></p>
                            <button className="btn btn-sm float-right"><img alt="fav" src={shareIcon} width="25" /></button>
                        </div>
                        <h5 className="card-title text-primary mt-3">{homeDetails.location.namedAreas}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{homeDetails.location.address.streetAddress}, {homeDetails.location.region.countyName}</h6>
                        <div className="row mt-4">
                            <div className="col">
                                <div className="d-flex flex-column">
                                    <span><NumberFormat value={homeDetails.listPrice.amount} displayType={'text'} thousandSeparator={true} prefix={''} /> {homeDetails.listPrice.currency} </span>
                                    <span className="text-muted p-0 m-0">
                                        <NumberFormat value={homeDetails.feeMonth.amount} displayType={'text'} thousandSeparator={true} prefix={''} /> {homeDetails.feeMonth.currency}/man
                                    </span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="d-flex flex-column">
                                    <span>98 m<sup>2</sup></span>
                                    <span className="text-muted">35 663 kr/m<sup>2</sup></span>
                                </div>
                            </div>
                            <div className="col">{homeDetails.nbRooms} rum</div>
                        </div>
                        <div className="row mt-2 mb-3">
                            <div className="col">
                                <span className="text-success">40% Matched</span>
                                <div className="progress" style={{ height: '5px' }}>
                                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow="90"
                                        aria-valuemin="0" aria-valuemax="100" style={{ width: '90%' }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-footer bg-white ">
                        <div className="row">
                            <div className="col">{homeDetails.location.region.municipalityName}</div>
                            <div className="col"><button type="button" className="btn btn-link float-right">View Details</button></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BostrBox
