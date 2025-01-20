(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 120,
	height: 120,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.gr_lampada = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AglDkQgPgDAAgMQgLgDgCgJQAAgIANgGQgNgHAAgIQACgLALgFQgLgHgCgJQACgKALgGQgBgHgRgWIgng0QgXgagPgcQgQgbgBgbQAAgbAMggQAKgdAYgZQAZgbAcgNQAbgNAmgCQAjAAAdAOQAfANAYAYQAWAbANAZQALAfAAAbIAAAHQgBAdgPAZQgPAbgZAdIgMANIgLAOIgSAWQgSAYAAAEQALAKAAAIQAAAIgLAHQALAIAAAJQAAAHgLAIQALAGAAAIQAAAJgLADQAAALgPAEQgLAEgZACQgZgCgLgEgAhdiZQgQAPgBALQAQAQAZAEIAAAAQAAgTADgMQADgOALgNQgEAAgFgEIgIgEQgNADgLARg");
	this.shape.setTransform(16.6,23.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33.2,46.9);


(lib.mc_lampada = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{" inicio":14});

	// timeline functions:
	this.frame_37 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC33").s().p("AhLAgQAAgHAIgFIBCgkQA2gfAHAAQAQAAAAAQQAAAHgIAFIhCAkQg3AfgGAAQgQAAAAgQg");
	this.shape.setTransform(9.5,46.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(14).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},17).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC33").s().p("AhFAOQgPABAAgPQAAgOAPABICLAAQAPgBAAAOQAAAPgPgBg");
	this.shape_1.setTransform(8.6,32.5);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(16).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},15).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	// Layer 4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC33").s().p("AgBARIhCgkQgIgFAAgHQAAgQAQAAQAGAAA3AfIBCAkQAIAFAAAHQAAAQgQAAQgHAAg2gfg");
	this.shape_2.setTransform(9.5,18.4);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(18).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},13).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	// Layer 5
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC33").s().p("AAUBBIgkhAQgfgyAAgIQAAgOAPAAQAIAAAFAHIAkA/QAfA0AAAGQAAAPgPAAQgJAAgEgHg");
	this.shape_3.setTransform(23.2,9);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(20).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},11).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	// Layer 6
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC33").s().p("AgNBCIAAiEQAAgOANAAQAOAAAAAOIAACEQAAAPgOAAQgNAAAAgPg");
	this.shape_4.setTransform(37.3,8.2);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(22).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},9).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	// Layer 10
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC33").s().p("AgvA5QAAgGAgg0IAjg/QAEgHAIAAQAQAAAAAOQAAAJgfAxIgkBAQgEAHgJAAQgPAAAAgPg");
	this.shape_5.setTransform(51.6,9);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(24).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},7).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	// Layer 11
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC33").s().p("AhHAgQAAgHAHgFIBAgkQAzgfAHAAQAOAAAAAQQAAAHgHAFIhAAkQgzAfgGAAQgPAAAAgQg");
	this.shape_6.setTransform(67.3,18.4);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(26).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},5).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	// Layer 8
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC33").s().p("AhBAOQgPABAAgPQAAgOAPABICEAAQAOgBAAAOQAAAPgOgBg");
	this.shape_7.setTransform(68.2,32.5);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(28).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).to({_off:true},1).wait(1).to({_off:false},0).wait(2));

	// Layer 7
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAAARIhAgkQgHgFAAgHQAAgQAPAAQAGAAAzAfIBAAkQAHAFAAAHQAAAQgOAAQgHAAgzgfg");
	this.shape_8.setTransform(67.3,46.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC33").s().p("AAAARIhAgkQgHgFAAgHQAAgQAPAAQAGAAAzAfIBAAkQAHAFAAAHQAAAQgOAAQgHAAgzgfg");
	this.shape_9.setTransform(67.3,46.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},30).to({state:[]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},1).to({state:[]},1).to({state:[{t:this.shape_9}]},1).wait(2));

	// lampada
	this.instance = new lib.gr_lampada("synched",0);
	this.instance.setTransform(37.9,43.3,0.13,0.13,0,0,0,16.6,23.5);
	this.instance.filters = [new cjs.ColorFilter(0.95, 0.95, 0.95, 1, 0, 0, 0, 0)];
	this.instance.cache(-2,-2,37,51);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:23.4,scaleX:1.43,scaleY:1.43,x:38},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:37.9},5,cjs.Ease.get(-1)).wait(18).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1));

	// lampada
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglDjQgPgDAAgLQgLgDgCgKQAAgGANgHQgNgHAAgIQACgLALgFQgLgGgCgKQACgKALgGQgBgHgRgWIgngzQgXgbgPgcQgQgbgBgaQAAgbAMgiQAKgcAYgZQAZgbAcgNQAbgNAmgCQAjAAAdAOQAfANAYAZQAWAaANAZQALAeAAAdIAAAHQgBAcgPAaQgPAagZAcIgMAPIgLAMIgSAXQgSAYAAAFQALAIAAAJQAAAIgLAHQALAHAAAKQAAAHgLAIQALAGAAAHQAAAKgLADQAAALgPADQgLAGgZABQgZgBgLgGgAhdiZQgQAPgBAMQAQAPAZAEIAAAAQAAgTADgMQADgOALgMQgEgBgFgEIgIgDQgNACgLARg");
	this.shape_10.setTransform(37.9,43.3);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(14).to({_off:false},0).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(35.7,40.3,4.3,6.1);


(lib.mc_seta = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// timeline functions:
	this.frame_0 = function() {
		/* stop();*/
	}
	this.frame_1 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 6
	this.instance = new lib.mc_lampada();
	this.instance.setTransform(0.3,-9.9,1,1,0,0,0,38.1,33.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,-3,4.3,6.1);


// stage content:



(lib.lampada = function() {
	this.initialize();

	// Camada 1
	this.seta_01 = new lib.mc_seta();
	this.seta_01.setTransform(60.5,66);

	this.addChild(this.seta_01);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(118.4,122.9,4.3,6.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
