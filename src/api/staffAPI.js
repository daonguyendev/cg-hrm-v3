import axios from "axios";

const CG_STAFF_API = "https://646dc5e39c677e23218a619d.mockapi.io/api/v1";

export const findStaffs = async () => {
  let result = null;
  try {
    result = await axios.get(`${CG_STAFF_API}/staff`);
  } catch (e) {
    console.log("Find staffs API error: " + e);
  }
  return result;
};

export const findStaff = async (staffId) => {
  let result = null;
  try {
    result = await axios.get(`${CG_STAFF_API}/staff/${staffId}`);
  } catch (e) {
    console.log("Find staff API error: " + e);
  }
  return result;
};

export const createStaff = async (staff) => {
  let result = null;
  try {
    result = await axios.post(`${CG_STAFF_API}/staff`, staff);
  } catch (e) {
    console.log("Find staff API error: " + e);
  }
  return result;
};

export const updateStaff = async (staff) => {
  let result = null;
  try {
    result = await axios.put(`${CG_STAFF_API}/staff/${staff.id}`, staff);
  } catch (e) {
    console.log("Update staff API error: " + e);
  }
  return result;
};

export const deleteStaff = async (staffId) => {
  let result = null;
  try {
    result = await axios.delete(`${CG_STAFF_API}/staff/${staffId}`);
  } catch (e) {
    console.log("Delete staff API error: " + e);
  }
  return result;
};
