import axios from "axios";
import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const email = user?.email;

    if (email) {
      axios
        .get(`https://server-nine-beta.vercel.app/user/admin/${email}`, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((res) => {
          setAdmin(res?.data?.isAdmin);
        });
    }
  }, [user]);
  return [admin];
};
export default useAdmin;
