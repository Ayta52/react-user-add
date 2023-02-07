import './App.css';
import { useState } from 'react';
import UserForm from './User/UserForm/UserForm';
import UserList from './User/UserList/UserList';

function App(props) {

  const [userList, setUserList] = useState([])

  const createUserHandler = (name, age) => {
    setUserList((prevUserList) => {
      return [...prevUserList, { name: name, age: age, id: Math.random().toString() }]
    });
  }

  return (
    <div >
      <UserForm onCreateUser={createUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
