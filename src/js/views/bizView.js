import { domElements } from './baseView';

const clearDataList = () => {
    domElements.dataList.innerHTML = '';
}

// add Html for buisness to dataList
const prepBizHtml = (biz) => {
    const bizHtml = `
        <div class="business">
            <h3 class="name">${biz.name}</h3>
            <div class="beer">
                <p> class="businessType">${biz.type}</p>
                <p>
                    <span class="businessInfo takeaway">pick up</span>
                    <span class="businessInfo delivery">delivery</span>
                </p>
            </div>
            <p class="notes">${biz.notes}</p>
            <p>twitter <a href="https://twitter.com/%twitterLink%">${biz.twitter}</p>
            <p><a href="${biz.link}">${biz.name}\'s website</a></p>
        </div>`;
    console.log(bizHtml);   
    domElements.dataList.insertAdjacentHTML('beforeend', bizHtml);
  };

  // show Biz data
const showBiz = (type, data) => {
    const holderArray = data.filter(function(item){
        if (item.`${type}` == true) {
            return true
        }
    })
    holderArray.forEach(item => prepBizHtml(item)) 
}

export const getButtonId = () => { event.target.id }

// export const showData = (data) => {
// // get id of button clicked
// const type = event.target.id;
// console.log(type)
// clearDataList();
// if (type == "ev") {
//     //do events stuff
// } else {
//     showBiz(type, data);
// }
// // for biz
//     // filter array for same type only
//     // make html for each & push

// // data.forEach(prepBizHtml)
// }