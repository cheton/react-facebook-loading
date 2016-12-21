import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLoading from '../src';

class App extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ margin: '20px 0' }}>
                <ul className="list-group">
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-xs-6">
                                <div><strong>zoom=1</strong></div>
                            </div>
                            <div className="col-xs-6">
                                <FacebookLoading zoom={1} style={{ margin: '0 auto' }} />
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-xs-6">
                                <div><strong>duration=&quot;800ms&quot;</strong></div>
                                <div><strong>zoom=2</strong></div>
                            </div>
                            <div className="col-xs-6">
                                <FacebookLoading zoom={2} duration="800ms" style={{ margin: '0 auto' }} />
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-xs-6">
                                <div><strong>duration=&quot;1.2s&quot;</strong></div>
                                <div><strong>zoom=3</strong></div>
                            </div>
                            <div className="col-xs-6">
                                <FacebookLoading zoom={3} duration="1.2s" style={{ margin: '0 auto' }} />
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-xs-6">
                                <div><strong>delay=&quot;300ms&quot;</strong></div>
                                <div><strong>duration=800</strong></div>
                                <div><strong>zoom=4</strong></div>
                            </div>
                            <div className="col-xs-6">
                                <FacebookLoading zoom={4} delay="300ms" duration={800} style={{ margin: '0 auto' }} />
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="row">
                            <div className="col-xs-6">
                                <div><strong>delay=1500</strong></div>
                                <div><strong>duration=1200</strong></div>
                                <div><strong>zoom=5</strong></div>
                            </div>
                            <div className="col-xs-6">
                                <FacebookLoading zoom={5} delay={1500} duration={1200} style={{ margin: '0 auto' }} />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('container')
);
