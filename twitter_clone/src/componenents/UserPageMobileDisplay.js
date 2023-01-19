function UserPageMobileDisplay({ userInfo }) {
  return (
    <div className="w-100 bg-black border-top border-light border-opacity-25">
      <h1>USER Page Mobile Display</h1>
      <span>{userInfo.username}</span>
    </div>
  );
}

export default UserPageMobileDisplay;
