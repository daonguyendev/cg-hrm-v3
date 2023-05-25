import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getStaff, removeStaff, selectStaffDetail } from '../../features/staff/staffSlice';

function StaffDetailContent() {
    const [staff, setStaff] = useState([]);
  const { staffId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const staffDetail = useSelector(selectStaffDetail);

  const getStaffDetail = async () => {
    if (staffDetail == null) {
      dispatch(getStaff(staffId));
    } else {
      setStaff(staffDetail);
    }
  };

  useEffect(() => {
    getStaffDetail();

    // eslint-disable-next-line
  }, [staffId, staffDetail]);

  function removeCurrentStaff() {
    if (staffId) {
      dispatch(removeStaff(staffId));
      alert(`Remove staff ${JSON.stringify(staffDetail)} successfully!!!`);
      navigate("/");
      window.location.reload();
    }
  }
      
  return (
    <main>
      <div className="container-fluid">
        <h1 className="mt-4">Staff Detail</h1>
        <ol className="breadcrumb mb-4">
          <li className="breadcrumb-item">
            <a href="index.html">Dashboard</a>
          </li>
          <li className="breadcrumb-item active">Staff Detail</li>
        </ol>
        <div className="card mb-4">
          <div className="card-header d-flex justify-content-between">
            <span>
              <i className="fas fa-table mr-1"></i>
              Staff Detail
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
                    value={staff.salary || ""}
                  />
                </div>
                <button
                  type="button"
                  onClick={removeCurrentStaff}
                  className="btn btn-primary"
                >
                  Remove Staff
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default StaffDetailContent;