import { PropTypes } from 'prop-types';

import Button from './Button';
import './Book.css';

export default function Book({
  gender,
  title,
  author,
  progress,
  currentChapter,
  handleDelete,
  id,
}) {
  return (
    <div id="book">
      <div>
        <p className="gender">{gender}</p>
        <h2 className="title">{title}</h2>
        <p className="author">{author}</p>
        <div className="actions">
          <button type="button" className="action">
            Comments
          </button>
          <div className="vertical-separator" />
          <Button
            className="action"
            onClick={() => handleDelete(id)}
            text="Remove"
          />
          <div className="vertical-separator" />
          <button className="action" type="button">
            Edit
          </button>
        </div>
      </div>
      <div className="progress-container">
        <div className="circular-progress-container">
          <div className="circular-progress" />
        </div>
        <div>
          <div className="percent-complete">
            {progress}
            %
          </div>
          <p className="completed">Completed</p>
        </div>
        <div className="progress-divider" />
        <div className="current-chapter-container">
          <p className="current-chapter-label">CURRENT CHAPTER</p>
          <p className="current-chapter">{currentChapter}</p>
          <button className="primary-button" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}

Book.propTypes = {
  gender: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  progress: PropTypes.string,
  handleDelete: PropTypes.func,
  currentChapter: PropTypes.string,
  id: PropTypes.string,
};

Book.defaultProps = {
  gender: '',
  title: '',
  author: '',
  progress: '50',
  handleDelete: () => {},
  currentChapter: 'Chapter 17',
  id: 1,
};
