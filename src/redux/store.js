import { configureStore } from '@reduxjs/toolkit';
import serviceReducer from './services/serviceSlice'
import billingReducer from './billings/billingSlice'
import departmentReducer from './departments/departmentSlice'
import financialReducer from './financials/financialSlice'
import drugReducer from './drugs/drugSlice'
import memberReducer from './members/memberSlice'
import patientReducer from './patients/patientSlice'
import vitalReducer from './vitals/vitalSlice'
import authReducer from './auth/authSlice'

export const store = configureStore({
  reducer: {
    services: serviceReducer,
    billings: billingReducer,
    departments: departmentReducer,
    drugs: drugReducer,
    financials: financialReducer,
    members: memberReducer,
    patients: patientReducer,
    vitals: vitalReducer,
    auth: authReducer
  },
});
 