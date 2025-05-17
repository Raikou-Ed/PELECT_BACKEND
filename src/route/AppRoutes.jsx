import React from "react";
import { Routes, Route } from "react-router-dom";




import DefaultLayout from "../layout/DefaultLayout";
import SpecialLayout from "../layout/SpecialLayout";
import NoneLayout from "../layout/NoneLayout";
import CustomerLayout from "../layout/CustomerLayout";
import AdminLayout from "../layout/AdminLayout";


import Home from "../page/Home";
import ContactUs from "../page/ContactUs";
import AboutUs from "../page/AboutUs";
import Feedback from "../page/Feedback";
import Login from "../page/Login";
import CreateAccount from "../page/CreateAccount";
import ForgotPassword from "../page/ForgotPassword";
import CreateProfile from "../page/CreateProfile";
import ServiceProfile from "../page/ServiceProfile";
import AvailableWeek from "../page/AvailableWeek";
import BookingRequest from "../page/BookingRequest";
import CreateAccountCustomer from "../page/CreateAccountCustomer";
import CustomerProfile from "../page/CustomerProfile";
import BookAppointment from "../page/BookAppointment";
import UserManagement from "../page/UserManagement";
import AdmitBooking from "../page/AdmitBooking";
import ApproveProvider from "../page/ApproveProvider";
import SaveChangesCustomer from "../page/SaveChangesCustomer";
import SaveChangesProvider from "../page/SaveChangesProvider";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes that use Default Layout */}
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Route>

      {/* Routes that use Special Layout */}
      <Route element={<SpecialLayout />}>
        <Route path="/ServiceProfile" element={<ServiceProfile />} />
        <Route path="/AvailableWeek" element={<AvailableWeek />} />
        <Route path="/BookingRequest" element={<BookingRequest />} />
        
        </Route>

      {/* Routes that use HeaderNone */}
      <Route element={<NoneLayout />}>
      <Route path="/CreateAccountCustomer" element={<CreateAccountCustomer />} />
      <Route path="/CreateProfile" element={<CreateProfile />} /> 
      <Route path="/SaveChangesCustomer" element={<SaveChangesCustomer />} />
      <Route path="/SaveChangesProvider" element={<SaveChangesProvider />} />
      </Route>

      {/* Routes that use CustomerHeader */}
      <Route element={<CustomerLayout />}>
      <Route path="/CustomerProfile" element={<CustomerProfile />} />
      <Route path="/BookAppointment" element={<BookAppointment />} />
      </Route>

      {/* Routes that use AdminHeader */}
      <Route element={<AdminLayout />}>
      <Route path="/UserManagement" element={<UserManagement />} />
      <Route path="/AdmitBooking" element={<AdmitBooking />} />
      <Route path="/ApproveProvider" element={<ApproveProvider />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;