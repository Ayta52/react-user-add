import styles from './index.module.css'


const UserForm = () => {
  return (
    <form >
      <div className={styles['form-control']}>
        <div >
          <label htmlFor="">ФИО</label>
          <input type="text" />
        </div>
        <div >
          <label htmlFor="">Возраст</label>
          <input type="text" />
        </div>
      </div>
      <div className='new-todo__actions'>
        <button type='submit'>Добавить дело</button>
        <button type='button'>Отмена</button>
      </div>
    </form>
  )
}

export default UserForm