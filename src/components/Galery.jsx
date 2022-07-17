import Lightroom from "react-lightbox-gallery";
import bnga from "../source/bnga.png";
export default function App() {
  var images = [
    {
      src: "https://pict.sindonews.net/dyn/850/pena/news/2022/01/18/158/659825/cerita-upin-ipin-disebut-berasal-dari-kisah-nyata-tim-produksi-beri-penjelasan-ini-teu.jpg",
      desc: "Person wearing shoes",
      sub: "Gift Habeshaw",
    },
    {
      src: "https://images.unsplash.com/photo-1577277625082-36df4915ebeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      desc: "Blonde woman wearing sunglasses smiling at the camera ",
      sub: "Dmitriy Frantsev",
    },
    {
      src: "https://images.unsplash.com/photo-1577278689329-1914b6814d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1140&q=80",
      desc: "Man and woman passing by store",
      sub: "Harry Cunningham",
    },
    {
      src: "https://images.unsplash.com/photo-1577177205947-4078546be974?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
      desc: "Jaipur , Rajasthan India",
      sub: "Liam Baldock",
    },
    {
      src: "https://images.unsplash.com/photo-1437326300822-01d8f13c024f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      sub: "Verne Ho",
    },
    {
      src: "https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
      desc: "Rann of kutch , India",
      sub: "Hari Nandakumar",
    },
    {
      src: "https://images.unsplash.com/photo-1521859727374-9b8e0ef8c0c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
      sub: "Jyotirmoy Gupta",
    },
    {
      src: "https://images.unsplash.com/photo-1577201404214-b725e3212fc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
      sub: "Tom & Sini",
    },
  ];
  var settings = {
    columnCount: {
      default: 3,
      mobile: 1,
      tab: 4,
    },
    mode: "dark",
  };
  return (
    <div cla>
      <div>
        <img src={bnga} className="mx-auto mt-10" />
      </div>
      <h1 className="text-center uppercase mt-7 text-lg font-bold text-white ">
        Gallery rpl smk bhumi husada <span className="block w-[100px] h-1 my-7 rounded-lg bg-[#034867] text-center mx-auto"></span>
      </h1>
      <div className="p-10">
        <Lightroom images={images} settings={settings} />
      </div>
    </div>
  );
}
