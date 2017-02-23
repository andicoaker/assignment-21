import MultiListingView from "./views/views.js";
import SingleListingView from "./views/views.js"
import { EtsyCollection, EtsyListingsModel} from './models/models.js'
import $ from 'jquery';
import Backbone from 'backbone';
console.log(MultiListingView)

// $.getJSON('https://openapi.etsy.com/v2/listings/active.js?api_key=kt6smfs5wci2wuc9rv7jipxm&callback=?').then(function(serverRes){
//  	console.log(serverRes.results)
//  })

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
    // console.log('IS ANYTHING WORKING?!!!');

		let etsyCollection = new EtsyCollection()
		etsyCollection.fetch().then(function(serverRes){
			let productListignsModelsList = etsyCollection.models

			let viewInstance = new MultiListingView()
			viewInstance.render(productListignsModelsList, 'root', {})
    })
  },

  showSingleProductListing: function(){
		console.log('IS ANYTHING WORKING?!!!');
		
    let singleProductModel = new EtsyListingsModel()
    singleProductModel.fetch().then(function(){
			console.log(singleProductModel);

      let viewInstance = new SingleListingView()
      viewInstance.render(singleProductModel)
    })
  }

})

const myApp = new AppRouter()
