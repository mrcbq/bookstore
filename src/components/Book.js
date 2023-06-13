import { PropTypes } from 'prop-types';

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
          <div className="vertical-separator">|</div>
          <button
            className="action"
            type="button"
            onClick={() => handleDelete(id)}
          >
            Remove
          </button>
          <div className="vertical-separator">|</div>
          <button className="action" type="button">
            Edit
          </button>
        </div>
      </div>
      <div>
        <div>
          <div className="img-progress" />
          <div>
            <div>
              {progress}
              %
            </div>
            <p>Completed</p>
          </div>
        </div>
        <div className="vertical-separator">|</div>
        <div>
          <p>CURRENT CHAPTER</p>
          <p>{currentChapter}</p>
          <button type="button">UPDATE PROGRESS</button>
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
  currentChapter: PropTypes.number,
  id: PropTypes.string,
};

Book.defaultProps = {
  gender: 'Action',
  title: 'One Hundred Years of Solitude',
  author: 'Gabriel Garcia Marquez',
  progress: '50',
  handleDelete: () => {},
  currentChapter: 1,
  id: 1,
};
