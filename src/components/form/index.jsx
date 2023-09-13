import styles from "./Form.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";

function FormModal({
  getProd,
  handleSubmit,
  prod: { name, price, category, description, quantity },
  formModalOpen,
  closeModal,
}) {
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
            value={name}
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
            value={price}
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
            value={quantity}
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
            value={description}
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

export default FormModal;
