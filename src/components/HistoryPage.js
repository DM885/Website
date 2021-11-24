import React from "react";
import {Link} from "react-router-dom";

export default class HistoryPage extends React.Component {
    state = {
        history: [{
            status: 1,
            timestamp: 1637064108663,
            key: 1,
        }],
        models: [{
            key: 2132,
            name: "solveExam",
            size: 13132,
        }],

        data: [{
            key: 132,
            name: "data.dzn",
            size: 13132,
        }]
    };
    
    render()
    {
        return (
            //Move table to only  tage 2/3 of the left part of the page
            <div className="container pt-4">
                <div className="row align-items-start">
                    <div className="col-md-12">
                        <div className="card card-body">
                            <h3 className="text-center">History</h3>
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.history.map(history => (
                                        <tr key={history.key}>
                                            <td>{history.key}</td>
                                            <td>{new Date(history.timestamp).toLocaleString()}</td>
                                            <td>{history.status === 0 ? "Closed" : "Open"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row pt-1">
                    <Link to="/newRun" className="d-grid gap-2">
                        <button type="button" className="btn btn-primary" >
                            Start new run!
                        </button>
                    </Link>
                </div>

                <div className="row pt-4">
                    <div className="col-md-6">
                    <div className="card card-body">
                        <h3 className="text-center">Models</h3>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.models.map(models => (
                                    <tr key={models.key}>
                                        <td>{models.key}</td>
                                        <td>{(models.name)}</td>
                                        <td>{models.size}</td>
                                        <td>
                                            <i className="bi bi-trash"></i>
                                        </td>
                                        <td>
                                            <i className="bi bi-cloud-arrow-up"></i>    
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button type="button" className="btn btn-primary mt-1 w-100">
                        Create new Data!
                    </button>
                </div>
                    
                <div className="col-md-6">
                    <div className="card card-body">
                        <h3 className="text-center">Data</h3>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map(data => (
                                    <tr key={data.key}>
                                        <td>{data.key}</td>
                                        <td>{data.name}</td>
                                        <td>{data.size}</td>
                                        <td>
                                            <i className="bi bi-trash"></i>
                                        </td>
                                        <td>
                                            <i className="bi bi-cloud-arrow-up"></i>    
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button type="button" className="btn btn-primary mt-1 w-100">
                        Create new Data!
                    </button>
                </div>
            </div>
        </div>
        );
    }
                
           
    
    
}


