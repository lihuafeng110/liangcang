//详情页
//登录功能
// 获取查看是否存在cookie;
var username_cookie = getCookie("username");
var logined_ele = document.querySelector(".logined");
var login_ele = document.querySelector(".login");
var register_ele = document.querySelector(".register");
var logout_ele = document.querySelector("#logout");


if (username_cookie) {
  // 已经成功登录了;
  logined_ele.style.display = "block";
  logined_ele.children[0].innerHTML = "你好," + username_cookie;
  login_ele.style.display = "none";
  register_ele.style.display = "none";
} else {
  login_ele.style.display = "block";
}

//     退出登录 : 删除cookie;
logout_ele.onclick = function () {
  removeCookie("username");
  location.href = "./index.html";
//   login_ele.style.display = "block";
};
// 放大镜
function Magnifier(){
    // 元素选择 
    // 大图盒子
    this.$big_img_box_ele = $(".big-img");
    // 大图; 
    this.$big_img_ele = $(".big-img img");
    // 小图盒子 
    this.$small_img_box_ele = $(".small-img");
    // 小图图片 
    this.$small_img_ele = $(".small-img img");
    // 焦点盒子
    this.$focus_ele  = $(".focus");
    // 按钮图片
    // this.$btn_img = $(".btn-img>img");

    this.focus_max_left = parseInt(this.$small_img_ele.css("width")) - parseInt(this.$focus_ele.css("width"));
    this.focus_max_top = parseInt(this.$small_img_ele.css("height")) - parseInt(this.$focus_ele.css("height"));

    this.prop = {
        width :  parseInt(this.$focus_ele.css("width")) / parseInt(this.$big_img_ele.css("width")),
        height :  parseInt(this.$focus_ele.css("height")) / parseInt(this.$big_img_ele.css("height"))
    };
    this.init();
    // 计算大图运动的总长度; 
    this.big_max_left = parseInt( this.$big_img_ele.css("width")) - parseInt( this.$big_img_box_ele.css("width"));
    this.big_max_top = parseInt( this.$big_img_ele.css("height")) - parseInt( this.$big_img_box_ele.css("height"));
    this.bindEvent();
}
// 事件绑定功能; 
Magnifier.prototype.bindEvent = function(){
    var _this = this;
    console.log(_this)
    // 放大图片的显示隐藏
    this.$small_img_box_ele.on("mouseover",function(){
        _this.toggle("show");
    })
    this.$small_img_box_ele.on("mouseout",function(){
        _this.toggle("hide");
    })

    // 鼠标跟随功能; 
    this.$small_img_box_ele.on("mousemove",function(evt){
        // 鼠标位置信息; 
        _this.follow( evt.offsetX , evt.offsetY );
    }) 
    }       
// 显示隐藏切换功能; 
Magnifier.prototype.toggle = function( type ){
    this.style = type === "show" ? "block" : "none";
    this.$big_img_box_ele.css("display",this.style)
    // console.log(this.style)
    this.$focus_ele.css("display",this.style)
}
// 初始化图片比例; 
Magnifier.prototype.init = function(  ){
    this.big_img_width = parseInt(this.$big_img_box_ele.css("width")) * parseInt(this.$small_img_ele.css("width")) /parseInt(this.$focus_ele.css("width")) + "px";
    this.big_img_height = parseInt(this.$big_img_box_ele.css("height")) * parseInt(this.$small_img_ele.css("height")) /parseInt(this.$focus_ele.css("height")) + "px";
    // 给元素设置宽高; 
    this.$big_img_ele.css({
        width: this.big_img_width,
        height:this.big_img_height
    })
}
// 跟随功能 ; 
Magnifier.prototype.follow = function( x , y ){
    // 为了让鼠标在中间，所以我们要减去元素的宽高; 
    var _left = x - parseInt( this.$focus_ele.css("width") ) / 2 ;
    var _top  = y - parseInt( this.$focus_ele.css("height") ) / 2;
    // 边界检测; 
    // 找到最小值;  如果小于等于最小值就让你等于最小值; 
    // 找到最大值;  如果大于等于最大值就让你等于最大值; 

    _left = _left <= 0 ? 0 : _left;
    _left = _left >= this.focus_max_left ? this.focus_max_left : _left;

    _top  = _top <= 0 ? 0 : _top;
    _top  = _top >= this.focus_max_top ? this.focus_max_top : _top;

    this.$focus_ele.css("left",_left + "px") ;
    this.$focus_ele.css("top",_top + "px") ;

    // 大图运动 ; 
    // 大图图片 :
    // 百分比运动 : 
    this.prop.left = _left / this.focus_max_left;
    this.prop.top  = _top  / this.focus_max_top;

    this.$big_img_ele.css("left",-this.big_max_left * this.prop.left + "px")
    this.$big_img_ele.css("top",-this.big_max_top * this.prop.top + "px")
}
//函数调用
// var mag = new Magnifier()

