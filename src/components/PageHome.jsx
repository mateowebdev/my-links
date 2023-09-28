import RowLink from "./RowLink";

export default function PageHome({ links, handlePage, handleQr }) {
  const { whatsapp, linkedin, website, github } = links;

  const listado = [
    {
      title: "Whatsapp",
      value: `https://wa.me/${whatsapp}?text=Buenas!👋`,
      color: "#00A884",
      active: whatsapp,
    },
    {
      title: "Linkedin",
      value: `https://www.linkedin.com/in/${linkedin}`,
      color: "#126BC4",
      active: linkedin,
    },
    {
      title: "Website",
      value: `https://www.${website}`,
      color: "black",
      active: website,
    },
    {
      title: "Github",
      value: `https://https://github.com/${github}`,
      color: "black",
      active: github,
    },
  ];
  console.log(listado);

  const handleShowQr = (title, value, color) => {
    handleQr(title, value, color);
  };

  return (
    <div className="p-4 flex flex-col gap-4">
        {listado.filter(item => item.active!= "").length == 0 && <p>No links yet</p>}
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
