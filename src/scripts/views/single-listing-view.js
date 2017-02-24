import Backbone from 'backbone';


const SingleListingView = Backbone.View.extend({
  el : '.page-content',

  _buildHtmlTemplate: function(detailsModel){
    return`
      <div class="row">
        <div class="col-md-6">
          <div class="listing-image">
            <img src="${detailsModel.get('Images')[0].url_570xN}" class="img-responsive" alt="Responsive image">
          </div>
          <div class="listing-desc">
            <h4>Item Details</h4>
            <p>${detailsModel.get('description')}</p>
          </div>
        </div>
        <div class="col-md-6">
          <h1>${detailsModel.get('title')}</h1>
          <p>${detailsModel.get('price')}</p>
          <button class="btn btn-default" type="button">Ask Questions</button>
          <div class="listing-info">
            <h4>Materials</h4>
            <p>${detailsModel.get('materials')}</p>
            <h4>Shipping</h4>
            <p>Destination <span>United States</spand></p>
            <p>Cost <span>$6.50</span></p>
          </div>
        </div>
      </div>`
  },

	render: function(data){
		this.el.innerHTML = this._buildHtmlTemplate(data)
	}
})

export default SingleListingView
