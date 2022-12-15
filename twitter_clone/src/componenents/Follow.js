import Icons from "../SVGs/Icons";
import Image from "../images/Image";

function Follow() {
  return (
    <div className="d-flex text-left">
      <div className="col mb-4 ps-3 pt-3 bg-dark text-white card-body rounded-4">
        <h4>Who to follow</h4>
        <div className="d-flex gap-2 w-100 pt-2 justify-content-between">
          <ul className="p-0 m-0">
            <li className="pb-3 d-flex flex-row">
              <Image />
              <div className="d-flex flex-column w-100 py-2 justify-content-between">
                <h6 className="mb-0 d-flex flex-row">
                  <strong>Im a clone</strong>
                  <div className="ps-1">
                    <Icons type="verify" />
                  </div>
                </h6>
                <span className="opacity-50">
                  <small>@imaclone</small>
                </span>
              </div>
            </li>

            <li className="pb-3 d-flex flex-row">
              <Image />
              <div className="d-flex flex-column w-100 py-2 justify-content-between">
                <h6 className="mb-0 d-flex flex-row">
                  <strong>NPC</strong>
                  <div className="ps-1">
                    <Icons type="verify" />
                  </div>
                </h6>
                <span className="opacity-50">
                  <small>@npc4lyfe</small>
                </span>
              </div>
            </li>

            <li className="pb-3 d-flex flex-row">
              <Image />
              <div className="d-flex flex-column w-100 py-2 justify-content-between">
                <h6 className="mb-0 d-flex flex-row">
                  <strong>FakeFake</strong>
                  <div className="ps-1">
                    <Icons type="verify" />
                  </div>
                </h6>
                <span className="opacity-50">
                  <small>@thisisfake</small>
                </span>
              </div>
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

export default Follow;
