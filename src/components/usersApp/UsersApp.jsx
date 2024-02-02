import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import "./usersApp.style.css"
import UseRow from '../useRow/UserRow'
import UseForm from '../useForm/UseForm'
import UsersList from '../usersList/UsersList'

const url= "https://jsonplaceholder.typicode.com/users"

const UsersApp = props => {
  const [userList, setUserList] = useState([]);
  const [isUserFormOpen, setIsUserFormOpen] = useState(false);
  const [formData, setFormData] = useState({

    id: "",
    name: "",
    phone: "",
    email: "",
    salary: "",
    maritalStatus: "",
  });

  
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
    setUserList(userList.filter((user) => user.id !== id))
  };
  // const onEditHandler = (user) => {
  //   setFormData(user);
  //   setIsUserFormOpen(true);
  // };

  const addUserHandler = (user) => {
    setIsUserFormOpen(false);

    if (user.id) {
    
      setUserList((prevUsers) =>
        prevUsers.map((existingUser) =>
          existingUser.id === user.id ? user : existingUser
        )
      );
    } else {
    
      setUserList([...userList, { ...user, id: userList.length + 1 }]);
    }
  };


  return (
    <div className="users-app-container">
        <UseForm
        addUserHandler={addUserHandler}
        formData={formData}
        setFormData={setFormData}
        isUserFormOpen={isUserFormOpen}
        setIsUserFormOpen={setIsUserFormOpen}
      />
      <UsersList
        userList={userList}
        onDeleteHandler={onDeleteHandler}
       
      />
        
    </div>
  )
}

UsersApp.propTypes = {}

export default UsersApp