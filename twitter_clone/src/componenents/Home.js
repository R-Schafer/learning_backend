import LeftPanel from "./LeftPanel";
import CenterPanel from "./CenterPanel";
import RightPanel from "./RightPanel";

function Home() {
  return (
    <div className="container-lg h-100 d-flex justify-content-center bg-black">
      <div className=" d-flex">
        <section className="d-sm-flex d-none flex-column flex-shrink-0 py-3 pe-3 border-end border-light border-opacity-25">
          <LeftPanel />
        </section>
        <section className="w-100 p-10 d-flex ">
          <CenterPanel />
        </section>
        <section className="d-lg-flex d-none flex-column flex-shrink-0 p-3 border-start border-light border-opacity-25">
          <RightPanel />
        </section>
      </div>
    </div>
  );
}

export default Home;
