// grab Papaparse
const Papa = require('papaparse');
// get data URLs
import { dataUrls } from './baseModel'

export default class Data {
    constructor(type) {
        this.type = type;
    };
    getData() {
        Papa.parse(`${dataUrls.businesses}`, {
            download: true,
            header: true,
            complete: function(results) {
                console.log(results.data);
                this.results = results.data;
                console.log(this.results);
            }
        });
    }
} 
