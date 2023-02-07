import { useState } from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import styles from './UserForm.module.css'
import ErrorModal from '../UI/ErrorModal'

const UserForm = (props) => {

  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');


  const createUserHandler = (event) => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      return;
    }
    if (+inputAge < 1) {
      return;
    }
    props.onCreateUser(inputName, inputAge)
    setInputName('')
    setInputAge('')
  }

  const nameChangeHanlder = (event) => {
    setInputName(event.target.value)
  }

  const ageChangeHanlder = (event) => {
    setInputAge(event.target.value)
  }

  return (
    <div>
      <ErrorModal tittle="Прозошла ошибка" message="Что-то пошло не так..." />
      <Card className={styles.input}>
        <form onSubmit={createUserHandler}>
          <label htmlFor="name">ФИО</label>
          <input id='name' type="text" onChange={nameChangeHanlder} value={inputName} />
          <label htmlFor="age">Возраст</label>
          <input id='age' type="number" onChange={ageChangeHanlder} value={inputAge} />
          <Button type='submit'>Добавить Пользователя</Button>
        </form>
      </Card>
    </div>
  )
}

export default UserForm