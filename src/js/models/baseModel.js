export const dataUrls = {
    businesses: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSQeg-3t2VAfhThb_-zpDFmDzuVs7FTIJpXHwsfDFXTuRk0uB9T3QF9P6nx6MKvFAcXtklFKzEmjvZq/pub?output=csv",
    events: "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1sSJqCd4lIIYkIFqpRX6Zw6wzm7xjUP8FigJePROLe4N1XDCWdj77569mlkLhqDyz5ayeDEcX2lar/pub?output=csv"
}

export const shuffle = function (array) {
	var currentIndex = array.length;
	var temporaryValue, randomIndex;
	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};