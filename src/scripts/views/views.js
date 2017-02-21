
const MultiListingView = Backbone.View.extend({
    el: '#app-container',

  _buildHtmlTemplate: function(etsyListingsModels, viewType, productObj){

    let etsyListingsHtml = etsyListingsModels.map( function(EtsyListingsModel, viewType, productObj){
      return `
        <div class="row">
          <div class="col-md-4">
            <div class="clearfix visible-xs-block"></div>
            <div class="thumbnail">
              <img src="">
              <div class="caption">
                <h4><strong>${productObj.get('title')}<strong></h4>
                <p>${productObj.get('who_made')}</p>
                <p>${productObj.get('price')}</p>
              </div>
            </div>
          </div>
        </div>`
    }).join('')
    // return etsyListingsHtml
  },

  render: function(etsyListingsModels, viewType, productObj){
      this.el.innerHTML = this._buildHtmlTemplate(etsyListingsModels, viewType, productObj)
  }
})

const SingleListingView = Backbone.View.extend({
	el : '#app-container',

  _buildHtmlTemplate: function(model){
    return `
      <div class="row">
        <div class="col-md-4">
          <div class="clearfix visible-xs-block"></div>
          <div class="thumbnail">
            <img src="">
            <div class="caption">
              <h4><strong>${productObj.get('title')}<strong></h4>
              <p>${productObj.get('who_made')}</p>
              <p>${productObj.get('price')}</p>
            </div>
          </div>
        </div>
      </div>`
  },

	render: function(data){
		this.el.innerHTML = this._buildHtmlTemplate(data)
	}
})
