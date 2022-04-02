
import * as api from '../api/drug';

export const fetchDrugs = (onResponse) => {
  return async () => {
    try {
      const response = await api.fetchDrugs();

      if (!response.data) {
        return onResponse({status: "error", message: "No drugs found", code:404});
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



export const createDrug = (drug, onResponse) => {
  return async () => {
    try {
        const { data } = await api.createDrug(drug);
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

export const editDrug = (id, updatedDrug, onResponse) => {
  return async () => {
    try {
      const { data } = await api.updateDrug(id, updatedDrug);

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

export const deleteDrug = (id, onResponse) => {
  return async () => {
    try {
      const { data } = await api.deleteDrug(id);
   
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
  export const fetchDrug = (id, onResponse) => {
    return async () => {
      try {
        const { data } = await api.fetchDrug(id);
        
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