function superbowlWin(record) {
    const win = record.find(object => object.result === "W")
    if (win === undefined) {
        return undefined
    }
    if (win !== undefined) {
        return win.year
    }
}
