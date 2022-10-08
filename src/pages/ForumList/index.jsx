import { TableForuns } from "../../components/TableForuns";

import style from './ForumList.module.css'

export function ForumList() {
  return (
    <div className={style.wrapper}>
      <header>
        <h1>Foruns Abertos</h1>

        <button>Criar novo tópico</button>
      </header>

      <TableForuns />
    </div>
  )
}