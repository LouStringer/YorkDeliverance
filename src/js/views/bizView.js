import { domElements } from './baseView';

export const clearBizList = () => {
    domElements.bizList.innerHTML = '';
}

// add Html for buisness to businessList
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
    domElements.bizList.insertAdjacentHTML('beforeend', bizHtml);
  };

  export const showBiz = (data) => {
    clearBizList();
    data.forEach(prepBizHtml)
  }