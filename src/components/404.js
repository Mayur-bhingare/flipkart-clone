import { Link } from "react-router-dom";

const PageNotFround = () => {
  return (
    <>
      <h1 className="text-center mt-5 display-3 text-danger ">
        Page Not Found <i class="fa fa-frown-o" aria-hidden="true"></i>
      </h1>
      <h1 className="text-center mt-5 display-3 text-danger ">
        CLICK
        <Link className="mx-2" to="/">
          HERE
        </Link>
        for
      </h1>
    </>
  );
};

export default PageNotFround;
