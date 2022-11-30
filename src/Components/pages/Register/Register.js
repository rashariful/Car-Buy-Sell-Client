import React, { useContext } from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import imgRegister from '../../../assets/img/register.jpg'

import swal from 'sweetalert';
import { AuthContext } from "../../../Context/UserContext";


const Register = () => {

  const {
    setUser,
    setError,
    error,
    registerUser,
    registerUserWithGoogle,
    registerUserWithGithub,
    updateUserInfo,
  } = useContext(AuthContext);

  // 01 handel Register Function for submit doc
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const fullname = form.fullname.value;
    const photoURL = form.photourl.value;
    const role = form.role.value;
    const email = form.email.value;
    const password = form.password.value;

    form.reset()

    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user)
        saveUserInfo(fullname, email, role)
        window.location.reload()
        console.log(user);
        swal({
          title: "Registration Successful!",
          icon: "success",
          button: "ok",
        });
        setError("");
        handleUpdateUserInfo(fullname, photoURL, role);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        swal({
          title: error,
          icon: "warning",
          button: "ok",
        });
      });
    form.reset();
  };

  // update name and photo url and role
  const handleUpdateUserInfo = (fullname, photourl, role) => {
    const profile = {
      displayName: fullname,
      photoURL: photourl,
      role: role
    };
    updateUserInfo(profile. role)
      .then((result) => {
        console.log(result.user);
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  // 02 register user with Google
  const handleRegisterGoogle = () => {
    registerUserWithGoogle()
      .then((result) => {
        const user = result.user;
        saveUserInfo(user.displayName, user.email, user.role)
        swal({
          title: "Registration Successful!",
          icon: "success",
          button: "ok",
        });
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        swal({
          title: error,
          icon: "warning",
          button: "ok",
        });
      });
  };
  // 03 register user with Github
  const handleRegisterGithub = () => {
    registerUserWithGithub()
      .then((result) => {
        const user = result.user;
        saveUserInfo(user.displayName, user.email)
        swal({
          title: "Registration Successful!",
          icon: "success",
          button: "ok",
        });
        setError("");
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        swal({
          title: error,
          icon: "warning",
          button: "ok",
        });
      });
  };


  const saveUserInfo = (name, email, role) => {
    const user = { name, email, role }

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => console.log(data))

  }


  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">

          <div className="lg:w-1/2 md:w-1/2  sm:mr-10 p-10 flex items-center relative">

            <img src="https://tradesmartonline.in/blog/wp-content/uploads/2017/07/buy-a-car.png" className=" w-full h-96 absolute inset-0 mt-52" alt="" />
            
          </div>

          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
           
            <form
              onSubmit={handleRegister}
              className="shadow-xl pt-3"
            >
              <h2 className="text-blue-500 text-xl mb-1 font-bold text-center">Create an account</h2>
              <p className="leading-relaxed mb-5 text-gray-600 text-center">you can create an account as a seller</p>

              <div className="flex justify-center gap-3 pt-5">
                <div >
                  <button
                    onClick={handleRegisterGithub}
                    className="btn btn-circle outline-none border-none"
                  >
                    <FaGithub className="w-full h-full "></FaGithub>

                  </button>
                </div>
                <div >
                  <button
                    onClick={handleRegisterGithub}
                    className="btn btn-circle border-slate-300 bg-slate-100 hover:bg-slate-200 hover:border-slate-300"
                  >
                    <FaFacebook className="w-full h-full text-blue-600"></FaFacebook>

                  </button>
                </div>

                <div> 
                   <button
                  onClick={handleRegisterGoogle}
                    className="btn btn-circle btn btn-circle border-slate-300 bg-slate-100 hover:bg-slate-200 hover:border-slate-300"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.7449 12.27C23.7449 11.48 23.6749 10.73 23.5549 10H12.2549V14.51H18.7249C18.4349 15.99 17.5849 17.24 16.3249 18.09V21.09H20.1849C22.4449 19 23.7449 15.92 23.7449 12.27Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12.2549 24C15.4949 24 18.2049 22.92 20.1849 21.09L16.3249 18.09C15.2449 18.81 13.8749 19.25 12.2549 19.25C9.12492 19.25 6.47492 17.14 5.52492 14.29H1.54492V17.38C3.51492 21.3 7.56492 24 12.2549 24Z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.52488 14.29C5.27488 13.57 5.14488 12.8 5.14488 12C5.14488 11.2 5.28488 10.43 5.52488 9.71V6.62H1.54488C0.724882 8.24 0.254883 10.06 0.254883 12C0.254883 13.94 0.724882 15.76 1.54488 17.38L5.52488 14.29Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.2549 4.75C14.0249 4.75 15.6049 5.36 16.8549 6.55L20.2749 3.13C18.2049 1.19 15.4949 0 12.2549 0C7.56492 0 3.51492 2.7 1.54492 6.62L5.52492 9.71C6.47492 6.86 9.12492 4.75 12.2549 4.75Z"
                      fill="#EA4335"
                    />
                  </svg>
                </button>
                </div>

              </div>
              <div className="flex flex-col gap-4 p-4 md:p-8">
                <div>
                  <label
                    type="text"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    name="fullname"
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <div>
                  <label
                    type="text"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    User role
                  </label>
                  <select
                    name="role"
                    className="select select-bordered w-full  bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2">

                    <option>buyer</option>
                    <option>seller</option>
                  </select>
                </div>

                <div>
                  <label
                    type="text"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    PhotoURL
                  </label>
                  <input
                    name="photourl"
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>
                <div>
                  <label
                    type="text"
                    className="inline-block text-gray-800 text-sm sm:text-base mb-2"
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <div>
                  <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  />
                </div>

                <button className="btn btn-primary w-full">Register Now</button>

                {/* <div className="flex justify-center items-center relative">
                  <span className="h-px bg-gray-300 absolute inset-x-0"></span>
                  <span className="bg-white text-gray-400 text-sm relative px-4">
                    Register in with social
                  </span>
                </div> */}


              </div>

              <div className="flex justify-center items-center bg-gray-100 p-4">
                <p className="text-gray-500 text-sm text-center">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 transition duration-100"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </form>


          </div>

        </div>
      </section>
    </>
  );
};

export default Register;
