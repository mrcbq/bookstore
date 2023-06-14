import PropTypes from 'prop-types';

import Button from './Button';

const AddForm = ({
  handleAdd, handleTitle, handleAuthor,
}) => (
  <form onSubmit={handleAdd}>
    <label htmlFor="bookTitle">
      Title
      <input
        type="text"
        name="title"
        id="bookTitle"
        placeholder="Title"
        onChange={handleTitle}
      />
    </label>
    <br />
    <label htmlFor="bookAuthor">
      Author
      <input
        type="text"
        name="author"
        id="bookAuthor"
        placeholder="Author"
        onChange={handleAuthor}
      />
    </label>
    <br />
    <Button onClick={handleAdd} text="Add Book" />
  </form>
);

export default AddForm;

AddForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleTitle: PropTypes.func.isRequired,
  handleAuthor: PropTypes.func.isRequired,
};
