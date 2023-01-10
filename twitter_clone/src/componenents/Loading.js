import "../styles/Loading.css";

function Loading() {
  return (
    <div className="container-lg h-100 d-flex justify-content-center bg-black">
      <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
    </div>
  );
}

export default Loading;
