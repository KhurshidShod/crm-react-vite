import styles from "./Form.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
import PropTypes from 'prop-types'
import { memo } from "react";

function FormModal({
  getProd,
  handleSubmit,
  prod,
  formModalOpen,
  closeModal,
}) {
  console.log('Form')
  return (
    <div
      className={`${styles.formModalWrapper} ${
        formModalOpen ? styles.open : null
      }`}
    >
      <form action="" onSubmit={handleSubmit}>
        <button onClick={closeModal} className={styles.closeModal}>
          <AiOutlineCloseCircle />
        </button>
        <div className={styles.inputGroup}>
          <input
            required
            value={prod.name}
            autoComplete="off"
            onChange={getProd}
            type="text"
            name=""
            id="name"
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className={styles.inputGroup}>
          <input
            required
            value={prod.price}
            autoComplete="off"
            onChange={getProd}
            type="number"
            name=""
            id="price"
          />
          <label htmlFor="price">Price</label>
        </div>
        <div className={styles.inputGroup}>
          <select
            required
            name=""
            id="category"
            defaultValue={0}
            onChange={getProd}
          >
            <option value="">Category</option>
            <option value="Technology">Technology</option>
            <option value="Food">Food</option>
            <option value="CLothes">Clothes</option>
          </select>
        </div>
        <div autoComplete="off" className={styles.inputGroup}>
          <input
            required
            value={prod.quantity}
            type="number"
            name=""
            onChange={getProd}
            id="quantity"
          />
          <label htmlFor="quantity">Quantity</label>
        </div>
        <div className={styles.inputGroup}>
          <textarea
            required
            name=""
            onChange={getProd}
            id="description"
            cols="30"
            rows="10"
            value={prod.description}
            placeholder="Description"
          ></textarea>
        </div>
        <div className={styles.inputGroup}>
          <button type="submit">Add product</button>
        </div>
      </form>
    </div>
  );
}

FormModal.propTypes = {
  getProd: PropTypes.func,
  handleSubmit: PropTypes.func,
  prod: PropTypes.object,
  formModalOpen: PropTypes.bool,
  closeModal: PropTypes.func
}

const memoFormModal = memo(FormModal)

export default memoFormModal;
