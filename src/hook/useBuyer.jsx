import axios from "axios";
import { useEffect, useState } from "react";

const useBuyer = (user) => {
  const [buyer, setBuyer] = useState(false);

  useEffect(() => {
    const email = user?.email;

    if (email) {
      axios
        .get(`https://server-nine-beta.vercel.app/user/buyer/${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setBuyer(res?.data?.isBuyer);
        });
    }
  }, [user]);
  return [buyer];
};
export default useBuyer;
