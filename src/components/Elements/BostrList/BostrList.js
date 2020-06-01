import React, { Component } from 'react'
import BostrBox from '../BostrBox/BostrBox'

class BostrList extends Component {
    render() {
        const { hits: { hits } } = this.props.data;
        const rows = hits.map((country, i) => <BostrBox key={i} box={country._source.dwelling}></BostrBox>);
        return (
            <>
                <div className="col mt-5 pl-0 pr-0">
                    <p>{rows.length} Matches Found</p>

                </div>
                <div className="row mb-4 h-100">
                    {rows}
                </div>

            </>
        )
    }
}

export default BostrList
