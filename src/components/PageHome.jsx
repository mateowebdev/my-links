import RowLink from "./RowLink";

export default function PageHome({ links, handlePage, handleQr }) {
  const { whatsapp, linkedin, website } = links;

  const listado = [
    {
      title: "Whatsapp",
      value: `https://wa.me/${whatsapp}?text=Buenas!👋`,
      color: "#00A884",
      active: whatsapp,
    },
    {
      title: "Linkedin",
      value: `https://linkedin.com/${linkedin}`,
      color: "#126BC4",
      active: linkedin,
    },
    {
      title: "Website",
      value: `https://${website}`,
      color: "black",
      active: website,
    },
  ];
  console.log(listado);

  const handleShowQr = (title, value, color) => {
    handleQr(title, value, color);
  };

  return (
    <div className="p-4 flex flex-col gap-4">
      {listado.map((item) =>
        item.active !== "" ? (
          <RowLink
            key={item.title}
            title={item.title}
            color={item.color}
            value={item.value}
            handlePage={handlePage}
            handleShowQr={handleShowQr}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
}