//ajax数据渲染
// 1. 获取到list页面传递过来的数据; 
var index = location.href.split("#")[1].split("=")[1];
// 2. 请求和list页面同样的数据;             
$.ajax("./javascripts/data.json")
.then( function(res){
      var item = res.data[index];
      $(".shopdetail").html(`
      <div class="detail_head">
            <em>良仓 >  美食 > <a href="./list.html">零食 > </a><i>${item.bigword}</i></em>
            <div class="detail_body">
                  <div class="middle-picture l">

                     <div class="big-img">
                            <img src=${item.bigsrc} alt="">
                     </div>

                     <div class="small-img">
                        <img src="${item.bigsrc} alt="">
                        <div class="tiemo"></div>
                     </div>

                     <div class="focus"></div>

                     <div class="btn-img">
                         <img src=${item.bigsrc} alt="">
                     </div>
                  </div>
                  <div class="middle-content l">
                       <div class="shop-dianzan">${item.count}</div>
                       <div class="shop-produce"${item.title}</div>
                       <div class="shop-jieshao">${item.bigword}</div>
                       <div class="shop-price">价格: <i>${item.money}</i> </div>
                       <div class="shop-safe">
                           <span class="safe1">免运费</span>
                           <span class="safe2">正版授权</span>
                       </div>
                       <div class="shop-type">
                             口味:
                             <p>种类1</p>
                             <p>种类2</p>
                       </div>
                       <div class="shop-count">
                             数量
                       </div>
                       <div class="shop-buy">
                             立即购买
                       </div>
                       <div class="shop-gouwu">
                             加入购物车
                       </div>
                  </div>
            </div>
      </div>
      `)
      //异步调用
      var mag = new Magnifier()


//购物车
var sc = new ShopCart();
var shopcart_data = sc.get("shopcar");
$(".shop-gouwu").click(function () {
      // 找到当前数据的下标; 
      //   var index = $(this).attr("data-index");
      // 取出当前这条元素所带表的数据; 
      // var item = list[index];
      var item = res.data[index];
      console.log(item);
      // 判断数据是否在购物车之中存在; 
      if (shopcart_data[index]) {
            // 如果存在那么就在这个对象之中的数量+1;
            shopcart_data[index].count++;
                $(".jishu").html(shopcart_data[index].count)
            //     console.log( shopcart_data[index].count)
      } else {
            // 如果不存在这条商品我就添加这条商品; 
            item.count = 1;
            shopcart_data[index] = item;
            $(".jishu").html(shopcart_data[index].count)
      }
      // 数据操作结束之后一定要实时放入到localstorage 之中; 
      sc.save("shopcar", shopcart_data);
      // $(".shop_num").html = count;
})
       
});

        
//吸顶菜单和回到顶部

