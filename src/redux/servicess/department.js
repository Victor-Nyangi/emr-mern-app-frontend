import * as api from "../api/department";
 
export const fetchDepartments = (onResponse) => {
  return async () => {
    try {
      const response = await api.fetchDepartments();

      if (!response.data) {
        return onResponse({
          status: "error",
          message: "No departments found",
          code: 404,
        });
      }

      const obj = {
        status: "success",
        data: response.data,
      };

      onResponse(obj);
    } catch (error) {
      const obj = {
        status: "error",
        message: "Technical error occurred, contact administrator.",
        error,
      };
      onResponse(obj);
    }
  };
};

export const createDepartment = (department, onResponse) => {
  return async () => {
    try {
      const { data } = await api.createDepartment(department);
      const obj = {
        status: "success",
        data: data,
      };
      onResponse(obj);
    } catch (error) {
      const obj = {
        status: "error",
        message: "Technical error occurred, contact administrator.",
        error,
      };
      onResponse(obj);
    }
  };
};

export const editDepartment = (id, updatedDepartment, onResponse) => {
  return async () => {
    try {
      const { data } = await api.updateDepartment(id, updatedDepartment);

      const obj = {
        status: "success",
        data: data,
      };
      onResponse(obj);
    } catch (error) {
      const obj = {
        status: "error",
        message: "Technical error occurred, contact administrator.",
        error,
      };
      onResponse(obj);
    }
  };
};

export const deleteDepartment = (id, onResponse) => {
  return async () => {
    try {
      const { data } = await api.deleteDepartment(id);

      const obj = {
        status: "success",
        data: data,
      };
      onResponse(obj);
    } catch (error) {
      const obj = {
        status: "error",
        message: "Technical error occurred, contact administrator.",
        error,
      };
      onResponse(obj);
    }
  };
};
export const fetchDepartment = (id, onResponse) => {
  return async () => {
    try {
      const { data } = await api.fetchDepartment(id);

      const obj = {
        status: "success",
        data: data,
      };
      onResponse(obj);
    } catch (error) {
      const obj = {
        status: "error",
        message: "Technical error occurred, contact administrator.",
        error,
      };
      onResponse(obj);
    }
  };
};
