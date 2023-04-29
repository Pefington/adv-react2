import PropTypes from 'prop-types';
import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';

const CourseGoalList = ({ onDeleteItem, items }) => (
  <ul className="goal-list">
    {items.map((goal) => (
      <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
        {goal.text}
      </CourseGoalItem>
    ))}
  </ul>
);

export default CourseGoalList;

CourseGoalList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};
