
import * as api from '../api/billing';

export const fetchBillings = (onResponse) => {
  return async () => {
    try {
      const response = await api.fetchBillings();

      if (!response.data) {
        return onResponse({status: "error", message: "No billings found", code:404});
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



export const createBilling = (billing, onResponse) => {
  return async () => {
    try {
        const { data } = await api.createBilling(billing);
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

export const editBilling = (id, updatedBilling , onResponse) => {
  return async () => {
    try {
      const { data } = await api.updateBilling(id, updatedBilling);

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

export const deleteBilling = (id, onResponse) => {
  return async () => {
    try {
      const { data } = await api.deleteBilling(id);
   
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
  export const fetchBilling = (id, onResponse) => {
    return async () => {
      try {
        const { data } = await api.fetchBilling(id);
        
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