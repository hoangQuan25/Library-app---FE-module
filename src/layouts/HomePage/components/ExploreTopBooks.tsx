import { Link } from "react-router-dom";

export const ExploreTopBooks = () => {
  return (
    <div className="p-5 mb-4 bg-dark header">
      <div className="container-fluid py-5 text-white 
      d-flex justify-content-center align-items-center">
        <div>
          <h1 className="display-5 fw-bold">Khám phá con đường mới của bạn.</h1>
          <p className="col-md-8 fs-4">Bạn muốn đi đâu tiếp theo?</p>
          <Link type="button" className="btn btn-primary main-color btn-lg text-white" to="/search">Khám phá những cuốn sách hay nhất.</Link>
        </div>
      </div>
    </div>
  );
}