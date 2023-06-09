export default function Book({
  gender,
  title,
  author,
  progress,
  current_chapter,
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
          <button className="action">Comments</button>
          <div className="vertical-separator">|</div>
          <button className="action" type="button" onClick={() => handleDelete(id)}>Remove</button>
          <div className="vertical-separator">|</div>
          <button className="action">Edit</button>
        </div>
      </div>
      <div>
        <div>
          <div className="img-progress"></div>
          <div>
            <div>{progress}%</div>
            <p>Completed</p>
          </div>
        </div>
        <div className="vertical-separator">|</div>
        <div>
          <p>CURRENT CHAPTER</p>
          <p>{current_chapter}</p>
          <button>UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
}


Book.PropTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
