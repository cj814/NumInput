基于jquery和bootstrap的数字键盘输入插件

``` bash
# 使用方法

HTML：

<input type="text" class="form-control" placeholder="请输入数量" id="number1">
<input type="text" class="form-control" placeholder="请输入数量" id="number2">
<input type="text" class="form-control" placeholder="请输入数量" id="number3">

JS：

<script src="js/jquery-2.1.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/numInput.js"></script>
<script>
	$("#number1").numInput(); //默认无参数

	$("#number2").numInput({
		placement : "right",
	});

	$("#number3").numInput({
		placement : "left", //数字键盘位置
		readonly : false //输入框是否只读
	});
</script>

# 编译
npm run build
```

预览地址：https://cj814.github.io/NumInput/index.html
