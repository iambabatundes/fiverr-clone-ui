const gigDatas = [
  {
    id: 1,
    gigTitle: "I will create custom animated gifs for you",
    gigVideo: "./gigVideo1.mp4",
    bgImg: "/gigbgImg1.png",
    profileImg: "/gigsProfileImg1.webp",
    username: "John Smith",
    level: "Level 2 Seller",
    starRate: 4.4,
    proVerifiedImg: "/proBadge.svg",
    isOnline: true,
    starPoint: "(502)",
    price: "150",
  },

  {
    id: 2,
    gigTitle: "I will create custom animated gifs for you",
    gigVideo: "./gigVideo2.mp4",
    bgImg: "/gigbgImg2.png",
    profileImg: "/gigsProfileImg1.webp",
    username: "John Smith",
    level: "Level 2 Seller",
    starRate: 4.9,
    proVerifiedImg: "/proBadge.svg",
    isOnline: "isOnline",
    starPoint: "(29)",
    price: "150",
  },
  {
    id: 3,
    gigTitle: "I will create custom animated gifs for you",
    gigVideo: "./gigVideo3.mp4",
    bgImg: "/gigbgImg3.png",
    profileImg: "/gigsProfileImg1.webp",
    username: "John Smith",
    level: "Level 2 Seller",
    starRate: 4.9,
    // proVerifiedImg: "/proBadge.svg",
    starPoint: "(502)",
    price: "150",
  },
  {
    id: 4,
    gigTitle: "I will create custom animated gifs for you",
    gigVideo: "./gigVideo4.mp4",
    bgImg: "/gigbgImg4.png",
    profileImg: "/gigsProfileImg1.webp",
    username: "John Smith",
    level: "Level 2 Seller",
    starRate: 4.0,
    starPoint: "(18)",
    price: "150",
  },
];

export function getGigDatas() {
  return gigDatas;
}

export function getGigData(id) {
  return getGigDatas.find((p) => p._id === id);
}
