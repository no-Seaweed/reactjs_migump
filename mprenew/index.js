
/**
 * React Mprenew插件
 	@author --
 	@props data（必选属性前面带＊，非必选项目请备注默认值）
 		－*url : String,//eg
		-closeMyself : false(默认) //eg
	@example
	<Mprenew data={{url:"",closeMyself:true}}/>

 */
require('./mprenew.scss');
require('./swiper-4.2.6.min.js');
var Mpsection = require('plugin/mpsection');


var Img = require('plugin/img');

var Mprenew = React.createClass({
	getInitialState: function() {
		return {
            data:this.props.data,
            list:[],
            switch: false
        }
        
	},
    componentDidMount:function(){
        this.swiper = new Swiper(
            '.swiper-h',{
                freeMode: true,
                slidesPerView: 'auto'
            }
        );
        window.swiper = this.swiper;
        ///////////////////////////////
        this.toClick();
        window.__refresh=this.toClick;
        window.__pageNow = 1;
 
    },
    
/*    verify: function(){
        
        this.toClick();
        if(this.refs.mpsection.props.kaiguan == false){
            this.toClick();
            mpsection.kaiguan = true;
        }
    },*/
    
    toClick: function(event){   
        
        var me = this;

        window.__pageNow+=1;
        if(me.state.switch){return;}
            $.ajax({
                type:"GET",
                dataType:"jsonp",
                data:{
                    page:window.__pageNow
                },
                url:"http://121.42.42.4:3003/getBookList",
                jsonCallback:"jsonpBack" + window.__pageNow,
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
                <div className="cmr-mprenew">
                    <div className = "swiper-container swiper-h">
                        <div className = "swiper-wrapper rwrapper">
                            {this.toSwipe()}
                        </div>
                    </div>
                </div>
		);
	}
});

module.exports = Mprenew;
