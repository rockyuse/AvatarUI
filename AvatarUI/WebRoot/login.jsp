<%@ page language="java" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML>
<html>
<head>
<base href="<%=basePath%>">
<title>登录---AvatarUI</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/global.css" />
<script type="text/javascript" src="js/jquery.js"></script>
</head>

<body>
<div class="wrap">
    <div class="header">
        <h1>AvatarUI</h1>
        <div class="version">V 2.0</div>
        <div class="version">2013-01-10</div>
    </div>
    
    <div class="content">
        <div class="items" id="Item0">
            <h2>请先登录</h2>
            <form action="user/login.do" method="post">
            <table>
            	<% 
            		String failure = (String)request.getAttribute("failure");
            		if(null == failure){
            			failure = "";
            		}
            	%>
            	<tr>
            		<td height="30"></td><td><font color="red"><%=failure%></font></td>
            	</tr>
            	<tr>
            		<td align="right" height="35">用户名：</td><td><input style="width:150px; height:16px; padding:2px; line-height:16px;" type="text" name="userName" /></td>
            	</tr>
            	<tr>
            		<td align="right" height="35">密码：</td><td><input style="width:150px; height:16px; padding:2px; line-height:16px;" type="password" name="passWord" /></td>
            	</tr>
            	<tr>
            		<td height="45"></td><td><input type="submit" value="登录" /></td>
            	</tr>
            </table>
            </form>
    	</div>
	</div>
	
	<div class="footer">AvatarUI</div>
</div>

</body>
</html>
