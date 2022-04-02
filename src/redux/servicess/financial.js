import * as api from "../api/financial";

export const fetchFinancials = (onResponse) => {
  return async () => {
    try {
      const response = await api.fetchFinancials();

      if (!response.data) {
        return onResponse({
          status: "error",
          message: "No financials found",
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

export const createFinancial = (financial, onResponse) => {
  return async () => {
    try {
      const { data } = await api.createFinancial(financial);
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

export const editFinancial = (id, updatedFinancial, onResponse) => {
  return async () => {
    try {
      const { data } = await api.updateFinancial(id, updatedFinancial);

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

export const deleteFinancial = (id, onResponse) => {
  return async () => {
    try {
      const { data } = await api.deleteFinancial(id);

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
export const fetchFinancial = (id, onResponse) => {
  return async () => {
    try {
      const { data } = await api.fetchFinancial(id);

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