//回到顶部原生
var BacktoTop_ele = document.querySelector(".BacktoTop");
BacktoTop_ele.onclick = function goback(){
      // 设置scrollTop 为0;
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
}
//吸顶菜单原生
var menu_ele = document.querySelector(".menuwrap");
window.onscroll = function(){
      // 判定一个阈值; 
      var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      //元素显示和隐藏
      if(scrollTop > 10){
            // 给元素设置样式的方式是 : 元素.style.属性名 = "属性值";
            BacktoTop_ele.style.display = "block";
      }else{
            BacktoTop_ele.style.display = "none";
      }
      //吸顶菜单
      if(scrollTop >= 56){
            menu_ele.style.position = "fixed";
            menu_ele.style.top = "0px";
      }
      if(scrollTop < 56){
            menu_ele.style.cssText = "";
      }
}
//回到顶部jQuery
// $(".BacktoTop").click(function(){
//       // $("body,html").scrollTop(0);
//       $("body,html").stop(true).animate({
//             scrollTop : 0 ,
//       }) 
// })
//右侧广告栏消失
$(".closeBtn").click(function(){
    $(this).parent().remove();
})
//导航栏二级菜单显示
//js写二级菜单,hover(滑入函数,滑出函数)
$(".shop").hover(
    function(){ $(this).children().next().css({display:"block"})},
    function(){ $(this).children().next().css({display:"none"})}
)
$(".gouwuche_2").hover(
    function(){$(this).css({background:"#96c8e0"})},
    function(){$(this).css({background:"#7dbfde"})}
)
//底部聊天对话框
var content_ele  = document.querySelector(".content");
var sendbtn_ele = document.querySelector(".sendbtn");
var textarea_ele = document.querySelector(".textarea");
function handlerSend(){
    var text_value = textarea_ele.value;
    if(text_value.length > 100){
        alert("请输入字数小于100的内容");
        return false;
    }else if(text_value.length<=0){
         alert("请输入内容");
    }
    else{
        var li = document.createElement("li");
        li.innerHTML = text_value;
        li.className = "msgContent right";
        var div = document.createElement("div");
        div.style.clear = "both";
        content_ele.appendChild( li );
        content_ele.appendChild( div );
        // 如果新增的元素遇到的滚动条，并且我们的元素被放入到了滚动条的底部; 
        // 想要显示这个元素那么此时我们可以调用 API : scrollIntoView()
        li.scrollIntoView();
    }
    var text_value = textarea_ele.value;
        textarea_ele.value = "";
        textarea_ele.focus();
        sendbtn_ele.onclick = handlerSend;
} 
//执行函数，sendbtn按下绑定事件
sendbtn_ele.onclick = handlerSend;
//按回车发送消息
textarea_ele.onkeydown = function( evt ){
    evt = evt || event;
    var code = evt.keyCode || evt.which;
    if(code === 13){
          handlerSend();   
    }
}
//关闭开启聊天
$(".closechat").click(function(){
  $(".chat").css({display:"none"})
})
$(".openchat").click(function(){
    $(".chat").css({display:"block"})

})
//聊天框拖拽
var drag_ele = document.querySelector(".chat_head");
var box_ele = document.querySelector(".chat")
drag_ele.onmousedown = function(evt){
    evt = evt || event;
    var offsetX = evt.offsetX;
    var offsetY = evt.offsetY;
    document.onmousemove = function(evt){
        evt = evt || event;
        var _left = evt.clientX - offsetX;
        var _top  = evt.clientY - offsetY;
        //边界检测
        _left = _left < 0 ? 0 : _left;
        _top  = _top < 0 ? 0 : _top;
        // console.log(_left,_top)
        box_ele.style.left = _left + "px";
        box_ele.style.top  = _top  + "px";
    }
 }
 //鼠标移出停止
 drag_ele.onmouseup = function(){
    document.onmousemove = null;
}
//首页选项卡
//第一行
$(".tubiao1 div").on("mouseover",function(){
    var index = $(this).index(".tubiao1 div");
    $(".tb1 div").eq(index).show().siblings("div").hide();
})
$(".tubiao1 div").on("mouseout",function(){
    var index = $(this).index(".tubiao1 div");
    $(".tb1 div").eq(index).hide();
})
$(".tb1 div").on("mouseover" , function(){
    var index = $(this).index(".tb1 div");
    $(".tb1 div").eq(index).show().siblings("div").hide();
})
$(".tb1 div").on("mouseout" , function(){
    $(".tb1 div").hide();
})
//第二行
$(".tubiao2 div").on("mouseover",function(){
    var index = $(this).index(".tubiao2 div");
    $(".tb2 div").eq(index).show().siblings("div").hide();
})
$(".tubiao2 div").on("mouseout",function(){
    var index = $(this).index(".tubiao2 div");
    $(".tb2 div").eq(index).hide();
})
$(".tb2 div").on("mouseover" , function(){
    var index = $(this).index(".tb2 div");
    $(".tb2 div").eq(index).show().siblings("div").hide();
})
$(".tb2 div").on("mouseout" , function(){
    $(".tb2 div").hide();
})
//第三行
$(".tubiao3 div").on("mouseover",function(){
    var index = $(this).index(".tubiao3 div");
    $(".tb3 div").eq(index).show().siblings("div").hide();
})
$(".tubiao3 div").on("mouseout",function(){
    var index = $(this).index(".tubiao3 div");
    $(".tb3 div").eq(index).hide();
})
$(".tb3 div").on("mouseover" , function(){
    var index = $(this).index(".tb3 div");
    $(".tb3 div").eq(index).show().siblings("div").hide();
})
$(".tb3 div").on("mouseout" , function(){
    $(".tb3 div").hide();
})




