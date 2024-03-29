import React from "react";

const Input = ({name, onChangeInput}) => {
  const handleChange = (e) => {
    onChangeInput(e.target.value)         
  }

  return (
        <div className="relative">
            <input 
             className=" 
              block 
              rounded-md 
              px-6 
              pt-6 
              pb-1 
              w-full 
              text-white 
              text-sm 
              bg-neutral-700 
              appearance-none 
              focus:outline-none 
              focus:ring-0
             "
            placeholder=" "
            onChange={handleChange}
            />
            <label className="absolute text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3" htmlFor="email">
                {name}
            </label>
        </div>
    )
}

export default Input;