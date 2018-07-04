/**
 * React Mploadmore插件
 	@author --
 	@props data（必选属性前面带＊，非必选项目请备注默认值）
 		－*url : String,//eg
		-closeMyself : false(默认) //eg
	@example
	<Mploadmore data={{url:"",closeMyself:true}}/>

 */
require('./mploadmore.scss');

var Mploadmore = React.createClass({
	getInitialState: function() {
        var loadDiv = '<div class="loading">Loading...</div>';
        
        return {
            data: this.props.data,
            list:[],
            isloading:false,
            page:{pageNow:0},
        };
	},
    renderList: function(data){
        var str = '';
        var list=[];
        this.state.list.forEach(function(v,k){
            list.push(<section className="thisbox" key={k}>
                        <div className="pic">
                            <img src= {v.bookCoverLogo} className="pic_sub" /></div>
                        <div className="_content">
                            <div className="_title">{v.bookShowName}</div>
                            <div className="_author">
                                <i className="co-icon co-author-icon _icon_style" />
                                {v.authorName}
                                <i className="co-bian co-btn-type5 co-ha-le _type_style">书本类型</i></div>
                            <div className="_intro">{v.bookBrief}</div>
                        </div>
                    </section>);
            
        });
        return list;
    },
    componentDidMount: function(){
        var me=this;
        $(window).scroll(function(){
            if($(window).scrollTop() >= $(document).height() - $(window).height()-20){
                me.state.page.pageNow +=1;
                if(me.state.isloading){return;}
                else{me.state.isloading=true;}
                $.ajax({  
                    type: "GET", 
                    dataType: "jsonp",
                    data:{
                         page:me.state.page.pageNow
                     },
                    url: "http://121.42.42.4:3003/getBookList",
                    jsonpCallback:"jsonpBack"+me.state.page.pageNow,
                    success: function(data){            
                        var newlist=me.state.list.concat(data.data.bookInfoList);

                        me.setState({list:newlist});
                        me.setState({isloading:false});
                    },error:function(){
                    me.setState({isloading:false});
                }
        })
    }})},

	render: function() {
        
		return (
            <div className="cmr-mploadmore">        
                {this.renderList()}
                <div className="loading" id="container">Loading...</div>
            </div>
		);
	}
});
    
module.exports = Mploadmore;
