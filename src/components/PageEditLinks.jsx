
export default function PageEditLinks({handleInput, links}) {
  return (
    <div className="p-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <label>Whatsapp</label>
          <input
            className="border border-gray-400 rounded-lg p-1 px-2"
            type="text"
            onChange={(e) => handleInput(e)}
            value={links.whatsapp}
            name="whatsapp"
          />
        </div>
        <div className="flex flex-col">
          <label>LinkedIn</label>
          <input
            className="border border-gray-400 rounded-lg p-1 px-2"
            type="text"
            onChange={(e) => handleInput(e)}
            value={links.linkedin}
            name="linkedin"
          />
        </div>
        <div className="flex flex-col">
          <label>Website</label>
          <input
            className="border border-gray-400 rounded-lg p-1 px-2"
            type="text"
            onChange={(e) => handleInput(e)}
            value={links.website}
            name="website"
          />
        </div>
        <div className="flex flex-col">
          <label>Github</label>
          <input
            className="border border-gray-400 rounded-lg p-1 px-2"
            type="text"
            onChange={(e) => handleInput(e)}
            value={links.github}
            name="github"
          />
        </div>
    </div>
  )
}
