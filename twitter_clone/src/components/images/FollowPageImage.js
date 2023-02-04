function FollowPageImage({ handle }) {
  let imgSrc;

  if (handle === "raineys_clone") {
    imgSrc =
      "https://fastly.picsum.photos/id/684/640/480.jpg?hmac=mJVri0X13MUdoDVCAdJ-Xcpq5-yGcAtrW_rKtR1myMg";
  }

  if (handle === "npc4lyfe") {
    imgSrc =
      "https://fastly.picsum.photos/id/870/640/480.jpg?hmac=xE4MwAiwrqT-CKbcjlHy6mSKld8aoZC3wBUUaJnqXE8";
  }

  if (handle === "thisisafake") {
    imgSrc =
      "https://fastly.picsum.photos/id/281/640/480.jpg?hmac=QFx0lJFET73U0tjlrWJXoJ6TVQ35Dn2hE8Vma61i8zk";
  }

  return (
    <img
      src={imgSrc}
      alt="random pic"
      width="50"
      height="50"
      className="rounded-circle me-2"
    />
  );
}

export default FollowPageImage;
