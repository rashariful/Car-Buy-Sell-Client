import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../../Context/UserContext';

const BookingModal = ({ mProducts }) => {
    const {user} = useContext(AuthContext)
   

   const handleSubmit = (e) => {
     e.preventDefault();
     const form = e.target;
     const name = form.name.value;
     const email = form.email.value;
     const phone = form.phone.value;
     const price = mProducts.price
     const title = mProducts.name
     const description = form.description.value;


     const booking = {
       name,
       email,
       phone,
       price,
       title,
       description,
     };
     console.log(booking);
      fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(booking),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });

      console.log(booking);
    //   refetch();
      form.reset();
    //   setTreatment(null);

   };

  return (
    <div>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold my-10 text-center">
            {mProducts?.name}
          </h3>
          <h3 className="font-bold my-5 text-center">{mProducts?.price}</h3>

          <form onSubmit={handleSubmit} className="grid gap-3">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              disabled
              placeholder="Name"
              className="input input-bordered w-full "
            />
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email"
              className="input input-bordered w-full "
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              className="input input-bordered w-full "
            />
            <textarea
              name="description"
              className="textarea textarea-bordered"
              placeholder="Meeting location"
            ></textarea>
            <input
              className="btn btn-accent my-3 w-full"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;