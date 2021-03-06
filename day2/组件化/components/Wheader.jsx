class Wheader extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			nav:0,
			navs:[{
				title:"热门",
				href:"",
				channel:""
			},{
				title:"新鲜事",
				href:"",
				channel:""
			},{
				title:"搞笑",
				href:"",
				channel:""
			},{
				title:"情感",
				href:"",
				channel:""
			},{
				title:"明星",
				href:"",
				channel:""
			},{
				title:"社会",
				href:"",
				channel:""
			},{
				title:"数码",
				href:"",
				channel:""
			},{
				title:"体育",
				href:"",
				channel:""
			},{
				title:"汽车",
				href:"",
				channel:""
			},{
				title:"电影",
				href:"",
				channel:""
			},{
				title:"游戏",
				href:"",
				channel:""
			},{
				title:"骚姚",
				href:"",
				channel:""
			}]
		}
	}
	
	navigateTo(index,e){
		this.setState({
			nav:index
		})
	}
	
    render() {
        return (
            <div className="lite-topbar main-top">
                <div className="nav-top">
                    <div className="nav-left unlogin-logo"></div> <a className="nav-search unlogin-search">
                        <aside><label className="m-search"><i className="m-font m-font-search"></i>
                            <div className="m-text-cut"> 大家都在搜：多少人愿与AI谈恋爱</div>
                        </label></aside>
                    </a>
                    <div className="nav-right">

                        <div className="lite-iconf lite-iconf-releas"></div>
                    </div>
                </div>
                <div className="nav-main">
                    <div className="m-box">
                        <div className="m-box-col inner-box">
                            <div className="scroll-box slide-container">
                                <div className="slide-wrap">
                                    <ul className="nav_item">
	                                    	{
	                                    		(()=>{
	                                    			return this.state.navs.map((item,index)=>{
	                                    				return (
	                                    					<li onClick={this.navigateTo.bind(this,index)} key={index} className={
	                                    						index===this.state.nav?"item_li cur":"item_li"
	                                    					}><span>
				                                            {item.title}<em></em></span>
				                                        </li>
	                                    				)
	                                    			})
	
	                                    		})()
	                                    	}
                                    </ul>
                                </div>
                            </div>


                        </div>
                        <div className="nav-plus m-box-center m-box-center-a"><i className="m-font m-font-arrow-down"></i></div>
                    </div>
                </div>
            </div>
        )
    }
}