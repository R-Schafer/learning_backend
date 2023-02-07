function UserPageImage({ findUserInfo }) {
  return (
    <img
      src={findUserInfo.image}
      alt="random pic"
      width="50"
      height="50"
      className="rounded-circle me-2"
    />
  );
}

export default UserPageImage;
