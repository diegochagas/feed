import React, { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns'

import Avatar from '../Avatar';
import Comment from '../Comment';

import styles from './Post.module.css'

function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(['Really cool post!'])
  const [newComment, setNewComment] = useState('')
  const publishedDateFormatted = format(publishedAt, "LLLL d 'at' HH:mm'h'")
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { addSuffix: true })
  const isNewCommentEmpty = newComment.length === 0

  function handleCreateNewComment(event) {
    event.preventDefault()

    setComments([...comments, newComment])

    setNewComment('')
  }

  function handeNewCommentChange(event) {
    // event.taget.setCustomValidity('')

    setNewComment(event.target.value)
  }

  /* function handleNewCommentInvalid(event) {
    event.target.setCustomValidity('This field is required')
  } */

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => comment !== commentToDelete)
    
    setComments(commentsWithoutDeletedOne)
  }

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

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(item => (
          <p key={item.id}>
            {(item.type === 'paragraph') && item.content}
            {(item.type === 'link') && <a href="#">{item.content}</a>}
            {(item.type === 'hashtag') && item.content.map(hashtag => <a key={hashtag.id} href="">#{hashtag.content} </a>)}
          </p>
        ))}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Leave your feedback</strong>

        <textarea
          name="comment"
          placeholder="Leave a comment"
          value={newComment}
          onChange={handeNewCommentChange}
          // onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publish
          </button>
        </footer>
      </form>

      <div className={styles.commentLIst}>
        {comments.map(comment => <Comment key={comment} content={comment} onDeleteComment={deleteComment} />)}
      </div>
    </article>
  );
}

export default Post;