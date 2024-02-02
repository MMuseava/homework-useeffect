import React from 'react'
import UseRow from '../useRow/UserRow';
import "./userList.style.css"

const UsersList = ({ userList, onDeleteHandler }) => {
    return (
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
                {userList.map((el) => (
                    <UseRow
                        key={el.id}
                        user={el}
                        onDeleteHandler={onDeleteHandler}
                       
                    />
                ))}
            </tbody>
        </table>

    );
};

export default UsersList