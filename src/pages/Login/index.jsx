import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <form>
          <input type="text" placeholder='E-mail' />

          <input type="password" placeholder='Senha' />

          <div className={styles.grupButton}>
            <button type='submit'>Entrar</button>
            <button type='submit'>Criar conta</button>
          </div>
        </form>
      </div>
    </div>
  )
}