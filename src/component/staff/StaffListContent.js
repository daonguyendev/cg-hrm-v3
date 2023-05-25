import React, { useEffect, useState } from "react";
import {
  selectSuccess,
  selectStaffList,
  getStaffs,
  setSuccess,
} from "../../features/staff/staffSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";

function StaffListContent() {
  const [staffs, setStaffs] = useState([]);
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  const staffList = useSelector(selectStaffList);
  const success = useSelector(selectSuccess);

  const getStaffList = async () => {
    if (!success) {
      dispatch(getStaffs());
    } else {
      setStaffs(staffList);
      dispatch(setSuccess(true));
    }
  };

  useEffect(() => {
    getStaffList();
    removeRedundantCodes();

    // eslint-disable-next-line
  }, [success]);

  function removeRedundantCodes() {
    let noDataTag = document.getElementsByClassName("odd")[0];
    if (noDataTag != null) {
      noDataTag.remove();
    }
  }

  //   function handleCreate(e) {
  //     e.preventDefault();
  //     navigate('/staff/add');
  //   }

  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">List of Staff</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">List of Staff</li>
        </ol>
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
                  {staffs.map((staff) => (
                    <tr key={staff.id}>
                      <td>{staff.name} </td>
                      <td>{staff.position} </td>
                      <td>{staff.office} </td>
                      <td>{staff.age} </td>
                      <td>{staff.startDate} </td>
                      <td>{staff.salary} </td>
                      {/* <td>
                        <Link to={`/book/${staff.id}`}>Detail</Link>
                      </td>
                      <td>
                        <Link to={`/book/edit/${staff.id}`}>Edit</Link>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default StaffListContent;
