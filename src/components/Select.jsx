import React , {useId} from 'react'

function Select({
    options,
    label,
    className = '',
    ...props
}, ref) {
    const id = useId();
  return (
    <div className='w-full'>
      {label && <label htmlFor={id} className=''></label>}
      <select {...props} id={id} ref={ref} className={`px-3 py-2 border rounded-lg w-full text-black bg-white outine-none focus:bg-gray-50 duration-200 ${className}`}>
        {options?.map((option) => (
            <option key={option} value={option}>
                {option}
            </option>
        ))}
      </select>
    </div>
  )
}

export default React.forwardRef(Select)
