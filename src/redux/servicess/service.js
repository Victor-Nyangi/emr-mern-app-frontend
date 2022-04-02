
// // import * as api from '../api/service';

// export const fetchServices = (onResponse) => {
//   return async () => {
//     try {
//       const response = await api.fetchServices();

//       if (!response.data) {
//         return onResponse({status: "error", message: "No services found", code:404});
//       }
      
//       const obj = {
//         status: "success",
//         data: response.data
//       }

//       onResponse(obj);
//     } catch (error) {
//       const obj = {
//         status: "error",
//         message: "Technical error occurred, contact administrator.",
//         error,
//       };
//       onResponse(obj);
//     }
//   };
// };

 
// export const createService = (service, onResponse) => {
//   return async () => {
//     try {
//         const { data } = await api.createService(service);
//       const obj = {
//         status: "success",
//         data: data,
//       };
//       onResponse(obj);
//     } catch (error) {
//       const obj = {
//         status: "error",
//         message: "Technical error occurred, contact administrator.",
//         error
//       };
//       onResponse(obj);
//     }
//   };
// };

// export const editService = (service , onResponse) => {
//   return async () => {
//     try {
//       const { data } = await api.updateService(service._id, service);

//       const obj = {
//         status: "success",
//         data: data,
//       };
//       onResponse(obj);
//     } catch (error) {
//       const obj = {
//         status: "error",
//         message: "Technical error occurred, contact administrator.",
//         error,
//       };
//       onResponse(obj);
//     }
//   };
// };

// export const deleteService = (id, onResponse) => {
//   return async () => {
//     try {
//       const { data } = await api.deleteService(id);
   
//       const obj = {
//         status: "success",
//         data: data,
//       };
//       onResponse(obj);
//     } catch (error) {
//       const obj = {
//         status: "error",
//         message: "Technical error occurred, contact administrator.",
//         error,
//       };
//       onResponse(obj);
//     }
//   }
// }
//   export const fetchService = (id, onResponse) => {
//     return async () => {
//       try {
//         const { data } = await api.fetchService(id);
        
//         const obj = {
//           status: "success",
//           data: data,
//         };
//         onResponse(obj);
//       } catch (error) {
//         const obj = {
//           status: "error",
//           message: "Technical error occurred, contact administrator.",
//           error,
//         };
//         onResponse(obj);
//       }
//     };
// }