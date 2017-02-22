
const EtsyListingsModel = Backbone.Model.extend({

  // initialize: function(optionsObj){
	// 	this._singleFetch = optionsObj.singleFetch
	// },

  initialize: function(listingID){
		this.url = `https://openapi.etsy.com/v2/listings/${listing_id}.js?api_key=kt6smfs5wci2wuc9rv7jipxm&callback=?&`
	},

  parse: function(serverRes){

		//fetch for single model, not yet parsed
		if(typeof serverRes.results !== 'undefined' ){
			return serverRes.results[0]
		} else {
			//fetched from collection, already parsed
			return serverRes.results
		}
    console.log(serverRes.results);
	},

  url: 'https://openapi.etsy.com/v2/listings/active.js?api_key=kt6smfs5wci2wuc9rv7jipxm&callback=?',

})


const EtsyCollection = Backbone.Collection.extend({

	initialize: function(qryStrParams){
		if(typeof qryStrParams !== 'undefined'){
			this.url = `${this.url}&${qryStrParams}`
		}

	},

	parse: function(serverRes){
    console.log('parsing response!');
    return serverRes.results

	},


	url: 'https://openapi.etsy.com/v2/listings/active.js?api_key=kt6smfs5wci2wuc9rv7jipxm&callback=?',

	model: EtsyListingsModel
})
