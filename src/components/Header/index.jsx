import styles from './Header.module.css'

export function Header() {
  return (
    <div className={styles.container_header}>
      <header className={styles.header}>
        <img src='https://www.uva.br/wp-content/themes/uva-theme/dist/images/header_logo.svg' alt="Logotipo do Ignite" />

        <div className={styles.menu}>
          <a href="#">Home</a>
          <a href="#">Perfil</a>
          <a href="#">Novidades</a>
        </div>
      </header>
    </div>
  )
}