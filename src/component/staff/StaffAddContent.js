import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addStaff, selectStaffAdded } from "../../features/staff/staffSlice";

function StaffAddContent() {
  const [staff, setStaff] = useState({});
  const { staffId } = useParams();
  const isCreate = !staffId;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const staffAdded = useSelector(selectStaffAdded);

  function handleChange(event) {
    setStaff({
      ...staff,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit() {
    dispatch(addStaff(staff));
    setStaff(staffAdded);
    alert(
      `${isCreate ? "Create" : "Edit"} staff ${JSON.stringify(
        staff
      )} successfully!!!`
    );
    navigate("/");
    window.location.reload();
  }

  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">Add new staff</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Add new staff</li>
        </ol>
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between">
            <span>
              <i className="fas fa-table mr-1"></i>
              Add new staff
            </span>
            <span>
              <Link to={"/"} type="button" className="btn btn-primary">
                List of staff
              </Link>
            </span>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <form>
                <div className="form-group">
                  <label htmlFor="inputName">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="inputName"
                    placeholder="Enter staff name"
                    onChange={handleChange}
                    value={staff.name || ""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputPosition">Position</label>
                  <input
                    type="text"
                    name="position"
                    className="form-control"
                    id="inputPosition"
                    placeholder="Enter staff position"
                    onChange={handleChange}
                    value={staff.position || ""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputOffice">Office</label>
                  <input
                    type="text"
                    name="office"
                    className="form-control"
                    id="inputOffice"
                    placeholder="Enter staff office"
                    onChange={handleChange}
                    value={staff.office || ""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAge">Age</label>
                  <input
                    type="number"
                    name="age"
                    className="form-control"
                    id="inputAge"
                    placeholder="Enter staff age"
                    onChange={handleChange}
                    value={staff.age || ""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputStartDate">Start date</label>
                  <input
                    type="text"
                    name="startDate"
                    className="form-control"
                    id="inputStartDate"
                    placeholder="Enter staff start date"
                    onChange={handleChange}
                    value={staff.startDate || ""}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputSalary">Salary</label>
                  <input
                    type="number"
                    name="salary"
                    className="form-control"
                    id="inputSalary"
                    placeholder="Enter staff salary"
                    onChange={handleChange}
                    value={staff.salary || ""}
                  />
                </div>
                <button type="button" onClick={handleSubmit} className="btn btn-primary">
                  Add New Staff
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default StaffAddContent;
