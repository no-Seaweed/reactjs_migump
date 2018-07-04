/**
 * React Mplogincheck插件
 	@author --
 	@props data（必选属性前面带＊，非必选项目请备注默认值）
 		－*url : String,//eg
		-closeMyself : false(默认) //eg
	@example
	<Mplogincheck data={{url:"",closeMyself:true}}/>

 */
require('./mplogincheck.scss');
var Swipe = require('base/swiper3/swiper3');    

var Mplogincheck = React.createClass({
	getInitialState: function() {
		return {
        };
	},
    
    componentDidMount: function(){
        var swiper = new Swiper(
            '.swiper_container',{
                direction:'vertical',
                autoplay: 5000,
                loop:true,
                pagination:{
                    el: '.swiper-pagination',
                    clickable: true,
                    },
            }
        );
    },                                
    
	render: function() {
        var me = this;
		return (
           <div className="swiper_main">
                <div className="swiper_sub">
                    <i className="co-icon co-horn-icon co-speaker-icon"></i>
                    
                    <div className="swiper_container swiper-l">
            { me.props.data.announcementList.map(function(item,index){
                                
                                return (
                                    <div className="swiper-wrapper lwrapper" key={index}>
                                        <div className="swiper-slide l">
                                            {item.announceContent}
                                        </div>
                                    </div>    
                                )
                            })}
                        
                    </div>
                    <i className="co-icon co-greater-icon co-spreaker-more co-speaker-icon"></i>
                    
                </div>
            </div>
		);
	}
});

module.exports = Mplogincheck;
