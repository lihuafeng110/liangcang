 //注册请求
$("#register").on("click" , function(){
                var user_value = $("#username").val();
                var pass_value = $("#password").val();
                $.ajax("http://localhost/BK2002/day26-1019/login/register.php",{
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
                                location.href = "./signin.html";
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
                           location.href = "./signup.html";
                        },1500)
                      }
                })
         })