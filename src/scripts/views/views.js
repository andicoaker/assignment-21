
const MultiEtsyView = Backbone.View.extend({
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
                        <h4><strong>${productObj.get('EnterPropValueHERE')}</strong></h4>
                        <p>${productObj.get('EnterPropValueHERE')}</p>
                        <p>${productObj.get('EnterPropValueHERE')}</p>
                      </div>
                    </div>
                  </div>
                </div>`
        }).join('')

    },

    render: function(etsyListingsModels, viewType, productObj){
        this.el.innerHTML = this._buildHtmlTemplate(etsyListingsModels, viewType, productObj)
    }
})
