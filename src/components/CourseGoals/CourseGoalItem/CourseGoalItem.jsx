import PropTypes from 'prop-types';
import React from 'react';

const CourseGoalItem = ({ id, onDelete, children }) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler} aria-hidden="true">
      {children}
    </li>
  );
};

export default CourseGoalItem;

CourseGoalItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
