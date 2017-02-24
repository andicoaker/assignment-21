import Backbone from 'backbone';

const MultiListingView = Backbone.View.extend({
  el: '.page-content',

  events: {
    "click .thumbnail": 'handleShowSingleListing'
  },

  handleShowSingleListing: function(evt){

    let detailsId = evt.currentTarget.dataset.id
    console.log(detailsId)
    window.location.hash = `details/${detailsId}`
  },


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
            ${allListingsModel.map(function(item, i){
              // console.log(item)
              let imageUrl
              if(typeof item.get('Images')[0] === 'undefined'){
                imageUrl = "hello"
              }else{
                imageUrl = item.get('Images')[0].url_170x135;
              }
              return `

                <div class="col-xs-6 col-s-5 col-md-4 listing-thumbnail" >
                <div class="clearfix visible-md-block"></div>
                  <div class="thumbnail "data-id="${item.get('listing_id')}">
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

export default MultiListingView
