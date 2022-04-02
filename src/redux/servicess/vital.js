
import * as api from '../api/vital';

export const fetchVitals = (onResponse) => {
  return async () => {
    try {
      const response = await api.fetchVitals();

      if (!response.data) {
        return onResponse({status: "error", message: "No vitals found", code:404});
      }
      
      const obj = {
        status: "success",
        data: response.data
      }

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



export const createVital = (vital, onResponse) => {
  return async () => {
    try {
        const { data } = await api.createVital(vital);
      const obj = {
        status: "success",
        data: data,
      };
      onResponse(obj);
    } catch (error) {
      const obj = {
        status: "error",
        message: "Technical error occurred, contact administrator.",
        error
      };
      onResponse(obj);
    }
  };
};

export const editVital = (id, updatedVital , onResponse) => {
  return async () => {
    try {
      const { data } = await api.updateVital(id, updatedVital);

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

export const deleteVital = (id, onResponse) => {
  return async () => {
    try {
      const { data } = await api.deleteVital(id);
   
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
  }
}
  export const fetchVital = (id, onResponse) => {
    return async () => {
      try {
        const { data } = await api.fetchVital(id);
        
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
}