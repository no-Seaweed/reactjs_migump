/**
 * React Mponepic插件
 	@author --
 	@props data（必选属性前面带＊，非必选项目请备注默认值）
 		－*url : String,//eg
		-closeMyself : false(默认) //eg
	@example
	<Mponepic data={{url:"",closeMyself:true}}/>

 */
require('./mponepic.scss');

var Mponepic = React.createClass({
	getInitialState: function() {
		return {};
	},
    
    renderList:function(){
        var me = this;
        return(
            <section className="onebookbox">
                <div className="pic_main">
                    <img src=               {me.props.data.picUrl} className="pic_style" /></div>
                <div className="content">
                    <div className="title">{me.props.data.title}</div>
                    <div className="author">
                        <i className="co-icon co-author-icon icon_style" />
                        {me.props.data.author}
                    </div>
                    <div className="intro">{me.props.data.intro}</div>
                </div>
            </section>
            )
    },
	render: function() {
		return (
			<div className="cmr-mponepic">
                    {this.renderList()}
            </div>
		);
	}
});

module.exports = Mponepic;
