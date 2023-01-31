function FollowPageImage({ handle }) {
  let imgSrc;

  if (handle === "raineys_clone") {
    imgSrc =
      "https://loremflickr.com/cache/resized/65535_52190227353_316ef748d0_z_640_480_nofilter.jpg";
  }

  if (handle === "npc4lyfe") {
    imgSrc =
      "https://loremflickr.com/cache/resized/65535_52519595207_d523042a16_c_640_480_nofilter.jpg";
  }

  if (handle === "thisisafake") {
    imgSrc =
      "https://loremflickr.com/cache/resized/65535_52066534019_3054e6bf1f_c_640_480_nofilter.jpg";
  }

  return (
    <img
      src={imgSrc}
      alt="randomly generated faker pic"
      width="50"
      height="50"
      className="rounded-circle me-2"
    />
  );
}

export default FollowPageImage;
