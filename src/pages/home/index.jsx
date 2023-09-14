import styles from "./HomePage.module.scss";
import FormModal from "../../components/form";
import { Fragment, useCallback, useMemo, useState } from "react";
import { v4 } from "uuid";
import { toast } from "react-toastify";
import Header from "../../components/header";
import Card from "../../components/card";
import Filter from "../../components/filter";

function HomePage() {
  const productsJson = localStorage.getItem("products");
  const [products, setProducts] = useState(JSON.parse(productsJson) || []);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  // const [page, setPage] = useState(0)
  const [selected, setSelected] = useState(null)
  const filteredProducts = useMemo(() => products.filter((prod) =>
    prod.name.toLowerCase().includes(search.trim().toLowerCase())
  ), [products, search]);
  // const dataForMapping = filteredProducts.splice(0, 8)
  const [prod, setProd] = useState({
    name: "",
    price: Number(),
    category: "",
    quantity: Number(),
    description: "",
  });
  const closeModal = useCallback((e) => {
    e.preventDefault();
    setFormModalOpen(false);
    setProd({
      name: "",
      price: "",
      category: "",
      quantity: "",
      description: "",
    });
  }, []);
  const getProd = useCallback((e) => {
    setProd({ ...prod, [e.target.id]: e.target.value });
  }, [prod]);
  const handleSubmit = useCallback((e) => {
    if(selected === null){
      let newProducts = [...products, { ...prod, id: v4() }];
      e.preventDefault();
      setProducts(newProducts);
      localStorage.setItem("products", JSON.stringify(newProducts));
    } else {
      let newProducts = products.filter(prod => prod.id !== selected)
      setProducts([...newProducts, prod])
      localStorage.setItem('products', JSON.stringify([...newProducts, prod]))
    }
    toast.success("Product added successfully");
    setFormModalOpen(false);
    setProd({
      name: "",
      price: "",
      category: "",
      quantity: "",
      description: "",
    });
  }, [prod, products]);
  const getSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);
  const deleteProd = useCallback((id) => {
    let newProducts = products.filter((prod) => prod.id !== id);
    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  }, [products]);
  const changeQuant = useCallback((type, id) => {
    const newProds = products.filter((prod) => prod.id !== id);
    const prod = products.find((prod) => prod.id === id);
    if (type === "plus") {
      setProducts([{ ...prod, quantity: +prod.quantity + 1 }, ...newProds]);
      localStorage.setItem(
        "products",
        JSON.stringify([{ ...prod, quantity: +prod.quantity + 1 }, ...newProds])
      );
    } else {
      setProducts([{ ...prod, quantity: prod.quantity - 1 }, ...newProds]);
      if (prod.quantity === 1) {
        setProducts(newProds);
        localStorage.setItem("products", JSON.stringify(newProds));
      } else {
        localStorage.setItem(
          "products",
          JSON.stringify([
            { ...prod, quantity: prod.quantity - 1 },
            ...newProds
          ])
        );
      }
    }
  }, [products]);
  const editProd = useCallback(id => {                   
    const prod = products.find(prod => prod.id === id);
      setProd(prod)
      setFormModalOpen(true)
      setSelected(id)
  }, [products])
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
              {filteredProducts.length !== 0 ? (
                filteredProducts.map((prod) => (
                  <Card
                    incQuantity={changeQuant}
                    deleteProd={() => deleteProd(prod.id)}
                    key={prod.id}
                    prod={prod}
                    editProd={() => editProd(prod.id)}
                  />
                ))
              ) : (
                <h1>No products</h1>
              )}
            </div>
            {/* <div className={styles.home__wrapper_pagination}>
              <button onClick={() => {
                setPage(page-8)
                console.log(page)
              }}>left</button>
              {
                Array(Math.ceil(products.length / 8)).fill(0).map((el, idx) => (
                  <button key={idx}>{idx+1}</button>
                ))
              }
              <button onClick={() => {
                setPage(page+8)
                console.log(page)
              }}>right</button>
            </div> */}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default HomePage;
