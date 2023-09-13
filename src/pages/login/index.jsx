import { useState } from "react";
import styles from "./LoginPage.module.scss";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginPage() {
  const [passOpen, setPassOpen] = useState(false);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const getUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    if (user.username !== "" && user.password == "0000") {
      localStorage.setItem("auth", true);
      navigate("/home");
      toast.success("Logged in successfully");
    } else {
      toast.error("Invalid user");
    }
  };

  return (
    <section className={styles.login}>
      <div className="container">
        <div className={styles.wrapper}>
          <form action="" onSubmit={login}>
            <div className={styles.inputGroupHeader}>
              <h1>Log In</h1> <p>0000</p>
            </div>
            <div className={styles.inputGroup}>
              <input
                required
                type="text"
                autoComplete="off"
                name=""
                value={user.username}
                id="username"
                onChange={(e) => getUser(e)}
              />
              <label htmlFor="username">Name</label>
            </div>
            <div className={styles.inputGroup}>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPassOpen(!passOpen);
                  setTimeout(() => {
                    setPassOpen(false);
                  }, 1250);
                }}
              >
                {passOpen ? "🙉" : "🙈"}
              </button>
              <input
                required
                autoComplete="off"
                value={user.password}
                onChange={(e) => getUser(e)}
                type={passOpen ? "text" : "password"}
                name=""
                id="password"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className={styles.inputGroup}>
              <button type="submit">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
