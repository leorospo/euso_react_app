import React from 'react';
import { Link } from 'react-router-dom'


export default class _404 extends React.Component {

    render() {
        return (
            <div>
                <h1 className="tb1 tC">404</h1>
                <p className='sns-sp-416'>Why don't you
                    <Link to='/login'>
                        <span className='tb1 sns-sp-616'> start again</span>
                    </Link>
                    ?
                </p>
            </div>
        )
    }
}
