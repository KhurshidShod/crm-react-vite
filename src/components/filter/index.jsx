import styles from "./Filter.module.scss";

function Filter({ getSearch }) {
  return (
    <div className={styles.filter__wrapper}>
      <div>
        <div className={styles.inputGroup}>
          <label htmlFor="search">Search</label>
          <input autoComplete="off" onChange={getSearch} type="text" name="" id="search" />
        </div>
      </div>
      <div>
        <select name="" id=""></select>
      </div>
    </div>
  );
}

export default Filter;
