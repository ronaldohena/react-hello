import withRouter from "umi/withRouter";
import dynamic from "umi/dynamic";
import Link from "umi/link";
import { connect } from "dva";

function BasicLayout(props) {
  return (
    <div>
      <Link to="/">
        <button>Main Page</button>
      </Link>

      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/hello">
        <button>Hello</button>
      </Link>
      {props.children}
    </div>
  );
}

export default withRouter(BasicLayout);
