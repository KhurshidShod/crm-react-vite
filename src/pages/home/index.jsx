import styles from "./HomePage.module.scss";
import FormModal from "../../components/form";
import { Fragment, useCallback, useState } from "react";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import Header from "../../components/header";
import Card from "../../components/card";
import Filter from "../../components/filter";

function HomePage() {
  const productsJson = localStorage.getItem("products");
  const [products, setProducts] = useState(JSON.parse(productsJson) || []);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [search, setSearch] = useState('')
  const filteredProducts = products.filter(prod => prod.name.toLowerCase().includes(search.trim().toLowerCase()))
  const [prod, setProd] = useState({
    name: "",
    price: "",
    category: "",
    quantity: "",
    description: "",
  });
  const closeModal = (e) => {
    e.preventDefault();
    setFormModalOpen(false);
    setProd({
      name: "",
      price: "",
      category: "",
      quantity: "",
      description: "",
    });
  };
  const getProd = (e) => {
    setProd({ ...prod, [e.target.id]: e.target.value });
  };
  const handleSubmit = useCallback((e) => {
    let newProducts = [...products, { ...prod, id: v4() }];
    e.preventDefault();
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
    toast.success("Product added successfully");
    setFormModalOpen(false);
    setProd({
      name: "",
      price: "",
      category: "",
      quantity: "",
      description: "",
    });
  });
  const getSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <Fragment>
      <Header openModal={() => setFormModalOpen(true)} />
      <FormModal
        closeModal={closeModal}
        formModalOpen={formModalOpen}
        getProd={getProd}
        prod={prod}
        handleSubmit={handleSubmit}
      />
      <section className={styles.home}>
        <div className="container">
          <div className={styles.home__wrapper}>
            <div className={styles.home__wrapper_header}>
              <Filter search={search} getSearch={getSearch} />
            </div>
            <div className={styles.home__wrapper_cards}>
              {filteredProducts.length ? filteredProducts.map((prod) => (
                <Card key={prod.id} {...prod} />
              )) : <h1>No products</h1>}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default HomePage;
