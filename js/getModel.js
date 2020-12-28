function getModel(modelsList) {
    const randomIndex = Math.floor(Math.random() * modelsList.length);
    // console.log(modelsList[randomIndex]);
    return modelsList[randomIndex];
}

export { getModel }

/*
Kaip veikia random paemimas is saraso:
Math.floor(Math.random() * modelsList.length)
Math.floor([0 .. 0.9999] * 5)
Math.floor([0 * 5 .. 0.9999 * 5])
Math.floor([0 .. 4.9995])
Math.floor([0 .. 4])
PVZ kai random -> 0.21:
Math.floor(0.21 * 5)
Math.floor(1.05)
Math.floor(1)
*/