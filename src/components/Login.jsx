import React, { useState } from 'react'

const Login = () => {
    const [show, setShow] = useState(true);
    console.log(show);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        password: '',
        confirmpassword: '',
    });

    const [error, setError] = useState({});
    console.log(error);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const validate = () => {
        let newErr = {};

        if(show && !formData.username.trim()){
            newErr.username = "username is required";
        }

        if(!formData.email.trim()){
            newErr.email = 'Email is required';
        }else if(!/\S+@\S+\.\S+/.test(formData.email)){
            newErr.email = "Invalid email format";
        }

        if(show) {
       if(!formData.phone.trim()){
            newErr.phone = 'Phone number is required';
        }else if(!/^\d{10}$/.test(formData.phone)){
            newErr.phone = 'Enter valid 10 digit number'
        }
        }

        if(!formData.password){
            newErr.password = 'Password is required';
        }else if(formData.password.length < 6){
            newErr.password = 'Password must be at least 6 charecters';
        }

        if(show){
            if(!formData.confirmpassword){
                newErr.confirmpassword = 'Confirm your Password';
            }else if(formData.password !== formData.confirmpassword){
                newErr.confirmpassword = 'Password do not match';
            }
        }
        return newErr;
    };

    const handleSubmit = () => {
        const validationeError = validate();
        setError(validationeError);

        if(Object.keys(validationeError).length === 0) {
            alert(show ? 'Registered Successfully' : 'Login Successful');

             setFormData({
                username: '',
                email: '',
                phone: '',
                password: '',
                confirmpassword: '',
            });
        }
    };

  return (
    <div className='flex flex-col justify-center items-center'>
    <div className='flex flex-col justify-center items-center w-100 h-auto bg-amber-100 max-h-auto w-150 m-10 p-4'> 
      <h2 className='text-cyan-600 font-bold text-2xl pt-3' >{show ? 'Register' : 'Login'}</h2>
    {show ? (
        <>
            <div className='flex flex-col mt-3 justify-center items-center p-5 '>
                {show && (
                    <>
                    <input name="username" value={formData.username} onChange={handleChange} placeholder='Username' className='p-2 m-1 border rounded-md focus:border-amber-600 hover:border-amber-700 focus:accent-blue-900 w-70' id='username' type="text" />
                    {error.username && <p className="text-red-600 text-sm mt-1">{error.username}</p>}
                    </>
                )}
                {show && (
                    <>
                    <input name="email" value={formData.email} onChange={handleChange} placeholder='Email' className='p-2 m-1 border rounded-md focus:border-amber-600 hover:border-amber-700 focus:accent-blue-900 w-70' id='mail' type="text" />
                    {error.email && <p className="text-red-600 text-sm mt-1">{error.email}</p>}

                    </>
                )}
                {show && (
                    <>
                    <input name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone Number' className='p-2 m-1 border rounded-md focus:border-amber-600 hover:border-amber-700 focus:accent-blue-900 w-70' id='phone' type="text" />
                    {error.phone && <p className="text-red-600 text-sm mt-1">{error.phone}</p>}

                    </>
                )}
                {show && (
                    <>
                    <input name="password" value={formData.password} onChange={handleChange} placeholder='Password' className='p-2 m-1 border rounded-md focus:border-amber-600 hover:border-amber-700 focus:accent-blue-900 w-70' id='pass' type="text" />
                    {error.password && <p className="text-red-600 text-sm mt-1">{error.password}</p>}

                    </>
                )}
                {show && (
                    <>
                    <input name="confirmpassword" value={formData.confirmpassword} onChange={handleChange} placeholder='Confirm Password' className='p-2 m-1 border rounded-md focus:border-amber-600 hover:border-amber-700 focus:accent-blue-900 w-70' id='cnfpass' type="text" />
                    {error.confirmpassword && <p className="text-red-600 text-sm mt-1">{error.confirmpassword}</p>}

                    </>
                )}
            </div>
        </>
    ) :(
    <>
        <div className='flex flex-col mt-3 justify-center items-center'>
            <input name="email" value={formData.email} onChange={handleChange} placeholder='Email' className='p-2 m-1 border rounded-md focus:border-amber-600 hover:border-amber-700 focus:accent-blue-900 w-70' id='mail' type="text" />
            {error.email && <p className="text-red-600 text-sm mt-1">{error.email}</p>}
            <input name="password" value={formData.password} onChange={handleChange} placeholder='Password' className='p-2 m-1 border rounded-md focus:border-amber-600 hover:border-amber-700 focus:accent-blue-900 w-70' id='cnfpass' type="text" />
            {error.password && <p className="text-red-600 text-sm mt-1">{error.password}</p>}

        </div>
        </>
    )}
        <div>
            <button onClick={handleSubmit} className='p-3 m-3 w-40 rounded-2xl text-white bg-blue-500 hover:bg-blue-600 cursor-pointer'>{show ? 'Register' : 'Login'}</button>
        </div>
        <p> {show ? 'Already have an account?' : "Don't have an account?"}{' '} <a className='underline text-blue-500 cursor-pointer' onClick={() => setShow(!show)} type='text'>{show ? 'Login' : 'Register'}</a></p>
        </div>
    </div>
  )
}

export default Login
