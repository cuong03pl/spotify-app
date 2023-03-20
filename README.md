import scss
tao Layouts ( components, DefaultLayout)
Cau hinh Router
tao cac Page
set width, height cua Layout

import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);

config api axios

<!-- bai hat demo  -->

https://p.scdn.co/mp3-preview/4df38b27b145e6e2d180a0790e991af3eef99d86?cid=e5ad9e10b9b342db80cc06db790359f7

code homepage, cau hinh den playlist, call api
37i9dQZF1DX29nkpzsmQhh

convert time, ngay, title intro
toggle follow, sao chép đường liên kết

phần title của banner

ui + logic search, page ...

useEffect(() => {
if (location.key === "default") {
setPrev(false);
} else setPrev(true);
}, [location.key]);

phần nghệ sĩ, playlist
lưu pathname vào localstorage

useddebounce
custom image fallback
lỗi phần clipboard phải setwidth để không bị thụt ra thụt vào

đề xuất +thêm bài hát vào my playlist
ấn vào tạo playlist sẽ tạo 1 playlist mới, xoas baif hat(tao redux luu uris)
fix ui playlist item

Bài hát đã thích
tập podcast đã thích
danh sách chờ
