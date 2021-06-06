import styles from './Search.module.css'
import { BsSearch } from 'react-icons/bs';
import { useState } from 'react'
export default function Search(){

  const [value, setValue] = useState('');

  function submitHandler(event){
    event.preventDefault()
    console.log('submitted', value)
  }

  console.log(value)
  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.searchInput}>
              <BsSearch className={styles.Icon}/>
              <input onChange={e => setValue(e.target.value)}/>
          </div>
      </form>
    </div>
  )
}