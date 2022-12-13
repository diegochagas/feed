import React, { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import Avatar from '../Avatar';

import styles from './Comment.module.css'

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void
}

function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment () {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(prevState => prevState + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" alt="Diego Chagas profile picture" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Chagas</strong>

              <time title="May 11 at 08:30h" dateTime="2022-05-11 08:13:30">About 1 hour ago</time>
            </div>

            <button title="Delete comment" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            
            Like <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment;