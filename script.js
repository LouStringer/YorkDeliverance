//let businessList = null

const renderBusinesses = (data, tabletop) => {
  document.querySelector(".businesses").innerText = "";
  for (let i=0; i<data.length; i++) {
    console.log(data[i].name)
    makeBusinessItem(data[i]);
  }
}
const init = () => {
  Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/17h_0IxZl0K2neRsKnBPXTWh1nHdh8CuFXTEf2kqEE48/edit?usp=sharing',
                   callback: renderBusinesses,
                   simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)

const makeBusinessItem = (businessData) => {
  let html = '<li class="name"><p>%name%</p><p><span class="businessInfo">booze</span><span class="businessInfo">food</span></p><p><span class="businessInfo">takeaway</span><span class="businessInfo">delivery to %deliveryPlace%</p><p>%notes%</p><p>twitter %twitterName%</p><p><a href="%link%">Check out %name%\'s website</a></p></li>'
  html = html.replace("%name%", businessData.name);
  if (businessData.booze == "FALSE") {
    html = html.replace("booze", "");
  };
  if (businessData.food == "FALSE") {
    html = html.replace("food", "");
  };
  if (businessData.takeaway == "FALSE") {
    html = html.replace("takeaway", "");
  };
  if (businessData.delivery == "TRUE") {
    html = html.replace("%deliveryPlace%", businessData.deliversTo);
  } else {
    html = html.replace("delivery to %deliveryPlace%", "");
  };
  html = html.replace("%notes%", businessData.notes);
  html = html.replace("%twitterName%", businessData.twitter);
  html = html.replace("%link%", businessData.link);
  html = html.replace("%name%", businessData.name);
  document.querySelector(".businesses").insertAdjacentHTML("beforeend", html);
}
