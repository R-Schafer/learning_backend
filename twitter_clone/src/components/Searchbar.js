import Icons from "../SVGs/Icons";

function Searchbar() {
  return (
    <div className="search form-control bg-dark mb-3 d-flex flex-row border border-0 rounded-pill">
      <div className="pt-2 ps-2 opacity-25">
        <Icons type="search" />
      </div>

      <input
        name="search"
        id="search"
        type="text"
        className="form-control bg-dark"
        placeholder="Fake Search"
      />
    </div>
  );
}

export default Searchbar;
