import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import useAdmin from '../../../hook/useAdmin';
import useBuyer from '../../../hook/useBuyer';
import useSeller from '../../../hook/useSeller';
import SellerDashboard from '../SellerDashboard/SellerDashboard';
import AdminDashboard from '../AdminDashboard/AdminDashboard';

const DashboardHome = () => {
    const {user} = useContext(AuthContext)
    const [admin] = useAdmin(user)
    const [buyer] = useBuyer(user)
    const [seller] = useSeller(user)
    return (
      <div className="">
        {admin && (
         <AdminDashboard/>
        )}
        {seller && (
         <SellerDashboard></SellerDashboard>
        )}
        {buyer && (
          <h2 className="text-5xl font-bold text-primary">Buyer dashboard</h2>
        )}
      </div>
    );
};

export default DashboardHome;