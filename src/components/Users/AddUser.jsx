import React, { useState, Fragment, useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from '../../styles/components/AddUser.module.css';

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const newName = nameInputRef.current.value;
    const newAge = ageInputRef.current.value;
    if (newName.trim().length === 0 || newAge.trim().length === 0) {
      setError({
        title: 'Missing Input',
        message: 'Either or both of the name and age are missing.'
      })
      return;
    }
    if (+newAge < 1) {
      setError({
        title: 'Invalid Age',
        message: 'Age must be greater than or equal to 1.'
      })
      return;
    }
    // log input before
    // console.log(enteredUsername, enteredAge);
    // console.log('passed validation!');

    // later, wire up parent props function!
    props.onAddUser(newName, newAge);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
          <form>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              ref={nameInputRef}
            />
            <label htmlFor="age">Age (Years)</label>
            <input
              id="age"
              type="number"
              ref={ageInputRef}
            />
            <Button type="submit" onClick={addUserHandler}>Add User</Button>
          </form>
        </Card>
    </Fragment>
  );
};

export default AddUser;
