import React from 'react'
import PropTypes from 'prop-types'
import { FaRegTrashAlt } from "react-icons/fa";
import "./useRow.style.css"

const UseRow = ({ user, onDeleteHandler }) => {
  const {id,name,salary,meritalStatus,phone,email,website} = user
  return (
    <tr>
      <td>{ id}</td>
      <td>{ name}</td>
      <td>{ phone}</td>
      <td>{ email}</td>
      <td>{ salary}</td>
      <td>{meritalStatus}</td>
      <td> <button onClick={()=> onDeleteHandler(id)}><FaRegTrashAlt /></button> </td>
      
    </tr>
  )
}

UseRow.propTypes = {}

export default UseRow