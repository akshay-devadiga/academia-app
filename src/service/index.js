import axios from "./axios";

export const login = async (user) => {
  try {
    const response = await axios.post(`/login`, {
      user,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getStudents = async (page, limit) => {
  try {
    let params = {
      page,
      limit,
    };
    const response = await axios.get(`/students`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getCourses = async (user) => {
  try {
    const response = await axios.get(`/courses`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getStudentByRollNo = async (rollNo) => {
  try {
    const response = await axios.get(`/students/${rollNo}}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCourseByStudentRollNo = async (user) => {
  try {
    const response = await axios.delete(`/students/:rollNo/course/:courseId`);
    return response.result;
  } catch (error) {
    console.error(error);
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.delete(`/createUser`);
    return response.result;
  } catch (error) {
    console.error(error);
  }
};

export const updateStudent = async (rollNo, courses) => {
  try {
    const response = await axios.patch(`/students/${rollNo}`, {
      courses,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
