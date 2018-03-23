//header部分顶部右侧第一个li无padding
jQuery(function() {
    $(':checkbox[name=flag]').each(function() {
        $(this).click(function() {
            if ($(this).attr('checked')) {
                $(':checkbox[name=flag]').removeAttr('checked');
                $(this).attr('checked', 'checked');
            }
        });
    });

    //nav下拉菜单
    jQuery(document).ready(function() {
        var qcloud = {};
        $('[_t_nav]').hover(function() {
            var _nav = $(this).attr('_t_nav');
            clearTimeout(qcloud[_nav + '_timer']);
            qcloud[_nav + '_timer'] = setTimeout(function() {
                $('[_t_nav]').each(function() {
                    $(this)[_nav == $(this).attr('_t_nav') ? 'addClass' : 'removeClass']('nav-up-selected');
                });
                $('#' + _nav).stop(true, true).slideDown(200);
            }, 150);
        }, function() {
            var _nav = $(this).attr('_t_nav');
            clearTimeout(qcloud[_nav + '_timer']);
            qcloud[_nav + '_timer'] = setTimeout(function() {
                $('[_t_nav]').removeClass('nav-up-selected');
                $('#' + _nav).stop(true, true).slideUp(200);
            }, 150);
        });
    });
    //底部广告弹出关闭
    $(".footer_close").click(function() { $(".footer_bottom").slideUp(); });
    /*$(window).bind("scroll", function(){ 
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    $(".footer_bottom").slideDown();
    }
    }); */
    $(document).ready(
	function() {
	    setInterval(function() { $(".footer_bottom").slideDown(); }, 1500000);
	}
);
    $(".ceping2_box .zp_ziliao").find("li:first").css("margin-left", 0);
    //点赞

    $(".datum_zan").click(function() {
        var ta = $(this);
        if ($(this).attr("val") != "") {

            var pkid = $(this).attr("val");
            $(this).removeClass("datum_zan");
            $(this).addClass("cut");
            $.get("/ajax/Amount.ashx", {
                handle: "artpraise",
                pkid: pkid
            }, function(data, textStatus) {
                if (textStatus == "success") {

                    ta.text(data);
                }
            });

        }
    });

    //新闻点赞
    $(".data_zan").click(function() {
        var ta = $(this);
        if ($(this).attr("val") != "") {
            var pkid = $(this).attr("val");
            $(this).removeClass("data_zan");
            $(this).addClass("cut");
            $.get("/ajax/Amount.ashx", {
            handle: "votepraise",
                pkid: pkid
            }, function(data, textStatus) {
                if (textStatus == "success") {

                    ta.text(data);
                }
            });

        }
    });

    //提交留言
    $("#button").click(function() {
        var name = $("#messagename").val();
        var duties = $("#messageDuties").val();
        var tel = $("#messagetel").val();
        var email = $("#messageemail").val();
        var institution = $("#messageInstitution").val();
        var address = $("#messageaddress").val();
        var zipcode = $("#zipcode").val();
        var avenue = $("#messageavenue").val();
        var stage = $("#messageStage").val();
        var know = $("#know").val();
        var category = $("#category").val();
        var notes = $("#notes").val();

        $.get("/ajax/message.ashx", {
            name: name,
            duties: duties,
            tel: tel,
            email: email,
            institution: institution,
            address: address,
            zipcode: zipcode,
            avenue: avenue,
            know: know,
            category: category,
            stage: stage,
            notes: notes,
            duties: duties
        }, function(data, textStatus) {
            if (textStatus == "success") {
                alert(data);
                location.reload();

            }
        });


    });
   
    //希望了解产品

    $(".infor_select_option li").click(function() {

        if ($(this).attr("val") != "") {

            $("#know").val($(this).attr("val"));

        }
    });

    //公司所处阶段

    $(".infor_select_option1 li").click(function() {

        if ($(this).attr("val") != "") {

            $("#messageStage").val($(this).attr("val"));

        }
    });
    //资源查询

    $(".datum_option li").click(function() {

        if ($(this).attr("val") != "") {

            $("#Hi").val($(this).attr("val"));

        }
    });

    //资源查询

    document.onkeydown = function(e) {
        var ev = document.all ? window.event : e;
        if (ev.keyCode == 13) {

            $(".sousou").click();

        }
    }

    $(".sousou").click(function() {

        if ($("#Hi").val() == "") {

    
            window.location.href = "/datasearch/" + $("#title").val() + "/";

        }
        else {
            window.location.href = "/datalist/" + $("#Hi").val() + "/" + $("#title").val() + "/";
        }
    });

    //新闻查询

    $("#sousou").click(function() {

        if ($("#Hi").val() == "") {

            window.location.href = "/article/1/" + $("#title").val() + "/";

        }
        else {
            window.location.href = "/article/" + $("#Hi").val() + "/" + $("#title").val() + "/";
        }
    });
    //滚到nav时悬停到顶部
    var nt = !1;
    $(window).bind("scroll",
	function() {
	    var st = $(document).scrollTop(); //往下滚的高度
	    nt = nt ? nt : $("#nav").offset().top;
	    // document.title=st;
	    var sel = $("#nav");
	    if (nt < st) {
	        sel.addClass("nav_fixed");
	    } else {
	        sel.removeClass("nav_fixed");
	    }
	});
    //下载弹出登录框
    $(".pro_down").click(function() {
        $("#Hidden1").val($(this).attr("val"));
        $(".registerbox").hide();
        $(".pro_zhezhao,.loginbox").show();
        $(".loginbox").css("top", $(this).scrollTop().top);
    });

    //重置
    $("#res").click(function() {
        $("input").val("");
        $("#button").val("提交申请");
        $("#res").val("重写填写");
    });

    //下载弹出登录框
    $(".pro_down1").click(function() {

        var pkid = $(this).attr("val");
        $.get("/ajax/Amount.ashx", {
            handle: "datafile",
            pkid: pkid
        }, function(data, textStatus) {
            if (textStatus == "success") {
                if (data != "[object XMLDocument]") {

                    window.location.href = data;
                }
                else {
                    alert("下载资料正在上传中！");
                }
            }
        });
    });

    //补充资料
    $(".infor_tijiao").click(function() {

        var name = $("#name").val();
        var konw = $("#know").val();
        var tel = $("#tel").val();
        var notes = $("#notes").val();
        var duties = $("#duties").val();
        var institution = $("#institution").val();
        var avenue = $("#avenue").val();
        if (institution == "") {
            alert("请填写机构名称！"); return;
        }
        var retel = /^[0-9]{7,21}$/;
        if (retel.test(tel) == false) {
            alert("请填写联系电话！"); return;
        }
     
        $.get("/ajax/userManage.ashx", {
            handle: "logs",
            name: name,
            konw: konw,
            tel: tel,
            notes: notes,
            duties: duties,
            institution: institution,
            avenue: avenue

        }, function(data, textStatus) {
            if (textStatus == "success") {

                if (data == "登录成功!") {
                    window.location.href = "/resource/";
                }
                else {
                    alert(data);
                }


            }
            else {

            }
        });
    });
    //刷新验证码
    $(".shuaxin").click(function(e) {
        $("#image").attr("src", $("#image").attr("src") + "&rnd=" + Math.floor(Math.random() * 9999));
    });
    $(".online_close").click(function() { $(".pro_zhezhao,.loginbox").hide(); });
    $(".pro_zhezhao").height($("body").height());
    //下载弹出注册框
    $(".register_btn").click(function() {
        $(".loginbox").hide();
        $(".registerbox").show();
        $(".registerbox").css("top", $(this).scrollTop().top);
    })
    $("#shipin").click(function() {

    $(".shipin").show();
    $(".shipin").css("top", $(this).scrollTop().top);
    })
    //登录
    $(".login_button").click(function() {

        var email = $("#username").val();
        var password = $("#passwd").val();
        var pkid = $("#Hidden1").val();
        var re = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

        if (re.test(email) == false) { alert("请填写正确邮箱！"); return; }
        if (password.length < 1) { alert("请填写您的密码！"); return; }

        $.get("/ajax/userManage.ashx", {
            handle: "log",
            pkid: pkid,
            password: escape(password),
            email: escape(email)

        }, function(data, textStatus) {
            if (textStatus == "success") {

                if (data == "登录成功!") {
                    alert("登录成功!");
                    window.location.href = "/resource/";
                    return;
                }
                if (data == "密码错误!") {
                    alert("密码错误！");
                    return;
                }
                if (data == "用户名不存在!") {
                    alert("用户名不存在！");
                    return;
                }
                if (data == "[object XMLDocument]") {
                    alert("下载资料正在上传中！");
                    return;
                }
            }
            if (data.toString().length > 20) {
                alert("登录成功!");

                location.reload();
                return;
            }
        });
    })
    $(".online_close").click(function() { $(".registerbox").hide(); $(".shipin").hide(); });
    //下载弹出完善资料
    $(".login_submit").click(function() {
        var email = $("#email").val();
        var password = $("#password").val();
        var password1 = $("#password1").val();
        var code = $("#code").val();

        var re = /^([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

        if (re.test(email) == false) { alert("请填写正确邮箱！"); return; }
        if (password.length < 1) { alert("请填写您的密码！"); return; }
        if (password1.length < 1) { alert("请填写您的确认密码！"); return; }
        if (password != password1) { alert("两次密码不相同！"); return; }
        if (code.length < 1) { alert("请填写图片中显示的验证码！"); return; }
        $.get("/ajax/userManage.ashx", {
            handle: "add",
            password: escape(password),
            email: escape(email),
            code: code
        }, function(data, textStatus) {
            if (textStatus == "success") {

                if (data == "注册成功!") {
                    alert(data);
                    $(".registerbox").hide();
                    $(".informationbox").show();
                    $(".informationbox").css("top", $(this).offset().top + 215);
                }
                else if (data == "验证码输入错误！") {
                    alert("验证码输入错误！");
                }
                else if (data == "此邮箱以注册!") {
                    alert("此邮箱以注册!");
                }

            }
            else {
                alert("内容填写有误请重新填写！");
            }
        });

    })
    $(".infor_close").click(function() { $(".pro_zhezhao,.informationbox").hide(); });
    //完善资料的中意事项
    $(".infor_select").hover(function() { $(this).find(".infor_select_option").slideDown(200) }, function() { $(this).find(".cinfor_select_option").slideUp(200) });
    $(".infor_select_a1").click(function() { $(".infor_selectCut").text($(this).text()); $(".infor_select_option").slideUp(0); });
    //那些客户鼠标滑过特效
    $(".customer_list .bd ul li").hover(function() { $(this).find(".title").fadeIn() }, function() { $(this).find(".title").fadeOut() });
    //contact微信
    $(".contact_ico li").hover(function() { $(this).find(".hidden").show() }, function() { $(this).find(".hidden").hide() });
    //分部地区联系信息
    $(".contact_nr").eq(0).show();
    $(".contact_fenbu li").hover(function() {
        $(".contact_nr").hide();
        $(".contact_fenbu li").removeClass("cut");
        $(this).addClass("cut");

        $(".contact_nr").eq($(this).index()).show();
    });
    //案例banner视频弹出层
    $(".banner_casebtn").click(function() {
        $(".casevideo_zhezhao,.casevideo_box").fadeIn();
        $(".casevideo_box").css("top", $(this).scrollTop().top);
        $(".casevideo_content").html($(this).parents("li").find(".hidden").html());
    });
    //案例banner视频弹出层

    $(".casevideo_imgclose").click(function() { $(".casevideo_zhezhao,.casevideo_box").hide(); });
    $(".casevideo_zhezhao").height($("body").height());
    //案例分类点击滑动至相应栏目
    $('.case_h2tit_fix li').click(function() {
        $(this).addClass("cut").siblings().removeClass("cut");
        var case_num = $(this).index();
        $('html,body').animate({ scrollTop: $('.case_daohang').eq(case_num).offset().top - 125 }, 800);
    });

    //案例列表页鼠标滑过效果

    $(".case_listpage li").hover(

	function() { $(this).find(".title").fadeIn() }
	, function() { $(this).find(".title").fadeOut() }

);
    //案例详细页底部案例
    $(".case_detailbot li:first").css("padding-left", 0)

    //产品列表页
    $(".case_h2title ul.fr li:last").addClass("lastprolist");
    //$(".case_h2title ul.fr li").hover(function(){$(this).find(".hidden").show()},function(){$(this).find(".hidden").hide()});
    //$(".case_h2title ul.fr li").hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")});
    $('.case_h2title ul.fr li').click(function() {
        $(this).addClass("hover").siblings().removeClass("hover");
        var pro_num = $(this).index();
        $('html,body').animate({ scrollTop: $(".prolist").children("li").eq(pro_num).offset().top - 125 }, 800);
    });


    //招聘云
    //北森招聘云的差异化价值优势
    $(".zhaopin_youshi li:first").css("margin-left", 0);
    $(".zhaopin_youshi li").hover(
	function() {
	    $(this).addClass("hover")
	},
	function() {
	    $(this).removeClass("hover")
	}
	);
    //有哪些客户成功
    $(".zp_customer li").hover(function() { $(this).find(".title").fadeIn() }, function() { $(this).find(".title").fadeOut() });

    //测评云-销售潜质测验bot相关资料
    $(".ceping2_box").find(".zp_ziliao").find("li:first").css("padding-left", 0);

    $(".ceping3_shouyibot:first").css("padding-left", 0);
    $(".ceping3_listimg li:first").css("padding-left", 0);
    //解决方案
    $(".zhaopinlist3 .case_listimg li:first").css("padding-left", 0)

    //资料下载下拉框
    $(".datum_lanmu").hover(function() { $(this).find(".datum_option").slideDown(200) }, function() { $(this).find(".datum_option").slideUp(200) });
    $(".datum_a1").click(function() { $(".datum_Cut").text($(this).text()); $(".datum_option").slideUp(0); });
    //企业文化底部产品最后一个
    $(".culture_pro li:last").css("width", 185);

    //新闻中心前两条li
    $(".newsbox .datumlistbot").find("li:nth-child(1)").addClass("news_top");
    $(".newsbox .datumlistbot").find("li:nth-child(2)").addClass("news_top");

    $(".hexin_pro").eq(1).css("width", 373);


    //联系我们
    $(".kecheng_down").click(function() {

        $("#category").val($(this).attr("val"));
        $(".pro_zhezhao,.Online").show();
        $(".Online").css("top", $(this).scrollTop().top);
    });
    //联系我们
    $(".contact_tijiao").click(function() {

        $("#category").val($(this).attr("val"));
        $(".pro_zhezhao,.Online").show();
        $(".Online").css("top", $(this).scrollTop().top);
    });
    $(".online_close").click(function() { $(".pro_zhezhao,.Online").hide(); });
    $(".pro_zhezhao").height($("body").height());

    $(".infor_select1").hover(function() { $(this).find(".infor_select_option1").slideDown(200) }, function() { $(this).find(".cinfor_select_option1").slideUp(200) });
    $(".infor_select_a2").click(function() { $(".infor_selectCut1").text($(this).text()); $(".infor_select_option1").slideUp(0); });

    $(".infor_select").hover(function() { $(this).find(".infor_select_option").slideDown(200) }, function() { $(this).find(".cinfor_select_option").slideUp(200) });
    $(".infor_select_a").click(function() { $(".infor_selectCut").text($(this).text()); $(".infor_select_option").slideUp(0); });

    $(".contact_list li:first").addClass("contact_one");
    $(".contact_list li:nth-child(2n)").addClass("contact_odd");

    $(".service_tedian li:nth-child(odd)").css("width", 710);
    $(".service_tedian li:nth-child(even)").css("float", "right").css("width", 294);
    $(".service_tedian li").eq(-1).css("height", "auto")
    $(".service_tedian li").eq(-2).css("height", "auto")
});

//屏蔽页面错误
jQuery(window).error(function(){
  return true;
});
jQuery("img").error(function(){
  $(this).hide();
});