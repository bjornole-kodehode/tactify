import { characters } from '../characters'

export default function ChampionPool() {
    const characterImgs = []
    for (const character of characters) {
      for (const role of Object.values(character)) {
        for (const image of Object.values(role)) {
          /* if (image.endsWith(".png")) { */
            characterImgs.push(image)
          /* } */
        }
      }
    }
  

    return (
      <div className="">
          <div className='grid grid-rows-2 grid-flow-col gap-4 w-96'>
            {characterImgs.map((characterImg, idx) => (
              <div key={idx} draggable={true} className='cursor-grab'>
                {characterImg ? <img src={characterImg} /> : <></>}
              </div>
              ))}
          </div>
      </div>
    )
}
