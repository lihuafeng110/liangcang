"use strict";

// 字符串渲染页面
document.querySelector(".shoplist").innerHTML = list.map(function (item) {
  return "\n                 <div class=\"shop_box\">\n                 <div class=\"shop_img\">\n                        <a href=\"\"><img src=\"".concat(item.bigsrc, "\" alt=\"\"></a>\n                  </div>\n                  <div class=\"zhaozi\">\n                        <p class=\"money\">").concat(item.money, "</p>\n                        <p class=\"bw\">").concat(item.bigword, "</p>\n                        <p class=\"sw\">").concat(item.smallword, "</p>\n                  </div>\n                  <div class=\"shop_title\">\n                        <a href=\"\">\n                              <span><img src=\"").concat(item.smallsrc, "\" alt=\"\">\n                              </span>\n                        </a>\n                        <a href=\"\"><p>").concat(item.title, "</p></a>\n                        <a href=\"\"><i class=\"iconfont\">&#xe51f;</i></a>\n                        <a href=\"\"><b>").concat(item.count, "</b></a>\n                  </div>\n                  </div>\n                  ");
}).join(""); //吸顶菜单和回到顶部
//回到顶部原生
// var BacktoTop_ele = document.querySelector(".BacktoTop");
// BacktoTop_ele.onclick = function goback(){
//       // 设置scrollTop 为0;
//       document.body.scrollTop = 0;
//       document.documentElement.scrollTop = 0;
// }
//吸顶菜单原生

var menu_ele = document.querySelector(".menuwrap");

window.onscroll = function () {
  // 判定一个阈值; 
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop; //元素显示和隐藏
  // if(scrollTop > 300){
  //       // 给元素设置样式的方式是 : 元素.style.属性名 = "属性值";
  //       BacktoTop_ele.style.display = "block";
  // }else{
  //       BacktoTop_ele.style.display = "none";
  // }
  //吸顶菜单

  if (scrollTop >= 56) {
    menu_ele.style.position = "fixed";
    menu_ele.style.top = "0px";
  }

  if (scrollTop < 56) {
    menu_ele.style.cssText = "";
  }
}; //回到顶部jQuery


$(".BacktoTop").click(function () {
  // $("body,html").scrollTop(0);
  $("body,html").stop(true).animate({
    scrollTop: 0
  });
}); // 轮播图

var box = $(".banner");
var next = $(".right");
var prev = $(".left");
var picture = $(".banner>ul>li");
var ol = $(".banner>ol");
var picture_l = $(".banner>ul>li").length;
var index = 0; // 小圆点

var num = 0; // 添加

while (num < picture_l) {
  ol.append("<li></li>");
  num++;
}

var oli = $(".banner>ol>li");
oli.first().addClass("now");
oli.mouseover(function () {
  $(this).addClass("now").siblings().removeClass("now");
  index = $(this).index();
  picture.eq(index).fadeIn().siblings().fadeOut();
}); // 右边按钮

next.click(function () {
  index++;

  if (index > picture_l - 1) {
    index = 0;
  }

  oli.eq(index).addClass("now").siblings().removeClass("now");
  picture.eq(index).fadeIn().siblings().fadeOut();
}); // 左边按钮

prev.click(function () {
  index--;

  if (index < 0) {
    index = picture_l - 1;
  }

  oli.eq(index).addClass("now").siblings().removeClass("now");
  picture.eq(index).fadeIn().siblings().fadeOut();
}); // 定时器

var t = setInterval(function () {
  next.click();
}, 3000);
box.hover(function () {
  clearInterval(t);
}, function () {
  t = setInterval(function () {
    next.click();
  }, 3000);
}); //右侧广告栏消失

$(".closeBtn").click(function () {
  $(this).parent().remove();
}); //导航栏二级菜单显示
//js写二级菜单,hover(滑入函数,滑出函数)

$(".shop").hover(function () {
  $(this).children().next().css({
    display: "block"
  });
}, function () {
  $(this).children().next().css({
    display: "none"
  });
});
$(".gouwuche_2").hover(function () {
  $(this).css({
    background: "#96c8e0"
  });
}, function () {
  $(this).css({
    background: "#7dbfde"
  });
}); //底部聊天对话框

var content_ele = document.querySelector(".content");
var sendbtn_ele = document.querySelector(".sendbtn");
var textarea_ele = document.querySelector(".textarea");

