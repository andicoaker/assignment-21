import Backbone from 'backbone';

const MultiListingView = Backbone.View.extend({
    el: '.page-content',

  _buildHtmlTemplate: function(allListingsModel){

    return `
      <div class="col-md-3">
        <div class="">
          <p>Search</p>
          <input type="text" class="form-control" placeholder="">
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Posted in Last Week
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Less than $25
            </label>
          </div>
          <div class="checkbox">
            <label>
              <input type="checkbox" value="">
              Has 3 Pictures
            </label>
          </div>
        </div>
      </div>
      <div class="col-md-9">
        <div class="row">
        <div class="clearfix visible-m-block"></div>


            ${allListingsModel.map(function(item, i){
              console.log(item)
              let imageUrl
              if(item.get('Images')[0].url_170x135 === undefined){
                imageUrl = "hello"
              }else{
                imageUrl = item.get('Images')[0].url_170x135;
              }
              return `

            <div class="col-md-4 listing-thumbnail">
                <div class="thumbnail">
                  <img src="${imageUrl}">
                  <div class="caption">
                    <h6>${item.get('title')}</h6>
                    <p>${item.get('Shop').shop_name}</p>
                    <p>$ ${item.get('price')}</p>
                  </div>
                </div>
              </div>`

            }).join('')
            }

        </div>
      </div>`
  },

  render: function(data){
		this.el.innerHTML = this._buildHtmlTemplate(data)
  }
})

export const SingleListingView = Backbone.View.extend({
	el : '.page-content',

  _buildHtmlTemplate: function(detailsModel){
    return`
      <div class="row">
        <div class="col-md-6">
          <div class="listing-image">
            <img src="..." class="img-responsive" alt="Responsive image">
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

export default MultiListingView
