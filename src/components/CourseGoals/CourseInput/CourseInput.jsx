import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Button from '../../UI/Button/Button';

const CourseInput = ({ onAddGoal }) => {
  const [enteredValue, setEnteredValue] = useState('');

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="goal">
          Course Goal
          <input type="text" id="goal" onChange={goalInputChangeHandler} />
        </label>
      </div>
      <Button>Add Goal</Button>
    </form>
  );
};

export default CourseInput;

CourseInput.propTypes = {
  onAddGoal: PropTypes.func.isRequired,
};
