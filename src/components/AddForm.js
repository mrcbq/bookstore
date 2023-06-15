import PropTypes from 'prop-types';
import Button from './Button';
import './AddForm.css';

const AddForm = ({ handleAdd, handleTitle, handleAuthor }) => (
  <section className="addBookForm">
    <div className="horizontal-divider" />
    <h2 className="form-title">ADD NEW BOOK</h2>
    <form className="add-form" onSubmit={handleAdd}>
      <label htmlFor="bookTitle">
        <input
          type="text"
          name="title"
          id="bookTitle"
          placeholder="Book title"
          onChange={handleTitle}
        />
      </label>
      <br />
      <label htmlFor="bookAuthor">
        <input
          type="text"
          name="author"
          id="bookAuthor"
          placeholder="Author"
          onChange={handleAuthor}
        />
      </label>
      <br />
      <Button
        className="primary-button-big"
        onClick={handleAdd}
        text="Add Book"
      />
    </form>
  </section>
);

export default AddForm;

AddForm.propTypes = {
  handleAdd: PropTypes.func.isRequired,
  handleTitle: PropTypes.func.isRequired,
  handleAuthor: PropTypes.func.isRequired,
};
