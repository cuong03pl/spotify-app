import classNames from "classnames/bind";
import Banner from "../../components/Banner/Banner";
import Thumbnails from "../../components/Thumbnails/Thumbnails";
import styles from "./HomePage.module.scss";
import { useEffect } from "react";

const cx = classNames.bind(styles);

function HomePage() {
  const PATH_LISTS = [
    "playlists/1QBQZo09U7Al3NRhv2TXUx",
    "shows/4wHBViHYk6eG53SAuvU7vr",
    "playlists/7x1G4GGTxZieeXIQxWHQKb",
    "shows/2tSnlvxQFKXWlNm7UkYcpe",
    "shows/7Eo5RqrItEwmuwSJv5n6QZ",
    "shows/1gH67pqJCPLSqkogZmjlN8",
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
        "albums/1wmnEWgcDdCcOujQpLwYxc",
        "albums/10Dwjqs7dJNxn2g1PkvRCw",
        "albums/2DCbDdIBNRxx0SxLtgyd4D",
        "albums/03ZYR4zwCrkSsXTROnK2d0",
        "albums/1AaxmI2e1HRhbwe9XJGPnT",
        "albums/4faMbTZifuYsBllYHZsFKJ",
        "albums/7kFyd5oyJdVX2pIi6P4iHE",
      ],
      title: "Album phổ biến",
    },
    {
      path: [
        "albums/3a9qH2VEsSiOZvMrjaS0Nu",
        "albums/79ONNoS4M9tfIA1mYLBYVX",
        "albums/6pOiDiuDQqrmo5DbG0ZubR",
        "albums/1nAQbHeOWTfQzbOoFrvndW",
        "albums/2MHUaRi9OCyTN02SoyRRBJ",
        "albums/5J4SS8wTmXdyIEVYjmHzpZ",
        "albums/6DEjYFkNZh67HP7R9PSZvv",
      ],
      title: "Album đề xuất cho bạn",
    },
    {
      path: [
        "albums/1P7wZAMsCTQtRBdlEsStWN",
        "albums/3pprs1r3mH3UhU23TUHBWJ",
        "albums/1vi1WySkgPGkbR8NnQzlXu",
        "albums/1vWMw6pu3err6qqZzI3RhH",
        "albums/2KTHAp1v2iCntbFjNAOCUb",
        "albums/0LM9Cm43Sug8Hfpm84qmt6",
      ],
      title: "Dành Cho Bạn",
    },
    
  ];
  useEffect(() => {
    window.document.title = `Spotify - Web Player: Music for everyone `;
  }, []);
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
