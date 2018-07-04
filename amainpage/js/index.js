require('../css/index.scss');
require('plugin/common');
var Init = require('plugin/init');
var Img = require('plugin/img');
var plugin = {};

plugin.Mpslider = require('plugin/mpslider');
plugin.Mpoption = require('plugin/mpoption');
plugin.Ad = require('plugin/ad');
plugin.Mplogincheck = require('plugin/mplogincheck');
plugin.Mpsection = require('plugin/mpsection');
plugin.Mponepic = require('plugin/mponepic');
plugin.Areact = require('plugin/areact');
plugin.Mploadmore = require('plugin/mploadmore');
plugin.Mprenew = require('plugin/mprenew');

$(function(){
	var Page = React.createClass({
		getInitialState: function() {
			return {
               
            };
		},
     
		render: function() {
			var me = this;
            return (
                
				<Init plugin={plugin} pageData={pageData} pageConfig={pageConfig}/>
			);
		}
	});
	ReactDOM.render(<Page />, document.querySelector('#main'));
});
