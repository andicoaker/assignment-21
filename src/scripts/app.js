
$.getJSON('https://openapi.etsy.com/v2/listings/active.js?api_key=kt6smfs5wci2wuc9rv7jipxm&callback=?').then(function(serverRes){
 // 	console.log(serverRes)
 })

// ******* ROUTER ********

const AppRouter = Backbone.Router.extend({
	initialize: function(){
		console.log('app routing');
		Backbone.history.start()
	},

  routes : {
		'details/:detailsId' : 'showSingleProductListing',
		'' : 'showAllProductListings'
	},

  showAllProductListings: function(){
    console.log('IS ANYTHING WORKING?!!!');

		let etsyCollection = new EtsyCollection()
		etsyCollection.fetch().then(function(serverRes){
			let productListignsModelsList = etsyCollection.models
			let viewInstance = new MultiEtsyView()
			viewInstance.render(productListignsModelsList, 'root', {})
		})
  },

  showSingleProductListing: function(){
    let singleProductModel = new EtsyListingsModel()
    singleProductModel.fetch().then(function(){
      let viewInstance = new SingleProdcutView()
      viewInstance.render(singleProductModel)
    })
  }

})

const myApp = new AppRouter()
