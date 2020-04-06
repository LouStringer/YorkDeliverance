let businesses = document.querySelector(".businesses")
var shuffle = function (array) {
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

const renderBusinessesYork = (data, tabletop) => {
  let pubList = shuffle(data);
  for (let i=0; i<pubList.length; i++) {
    if (pubList[i].active == "TRUE" && pubList[i].york == "TRUE" && pubList[i].booze == "TRUE") {
      makeBusinessItem(data[i]);
      businesses.lastChild.classList.add("yBorder");
    }
  }
  for (let i=0; i<pubList.length; i++) {
    if (pubList[i].active == "TRUE" && pubList[i].york == "TRUE" && pubList[i].coffee == "TRUE") {
      makeBusinessItem(data[i]);
      businesses.lastChild.classList.add("yBorder");
    }
  }
}

const renderBusinessesHk = (data, tabletop) => {
  let pubList = shuffle(data);
  for (let i=0; i<pubList.length; i++) {
    if (pubList[i].active == "TRUE" && pubList[i].hk == "TRUE" && pubList[i].booze == "TRUE" ) {
      makeBusinessItem(data[i]);
      businesses.lastChild.classList.add("hkBorder");
    }
  }
  for (let i=0; i<pubList.length; i++) {
    if (pubList[i].active == "TRUE" && pubList[i].hk == "TRUE" && pubList[i].coffee == "TRUE") {
      makeBusinessItem(data[i]);
      businesses.lastChild.classList.add("hkBorder");
    }
  }
}

const initYork = () => {
  businesses.innerHTML = "<p class=\"businessHeader\">Beer first, coffee at the end. Priorities!</p>";
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/17h_0IxZl0K2neRsKnBPXTWh1nHdh8CuFXTEf2kqEE48/edit?usp=sharing',
                   callback: renderBusinessesYork,
                   simpleSheet: true } )
}

const initHk = () => {
  businesses.innerHTML = "<p class=\"businessHeader\">Beer first, coffee at the end. Priorities!</p>";
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/17h_0IxZl0K2neRsKnBPXTWh1nHdh8CuFXTEf2kqEE48/edit?usp=sharing',
                   callback: renderBusinessesHk,
                   simpleSheet: true } )
}

const makeBusinessItem = (businessData) => {
  let html = '<div class="business"><h3 class="name">%name%</h3><div class="beer"><p class="businessType">beer</p><p><span class="businessInfo takeaway">pick up</span><span class="businessInfo delivery">delivery</p></div><p class="notes">%notes%</p><p>twitter <a href="https://twitter.com/%twitterLink%">%twitterName%</p><p><a href="%link%">%name%\'s website</a></p></div>'
  html = html.replace("%name%", businessData.name);
  if (businessData.coffee == "TRUE") {
    html = html.replace("<div class=\"beer\">", "<div class=\"coffee\">");
    html = html.replace("<p class=\"businessType\">beer</p>", "<p class=\"businessType\">coffee</p>");
  };
  if (businessData.takeaway == "FALSE") {
    html = html.replace("businessInfo takeaway", "businessInfo takeaway nope");
  };
  if (businessData.delivery == "FALSE") {
    html = html.replace("businessInfo delivery", "businessInfo delivery nope");
  }
  html = html.replace("%notes%", businessData.notes);
  if (businessData.twitter.length > 0){
    html = html.replace("%twitterLink%", businessData.twitter.substring(1));
  } else {
    html = html.replace("<p>twitter <a href=\"https://twitter.com/%twitterLink%\">%twitterName%</p>", "")
  }; 
  html = html.replace("%twitterName%", businessData.twitter);
  html = html.replace("%link%", businessData.link);
  html = html.replace("%name%", businessData.name);
  businesses.insertAdjacentHTML("beforeend", html);
}

document.querySelector("#y").addEventListener('click', initYork)
document.querySelector("#hk").addEventListener('click', initHk)