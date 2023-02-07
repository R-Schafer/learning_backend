function UserPageBanner({ findUserInfo }) {
  return (
    <img src={findUserInfo.banner} alt="random pic" className="banner-img" />
  );
}

export default UserPageBanner;
