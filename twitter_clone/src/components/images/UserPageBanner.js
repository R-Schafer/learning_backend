function UserPageBanner({ findUserInfo }) {
  return (
    <img
      src={findUserInfo.banner}
      alt="randomly generated faker pic"
      className="banner-img"
    />
  );
}

export default UserPageBanner;
