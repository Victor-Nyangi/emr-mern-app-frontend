
import * as api from '../api/member';

export const fetchMembers = (onResponse) => {
  return async () => {
    try {
      const response = await api.fetchMembers();

      if (!response.data) {
        return onResponse({status: "error", message: "No member found", code:404});
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



export const createMember = (member, onResponse) => {
  return async () => {
    try {
        const { data } = await api.createMember(member);
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

export const editMember = (member , onResponse) => {
  return async () => {
    try {
      const { data } = await api.updateMember(member._id, member);

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

export const deleteMember = (id, onResponse) => {
  return async () => {
    try {
      const { data } = await api.deleteMember(id);
   
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
  export const fetchMember = (id, onResponse) => {
    return async () => {
      try {
        const { data } = await api.fetchMember(id);
        
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