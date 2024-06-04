import React, { useRef } from 'react'
import classes from './NewMeetupForm.module.css'
import Card from '../ui/Card';

const NewMeetupForm = () => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor='title'>모임 이름</label>
          <input
            type='text'
            required
            id='title'
            ref={titleInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>모임 사진</label>
          <input
            type='url'
            required
            id='image'
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>주소</label>
          <input
            type='text'
            required
            id='address'
            ref={addressInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>주소</label>
          <input
            type='text'
            required
            id='address'
            ref={addressInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>설명</label>
          <textarea
            type='text'
            required
            rows='5'
            id='description'
            ref={descriptionInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>모임 생성하기</button>
        </div>
      </form>
    </Card>
  )
}

export default NewMeetupForm
