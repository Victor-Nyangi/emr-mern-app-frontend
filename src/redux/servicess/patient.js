
import * as api from '../api/patient';

export const fetchPatients = (onResponse) => {
  return async () => {
    try {
      const response = await api.fetchPatients();

      if (!response.data) {
        return onResponse({status: "error", message: "No patients found", code:404});
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



export const createPatient = (patient, onResponse) => {
  return async () => {
    try {
        const { data } = await api.createPatient(patient);
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

export const editPatient = (id, updatedPatient , onResponse) => {
  return async () => {
    try {
      const { data } = await api.updatePatient(id, updatedPatient);

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

export const deletePatient = (id, onResponse) => {
  return async () => {
    try {
      const { data } = await api.deletePatient(id);
   
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
  export const fetchPatient = (id, onResponse) => {
    return async () => {
      try {
        const { data } = await api.fetchPatient(id);
        
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

// export const fetchPatient = (id, onResponse) => {
//   return () => {
//     api.fetchPatient(id).then(response=> {
//     const data = response.data;

//   if (!data) {
//       return onResponse({status: "error", message: "Patient was not found", code:404});
//     }
//     const obj = {
//       status: "success",
//       data}
//       onResponse(obj)
//     }).catch(error => {
//   const obj = {
//     status: "error",
//     message: "Technical error occurred, contact administrator.",
//     error,
//   };
//   onResponse(obj);
// })
//   };
// }