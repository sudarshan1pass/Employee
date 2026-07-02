import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteEmployee, updateEmployee } from "../Redux/createformSlice";
const API_URL = import.meta.env.VITE_API_URL;

const Cart = () => {
  const AllData = useSelector((state) => state.createform.storedata);
  console.log(AllData);

  const dispatch = useDispatch()

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");

    if (!confirmDelete) return;
    try {
      const res = await fetch(

        `${API_URL}/api/v1/deleteemp/${id}`,

        `employee-production-843d.up.railway.app/api/v1/deleteemp/${id}`,
 
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert("Delete failed");
        return;
      }

      dispatch(deleteEmployee(id));

    } catch (error) {
      console.log(error);
    }
  };




  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center">
  {Array.isArray(AllData) &&
    AllData.filter((emp) => emp && emp._id).map((emp) => (
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
              {emp?.firstName?.charAt(0) || "?"}
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
                {emp?.firstName || "N/A"} {emp?.lastName || ""}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500">
                {emp?.position || "N/A"}
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
              {emp?.email || "N/A"}
            </p>
          </div>

          <div className="flex-1">
            <h1 className="font-semibold text-gray-800 text-sm sm:text-base">
              Salary
            </h1>
            <p className="text-sm text-gray-500">
              ₹{emp?.salary || 0}
            </p>
          </div>

          <div className="flex-1">
            <h1 className="font-semibold text-gray-800 text-sm sm:text-base">
              Phone
            </h1>
            <p className="text-sm text-gray-500">
              {emp?.phone || "N/A"}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center mt-6">
          <button className="p-3 rounded-full bg-white shadow-md hover:bg-cyan-100 transition-transform duration-300 hover:rotate-12 active:rotate-180">
            <Link to={`/UpdateEmp/${emp._id}`}>
              Edit
            </Link>
          </button>

          <button
            onClick={() => handleDelete(emp._id)}
            className="p-3 rounded-full bg-white shadow-md hover:bg-red-100 transition cursor-pointer"
          >
            Delete
          </button>
        </div>

      </div>
    ))}
</div>
  );
};

export default Cart;
