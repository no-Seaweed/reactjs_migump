/**
 * React Mprenewtry2插件
 	@author --
 	@props data（必选属性前面带＊，非必选项目请备注默认值）
 		－*url : String,//eg
		-closeMyself : false(默认) //eg
	@example
	<Mprenewtry2 data={{url:"",closeMyself:true}}/>

 */
require('./mprenewtry2.scss');
require('./swiper-4.2.6.min.js');

var Img = require('plugin/img');

var Mprenewtry2 = React.createClass({
	getInitialState: function() {
		return {
            data:this.props.data,
            list:[],
            switch: false,
            page:{pageNow:0}
        }
	},
    componentDidMount:function(){
        this.swiper = new Swiper(
            '.swiper-h',{
                freeMode: true,
                slidesPerView: 'auto'
            }
        );
        ///////////////////////////////
        this.toClick();
    },
    toClick: function(event){   
        var me = this;
        me.state.page.pageNow+=1;
        if(me.state.switch){return;}
            $.ajax({
                type:"GET",
                dataType:"jsonp",
                data:{
                    page:me.state.page.pageNow
                },
                url:"http://121.42.42.4:3003/getBookList",
                jsonCallback:"jsonpBack" + me.state.page.pageNow,
                success: function(data){
                    var newlist = data.data.bookInfoList;
                    me.setState({list:newlist});
                    me.setState({switch:false});
                    me.swiper.update();
                },error:function(){
                    me.setState({switch:false});
                }
            })
    },
    toSwipe: function(data){
        var str = '';
        var list = [];
        this.state.list.forEach(function(v,k){
            list.push(
                    <div className = "swiper-slide r" key={k}>
                        <img src={v.bookCoverLogo}  className="img_style" />
                        <span className = "book-name co-font-big">{v.bookShowName}</span>
                        <span className = "bookauthor-name co-font-normal">{v.authorName}</span>
                    </div>
            )
        })
        return list;
    },
	render: function() {
        var me = this;
		return (
            <div className = "renew_main">
                <div className = "cmr-mpsection">
                        <div className="section">
                            <div className="title">
                                {me.props.data.headline.title}
                            </div>
                            <div className="button_main" style={{width:"77%"}}>
                                <div className="button" type="dashed" onClick={me.toClick}>
                                        <span className="co-change-tt co-font-big co-srtj-right co-srtj-hyh thi">{me.props.data.headline.button}</span>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="cmr-mprenew">
                    <div className = "swiper-container swiper-h">
                        <div className = "swiper-wrapper rwrapper">
                            {this.toSwipe()}
                        </div>
                    </div>
                </div>
            </div>
		);
	}
});

module.exports = Mprenewtry2;
