import axios from "axios";
import { useEffect, useState } from "react";

const useBuyer = (user) => {
  const [buyer, setBuyer] = useState(false);

  useEffect(() => {
    const email = user?.email;
   
    if (email) {
      axios
        .get(`http://localhost:5000/user/buyer/${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          console.log(`buyer status`, res?.data);
          setBuyer(res?.data?.isBuyer);
        });
    }
  }, [user]);
  return [buyer];
};
export default useBuyer;
