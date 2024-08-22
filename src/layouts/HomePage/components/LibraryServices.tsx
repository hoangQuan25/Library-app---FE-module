import { Link } from 'react-router-dom';
import { useAuth } from '../../../Auth/AuthContext';

export const LibraryServices = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="container my-5">
      <div className="row p-4 align-items-center border shadow-lg">
        <div className="col-lg-7 p-3">
          <h1 className="display-4 fw-bold">
            Không tìm thấy thứ bạn cần?
          </h1>
          <p className="lead">
            Nếu không tìm thấy thứ mình cần,
            đừng ngại gửi cho chúng tôi một tin nhắn!
          </p>
          <div className="d-grid gap-2 justify-content-md-start mb-4 mb-lg-3">
            {isAuthenticated ? (
              <Link to="#" className="btn btn-primary btn-lg main-color">
                Libary services
              </Link>
            ) : (
              <Link to="/login" className="btn btn-primary btn-lg main-color">
                Signup
              </Link>
            )}
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 shadoww-lg lost-image"></div>
      </div>
    </div>
  );
}