import router from "umi/router";
import styles from "./name.css";

export default function(props) {
  const name = props.match.params.name || "";

  return (
    <>
      <div className={styles.normal}>
        <h1>Hello {name}</h1>
      </div>
    </>
  );
}
