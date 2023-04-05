function TilesMap() {
    const tileMapObject = {
        a1: 1,
        a2: 1,
        a3: 1,
        a4: 1,
        a5: 1,
        a6: 1,
        a7: 1,
    }

    return (
        <>
            <div className="flex gap-4">
                {Object.entries(tileMapObject).map(([key, value], idx) => {
                    return (
                        <div key={key} className="">
                            {value ? <div className="w-20 h-20 bg-orange-300 border-amber-500 border-4"></div> : <></>}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TilesMap