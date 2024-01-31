import React from 'react';

const StatisticsDashboard = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="card bg-info text-white stats-box">
                        <div className="card-body">
                            <h4 className="card-title text-center"><i className="bi bi-box"></i> Total Products</h4>
                            <p className="card-text text-center">10</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success text-white stats-box">
                        <div className="card-body">
                            <h4 className="card-title text-center"><i className="bi bi-currency-dollar"></i>Total Sales</h4>
                            <p className="card-text text-center">$54</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-primary text-white stats-box">
                        <div className="card-body">
                            <h4 className="card-title text-center"><i className="bi bi-person-plus"></i> Total Signups</h4>
                            <p className="card-text text-center">0</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-warning text-dark stats-box">
                        <div className="card-body">
                            <h4 className="card-title text-center"><i className="bi bi-cart"></i> Total Orders</h4>
                            <p className="card-text text-center">2</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatisticsDashboard;
