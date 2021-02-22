interface Profile {
  name: string;
  longName?: string;
  height: number;
  imgSrc: string;
}
const PROFILES_LIST: Array<Profile> = [
  {
    name: "SA",
    longName: "Spherical All",
    height: 16.5,
    imgSrc: "./profile-sa.svg",
  },
  {
    name: "Tai Hao",
    height: 14.8,
    imgSrc: "./profile-taihao.svg",
  },
  {
    name: "KAT",
    height: 13.5,
    imgSrc: "./profile-kat.svg",
  },
  {
    name: "OEM",
    height: 11.9,
    imgSrc: "./profile-oem.svg",
  },
  {
    name: "Cherry",
    height: 9.4,
    imgSrc: "./profile-cherry.svg",
  },
  {
    name: "XDA",
    height: 9.1,
    imgSrc: "./profile-xda.svg",
  },
  {
    name: "KAM",
    height: 9.1,
    imgSrc: "./profile-kam.svg",
  },
  {
    name: "DSA",
    height: 7.6,
    imgSrc: "./profile-dsa.svg",
  },
  {
    name: "G20",
    height: 7.1,
    imgSrc: "./profile-g20.svg",
  },
  {
    name: "TEA",
    height: 3.8,
    imgSrc: "./profile-tea.svg",
  },
  {
    name: "MBK",
    height: 3.2,
    imgSrc: "./profile-mbk.svg",
  },
  {
    name: "Apple",
    longName: "Apple Magic Keyboard",
    height: 2.3,
    imgSrc: "./profile-apple.svg",
  },
];

export { PROFILES_LIST }