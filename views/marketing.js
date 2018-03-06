<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
	<style>
		body{background:skyblue; font-family:verdana; color:black; padding:30px;}
		h1{font-size:48px; text-transform:uppercase; letter-spacing: 2px; text-align:center;}
		p{font-size:16px; text-align:center;}
	</style>
</head>
<body>
<h1>Big Mart Store</h1>
<form id="form1">
<div ng-app="">
<table class="auto-style1">
<tr>
<td class="auto-style2">first name</td>
<td>
<input type="text" ng-model="firstname"/>
</td>
</tr>
<tr>
<td class="auto-style2">Lastname</td>
<td>
<input id="text2" type="text" ng-model="Lastname"/>
</td>
</tr>
<tr>
<td class="auto-style2">Quantity</td>
<td>
<input  id="text3" type="text" ng-model="Quantity" />
</td>
</tr>
<tr>
<td class="auto-style2">cost</td>
<td>
<input id="text4" type="text" ng-model="cost" value="50">
</td>
</tr>
<tr>
<td class="auto-style2">
<input type="button" value="clickhere"
ng-click="message = firstname+ ' ' + Lastname +' has to pay ' + cost*Quantity" />
</td>
<td>
{{message}}
</td>
</tr>
</table>
</div>
</body>
</html>