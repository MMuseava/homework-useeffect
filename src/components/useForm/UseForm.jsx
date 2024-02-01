import React, {useState } from 'react'
import PropTypes from 'prop-types'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";




import "./useForm.style.css"

const defaultData = {
  id: "",
  name: "",
  salary: "",
  email: "",
  phone: "",
  maritalStatus: "",
};

const UseForm = ({addUserHandler}) => {
  const [userData, setUserData] = useState(defaultData);

  const onInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  };

  const onSubmitHandler = (e) => {
    e.preventDefault()
    addUserHandler(userData)
  };

  return (
    <div>
      <button><Bs1CircleFill /></button>
      <button><Bs2CircleFill /></button>
      <form onSubmit={onSubmitHandler}>
        <input
          type='text'
          name='name'
          value={userData.name}
          onChange={onInputChange }
          placeholder='Name'
        />
        <input
          type='tel'
          name='phone'
          value={userData.phone}
          onChange={ onInputChange }
          placeholder='Phone'
        />
        <input
          type='email'
          name='email'
          value={userData.email}
          onChange={ onInputChange }
          placeholder='Email'
        />
        <button type='submit'>
          <BsArrowRightCircleFill />
        </button>

      </form>
    </div>
  )
}

UseForm.propTypes = {}

export default UseForm