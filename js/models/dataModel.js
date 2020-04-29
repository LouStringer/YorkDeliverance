// grab Papaparse
const Papa = require('papaparse');
// get data URLs
import { dataUrls } from './baseModel';

export const getData = (url, stepArr) => {
    return new Promise(function(resolve, reject){
        Papa.parse(url, {
            download:true,
            header:true,
            step: function(row){
               stepArr.push(row.data)
            //    console.log(row.data)
            },
            complete: resolve       
        });        
    });
 }
 
// export const bizDataSort = (biz) => {
//     console.log(biz)
//     if (biz.booze = true && biz.york) {
//         data.bizDataY.push(biz)
//     } 
//     if (biz.booze = true && biz.hk) {
//         data.bizDataHk.push(biz)
//     } 
//     if (biz.coffee = true) {
//         data.bizDataCoffee.push(biz);
//     }
// }