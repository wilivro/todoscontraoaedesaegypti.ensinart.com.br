(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 45,
	height: 65,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.ovo = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mc_mascote_02();
	this.instance.setTransform(8,33.6,0.9,0.9,0,0,0,37,35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(23.6,33.5,41.6,63.6);


// symbols:
(lib.gr_pe = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(0.9,1,1).p("ABVgCQAAANghAOQgfAMgeAAQgfAAgWgLQgWgLAAgPQAAgOAWgLQAWgLAfAAQAgAAAdAJQAhAKAAAPg");
	this.shape.setTransform(8.5,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+AaQgVgLgBgPQABgOAVgLQAWgLAfAAQAfAAAeAJQAgAKABAPQgBANggAOQgfAMgeAAQgfAAgWgLg");
	this.shape_1.setTransform(8.5,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(0.9,1,1).p("ABVgCQAAANghAOQgfANgeAAQgfAAgVgMQgXgLAAgPQAAgPAXgLQAVgLAfAAQAgAAAdAJQAhALAAAPg");
	this.shape_2.setTransform(9.2,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+AbQgVgMAAgPQAAgPAVgKQAWgMAfAAQAgABAdAIQAhALAAAPQAAANghAOQgfANgeAAQgfgBgWgKg");
	this.shape_3.setTransform(9.2,4.1);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.7,9.9);


(lib.gr_olhos = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlAAQADgKALAAQALAAgCAKQgCALgLAAQgMAAACgLgAg7AAQACgKALAAQALAAgBAKQgDALgKAAQgMAAACgLg");
	this.shape.setTransform(6.5,1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAfAAQADgQASgBQARABgCAQQgDARgSAAQgSAAADgRgAAjgDQgCAJAMAAQALAAACgJQACgMgMAAQgLAAgCAMgAhBAAQACgQASgBQASABgDAQQgCARgTAAQgSAAAEgRgAg9gDQgCAJALAAQALAAACgJQACgMgLAAQgLAAgCAMg");
	this.shape_1.setTransform(6.7,1.8);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,3.6);


(lib.gr_det = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0057").s().p("AgMAfIAKg9IAPA9g");
	this.shape.setTransform(1,0,1,1,0,0,0,-0.4,-3.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.7,6.4);


(lib.mc_pe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gr_pe("synched",0);
	this.instance.setTransform(8.8,4,1,1,0,0,0,8.8,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({regX:17.7,x:17.7},0).to({regX:17.8,rotation:15,x:17.8},2).to({regX:17.7,rotation:0,x:17.7},2).to({regX:17.8,rotation:15,x:17.8},3).to({regX:17.7,rotation:0,x:17.7},3).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,19.7,9.9);


(lib.mc_olhos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gr_olhos("synched",0);
	this.instance.setTransform(6.8,1.8,1,1,0,0,0,6.8,1.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgKAAIALAAIAKAAIgLAAIgKAAg");
	this.shape.setTransform(11.4,2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgRAAQAEAAAQAAQARAAgDAAQgCAAgRAAQgRAAACAAg");
	this.shape_1.setTransform(11.7,2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgKAAIALAAIAKAAIgLAAIgKAAg");
	this.shape_2.setTransform(1.6,2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgQAAQACAAAQAAQASAAgDAAQgCAAgRAAQgSAAAEAAg");
	this.shape_3.setTransform(1.8,2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAAQACgKAJAAQAMAAgCAKQgCALgJAAQgMAAACgLg");
	this.shape_4.setTransform(11.4,1.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAAQAEgQAQgBQARABgDAQQgCARgRAAQgRAAACgRg");
	this.shape_5.setTransform(11.7,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAAQACgKAJAAQAMAAgCAKQgCALgJAAQgMAAACgLg");
	this.shape_6.setTransform(1.6,1.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgQAAQACgQAQgBQASABgDAQQgCARgRAAQgSAAAEgRg");
	this.shape_7.setTransform(1.8,1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},54).to({state:[{t:this.instance}]},2).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({startPosition:0},0).to({scaleY:0.11},2).to({_off:true},1).wait(49));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,3.6);


(lib.mc_detalhes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gr_det("synched",0);
	this.instance.setTransform(0.8,0.1,0.999,0.999,-5.2,0,0,0.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,rotation:10.5,y:0},14,cjs.Ease.get(1)).to({regY:0.1,scaleX:1,scaleY:1,rotation:-6.2,y:0.1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.1,0,4.4,6.6);


(lib.Tween4copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mc_olhos();
	this.instance.setTransform(0,0,1,1,0,0,180,6.8,1.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-1.8,13.5,3.6);


(lib.Tween3copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mc_olhos();
	this.instance.setTransform(0,0,1,1,0,0,180,6.8,1.8);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-1.8,13.5,3.6);


(lib.mc_olhos_gira = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween3copy("synched",0);
	this.instance.setTransform(6.5,3.2);

	this.instance_1 = new lib.Tween4copy("synched",0);
	this.instance_1.setTransform(7.1,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,guide:{path:[6.4,3.1,6.3,3.1,6.3,3.1,5.7,3.1,5.3,2.7,4.9,2.3,4.9,1.8,4.9,1.4,5.3,1,5.7,0.6,6.3,0.6,6.8,0.6,7.2,1,7.7,1.4,7.7,1.8,7.7,2.3,7.2,2.7,7.2,2.8,7.2,2.8]}},29).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.8,-1.4,16.3,6.4);


(lib.mc_mascote_02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// det_01
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJABIAFgFIAOAJg");
	this.shape.setTransform(47.8,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHgCIAHgEIAIAOg");
	this.shape_1.setTransform(49,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADgGIAGAGIgRAHg");
	this.shape_2.setTransform(54,7.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAgHIAHACIgNANg");
	this.shape_3.setTransform(53.3,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgDgHIAGgBIgEARg");
	this.shape_4.setTransform(51.5,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAaQgGgHAAgLQABgKAHgNQAIgQAHAAQAFAAAEAFQAGAHAEAQIAAABIgCABIgBgBQgFgYgLABQgEABgGAMQgGALgBAIQgBAJAGAGQAEAEAGAAQAJgBAGgOIgGABIgDgEIAQgCIgBABQgFAYgQABIgCAAQgIAAgFgGg");
	this.shape_5.setTransform(50.7,9.8);

	this.instance = new lib.mc_detalhes();
	this.instance.setTransform(31.1,11.9,1,1,0,0,180,1.4,3.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(14));

	// olhos
	this.instance_1 = new lib.mc_olhos_gira();
	this.instance_1.setTransform(53.4,24.2,1,1,0,0,0,6.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

	// Layer 7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJA2QgNgBgIgPQgPgdARgcIgCgBQgFgHALgOQANgPAGAIQAEAEgEAJIAFAAQAAgHAKgIQAGgGAGAGQAEAEAGASQAIAUgCAKQgCAMgFAFQgDAFgGACQgDAKgGAIQgKAKgJAAIgDAAg");
	this.shape_6.setTransform(56.7,43);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(0.6,1,1).p("AgYgpQgLAOAFAHIACABQgRAcAPAdQAIAPANABQALACALgMQAGgIADgKQAGgCADgFQAFgFACgMQACgKgIgUQgGgSgEgEQgGgGgGAGQgKAIAAAHIgFAAQAEgJgEgEQgGgIgNAPg");
	this.shape_7.setTransform(56.7,43);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(0.6,1,1).p("AgvhNQApBXAJgBQALAABKg9IAaAZQhlBsgPgDQgSgEhdiQ");
	this.shape_8.setTransform(46.9,47.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgDBOQgRgEhdiQIBBgHQAqBXAJgBQALAABKg9IAaAZQhiBpgRAAIgCAAg");
	this.shape_9.setTransform(46.9,47.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(0.8,1,1).p("AhLgNQBLA4BNg4");
	this.shape_10.setTransform(53.9,35.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWgKIAtAFIgFAQg");
	this.shape_11.setTransform(57.2,18.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAAIAvgMIgiAZg");
	this.shape_12.setTransform(46.8,18.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAFIgCgJIANAAIACAJg");
	this.shape_13.setTransform(53.1,24.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.8,1,1).p("AAnAAQACAQgKALQgJALgQAAQgOAAgOgLQgNgLgCgQQgDgPAKgLQAJgMAQAAQAOAAAOAMQANALADAPg");
	this.shape_14.setTransform(48.1,24.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAbQgNgLgCgQQgDgPAKgLQAJgMAQABQAOgBAOAMQANALADAPQACAQgKALQgJALgQAAQgOAAgOgLg");
	this.shape_15.setTransform(48.1,24.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.6,1,1).p("AA0AIIABAUIhpgcIAMgag");
	this.shape_16.setTransform(39.2,21.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag0AAIAMgaIBcAiIABATg");
	this.shape_17.setTransform(39.2,21.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D0057").s().p("AiDgVICHgZIDHATImVBKg");
	this.shape_18.setTransform(51,3.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0D0057").s().p("AgtA/QgagJgCgPIAAgBIgThvICmAAIATBwIAAAAQACAPgXAJQgXALgjAAQghAAgagLg");
	this.shape_19.setTransform(48.9,8.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.8,1,1).p("AAmAAQADAQgKALQgJALgQAAQgPAAgNgLQgNgLgDgQQgCgPAJgLQAKgLAQAAQAOAAANALQAOALACAPg");
	this.shape_20.setTransform(57.9,24.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAbQgNgLgDgQQgCgPAJgLQAKgLAQAAQAOAAANALQAOALACAPQADAQgKALQgJALgQAAQgPAAgNgLg");
	this.shape_21.setTransform(57.9,24.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#999999").ss(0.7,1,1).p("ABziPQAwBrACBeQAABVgwA8QgvA8hEAAQhDAAgxg8Qgxg8gBhVQgBhdAwhsQA1h3A/AAQA9AAA3B3g");
	this.shape_22.setTransform(51,37.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhyDLQgwg8gBhUQgCheAwhsQA1h2BAgBQA9ABA2B2QAwBrABBfQACBUgxA8QgvA8hFAAQhCAAgxg8g");
	this.shape_23.setTransform(51,37.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#999999").ss(0.7,1,1).p("AB7iaQA0BzACBmQABBbgzBBQgzBAhKAAQhHAAg1hAQg1hBgBhbQgBhkAzh1QA5iABEABQBDAAA5B/g");
	this.shape_24.setTransform(50.1,36.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("Ah6DbQg1hBgBhbQgBhkAzh1QA5iABEAAQBDAAA5CAQA0BzACBmQABBbgzBBQgzBAhKgBQhHABg1hAg");
	this.shape_25.setTransform(50.1,36.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#999999").ss(0.9,1,1).p("ABVgCQAAANghAOQgfAMgeAAQgfAAgVgLQgXgLAAgPQAAgOAXgLQAVgLAfAAQAgAAAdAJQAhAKAAAPg");
	this.shape_26.setTransform(39.7,64.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag9AaQgXgLAAgPQAAgOAXgLQAVgLAfAAQAfAAAeAJQAgAKAAAPQAAANggAOQgfAMgeAAQgfAAgVgLg");
	this.shape_27.setTransform(39.7,64.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#999999").ss(0.9,1,1).p("ABVgCQAAANghAOQgfAMgeAAQgfAAgWgLQgWgLAAgPQAAgPAWgLQAWgLAfAAQAgAAAdAKQAhAKAAAPg");
	this.shape_28.setTransform(40.4,65.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag+AbQgVgMAAgPQAAgOAVgLQAWgLAfAAQAgAAAdAJQAgAKABAPQgBANggAOQgfAMgeAAQgfABgWgLg");
	this.shape_29.setTransform(40.4,65.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#999999").ss(0.6,1,1).p("AglgQQAKgMAHAFIABABQAWgSAaALQAOAGACALQADAMgKAHQgFAHgJADQgBAEgEAEQgFAGgKACQgHADgTgFQgPgEgEgEQgGgDAEgGQAHgKAGgBIgBgDQgHABgEgBQgHgDAMgNg");
	this.shape_30.setTransform(68.8,47.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWAfQgPgEgEgEQgGgDAEgGQAHgKAGgBIgBgDQgHABgEgBQgHgDAMgNQAKgMAHAFIABABQAWgSAaALQAOAGACALQADAMgKAHQgFAHgJADQgBAEgEAEQgFAGgKACIgGABQgIAAgMgDg");
	this.shape_31.setTransform(68.8,47.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#999999").ss(0.6,1,1).p("AhFg2QBVAsAEAJQAEAHghBjIAfAMQA4iAgKgNQgKgNh3hP");
	this.shape_32.setTransform(68.2,38.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJBpQAhhjgEgHQgEgJhVgsIAIg+QB3BPAKANQAKANg4CAg");
	this.shape_33.setTransform(68.2,38.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(14));

	// Layer 10
	this.instance_2 = new lib.mc_pe();
	this.instance_2.setTransform(61.1,65.2,1,1,0,0,180,8.8,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.2,-1.1,47,71.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;