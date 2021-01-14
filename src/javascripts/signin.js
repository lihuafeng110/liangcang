 //登录请求
$("#login").on("click" , function(){
                var user_value = $("#username").val();
                var pass_value = $("#password").val();
                $.ajax("http://localhost/BK2002/day26-1019/login/login.php",{
                      data :{
                            username : user_value,
                            password : pass_value
                      },
                      dataType :  "json"
                })
                .then(function(res){
                      console.log(res)
                      if(res.type === "success"){
                            $("#login_suc").css({
                                  "display" : "block"
                            })
                            setTimeout(function(){
                                location.href = "./index.html";
                            },2000);
                            setCookie("username" , user_value );
                      }else if(res.type === "error"){
                            $("#login_err").css({
                                  "display" : "block"
                            })
                            setTimeout(function(){
                            $("#login_err").css({
                                  "display" : "none"
                            })
                           location.href = "./signin.html";
                        },1500)
                      }
                })
         })