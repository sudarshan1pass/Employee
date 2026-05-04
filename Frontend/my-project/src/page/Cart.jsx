import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee, updateEmployee } from "../Redux/createformSlice";


const Cart = () => {
  const AllData = useSelector((state) => state.createform.storedata);
  console.log(AllData);

  const dispatch = useDispatch()

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (!confirmDelete) return;
    try {
      await fetch(`https://employee-rear.onrender.com/api/v1/deleteemp/${id}`, {
        method: "DELETE",
      });


      // 🔥 Redux update
      dispatch(deleteEmployee(id));



    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Employee List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
        {AllData.map((emp) => (
          <div
            key={emp._id}
            className="w-full max-w-md rounded-3xl p-5 sm:p-6 
        bg-gradient-to-b from-white/80 to-cyan-200/40 
        backdrop-blur-xl shadow-xl border border-white/40
        transition-transform duration-300 hover:scale-105"
          >

            {/* Top Section */}
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full 
            bg-cyan-300 flex items-center justify-center 
            text-white text-lg sm:text-xl font-bold shadow-md">
                  {emp.firstName?.charAt(0)}
                </div>

                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {emp.firstName} {emp.lastName}
                  </h2>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {emp.position}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 text-center">
              <div className="flex-1">
                <h1 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Email
                </h1>
                <p className="text-xs sm:text-sm text-gray-500 break-words">
                  {emp.email}
                </p>
              </div>

              <div className="flex-1">
                <h1 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Salary
                </h1>
                <p className="text-sm text-gray-500">
                  ₹{emp.salary}
                </p>
              </div>

              <div className="flex-1">
                <h1 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Phone
                </h1>
                <p className="text-sm text-gray-500">
                  {emp.phone}
                </p>
              </div>
            </div>

            {/* Button Section */}
            <div className="flex justify-between items-center mt-6">
              <button className="p-3 rounded-full bg-white shadow-md 
            hover:bg-cyan-100 transition-transform duration-300 
            hover:rotate-12 active:rotate-180">
                <Link to={`/UpdateEmp/${emp._id}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </Link>
              </button>

              <button
                onClick={() => handleDelete(emp._id)}
                className="p-3 rounded-full bg-white shadow-md 
            hover:bg-red-100 transition cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
