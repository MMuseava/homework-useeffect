import React from 'react'
import PropTypes from 'prop-types'
import { FaRegTrashAlt } from "react-icons/fa";
import "./userRow.style.css"

const UserRow = ({ user, onDeleteHandler }) => {
  const {id,name,salary,meritalStatus,phone,email} = user
  return (
    <tr>
      <td>{ id}</td>
      <td>{ name}</td>
      <td>{ phone}</td>
      <td>{ email}</td>
      <td>{ salary}</td>
      <td>{meritalStatus}</td>
      <td>
        <button onClick={() => onDeleteHandler(id)}><FaRegTrashAlt /></button> 
       </td>
      
    </tr>
  )
}

UserRow.propTypes = {}

export default UserRow