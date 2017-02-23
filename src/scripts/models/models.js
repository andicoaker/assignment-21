import Backbone from 'backbone';
export const EtsyListingsModel = Backbone.Model.extend({

  // initialize: function(optionsObj){
	// 	this._singleFetch = optionsObj.singleFetch
	// },

  initialize: function(listingID){
		// this.url = `https://openapi.etsy.com/v2/listings/${listing_id}.js?api_key=kt6smfs5wci2wuc9rv7jipxm&callback=?&`
	},

  url: `https://openapi.etsy.com/v2/listings/active.js?api_key=kt6smfs5wci2wuc9rv7jipxm&callback=?&includes=Images,Shop&callback=?`,

})

console.log('addiun shop')

export const EtsyCollection = Backbone.Collection.extend({

	initialize: function(qryStrParams){
		if(typeof qryStrParams !== 'undefined'){
			this.url = `${this.url}&${qryStrParams}`
		}
	},

	parse: function(serverRes){

    return serverRes.results
	},

	url: `https://openapi.etsy.com/v2/listings/active.js?api_key=kt6smfs5wci2wuc9rv7jipxm&includes=Images,Shop&callback=?`,

	model: EtsyListingsModel
})
