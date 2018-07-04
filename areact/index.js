/**
 * React Areact插件
 	@author --
 	@props data（必选属性前面带＊，非必选项目请备注默认值）
 		－*url : String,//eg
		-closeMyself : false(默认) //eg
	@example
	<Areact data={{url:"",closeMyself:true}}/>

 */
require('./areact.scss');


var Areact = React.createClass({
	getInitialState: function(){ 

		return {
            data:this.props.data
        };
	},
    renderList:function(apack){
        return(
            apack.map(function(item,index){
            return(<div className="pack" key={index}>
                      <img className="book2" src = {item.bookCoverLogo} />
                      <div className="textalign1"> {item.authorName} </div>  
                </div>
            )
        }))
    },
	render: function() {
        var me = this;
		return (
			<div className="cmr-areact">
               
            {me.renderList(this.props.data.pack)}
                
            </div>
		);
	}
});

module.exports = Areact;
