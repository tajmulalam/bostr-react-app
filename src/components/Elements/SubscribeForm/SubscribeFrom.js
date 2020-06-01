import React, { Component } from 'react'

class SubscribeFrom extends Component {
    render() {
        return (
            <div className="col-6">
                <form className="form-inline">
                    <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                    <input type="email" className="form-control mr-sm-2 w-75  rounded-0" placeholder="Email address" />
                    <button type="submit" className="btn btn-outline-dark rounded-0">Subscribe</button>
                </form>
            </div>
        )
    }
}

export default SubscribeFrom
