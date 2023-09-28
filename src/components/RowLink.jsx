import { BsQrCodeScan } from "react-icons/bs";

export default function RowLink({
  title,
  value,
  handlePage,
  handleShowQr,
  color,
}) {
  return (
    <div
      className="flex justify-between items-center p-2 border-b-2"
      onClick={() => {
        handlePage("qr"), handleShowQr(title, value, color);
      }}
    >
      <h2 className="capitalize">{title}</h2>
      <BsQrCodeScan className="w-6 h-6" fgcolor={color}/>
    </div>
  );
}
