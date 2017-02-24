import MultiListingView from "./views/multi-listing-view.js";
import SingleListingView from "./views/single-listing-view.js";
import { EtsyCollection, EtsyListingsModel} from './models/models.js'
import $ from 'jquery';
import Backbone from 'backbone';
// console.log(MultiListingView)

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
			console.log(etsyCollection);


			let viewInstance = new MultiListingView()
			viewInstance.render(productListignsModelsList, 'root', {})
    })
  },

  showSingleProductListing: function(idVal){
		// console.log('IS ANYTHING WORKING?!!!');

    let singleProductModel = new EtsyListingsModel(idVal)
    singleProductModel.fetch().then(function(){
			console.log(singleProductModel);

      let viewInstance = new SingleListingView()
      viewInstance.render(singleProductModel)
		})
	}
})

const myApp = new AppRouter()
