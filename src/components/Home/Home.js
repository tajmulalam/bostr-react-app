import React, { Component } from 'react'
import Filter from '../Elements/Filter/Filter'
import BostrList from '../Elements/BostrList/BostrList'
import { fetchHomeForSaleData } from '../../api/HomeAPI/HomeAPI'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: '',
        }
        this.filterData = this.filterData.bind(this)
    }
    filterData() {
        const callAPI = async () => {
            const fetchData = await fetchHomeForSaleData();
            this.setState({ data: fetchData })
        }
        callAPI();
    }
    render() {
        return (
            <div className="jumbotron pt-0 mb-0 ">
                <div className="container">
                    <div className="row">
                        <Filter filterData={this.filterData} />
                    </div>
                </div>
                {
                    this.state.data ? (
                        <div className="container"><div className="row"><BostrList data={this.state.data} /></div>
                        </div>) : null
                }
            </div>
        )
    }
}

export default Home
