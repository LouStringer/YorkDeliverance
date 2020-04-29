import { domElements } from './baseView';

export const dataLoaded = () => {
    domElements.waitingText.innerHTML = `Gimmie the goodies!`;
    domElements.buttonsHolder.classList.remove('waitingButton')
    console.log("dataLoaded done")
}

// export const getButtonId = () => { event.target.id }

export const clearDataList = () => {
    domElements.dataList.classList = '';domElements.dataList.innerHTML = '';
}

///// SHOW BUISNESSES

// prep Html for each buisness
const prepBizHtml = (biz, type) => {
    let bizHtml = `
        <div class="business">
            <h3 class="name">${biz.name}</h3>
            <div class="booze">
                <p>
                    <span class="businessInfo takeaway">pick up</span>
                    <span class="businessInfo delivery">delivery</span>
                </p>
            </div>
            <p class="notes">
                ${biz.notes}
            </p>
            <p>
                twitter <a href="https://twitter.com/%twitterLink%">${biz.twitter}</a>
            </p>
            <p>
                <a href="${biz.link}">${biz.name}\'s website</a>
            </p>
        </div>`;
    if (biz.takeaway == "FALSE") {
        bizHtml = bizHtml.replace("businessInfo takeaway", "businessInfo takeaway nope");
    };
    if (biz.delivery == "FALSE") {
        bizHtml = bizHtml.replace("businessInfo delivery", "businessInfo delivery nope");
    };
    if (biz.twitter.length > 0){
        bizHtml = bizHtml.replace("%twitterLink%", biz.twitter.substring(1));
    } else {
        bizHtml = bizHtml.replace("<p>twitter <a href=\"https://twitter.com/%twitterLink%\">%twitterName%</a></p>", "")
    }
    domElements.dataList.insertAdjacentHTML('beforeend', bizHtml);
    domElements.dataList.lastChild.classList.add(`${type}Border`);
};

// prep events
const prepEvHtml = () => {
    domElements.dataList.innerHTML = `
        <div class="eventsTemp">
            Events feature coming soon!
        </div>
    `;
}

// render details in dataList
export const renderData = (data, type) => {
    if (type == "cf") {
        data.forEach((biz) => {
            if (biz.active == "TRUE" && biz.cf == "TRUE") {
                prepBizHtml(biz, type);
            };
        });
    } else if (type == "y" || type == "hk") {
        data.forEach((biz) => {
            if (biz.active == "TRUE" && biz[type] == "TRUE" && biz.cf == "FALSE") {
                prepBizHtml(biz, type);
            };
        });
    } else if (type == "ev") {
        prepEvHtml();
    };
};