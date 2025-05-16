import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/AdminHeader';



function AdminLayout() {
  return (
    <>
      <AdminHeader /> 
      <Outlet /> 
    </>
  );
}

export default AdminLayout;