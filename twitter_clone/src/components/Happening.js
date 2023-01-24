function Happening() {
  return (
    <div className="d-flex text-left">
      <div className="col mb-4 ps-3 pt-3 bg-dark text-white card-body rounded-4">
        <h4>What's happening</h4>
        <div className="d-flex gap-2 w-100 pt-2 justify-content-between">
          <ul className="p-0 m-0">
            <li className="pb-3">
              <span className="opacity-50">
                <small>Trending</small>
              </span>
              <h6 className="mb-0">
                <strong>Rainey's Twitter</strong>
              </h6>
              <span className="opacity-50">
                <small>45.6K Tweets</small>
              </span>
            </li>
            <li className="pb-3">
              <span className="opacity-50">
                <small>Trending</small>
              </span>
              <h6 className="mb-0">
                <strong>Awesome Clone</strong>
              </h6>
              <span className="opacity-50">
                <small>17.2K Tweets</small>
              </span>
            </li>
            <li className="pb-3">
              <span className="opacity-50">
                <small>Trending</small>
              </span>
              <h6 className="mb-0">
                <strong>#twitterclone</strong>
              </h6>
              <span className="opacity-50">
                <small>71.3K Tweets</small>
              </span>
            </li>
            <li className="pb-3">
              <span className="opacity-50">
                <small>Trending</small>
              </span>
              <h6 className="mb-0">
                <strong>#BestClone</strong>
              </h6>
              <span className="opacity-50">
                <small>10K Tweets</small>
              </span>
            </li>
            <li className="pb-3">
              <span className="show-more">
                <small>Show more</small>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Happening;
