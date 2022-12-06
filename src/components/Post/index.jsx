import React from 'react';
import { format, formatDistanceToNow } from 'date-fns'

import Avatar from '../../Avatar';
import Comment from '../Comment';

import styles from './Post.module.css'

function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(publishedAt, "LLLL d 'at' HH:mm'h'")
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { addSuffix: true })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>

            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map(item => {
          if(item.type === 'paragraph') return <p>{item.content}</p>
          else if (item.type === 'link') return <p><a href="#">{item.content}</a></p>
        })}

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your feedback</strong>

        <textarea placeholder="Leave a comment" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      <div className={styles.commentLIst}>
        <Comment />
        
        <Comment />
        
        <Comment />
      </div>
    </article>
  );
}

export default Post;