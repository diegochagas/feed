import React from 'react';
import Avatar from '../../Avatar';

import Comment from '../Comment';

import styles from './Post.module.css'

function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png" />

          <div className={styles.authorInfo}>
            <strong>Diego Chagas</strong>

            <span>Front-end developer</span>
          </div>
        </div>

        <time title="May 11 at 08:13h" dateTime="2022-05-11 08:13:30">Published 1h ago</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="">jane.design/doctorcare</a></p>

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