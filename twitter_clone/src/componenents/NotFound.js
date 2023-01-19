import Icons from "../SVGs/Icons";

function NotFound() {
  return (
    <div className="container-xxxl h-100 d-flex flex-column justify-content-center">
      <div className="row justify-content-center">
        <div className="col-10 col-md-4 col-lg-4 col-xl-3 bg-dark rounded-3 text-center p-3">
          <Icons type="logo" />
          <h3 className="text-light">Could not find a user with that handle</h3>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
