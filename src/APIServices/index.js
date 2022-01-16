import axios from "./axios";

export const login = async (user) => {
    try {
      const response = await axios.post(`/login`,{
        user
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
}

export const getStudents = async (user) => {
    try {
      const response = await axios.get(`/students`);
      return response.result;
    } catch (error) {
      console.error(error);
    }
}

export const getCourses = async (user) => {
    try {
      const response = await axios.get(`/courses`);
      return response.result;
    } catch (error) {
      console.error(error);
    }
}

export const getCoursesByStudentRollNo = async (user) => {
    try {
      const response = await axios.get(`/students/:rollNo/courses`);
      return response.result;
    } catch (error) {
      console.error(error);
    }
}

export const deleteCourseByStudentRollNo = async (user) => {
    try {
      const response = await axios.delete(`/students/:rollNo/course/:courseId`);
      return response.result;
    } catch (error) {
      console.error(error);
    }
}


export const createUser = async (user) => {
    try {
      const response = await axios.delete(`/createUser`);
      return response.result;
    } catch (error) {
      console.error(error);
    }
}