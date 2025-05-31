import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
    const Id = useId();
  return (
    <div className="w-full">
      {label && 
        <label className="block mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      }
      <input type={type} className={` px-3 py-2 border rounded-lg w-full text-black bg-white outine-none focus:bg-gray-50 duration-200 ${className}`} ref={ref} {...props} id={id}/>
    </div>
  );
});

export default Input;
