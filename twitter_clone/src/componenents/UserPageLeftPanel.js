import UserPageLeftNavbar from "./UserPageLeftNavbar";

function UserPageLeftPanel() {
  return (
    <div className="h-100">
      <div className="h-100 d-flex flex-column justify-content-between">
        <UserPageLeftNavbar />
      </div>
    </div>
  );
}

export default UserPageLeftPanel;
