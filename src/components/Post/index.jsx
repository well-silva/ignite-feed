import { format, formatDistanceToNow } from 'date-fns';
import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'

import { useState } from "react";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([
    'muito legal!',
  ])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormat = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h", {
    locale: ptBR
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={ author.avatarUrl } />
          <div className={styles.authorInfo}>
            <strong>{ author.name }</strong>
            <span>{ author.role }</span>
          </div>
        </div>

        <time title={ publishedDateFormat } dateTime={publishedAt.toISOString()}>
          { publishedDateRelativeNow }
        </time>
      </header>

      <div className={styles.content}>
        { content.map( line => {
          if (line.type === 'paragraph') {
            return <p>{line.content}</p>
          } else if (line.type === 'link'){
            return <p><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          value={newCommentText}
          placeholder='Comente aqui'
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        { comments.map(comment => {
          return <Comment content={comment} />
        })}
      </div>
    </article>
  )
}
