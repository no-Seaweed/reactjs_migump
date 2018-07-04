/**
 * React Mpsection插件
 	@author --
 	@props data（必选属性前面带＊，非必选项目请备注默认值）
 		－*url : String,//eg
		-closeMyself : false(默认) //eg
	@example
	<Mpsection data={{url:"",closeMyself:true}}/>

 */
require('./mpsection.scss');
var Mprenew = require('plugin/mprenew/index.js');

var Mpsection = React.createClass({
	getInitialState: function() {
		/*var dataid = S.add();
        this._config = S.set(dataid,{
            switch : false
        });*/
        return {
            data:this.props.data
        };
	},
    renderTitle:function(){
        var me = this;
        return(
            <div className="title">
                {me.props.data.title}
            </div>
        )
    },
    renderSubtitle:function(){
        var me = this;
        return(
            <div className="subtitle">
                {me.props.data.subtitle}
            </div>
        )
    },
    renderButton:function(wid){
        var me = this;
        return(
            <div className="button_main" style={{width:wid}}>
                <div className="button">
                            {me.props.data.button}
                        
                     <i className="co-icon co-greater-icon co-spreaker-more co-speaker-icon sec"></i>
                </div>
            </div>
        )
    },
    
    verify:function(){
        window.__refresh();
    },
 /*   changeSwiper: function(){
        console.log(this.refs)
        this.refs.mprenew.toClick();
    },*/
   /* check: function(){
        if(kaiguan){
            this.setState({kaiguan:false});
        }else{this.setState({kaiguan:true});}
    },*/
    renderRenewButton:function(renew){
        var me = this;
        return(
            <div className="button_main" style={{width:renew}}>
                <div className="button" onClick={this.verify}> 
                    <span className="co-change-tt co-font-big co-srtj-right co-srtj-hyh thi">{me.props.data.button}
                    </span>
                </div>
            </div>
        )
    },
	render: function() {
        var _this = this.state.data;
        if(_this.subtitle != ""){
            if(_this.button == "换一换"){
                return(
                    <div className="cmr-mpsection">
                    <div className="section">
                        {this.renderTitle()}
                        {this.renderSubtitle()}
                        {_this.button !=""?this.renderRenewButton("57%"):""}
                    </div>
                </div>
            )
        }else{  
		return (
			<div className="cmr-mpsection">
                <div className="section">
                    {this.renderTitle()}
                    {this.renderSubtitle()}
                    {_this.button !=""?this.renderButton("57%"):""}
                </div>
            </div>
		)}
        }else{
            if(_this.button == "换一换"){
                return(
                    <div className="cmr-mpsection">
                        <div className="section">
                            {this.renderTitle()}
                            {_this.button !=""?this.renderRenewButton("77%"):""}
                        </div>
                    </div>
            )}else{
            return(
            <div className="cmr-mpsection">
                <div className="section">
                    {this.renderTitle()}
                    {_this.button !=""?this.renderButton("77%"):""}
                </div>
            </div>
        )}}
	}
});

module.exports = Mpsection;
