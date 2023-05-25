import React from "react";
import { Link } from "react-router-dom";

function StaffAddContent() {
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">Tables</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Tables</li>
        </ol>
        <div className="card mb-4">
          <div className="card-body">
            DataTables is a third party plugin that is used to generate the demo
            table below. For more information about DataTables, please visit the
            <a target="_blank" href="https://datatables.net/">
              official DataTables documentation
            </a>
          </div>
        </div>
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between">
            <span>
              <i className="fas fa-table mr-1"></i>
              List of Staff
            </span>
            <span>
              <Link to={"/add-staff"} type="button" class="btn btn-primary">
                Add New Staff
              </Link>
            </span>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing="0"
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default StaffAddContent;
