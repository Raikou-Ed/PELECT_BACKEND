import { Outlet } from 'react-router-dom';
import SpecialHeader from '../components/SpecialHeader';  

function SpecialLayout() {
  return (
    <>
      <SpecialHeader /> 
      <Outlet /> 
    </>
  );
}

export default SpecialLayout;