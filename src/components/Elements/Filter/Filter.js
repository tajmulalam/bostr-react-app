import React, { Component } from 'react'
import './Filter.scss'
import locationIcon from '../../../images/location.svg'
import filterIcon from '../../../images/filter.svg'

class Filter extends Component {
    render() {
        return (
            <>
                <div className="col mt-1  pl-0 pr-0">
                    <div className="row">
                        <div className="input-group col pr-0">
                            <span className="input-group-prepend rounded-0 bg-white">
                                <div className="input-group-text bg-transparent border-right-0"><img src={locationIcon} alt="filter" className="icon_location"/></div>
                            </span>
                            <input className="form-control py-3 border-left-0 border rounded-0" type="text" placeholder="Job Title"/>
                        </div>
                        <div className="input-group col pl-0 pr-1">
                            <span className="input-group-prepend rounded-0 bg-white">
                                <div className="input-group-text bg-transparent border-right-0"><img src={locationIcon} alt="filter" className="icon_location" /></div>
                            </span>
                            <input className="form-control py-3 border-left-0 border rounded-0" type="text" placeholder="Bostad Location"/>
                        </div>
                        <div className="col-md-auto pl-0">
                            <div className="row">
                                <div className="col pr-1 ">
                                    <button className="btn bg-white btn-block no-outline btn-outline-dark rounded-0 text-primary btn-match" onClick={()=>this.props.filterData()}>Match</button>
                                </div>
                                <div className="col pl-0"><button className="btn bg-white no-outline btn-md btn-outline-dark rounded-0"><img src={filterIcon} alt="filter"  className="icon_location" /></button></div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Filter
