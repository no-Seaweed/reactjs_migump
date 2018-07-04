/**
 * React Mpslider插件
 	@author --
 	@props data（必选属性前面带＊，非必选项目请备注默认值）
 		－*url : String,//eg
		-closeMyself : false(默认) //eg
	@example
	<Mpslider data={{url:"",closeMyself:true}}/>

 */
require('./mpslider.scss');

var Swipe = require('plugin/swipe');
var Img = require('plugin/img');



var Mpslider = React.createClass({
	getInitialState: function() {
		return{
            data:this.props.data
        }
	},
    toSwipe: function(coverLogoList){
        return(
        <Swipe data = {{height:"100%",interval:5000}}>{
            coverLogoList.map(function(item,index){
                item = item||{};
                return(
                    <div className = "swiper" key={index}>
                        <Img data={{url:item.bookCoverLogo||""}}/>
                    </div>
                    )
                })
             } 
            </Swipe>
        )
    },
	render: function() {
		var me = this;
        return (
            <div className="cmr-Swiper">                        {me.toSwipe(this.props.data.CoverLogoList)}
            </div>)
            }
    });

module.exports = Mpslider;
