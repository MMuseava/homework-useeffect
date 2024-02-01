import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import "./usersApp.style.css"
import UseRow from '../useRow/UseRow'

const url= "https://jsonplaceholder.typicode.com/users"

const UsersApp = props => {
  const [userList, setUserList] = useState([]);
  const [isUserFormOpen,setIsUserFormOpen ]=useState(true)
  
  useEffect(() => {
    getUsers();
  },[]);

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUserList(data)
      console.log(data)

    } catch (err) {
      console.log("error", err)
    }
  }

  const onDeleteHandler = (id) => {
    setUserList(userList.filter((user)=> user.id !== id))
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>phone</th>
            <th>email</th>
            <th>salary</th>
            <th>marital Status</th>
            <th>action</th>
            
          </tr>
        </thead>
        <tbody>
          {userList.map((el) =>
            <UseRow
              key={el.id}
              user={el}
              onDeleteHandler={onDeleteHandler}
          
            />
          )}
        </tbody>
      </table>
    </div>
  )
}

UsersApp.propTypes = {}

export default UsersApp