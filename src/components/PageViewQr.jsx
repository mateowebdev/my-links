import { QRCodeSVG } from "qrcode.react";

export default function PageViewQr({ qr }) {
    console.log(qr);
  return (
    <div
      style={{ border: `4px solid ${qr.color}` }}
      className="p-4 mx-6 rounded-xl flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl">{qr.title}</h1>
      <div className="py-6">
        <QRCodeSVG value={qr.value} fgColor={qr.color} size={256} />
      </div>
    </div>
  );
}
