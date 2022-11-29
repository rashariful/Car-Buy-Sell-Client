import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import useAdmin from '../../../hook/useAdmin';
import useBuyer from '../../../hook/useBuyer';
import useSeller from '../../../hook/useSeller';
import SellerDashboard from '../SellerDashboard/SellerDashboard';

const DashboardHome = () => {
    const {user} = useContext(AuthContext)
    const [admin] = useAdmin(user)
    const [buyer] = useBuyer(user)
    const [seller] = useSeller(user)
    return (
      <div className="flex justify-center items-center min-h-screen">
        {admin && (
          <h2 className="text-5xl font-bold text-primary">Admin dashboard</h2>
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