import classNames from "classnames/bind";
import Banner from "../../components/Banner/Banner";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import styles from "./HomePage.module.scss";
const cx = classNames.bind(styles);

const PATH_LISTS = [
  "playlists/37i9dQZF1DX29nkpzsmQhh",
  "shows/4wHBViHYk6eG53SAuvU7vr",
  "playlists/37i9dQZF1DWVOaOWiVD1Lf",
  "shows/2tSnlvxQFKXWlNm7UkYcpe",
  "playlists/37i9dQZF1EIXqYrHa9wbxP",
  "playlists/37i9dQZF1E39Nj4cAIW2dL",
];

const PATH_LISTS1 = [
  {
    path: [
      "shows/4wHBViHYk6eG53SAuvU7vr",
      "shows/1MfSficM6F44lmjdbuTF1A",
      "shows/7Eo5RqrItEwmuwSJv5n6QZ",
      "shows/1gH67pqJCPLSqkogZmjlN8",
      "shows/2tSnlvxQFKXWlNm7UkYcpe",
      "shows/3779wCs52frlXzq4AdvSeG",
      "shows/3KAOtwtuHrBznKxkQfY0v6",
    ],
    title: "Chương trình của bạn ",
  },
  {
    path: [
      "playlists/37i9dQZF1E4ENzBpSxzc0j",
      "playlists/37i9dQZF1DX0F4i7Q9pshJ",
      "playlists/37i9dQZF1DX4g8Gs5nUhpp",
      "playlists/37i9dQZF1DWVOaOWiVD1Lf",
      "playlists/37i9dQZF1DWYLMi9ZNZUaz",
      "playlists/37i9dQZF1DXbnGLxyfE2f5",
    ],
    title: "Khám phá thêm nhạc của Madihu ",
  },
  {
    path: [
      "playlists/37i9dQZF1E39Nj4cAIW2dL",
      "playlists/37i9dQZF1E395qrlz7ANlx",
      "playlists/37i9dQZF1E35827Vojjvm6",
      "playlists/37i9dQZF1E37S23lOyHeC0",
      "playlists/37i9dQZF1E3985PzO9KM4J",
      "playlists/37i9dQZEVXcNODz12DP8Gn",
      "playlists/37i9dQZEVXbmvGUCI8TyAX",
    ],
    title: "Dành Cho Bạn ",
  },
  {
    path: [
      "playlists/37i9dQZF1DX1e2VSJFudND",
      "playlists/37i9dQZF1DWSqmBTGDYngZ",
      "playlists/37i9dQZF1DWZd79rJ6a7lp",
      "playlists/37i9dQZF1DX8ndGHjS8CWd",
      "playlists/37i9dQZF1DWYshp3qt6eyW",
      "playlists/37i9dQZF1DX0PE4eN3rxsW",
      "playlists/37i9dQZF1DWWQRwui0ExPn",
    ],
    title: "Tâm Trạng",
  },
  {
    path: [
      "playlists/37i9dQZF1DWYXyOUMgURXb",
      "playlists/37i9dQZF1DXbnGLxyfE2f5",
      "playlists/37i9dQZF1DX22YYiDtiJfD",
      "playlists/37i9dQZF1DX29nkpzsmQhh",
      "playlists/37i9dQZF1DX0Bm9rVRYPcY",
      "playlists/37i9dQZF1DXd6eRC1rN02a",
    ],
    title: "Hoài Niệm",
  },
];
function HomePage() {
  return (
    <div className={cx("wrapper")}>
      <Banner path={PATH_LISTS} />
      {PATH_LISTS1.map((item, index) => {
        return <Thumbnails key={index} path={item?.path} title={item.title} />;
      })}
    </div>
  );
}

export default HomePage;
