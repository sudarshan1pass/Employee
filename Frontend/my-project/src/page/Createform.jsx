import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from "react-hook-form";
import { setStoredata,deleteEmployee } from "../Redux/createformSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router"



const Createform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm();

  let navigate = useNavigate();



  const dispatch=useDispatch() 

const onSubmit = async (formData) => { 
  try {
    const res = await fetch("http://localhost:4000/api/v1/createEmp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    console.log(data);
    
    dispatch(setStoredata(data.data)) 
    
    toast.success("Employee added successfully!");
    navigate("/")
    
  } catch (error) {
    console.log("Error:", error);
  } finally{
    
  }
};


  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Employee Registration
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input
              {...register("firstName", { required: "Required" })}
              placeholder="First Name"
              className="input"
            />
            <p className="error">{errors.firstName?.message}</p>
          </div>

          <div>
            <input
              {...register("lastName", { required: "Required" })}
              placeholder="Last Name"
              className="input"
            />
            <p className="error">{errors.lastName?.message}</p>
          </div>

          <div>
            <input
              {...register("position", { required: "Required" })}
              placeholder="Position"
              className="input"
            />
            <p className="error">{errors.position?.message}</p>
          </div>

          <div>
            <input
              {...register("salary", { required: "Required" })}
              placeholder="Salary"
              type="number"
              className="input"
            />
            <p className="error">{errors.salary?.message}</p>
          </div>

          <div className="md:col-span-2">
            <input
              {...register("address", { required: "Required" })}
              placeholder="Address"
              className="input"
            />
            <p className="error">{errors.address?.message}</p>
          </div>

          <div>
            <input
              {...register("email", { required: "Required" })}
              placeholder="Email"
              type="email"
              className="input"
            />
            <p className="error">{errors.email?.message}</p>
          </div>

          <div>
            <input
              {...register("phone", { required: "Required" })}
              placeholder="Phone"
              className="input"
            />
            <p className="error">{errors.phone?.message}</p>
          </div>
        </div>

        <button className="w-full mt-6 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold">
          Submit
        </button> 
      </form>

      {/* Tailwind reusable classes */}
      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #ddd;
          padding: 12px;
          border-radius: 10px;
          outline: none;
           
        }
        .input:focus {
          border-color: #2563eb;
        }
        .error {
          color: red;
          font-size: 12px;
        .inputerror{
          border:2px solid red;
        }
        }
      `}</style>
    </div>
  );
};

export default Createform;
