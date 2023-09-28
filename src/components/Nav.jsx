import { BiEditAlt } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";

export default function Nav({handlePage, page}) {
  return (
    <nav className="fixed bottom-0 w-full flex justify-center bg-neutral-50 items-center p-6">
        {page == "home" && <BiEditAlt onClick={()=>{handlePage("edit")}} className="w-8 h-8"/>}
        {(page == "edit" || page == "qr") && <CgMenuGridR onClick={()=>{handlePage("home")}} className="w-8 h-8"/>}
    </nav>
  )
}
