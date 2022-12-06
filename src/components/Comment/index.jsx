import React from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

import Avatar from '../../Avatar';

import styles from './Comment.module.css'

function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Chagas</strong>

              <time title="May 11 at 08:30h" dateTime="2022-05-11 08:13:30">About 1 hour ago</time>
            </div>

            <button title="Delete comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Comment;