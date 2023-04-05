import { useState } from "react"
import ChampionPool from "~/components/ChampionPool"
import Navbar from "~/components/Navbar"
import Searchbar from "~/components/Searchbar"

import TilesMap from "~/components/TilesMap"

function CreateCompPage() {
    const [margin, setMargin] = useState<string>("28")
    return (
        <div>
            <Navbar />
            <div className="grid  place-items-center">
                <h1 className="mb-6">Create Comp</h1>
                <TilesMap />
                <div className="border p-4">
                    <Searchbar margin={margin} />
                    <div className="mb-4 mt-2">
                        <div className="flex  items-center mb-2">
                            <input id="casters" type={"radio"} />
                            <label className="ml-2" htmlFor="casters">Casters</label>
                        </div>
                        <div>
                            <input id="tanks" type={"radio"} />
                            <label className="ml-2" htmlFor="tanks">Tanks</label>
                        </div>
                    </div>
                    <ChampionPool />
                </div>
            </div>
        </div>
    )
}

export default CreateCompPage