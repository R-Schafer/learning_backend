function UserPageHeaderImage({ findUserInfo }) {
  return (
    <img
      src={findUserInfo.image}
      alt="random pic"
      width="135"
      height="135"
      className="rounded-circle me-2"
    />
  );
}

export default UserPageHeaderImage;
