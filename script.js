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
    if (pubList[i].active == "TRUE" && pubList[i].york == "TRUE") {
      makeBusinessItem(data[i]);
      businesses.lastChild.classList.add("yBorder");
    }
  }
}

const renderBusinessesHk = (data, tabletop) => {
  let pubList = shuffle(data);
  for (let i=0; i<pubList.length; i++) {
    if (pubList[i].active == "TRUE" && pubList[i].hk == "TRUE") {
      makeBusinessItem(data[i]);
      businesses.lastChild.classList.add("hkBorder");
    }
  }
}

const initYork = () => {
  businesses.innerHTML = "";
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/17h_0IxZl0K2neRsKnBPXTWh1nHdh8CuFXTEf2kqEE48/edit?usp=sharing',
                   callback: renderBusinessesYork,
                   simpleSheet: true } )
}

const initHk = () => {
  businesses.innerHTML = "";
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/17h_0IxZl0K2neRsKnBPXTWh1nHdh8CuFXTEf2kqEE48/edit?usp=sharing',
                   callback: renderBusinessesHk,
                   simpleSheet: true } )
}

const makeBusinessItem = (businessData) => {
  let html = '<div class="business"><h3 class="name">%name%</h3><p><span class="businessInfo booze">booze</span><span class="businessInfo food">food</span></p><p><span class="businessInfo takeaway">takeaway</span><span class="businessInfo delivery">delivery</p><p>%notes%</p><p>twitter <a href="https://twitter.com/%twitterLink%">%twitterName%</p><p><a href="%link%">%name%\'s website</a></p></div>'
  html = html.replace("%name%", businessData.name);
  if (businessData.booze == "FALSE") {
    html = html.replace("businessInfo booze", "businessInfo booze nope");
  };
  if (businessData.food == "FALSE") {
    html = html.replace("businessInfo food", "businessInfo food nope");
  };
  if (businessData.takeaway == "FALSE") {
    html = html.replace("businessInfo takeaway", "businessInfo takeaway nope");
  };
  if (businessData.delivery == "FALSE") {
    html = html.replace("businessInfo delivery", "businessInfo delivery nope");
  }
  // if (businessData.hk == "TRUE") {
  //   html = html.replace("class=\"business yBorder\"", "class=\"business hkBorder\"")
  // };
  html = html.replace("%notes%", businessData.notes);
  html = html.replace("%twitterLink%", businessData.twitter.substring(1));
  html = html.replace("%twitterName%", businessData.twitter);
  html = html.replace("%link%", businessData.link);
  html = html.replace("%name%", businessData.name);
  businesses.insertAdjacentHTML("beforeend", html);
}


//const locationButtons = Array.from(document.querySelectorAll("button"));
//locationButtons.forEach(item => item.addEventListener("click", init));
document.querySelector("#y").addEventListener('click', initYork)
document.querySelector("#hk").addEventListener('click', initHk)

// window.addEventListener('DOMContentLoaded', init)
