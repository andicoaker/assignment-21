//
// const EtsyListingsModel = Backbone.Model.extend({
//
//   // initialize: function(optionsObj){
// 	// 	this._singleFetch = optionsObj.singleFetch
// 	// },
//
//   initialize: function(listingID){
// 		this.url = `https://openapi.etsy.com/v2/listings/.js?api_key=kt6smfs5wci2wuc9rv7jipxm&callback=?&listing_id=${listing_id}`
// 	},
//
//   parse: function(rawServerRes){
//
// 		//fetch for single model, not yet parsed
// 		if(typeof rawServerRes.results !== 'undefined' ){
// 			return rawServerRes.results[0]
// 		} else {
// 			//fetched from collection, already parsed
// 			return rawServerRes
// 		}
//     console.log(rawServerRes);
// 	},
//
// 	url: 'https://openapi.etsy.com/v2/listings/183182778.js?api_key=kt6smfs5wci2wuc9rv7jipxm&callback=?&'
//
// })


const EtsyCollection = Backbone.Collection.extend({
	initialize: function(qryStrParams){
		if(typeof qryStrParams !== 'undefined'){
			this.url = `${this.url}&${qryStrParams}`
		}
	},

	parse: function(rawServerRes){
    // console.log(rawServerRes);
    return rawServerRes.results
	},

	url: 'https://openapi.etsy.com/v2/listings/active.js?api_key=kt6smfs5wci2wuc9rv7jipxm&callback=?',

	// model: EtsyListingsModel
})
