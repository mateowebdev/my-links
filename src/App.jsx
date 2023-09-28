import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import PageHome from "./components/PageHome";
import Header from "./components/Header";
import PageEditLinks from "./components/PageEditLinks";
import PageViewQr from "./components/PageViewQr";
import Nav from "./components/Nav";

function App() {
  const [page, setPage] = useState("home");
  const [links, setLinks] = useState({ whatsapp: "", linkedin: "", website: "",github:"" });
  const [qr, setQr] = useState({title:"",value:"", color: ""})

  const handlePage = (page)=>{
    setPage(page);
  }

  const handleQr = (title,value, color)=>{
    setQr({
      ...qr,
      title,
      value,
      color
    })
  }

  const handleInput = (e) => {
    setLinks({
      ...links,
      [e.target.name]: e.target.value.trim().toLowerCase(),
    });
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"))
    if(data != null){
      setLinks(data)
      console.log("arrancamos con links previos");
    }else{
      console.log("no data yettt");
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(links))
    console.log(links);
  }, [links])
  

  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Header/>
      {page == "edit" && <PageEditLinks handlePage={handlePage} links={links} handleInput={handleInput}/>}
      {page == "home" && <PageHome links={links} handlePage={handlePage} handleQr={handleQr}/>}
      {page == "qr" && <PageViewQr qr={qr}/>}
      <Nav handlePage={handlePage} page={page}/>
    </main>
  );
}

export default App;
