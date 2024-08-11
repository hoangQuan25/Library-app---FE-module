export const Heroes = () => {
  return (
    <div>
      <div className="d-none d-lg-block">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Bạn đang đọc gì?</h1>
              <p className="lead">
                Chúng tôi mong muốn được biết bạn đang đọc gì.
                Cho dù là để giải trí hay để tiếp thu kiến thức mới,
                chúng tôi luôn có thể cung cấp những cuốn sách tốt nhất!
              </p>
              <a className="btn btn-primary btn-lg main-color" href="#">Sign up</a>
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Bộ sưu tập của chúng tôi luôn thay đổi!</h1>
              <p className="lead">
                Hãy nhớ ghé thăm mỗi ngày.
                Chúng tôi không ngừng làm việc để cung cấp những cuốn sách
                hay và chính xác nhất có thể. Chúng tôi luôn luôn chú trọng vào
                chất lượng sản phẩm, vì sách chính là sự ưu tiên cao nhất của
                chúng tôi.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="d-lg-none">
        <div className="container">
          <div className="m-2">
            <div className="col-image-left"></div>
            <div className="mt-2">
              <h1>Bạn đang đọc gì?</h1>
              <p className="lead">
                Chúng tôi mong muốn được biết bạn đang đọc gì.
                Cho dù là để giải trí hay để tiếp thu kiến thức mới,
                chúng tôi luôn có thể cung cấp những cuốn sách tốt nhất!
              </p>
              <a className="btn btn-primary btn-lg main-color" href="#">Sign up</a>
            </div>
          </div>
          <div className="m-2">
            <div className="col-image-right"></div>
            <div className="mt-2">
              <h1>Bộ sưu tập của chúng tôi luôn thay đổi!</h1>
              <p className="lead">
                Hãy nhớ ghé thăm mỗi ngày.
                Chúng tôi không ngừng làm việc để cung cấp những cuốn sách
                hay và chính xác nhất có thể. Chúng tôi luôn luôn chú trọng vào
                chất lượng sản phẩm, vì sách chính là sự ưu tiên cao nhất của
                chúng tôi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}