function handlerSend() {
  var text_value = textarea_ele.value;

  if (text_value.length > 100) {
    alert("请输入字数小于100的内容");
    return false;
  } else if (text_value.length <= 0) {
    alert("请输入内容");
  } else {
    var li = document.createElement("li");
    li.innerHTML = text_value;
    li.className = "msgContent right";
    var div = document.createElement("div");
    div.style.clear = "both";
    content_ele.appendChild(li);
    content_ele.appendChild(div); // 如果新增的元素遇到的滚动条，并且我们的元素被放入到了滚动条的底部; 
    // 想要显示这个元素那么此时我们可以调用 API : scrollIntoView()

    li.scrollIntoView();
  }

  var text_value = textarea_ele.value;
  textarea_ele.value = "";
  textarea_ele.focus();
  sendbtn_ele.onclick = handlerSend;
} //执行函数，sendbtn按下绑定事件


sendbtn_ele.onclick = handlerSend; //按回车发送消息

textarea_ele.onkeydown = function (evt) {
  evt = evt || event;
  var code = evt.keyCode || evt.which;

  if (code === 13) {
    handlerSend();
  }
}; //关闭开启聊天


$(".closechat").click(function () {
  $(".chat").css({
    display: "none"
  });
});
$(".openchat").click(function () {
  $(".chat").css({
    display: "block"
  });
}); //聊天框拖拽

var drag_ele = document.querySelector(".chat_head");
var box_ele = document.querySelector(".chat");

drag_ele.onmousedown = function (evt) {
  evt = evt || event;
  var offsetX = evt.offsetX;
  var offsetY = evt.offsetY;

  document.onmousemove = function (evt) {
    evt = evt || event;

    var _left = evt.clientX - offsetX;

    var _top = evt.clientY - offsetY; //边界检测


    _left = _left < 0 ? 0 : _left;
    _top = _top < 0 ? 0 : _top; // console.log(_left,_top)

    box_ele.style.left = _left + "px";
    box_ele.style.top = _top + "px";
  };
}; //鼠标移出停止


drag_ele.onmouseup = function () {
  document.onmousemove = null;
}; //首页选项卡
//第一行


$(".tubiao1 div").on("mouseover", function () {
  var index = $(this).index(".tubiao1 div");
  $(".tb1 div").eq(index).show().siblings("div").hide();
});
$(".tubiao1 div").on("mouseout", function () {
  var index = $(this).index(".tubiao1 div");
  $(".tb1 div").eq(index).hide();
});
$(".tb1 div").on("mouseover", function () {
  var index = $(this).index(".tb1 div");
  $(".tb1 div").eq(index).show().siblings("div").hide();
});
$(".tb1 div").on("mouseout", function () {
  $(".tb1 div").hide();
}); //第二行

$(".tubiao2 div").on("mouseover", function () {
  var index = $(this).index(".tubiao2 div");
  $(".tb2 div").eq(index).show().siblings("div").hide();
});
$(".tubiao2 div").on("mouseout", function () {
  var index = $(this).index(".tubiao2 div");
  $(".tb2 div").eq(index).hide();
});
$(".tb2 div").on("mouseover", function () {
  var index = $(this).index(".tb2 div");
  $(".tb2 div").eq(index).show().siblings("div").hide();
});
$(".tb2 div").on("mouseout", function () {
  $(".tb2 div").hide();
}); //第三行

$(".tubiao3 div").on("mouseover", function () {
  var index = $(this).index(".tubiao3 div");
  $(".tb3 div").eq(index).show().siblings("div").hide();
});
$(".tubiao3 div").on("mouseout", function () {
  var index = $(this).index(".tubiao3 div");
  $(".tb3 div").eq(index).hide();
});
$(".tb3 div").on("mouseover", function () {
  var index = $(this).index(".tb3 div");
  $(".tb3 div").eq(index).show().siblings("div").hide();
});
$(".tb3 div").on("mouseout", function () {
  $(".tb3 div").hide();
}); //登录功能
// 获取查看是否存在cookie;

var username_cookie = getCookie("username");
var logined_ele = document.querySelector(".logined");
var login_ele = document.querySelector(".login");
var register_ele = document.querySelector(".register");
var logout_ele = document.querySelector("#logout");

if (username_cookie) {
  // 已经成功登录了;
  logined_ele.style.display = "block";
  logined_ele.children[0].innerHTML = "你好," + username_cookie;
  login_ele.style.display = "none";
  register_ele.style.display = "none";
} else {
  login_ele.style.display = "block";
} //     退出登录 : 删除cookie;


logout_ele.onclick = function () {
  removeCookie("username");
  location.href = "./index.html"; //   login_ele.style.display = "block";
};