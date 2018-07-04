/**
 * React Mpoption插件
 	@author --
 	@props data（必选属性前面带＊，非必选项目请备注默认值）
 		－*url : String,//eg
		-closeMyself : false(默认) //eg
	@example
	<Mpoption data={{url:"",closeMyself:true}}/>

 */
require('./mpoption.scss');
var Img = require('plugin/img');

var Mpoption = React.createClass({
	getInitialState: function() {
		return {};
	},
	render: function() {
		var me = this;
        return (
			<div className="cmr-mpoption">
                <div className="container">{
                    me.props.data.OptionList.map(function(item,index)
                    {
                        return(
                            <div className="cmr-container" key={index}>
                                    <img className="icon_style" src={item.aIcon} />
                                
                                    <div className="title_style">{item.title}</div>
                            
                                
                            </div>
                        )
                    })
                    }
                </div>
            </div>
		);
	}
});

module.exports = Mpoption;
