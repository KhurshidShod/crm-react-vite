import { memo } from "react";
import styles from "./Filter.module.scss";
import PropTypes from 'prop-types'

function Filter({ getSearch }) {
  console.log('Filter')
  return (
    <div className={styles.filter__wrapper}>
      <div>
        <div className={styles.inputGroup}>
          <label htmlFor="search">Search</label>
          <input autoComplete="off" onChange={getSearch} type="text" name="" id="search" />
        </div>
      </div>
      <div>
      <select name="" id="" value={0}>
        <option value="">Category</option>
          <option value="">Technology</option>
          <option value="">Food</option>
          <option value="">Clothes</option>
        </select>
        <button>asc</button>
      </div>
    </div>
  );
}

Filter.propTypes = {
  getSearch: PropTypes.func.isRequired,
}

const memoFilter = memo(Filter)

export default memoFilter;
