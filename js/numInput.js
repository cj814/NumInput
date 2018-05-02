;(function($){

	var num = NumInput.prototype,
		curPop = null;

	$.fn.numInput = function(opt){
		opt = $.extend({},$.fn.numInput.default,opt);
		return this.each(function(){
			var elem = $(this),numInput = new NumInput(elem,opt);

			numInput.getElem().on('click',function(){
				numInput.showPop();
			});
		})
	}

	$.fn.numInput.default = {
		placement : 'bottom',
		readonly : true
	}

	function NumInput(elem,opt){
		this.elem = elem;
		this.opt = opt;
		this.init();
	}

	num.init = function() {//初始化
		this.setAttr();
	}

	num.getElem = function(){//获取input
		return this.elem;
	}

	num.getOpt = function(){//获取参数
		return this.opt;
	}

	num.getVal = function(){//获取文本框的值
		return this.getElem().val();
	}

	num.getId = function(){//获取id
		return this.getElem().attr("id");
	}

	num.showPop = function(){//显示数字键盘
		if(curPop) this.hidePop(curPop);

		this.getElem().popover('show');
		this.setStyle();
		this.bindClick();

		curPop = this;
	}

	num.hidePop = function(o){//隐藏数字键盘
		o.getElem().popover('hide');
	}

	num.setStyle = function(){//设置按钮样式
		var $this = this.getElem(),
			id = this.getId(),
			$table = $this.parent().find("#n-" + id);

		$table.find(".btn,.btn:active").css({width:"100%",outline:"none"});

		return $table;
	}

	num.bindClick = function(){//绑定点击事件
		var $table = this.setStyle(),
			$btns = $table.find(".btn"),
			that = this;
		for(i = 0;i < $btns.length;i++){
			var $btn = $btns.eq(i),
				val = $btn.data("value");

			$btn.on('click',{val : val},function(event){
				var v = event.data.val;
				if(!isNaN(v) || v == '.') that.inVal(v);
				if(v == 'del') that.delVal();
				if(v == 'hide') that.hidePop(that);
			});
		}
	}

	num.setAttr = function(){//给input设置popover需要的属性
		var $that = this.getElem(),p = this.getOpt(),con = this.setCon();

		$that.data("toggle", "popover");
		$that.attr("readonly", p.readonly);
		$that.data("placement", p.placement);
		$that.data("html", true);
		$that.data("content", con);
	}

	num.inVal = function(v){//输入数值
		var o = this.getVal();
		this.getElem().val(o + v);
	}

	num.delVal = function(){//删除数值
		var o = this.getVal();
		this.getElem().val(o.substring(0,o.length - 1));
	}

	num.setCon = function(){//设置数字键盘的内容
		var tId = this.getId(),
			str = "";
			str += "<table class='table-condensed' id='n-" + tId + "'>";
				str += "<tr>";
					str += "<td><button class='btn btn-primary btn-lg' data-value=1>1</button></td>";
					str += "<td><button class='btn btn-primary btn-lg' data-value=2>2</button></td>";
					str += "<td><button class='btn btn-primary btn-lg' data-value=3>3</button></td>";
					str += "<td><button class='btn btn-primary btn-lg' data-value=4>4</button></td>";
				str += "</tr>";
				str += "<tr>";
					str += "<td><button class='btn btn-primary btn-lg' data-value=5>5</button></td>";
					str += "<td><button class='btn btn-primary btn-lg' data-value=6>6</button></td>";
					str += "<td><button class='btn btn-primary btn-lg' data-value=7>7</button></td>";
					str += "<td><button class='btn btn-primary btn-lg' data-value=8>8</button></td>";
				str += "</tr>";
				str += "<tr>";
					str += "<td><button class='btn btn-primary btn-lg' data-value=9>9</button></td>";
					str += "<td><button class='btn btn-primary btn-lg' data-value=0>0</button></td>";
					str += "<td><button class='btn btn-primary btn-lg' data-value='.'>.</button></td>";
					str += "<td><button class='btn btn-danger btn-lg' data-value='del'>←</button></td>";
				str += "</tr>";
				str += "<tr>";
					str += "<td colspan='4'><button class='btn btn-success btn-lg' data-value='hide'>确定</button></td>";
				str += "</tr>";
			str += "</table>";

		return str;
	}

})(jQuery);