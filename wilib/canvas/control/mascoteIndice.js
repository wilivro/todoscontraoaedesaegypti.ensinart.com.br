(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 240,
	height: 128,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.gr_pe = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(0.9,1,1).p("AhUAAQAAgOAWgLQAWgLAfAAQAgAAAdAJQAhAKAAAPQAAANghAOQgfAMgeAAQgfAAgWgLQgWgLAAgPg");
	this.shape.setTransform(8.5,3.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+AaQgVgLgBgPQABgOAVgLQAWgLAfAAQAfAAAeAJQAgAKABAPQgBANggAOQgfAMgeAAQgfAAgWgLg");
	this.shape_1.setTransform(8.5,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(0.9,1,1).p("AhUAAQAAgPAXgLQAVgLAfAAQAgAAAdAJQAhALAAAPQAAANghAOQgfANgeAAQgfAAgVgMQgXgLAAgPg");
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
	this.shape.setTransform(1.4,3.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,2.7,6.4);


(lib.mc_pe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gr_pe("synched",0);
	this.instance.setTransform(8.8,4,1,1,0,0,0,8.8,4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({regX:17.7,x:17.7},0).to({regY:3.9,rotation:15,y:3.9},2).to({regY:4,rotation:0,y:4},2).to({regY:3.9,rotation:15,y:3.9},3).to({regY:4,rotation:0,y:4},3).wait(51));

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

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.9,regY:0,rotation:10.5,x:0.9,y:0},14,cjs.Ease.get(1)).to({regX:0.8,regY:0.1,scaleX:1,scaleY:1,rotation:-6.2,x:0.8,y:0.1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0,2.7,6.4);


(lib.mc_mascote_parado = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJABIAFgFIANAJg");
	this.shape.setTransform(18.6,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgHgCIAHgEIAIANg");
	this.shape_1.setTransform(19.8,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AADgGIAGAGIgRAHg");
	this.shape_2.setTransform(24.8,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAgHIAHACIgNANg");
	this.shape_3.setTransform(24.1,7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCgHIAGgBIgFARg");
	this.shape_4.setTransform(22.3,6.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgPAaQgGgHAAgLQABgKAHgNQAIgQAHAAQAFAAAEAFQAGAHAEAQIAAABIgCABIgBgBQgFgYgLABQgEABgGAMQgGALgBAIQgBAJAGAGQAEAEAGAAQAJgBAGgOIgGABIgDgEIAQgCIgBABQgFAYgQABIgCAAQgIAAgFgGg");
	this.shape_5.setTransform(21.5,11);

	this.instance = new lib.mc_detalhes();
	this.instance.setTransform(1.9,13,1,1,0,0,180,1.4,3.1);

	this.instance_1 = new lib.mc_olhos();
	this.instance_1.setTransform(24.1,25.3,1,1,0,0,180,6.8,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgJA2QgNgBgIgPQgPgdARgcIgCgBQgFgHALgOQANgPAGAIQAEAEgEAJIAFAAQAAgHAKgIQAGgGAGAGQAEAEAGASQAIAUgCAKQgCAMgFAFQgDAFgGACQgDAKgGAIQgKAKgJAAIgDAAg");
	this.shape_6.setTransform(27.5,44.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(0.6,1,1).p("AAAgjIgFAAQAEgJgEgEQgGgIgNAPQgLAOAFAHIACABQgRAcAPAdQAIAPANABQALACALgMQAGgIADgKQAGgCADgFQAFgFACgMQACgKgIgUQgGgSgEgEQgGgGgGAGQgKAIAAAHg");
	this.shape_7.setTransform(27.5,44.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(0.6,1,1).p("AgwhNQAqBXAJgBQALAABKg9IAaAZQhmBsgPgDQgRgEhdiQ");
	this.shape_8.setTransform(17.7,48.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCBOQgSgEhdiQIBCgHQApBXAJgBQALAABKg9IAaAZQhiBpgRAAIgBAAg");
	this.shape_9.setTransform(17.7,48.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(0.8,1,1).p("AhMgNQBMA4BNg4");
	this.shape_10.setTransform(24.7,36.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgWgKIAsAFIgEAQg");
	this.shape_11.setTransform(28,19.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgXAAIAvgMIgiAZg");
	this.shape_12.setTransform(17.6,19.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgFAFIgCgJIANAAIACAJg");
	this.shape_13.setTransform(23.9,25.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.8,1,1).p("AgWAbQgNgLgCgQQgDgPAKgLQAJgMAQAAQAOAAAOAMQANALADAPQACAQgKALQgJALgQAAQgOAAgOgLg");
	this.shape_14.setTransform(18.9,25.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWAbQgNgLgCgQQgDgPAKgLQAJgMAQAAQAOAAAOAMQANALADAPQACAQgKALQgJALgQAAQgOAAgOgLg");
	this.shape_15.setTransform(18.9,25.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.6,1,1).p("Ag0AAIAMgbIBcAjIABAUg");
	this.shape_16.setTransform(10,22.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag0AAIAMgaIBcAiIABAUg");
	this.shape_17.setTransform(10,22.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D0057").s().p("AiDgVICIgZIDGATImVBKg");
	this.shape_18.setTransform(21.8,4.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0D0057").s().p("AgtA/QgagKgCgOIAAgBIgThvICmAAIATBvIAAABQACAOgXAKQgXALgjAAQghAAgagLg");
	this.shape_19.setTransform(19.7,9.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.8,1,1).p("AgFglQAOAAANALQAOALACAPQADAQgKALQgJALgQAAQgPAAgNgLQgNgLgDgQQgCgPAJgLQAKgLAQAAg");
	this.shape_20.setTransform(28.7,25.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgWAbQgNgLgDgQQgCgPAJgLQAKgLAQAAQAOAAANALQAOALACAPQADAQgKALQgJALgQAAQgPAAgNgLg");
	this.shape_21.setTransform(28.7,25.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#999999").ss(0.7,1,1).p("Ah1iPQA1h3BAAAQA9AAA2B3QAwBrACBeQABBVgxA8QgvA8hEAAQhDAAgxg8Qgxg8gBhVQgBhdAwhsg");
	this.shape_22.setTransform(21.8,38.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AhxDLQgyg8gBhUQgBhdAxhtQA0h3A/ABQA9gBA2B3QAxBrACBfQAABUgvA8QgwA8hEgBQhCABgxg8g");
	this.shape_23.setTransform(21.8,38.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#999999").ss(0.7,1,1).p("Ah+iaQA5iABEABQBDAAA5B/QA0BzACBmQABBbgzBBQgzBAhKAAQhHAAg1hAQg1hBgBhbQgBhkAzh1g");
	this.shape_24.setTransform(20.9,37.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("Ah6DbQg1hBgBhbQgBhlAzh0QA5iABEABQBDgBA5CAQA0BzACBmQABBbgzBBQgzBAhKAAQhHAAg1hAg");
	this.shape_25.setTransform(20.9,37.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#999999").ss(0.9,1,1).p("AgJAlQgfAAgVgLQgXgLAAgPQAAgOAXgLQAVgLAfAAQAgAAAdAJQAhAKAAAPQAAANghAOQgfAMgeAAg");
	this.shape_26.setTransform(10.5,66);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("Ag+AaQgWgLABgPQgBgOAWgLQAWgLAfAAQAgAAAdAJQAhAKAAAPQAAANghAOQgfAMgeAAQgfAAgWgLg");
	this.shape_27.setTransform(10.5,66);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#999999").ss(0.9,1,1).p("AgJAlQgfAAgVgKQgWgLAAgQQAAgOAWgLQAVgLAfAAQAgAAAdAJQAhAKAAAPQAAAOghANQgfAMgeAAg");
	this.shape_28.setTransform(11.2,66.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ag9AbQgXgLAAgQQAAgPAXgKQAVgMAfAAQAgAAAdAKQAhAKgBAPQABANghAOQgfANgeAAQgfgBgVgKg");
	this.shape_29.setTransform(11.2,66.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#999999").ss(0.6,1,1).p("AAtgMQADAMgKAHQgFAHgJADQgBAEgEAEQgFAGgKACQgHADgTgFQgPgEgEgEQgGgDAEgGQAHgKAGgBIgBgDQgHABgEgBQgHgDAMgNQAKgMAHAFIABABQAWgSAaALQAOAGACALg");
	this.shape_30.setTransform(39.6,49);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgWAfQgPgEgEgEQgGgDAEgGQAHgKAGgBIgBgDQgHABgEgBQgHgDAMgNQAKgMAHAFIABABQAWgSAaALQAOAGACALQADAMgKAHQgFAHgJADQgBAEgEAEQgFAGgKACIgGABQgIAAgMgDg");
	this.shape_31.setTransform(39.6,49);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#999999").ss(0.6,1,1).p("AhFg2QBVAsAEAJQAEAHghBjIAfAMQA4iAgKgNQgKgNh3hP");
	this.shape_32.setTransform(39,39.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgJBpQAhhjgEgHQgEgJhVgsIAIg+QB3BPAKANQAKANg4CAg");
	this.shape_33.setTransform(39,39.4);

	this.instance_2 = new lib.mc_pe();
	this.instance_2.setTransform(31.9,66.3,1,1,0,0,180,8.8,4);

	this.addChild(this.instance_2,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.instance_1,this.instance,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47,71.1);


(lib.mc_mascote_gera = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.mc_detalhes();
	this.instance.setTransform(1.3,20.8,1.333,1.333,0,0,0,1.4,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({regX:2.6,regY:1,rotation:-30,x:2.9,y:17.9},0).wait(2).to({regY:0.8,rotation:-60,y:17.8},0).wait(2).to({regY:1.5,rotation:-30,x:3,y:18.5},0).wait(2).to({regX:2.5,rotation:30,x:2.8,y:18.6},0).wait(2).to({regX:2.6,regY:0.8,rotation:45,x:2.9,y:17.6},0).wait(2).to({regX:2.5,regY:1.5,rotation:30,x:2.8,y:18.7},0).wait(2).to({regX:1.4,regY:3.1,rotation:0,x:1.3,y:20.8},0).wait(1));

	// braço_dir
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,0,0,4).p("ABhAKQgJgFgDgIQgCgGgCgFQgLgcgQgOQgIgIgKAAQgGABgEAFQgEAFgBANQgXAEgeAUIgHADIgMgDIgCACIgkAvIAFABQgGALAIALQAIAOAagGAgwA+IgBAA");
	this.shape.setTransform(42.2,98.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhVA4QgIgLAGgLIgGgBIAlgvIACgCIAMADIAGgDQAfgUAXgEQABgNADgFQAEgFAGgBQALAAAHAIQARAOALAcIAEALQADAIAIAFIgbAGIAAAtIgCgBIgHgEIgIgGQgLgNgqAHQgVALgRAEIgJACQgFABAEAAIABAAIAAACQgIABgGAAQgOAAgGgJg");
	this.shape_1.setTransform(42.5,98.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,0,0,4).p("AhPgsQAHgdAWADQAZADAiAOQAmAPAKANQAPAQAKAoIgEATQgIAUgUABQgrADgegVQgsgfgJgWQgJgTAGgZg");
	this.shape_2.setTransform(46,105.1,1,1,135);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXA1QgsgfgJgWQgJgTAGgZQAHgdAWADQAZADAiAOQAmAPAKANQAPAQAKAoIgEATQgIAUgUABIgJAAQglAAgbgSg");
	this.shape_3.setTransform(46,105.1,1,1,135);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,0,0,4).p("AhXC4QAqgjApgqQBRhUgBgfQgBghAYhJIAZhDIg6AFIgZA8QgaBCgHAZQgEAShBAiQgiASghAO");
	this.shape_4.setTransform(34.5,78.6,1,1,135);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ah9A6QAhgOAhgSQBBgiAFgSQAGgZAbhCIAZg8IA5gFIgYBDQgZBJABAhQABAfhQBUQgqAqgpAjg");
	this.shape_5.setTransform(34.7,78.3,1,1,135);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(1,0,0,4).p("AgyhGQAZADAiAOQAmAPAKANQAPAQAKAoIgEATQgIAUgUABQgrADgegVQgsgfgJgWQgJgTAGgZQAHgdAWADg");
	this.shape_6.setTransform(36.1,107.5,1,1,150);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(1,0,0,4).p("AAJg1QAmAPAKANQAPAQAKAoIgEATQgIAUgUABQgrADgegVQgsgfgJgWQgJgTAGgZQAHgdAWADQAZADAiAOg");
	this.shape_7.setTransform(25.9,107.2,1,1,165);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(1,0,0,4).p("AA5gZQAPAQAKAoIgEATQgIAUgUABQgrADgegVQgsgfgJgWQgJgTAGgZQAHgdAWADQAZADAiAOQAmAPAKANg");
	this.shape_8.setTransform(16.2,104.3,1,1,0,-180,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5,p:{rotation:135,x:34.7,y:78.3,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:135,x:34.5,y:78.6,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:135,x:46,y:105.1,skewX:0,skewY:0}},{t:this.shape_2,p:{rotation:135,x:46,y:105.1}},{t:this.shape_1,p:{rotation:0,x:42.5,y:98.7}},{t:this.shape,p:{rotation:0,x:42.2,y:98.7}}]}).to({state:[{t:this.shape_5,p:{rotation:150,x:32.1,y:78.7,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:150,x:31.9,y:78.9,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:150,x:36.1,y:107.4,skewX:0,skewY:0}},{t:this.shape_6,p:{rotation:150,skewX:0,skewY:0,x:36.1,y:107.5}},{t:this.shape_1,p:{rotation:15,x:34.3,y:100.5}},{t:this.shape,p:{rotation:15,x:34,y:100.4}}]},1).to({state:[{t:this.shape_5,p:{rotation:165,x:29.5,y:78.3,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:165,x:29.2,y:78.5,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:165,x:25.9,y:107.2,skewX:0,skewY:0}},{t:this.shape_7,p:{rotation:165,x:25.9,y:107.2}},{t:this.shape_1,p:{rotation:30,x:26,y:100}},{t:this.shape,p:{rotation:30,x:25.8,y:99.8}}]},1).to({state:[{t:this.shape_5,p:{rotation:0,x:27,y:77.3,skewX:-180,skewY:180}},{t:this.shape_4,p:{rotation:0,x:26.8,y:77.4,skewX:-180,skewY:180}},{t:this.shape_3,p:{rotation:0,x:16.2,y:104.3,skewX:-180,skewY:180}},{t:this.shape_8,p:{rotation:0,skewX:-180,skewY:180,x:16.2,y:104.3}},{t:this.shape_1,p:{rotation:45,x:18.1,y:97.4}},{t:this.shape,p:{rotation:45,x:17.9,y:97.2}}]},1).to({state:[{t:this.shape_5,p:{rotation:-165,x:25,y:75.7,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:-165,x:24.7,y:75.7,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:-165,x:7.5,y:98.9,skewX:0,skewY:0}},{t:this.shape_2,p:{rotation:-165,x:7.5,y:98.9}},{t:this.shape_1,p:{rotation:60,x:11.1,y:92.9}},{t:this.shape,p:{rotation:60,x:11,y:92.6}}]},1).to({state:[{t:this.shape_5,p:{rotation:0,x:27,y:77.4,skewX:-180,skewY:180}},{t:this.shape_4,p:{rotation:0,x:26.8,y:77.5,skewX:-180,skewY:180}},{t:this.shape_3,p:{rotation:0,x:16.2,y:104.3,skewX:-180,skewY:180}},{t:this.shape_6,p:{rotation:0,skewX:-180,skewY:180,x:16.2,y:104.3}},{t:this.shape_1,p:{rotation:45,x:18.2,y:97.5}},{t:this.shape,p:{rotation:45,x:18,y:97.3}}]},1).to({state:[{t:this.shape_5,p:{rotation:165,x:29.5,y:78.4,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:165,x:29.2,y:78.5,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:165,x:25.9,y:107.2,skewX:0,skewY:0}},{t:this.shape_7,p:{rotation:165,x:25.9,y:107.2}},{t:this.shape_1,p:{rotation:30,x:26.1,y:100.1}},{t:this.shape,p:{rotation:30,x:25.9,y:100}}]},1).to({state:[{t:this.shape_5,p:{rotation:150,x:32.1,y:78.7,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:150,x:31.9,y:78.9,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:150,x:36.2,y:107.5,skewX:0,skewY:0}},{t:this.shape_8,p:{rotation:150,skewX:0,skewY:0,x:36.2,y:107.5}},{t:this.shape_1,p:{rotation:15,x:34.5,y:100.6}},{t:this.shape,p:{rotation:15,x:34.2,y:100.5}}]},1).to({state:[{t:this.shape_5,p:{rotation:135,x:36.3,y:78.4,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:135,x:36.1,y:78.6,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:135,x:47.6,y:105.1,skewX:0,skewY:0}},{t:this.shape_2,p:{rotation:135,x:47.6,y:105.1}},{t:this.shape_1,p:{rotation:0,x:44.3,y:98.8}},{t:this.shape,p:{rotation:0,x:43.9,y:98.8}}]},1).to({state:[{t:this.shape_5,p:{rotation:120,x:40.7,y:77.4,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:120,x:40.6,y:77.6,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:120,x:58.6,y:100.3,skewX:0,skewY:0}},{t:this.shape_6,p:{rotation:120,skewX:0,skewY:0,x:58.6,y:100.3}},{t:this.shape_1,p:{rotation:-15,x:53.7,y:95.1}},{t:this.shape,p:{rotation:-15,x:53.4,y:95.2}}]},1).to({state:[{t:this.shape_5,p:{rotation:90,x:47.9,y:73.7,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:90,x:48,y:74,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:90,x:74.9,y:84.6,skewX:0,skewY:0}},{t:this.shape_7,p:{rotation:90,x:74.9,y:84.6}},{t:this.shape_1,p:{rotation:-45,x:68.1,y:82.5}},{t:this.shape,p:{rotation:-45,x:67.9,y:82.7}}]},1).to({state:[{t:this.shape_5,p:{rotation:81.7,x:49.1,y:72.3,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:81.7,x:49.2,y:72.6,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:81.7,x:77.3,y:79.2,skewX:0,skewY:0}},{t:this.shape_8,p:{rotation:81.7,skewX:0,skewY:0,x:77.3,y:79.2}},{t:this.shape_1,p:{rotation:-53.3,x:70.3,y:78.2}},{t:this.shape,p:{rotation:-53.3,x:70.1,y:78.4}}]},1).to({state:[{t:this.shape_5,p:{rotation:105,x:45.3,y:75.8,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:105,x:45.3,y:76.1,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:105,x:68.5,y:93.3,skewX:0,skewY:0}},{t:this.shape_2,p:{rotation:105,x:68.5,y:93.3}},{t:this.shape_1,p:{rotation:-30,x:62.5,y:89.6}},{t:this.shape,p:{rotation:-30,x:62.2,y:89.7}}]},1).to({state:[{t:this.shape_5,p:{rotation:120,x:42.2,y:77.5,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:120,x:42.1,y:77.8,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:120,x:60.1,y:100.4,skewX:0,skewY:0}},{t:this.shape_6,p:{rotation:120,skewX:0,skewY:0,x:60.1,y:100.4}},{t:this.shape_1,p:{rotation:-15,x:55.3,y:95.2}},{t:this.shape,p:{rotation:-15,x:55,y:95.3}}]},1).to({state:[{t:this.shape_5,p:{rotation:135,x:36.7,y:78.5,skewX:0,skewY:0}},{t:this.shape_4,p:{rotation:135,x:36.6,y:78.8,skewX:0,skewY:0}},{t:this.shape_3,p:{rotation:135,x:48.1,y:105.3,skewX:0,skewY:0}},{t:this.shape_7,p:{rotation:135,x:48.1,y:105.3}},{t:this.shape_1,p:{rotation:0,x:44.8,y:99}},{t:this.shape,p:{rotation:0,x:44.4,y:99}}]},1).wait(1));

	// pe_dir
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#999999").ss(1.4,0,0,4).p("ABkgzQglgPg0AEQg2AFgvAVQg0AWACAWQACAZA4ASQA2ARAzgFQAzgFAjgWQAigWgCgYQgCgagngPg");
	this.shape_9.setTransform(53.1,123.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhSAzQg4gSgCgZQgCgWA0gWQAvgVA2gFQA0gEAlAPQAnAPACAaQACAYgiAWQgjAWgzAFIgXABQgpAAgpgNg");
	this.shape_10.setTransform(53.1,123.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#999999").ss(1.4,0,0,4).p("ABpgsQgkgSg0AAQg3AAgxAQQg2ARAAAZQAAAYA2AWQA0AVA0AAQA0AAAkgSQAlgTAAgaQAAgYglgUg");
	this.shape_11.setTransform(52,123.9,1,1,-5.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhXAqQg2gXAAgXQAAgZA2gRQAygQA2AAQA0AAAkASQAlAUAAAYQAAAaglASQgkATg0AAQg0AAg0gVg");
	this.shape_12.setTransform(52,123.9,1,1,-5.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#999999").ss(1.4,0,0,4).p("ABpgsQglgSgzAAQg3AAgxAQQg2ARAAAZQAAAXA2AXQA0AVA0AAQAzAAAlgSQAkgTAAgaQAAgZgkgTg");
	this.shape_13.setTransform(65.2,109.6,1,1,-20.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhWApQg2gWAAgXQAAgZA2gSQAwgPA3AAQA0AAAkATQAkASAAAZQAAAagkATQgkASg0AAQgzAAg0gWg");
	this.shape_14.setTransform(65.2,109.6,1,1,-20.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12,p:{rotation:-5.3,x:52,y:123.9}},{t:this.shape_11,p:{rotation:-5.3,x:52,y:123.9}},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_12,p:{rotation:-20.3,x:64.3,y:110.5}},{t:this.shape_11,p:{rotation:-20.3,x:64.3,y:110.5}},{t:this.shape_14,p:{x:65.2,y:109.6,rotation:-20.3}},{t:this.shape_13,p:{x:65.2,y:109.6,rotation:-20.3}}]},1).to({state:[{t:this.shape_12,p:{rotation:-20.3,x:61.9,y:122.3}},{t:this.shape_11,p:{rotation:-20.3,x:61.9,y:122.3}},{t:this.shape_14,p:{x:62.9,y:121.4,rotation:-20.3}},{t:this.shape_13,p:{x:62.9,y:121.4,rotation:-20.3}}]},1).to({state:[{t:this.shape_12,p:{rotation:-5.3,x:50.3,y:123.4}},{t:this.shape_11,p:{rotation:-5.3,x:50.3,y:123.4}},{t:this.shape_14,p:{x:51.5,y:122.8,rotation:-5.3}},{t:this.shape_13,p:{x:51.5,y:122.8,rotation:-5.3}}]},1).to({state:[{t:this.shape_12,p:{rotation:-5.3,x:47.1,y:123.4}},{t:this.shape_11,p:{rotation:-5.3,x:47.1,y:123.4}},{t:this.shape_14,p:{x:48.2,y:122.8,rotation:-5.3}},{t:this.shape_13,p:{x:48.2,y:122.8,rotation:-5.3}}]},1).to({state:[{t:this.shape_12,p:{rotation:-5.3,x:39.6,y:123.4}},{t:this.shape_11,p:{rotation:-5.3,x:39.6,y:123.4}},{t:this.shape_14,p:{x:40.7,y:122.8,rotation:-5.3}},{t:this.shape_13,p:{x:40.7,y:122.8,rotation:-5.3}}]},1).to({state:[{t:this.shape_12,p:{rotation:-5.3,x:38.5,y:123.4}},{t:this.shape_11,p:{rotation:-5.3,x:38.5,y:123.4}},{t:this.shape_14,p:{x:39.6,y:122.8,rotation:-5.3}},{t:this.shape_13,p:{x:39.6,y:122.8,rotation:-5.3}}]},1).to({state:[{t:this.shape_12,p:{rotation:9.7,x:26.9,y:123.2}},{t:this.shape_11,p:{rotation:9.7,x:26.9,y:123.2}},{t:this.shape_14,p:{x:28.2,y:122.9,rotation:9.7}},{t:this.shape_13,p:{x:28.2,y:122.9,rotation:9.7}}]},1).to({state:[{t:this.shape_12,p:{rotation:39.7,x:11.1,y:119.4}},{t:this.shape_11,p:{rotation:39.7,x:11.1,y:119.4}},{t:this.shape_14,p:{x:12.4,y:119.8,rotation:39.7}},{t:this.shape_13,p:{x:12.4,y:119.8,rotation:39.7}}]},1).to({state:[{t:this.shape_12,p:{rotation:39.7,x:14.4,y:111.9}},{t:this.shape_11,p:{rotation:39.7,x:14.4,y:111.9}},{t:this.shape_14,p:{x:15.7,y:112.3,rotation:39.7}},{t:this.shape_13,p:{x:15.7,y:112.3,rotation:39.7}}]},1).to({state:[{t:this.shape_12,p:{rotation:-5.3,x:27.4,y:111.7}},{t:this.shape_11,p:{rotation:-5.3,x:27.4,y:111.7}},{t:this.shape_14,p:{x:28.6,y:111.1,rotation:-5.3}},{t:this.shape_13,p:{x:28.6,y:111.1,rotation:-5.3}}]},1).to({state:[{t:this.shape_12,p:{rotation:-20.3,x:46.1,y:111.3}},{t:this.shape_11,p:{rotation:-20.3,x:46.1,y:111.3}},{t:this.shape_14,p:{x:47,y:110.4,rotation:-20.3}},{t:this.shape_13,p:{x:47,y:110.4,rotation:-20.3}}]},1).to({state:[{t:this.shape_12,p:{rotation:-20.3,x:63.6,y:111.3}},{t:this.shape_11,p:{rotation:-20.3,x:63.6,y:111.3}},{t:this.shape_14,p:{x:64.5,y:110.4,rotation:-20.3}},{t:this.shape_13,p:{x:64.5,y:110.4,rotation:-20.3}}]},1).to({state:[{t:this.shape_12,p:{rotation:-20.3,x:63.6,y:111.3}},{t:this.shape_11,p:{rotation:-20.3,x:63.6,y:111.3}},{t:this.shape_14,p:{x:64.5,y:110.4,rotation:-20.3}},{t:this.shape_13,p:{x:64.5,y:110.4,rotation:-20.3}}]},1).to({state:[{t:this.shape_12,p:{rotation:-5.3,x:55.8,y:121.1}},{t:this.shape_11,p:{rotation:-5.3,x:55.8,y:121.1}},{t:this.shape_14,p:{x:57,y:120.5,rotation:-5.3}},{t:this.shape_13,p:{x:57,y:120.5,rotation:-5.3}}]},1).wait(1));

	// corpo
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(0.1,0,0,4).p("AANABQAAAIgEAFQgEAGgFgBQgEgBgEgGQgEgGAAgGQgBgIAFgFQAEgFAEAAQAFABAEAGQAEAGAAAGg");
	this.shape_15.setTransform(66.3,43.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAAATQgEgBgEgGQgEgGAAgGQgBgIAFgFQAEgFAEAAQAFABAEAGQAEAGAAAGQAAAIgEAFQgDAFgFAAIgBAAg");
	this.shape_16.setTransform(66.3,43.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAAAeQgHgBgHgKQgGgJAAgLQAAgMAGgIQAGgIAIAAQAIABAHAKQAGAJAAALQAAANgGAIQgGAHgHAAIgCAAg");
	this.shape_17.setTransform(65.9,43.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.7,0,0,4).p("Agdg+QAUgQAWAIQAXAIANAaQAMAbgFAbQgFAegVAPQgUAQgWgIQgXgHgNgbQgNgaAGgcQAFgdAVgQg");
	this.shape_18.setTransform(62.7,44.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgLBHQgYgHgNgbQgMgaAFgcQAGgdAUgQQAVgQAVAIQAYAIAMAaQAMAbgFAbQgFAegUAPQgOALgPAAQgGAAgHgDg");
	this.shape_19.setTransform(62.7,44.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.6,0,0,4).p("ABZgQIAMAfIjLALIAGgzg");
	this.shape_20.setTransform(47.9,45.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhggZIC6AJIAMAgIjLAKg");
	this.shape_21.setTransform(47.8,45.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#999999").ss(1,1,1).p("AhLgpIAKAUQAOAVAQAQQAyAyA9gv");
	this.shape_22.setTransform(61.1,62.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgwgPIBhgBIgGAhg");
	this.shape_23.setTransform(48.7,34.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0D0057").s().p("Aj1goID+guIFwAjIrxCKg");
	this.shape_24.setTransform(39.2,8.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D0057").s().p("AhUB3QgxgTgFgbIAAgBIgijRIE2AAIAiDRIAAABQAFAbgrATQgqAThBAAQg/AAgwgTg");
	this.shape_25.setTransform(35.4,18.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#999999").ss(0.6,0,0,4).p("ADVkKQBaDGACCxQADCdhZBvQhYBvh/AAQh9gBhbhuQhbhvgCidQgBhPAXhlQAYhoAphbQBijdB2AAQBzAABkDdg");
	this.shape_26.setTransform(39.1,68.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AjUF4QhbhugCidQgBhPAXhlQAYhoAphbQBijdB2AAQBzAABkDdQBaDGACCxQADCdhZBvQhYBvh/AAQh9AAhbhwg");
	this.shape_27.setTransform(39.1,68.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#999999").ss(0.6,0,0,4).p("ADmkfQAsBiAbBxQAbBsABBWQACCphfB3QhfB3iIAAQiHAAhih3Qhih4gCipQgBhVAZhsQAZhwAshjQBqjtB/AAQB8AABsDtg");
	this.shape_28.setTransform(37.5,67.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AjkGWQhih4gCipQgBhVAZhsQAZhwAshjQBqjtB/AAQB8AABsDtQAsBiAbBxQAbBsABBWQACCphfB3QhfB3iIAAQiHAAhih3g");
	this.shape_29.setTransform(37.5,67.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#92CDDA").s().p("AAAATQgGAAgEgHQgEgGAAgGQABgIAEgFQAEgGAFABQAGAAAFAHQAEAGAAAFQAAAJgFAFQgEAFgGAAIAAAAg");
	this.shape_30.setTransform(55.9,42.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

	// pe_esq
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#999999").ss(1.4,0,0,4).p("ACOAAQAAgZglgTQgkgSg0AAQg2AAgxAPQg2ASAAAYQAAAYA2AWQA0AWAzAAQA0AAAkgSQAlgTAAgag");
	this.shape_31.setTransform(34.7,121.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["rgba(0,0,0,0.102)","rgba(255,255,255,0.102)"],[0,1],0,0,0,0,0,15).s().p("AhXApQg2gWAAgXQAAgZA2gSQAygPA2AAQA0AAAkASQAlATAAAZQAAAaglASQgkATg0AAQg0AAg0gWg");
	this.shape_32.setTransform(34.7,121.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#999999").ss(1.4,0,0,4).p("ABpgsQgkgSg0AAQg3AAgxAQQg2ARAAAZQAAAYA2AWQA0AVA0AAQA0AAAkgSQAlgTAAgaQAAgYglgUg");
	this.shape_33.setTransform(33.5,122.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhXAqQg2gXAAgXQAAgZA2gRQAygQA2AAQA0AAAkASQAlAUAAAYQAAAaglASQgkATg0AAQg0AAg0gVg");
	this.shape_34.setTransform(33.5,122.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34,p:{scaleX:1,scaleY:1,rotation:0,x:33.5,y:122.3}},{t:this.shape_33,p:{scaleX:1,scaleY:1,rotation:0,x:33.5,y:122.3}},{t:this.shape_32,p:{scaleX:1,scaleY:1,rotation:0,x:34.7,y:121.8}},{t:this.shape_31,p:{scaleX:1,scaleY:1,rotation:0,x:34.7,y:121.8}}]}).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:27.8,y:122.1}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:27.8,y:122.1}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:29.1,y:121.9}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:29.1,y:121.9}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:16.1,y:122.1}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:16.1,y:122.1}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:17.4,y:121.9}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:17.4,y:121.9}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:17.8,y:117.1}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:17.8,y:117.1}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:19.1,y:117.3}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:19.1,y:117.3}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:21.6,y:113.7}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:21.6,y:113.7}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:22.9,y:113.9}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:22.9,y:113.9}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:19.1,y:113.7}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:19.1,y:113.7}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:20.4,y:113.9}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:20.4,y:113.9}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:28,y:113.7}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:28,y:113.7}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:29.3,y:113.9}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:30,x:29.3,y:113.9}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:-15,x:51.5,y:114.4}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:-15,x:51.5,y:114.4}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:-15,x:52.5,y:113.6}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:-15,x:52.5,y:113.6}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:-30,x:59.5,y:114.4}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:-30,x:59.5,y:114.4}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:-30,x:60.2,y:113.5}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:-30,x:60.2,y:113.5}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:54.9,y:117.6}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:54.9,y:117.6}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:56,y:117.3}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:56,y:117.3}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:41.4,y:116.6}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:41.4,y:116.6}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:42.5,y:116.3}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:42.5,y:116.3}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:32.4,y:118.5}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:32.4,y:118.5}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:33.5,y:118.4}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:33.5,y:118.4}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:19.9,y:118.5}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:19.9,y:118.5}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:21,y:118.4}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:21,y:118.4}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:19.9,y:118.5}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:19.9,y:118.5}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:21,y:118.4}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:15,x:21,y:118.4}}]},1).to({state:[{t:this.shape_34,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:32.4,y:118.6}},{t:this.shape_33,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:32.4,y:118.6}},{t:this.shape_32,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:33.5,y:118.3}},{t:this.shape_31,p:{scaleX:0.999,scaleY:0.999,rotation:0,x:33.5,y:118.3}}]},1).wait(1));

	// braço_esq
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#999999").ss(1,0,0,4).p("AgihIQgUAHgSAiQgRAgABAbQABALAHAHQAEADAHAAQAGgBAKgIQAVAPAhAHIAHACIAGAKIADAAIA8gIIgDgEQAMgFADgMQAEgSgbgPQgVgMgdgEQgQgEgUAAQAJgVAAgRQABgRgIgHQgFgFgGACg");
	this.shape_35.setTransform(44.3,101.3,1,1,135);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AAOBKIgGgKIgHgCQghgHgVgPQgKAIgGABQgHAAgEgDQgHgHgBgLQgBgbARggQASgiAUgHIAFgBQAGgCAFAFQAIAHgBARQAAARgJAVQAUAAAQAEQAdAEAVAMQAbAPgEASQgDAMgMAFIADAEIg8AIg");
	this.shape_36.setTransform(44.3,101.3,1,1,135);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#999999").ss(1,0,0,4).p("AA5gZQAPAQAKAoIgEATQgIAUgUABQgrADgegVQgsgfgJgWQgJgTAGgZQAHgdAWADQAZADAiAOQAmAPAKANg");
	this.shape_37.setTransform(47,105.1,1,1,135);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgXA1QgsgfgJgWQgJgTAGgZQAHgdAWADQAZADAiAOQAmAPAKANQAPAQAKAoIgEATQgIAUgUABIgJAAQglAAgbgSg");
	this.shape_38.setTransform(47,105.1,1,1,135);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#999999").ss(1,0,0,4).p("AhXC4QAqgjApgqQBRhUgBgfQgBghAYhJIAZhDIg6AFIgZA8QgaBCgHAZQgEAShBAiQgiASghAO");
	this.shape_39.setTransform(35.5,78.6,1,1,135);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("Ah9A6QAhgOAhgSQBBgiAFgSQAGgZAbhCIAZg8IA5gFIgYBDQgZBJABAhQABAfhQBUQgqAqgpAjg");
	this.shape_40.setTransform(35.7,78.3,1,1,135);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#999999").ss(1,0,0,4).p("AhPgsQAHgdAWADQAZADAiAOQAmAPAKANQAPAQAKAoIgEATQgIAUgUABQgrADgegVQgsgfgJgWQgJgTAGgZg");
	this.shape_41.setTransform(47,105.1,1,1,135);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#999999").ss(1,0,0,4).p("AgyhGQAZADAiAOQAmAPAKANQAPAQAKAoIgEATQgIAUgUABQgrADgegVQgsgfgJgWQgJgTAGgZQAHgdAWADg");
	this.shape_42.setTransform(67.3,100,1,1,105);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#999999").ss(1,0,0,4).p("AAJg1QAmAPAKANQAPAQAKAoIgEATQgIAUgUABQgrADgegVQgsgfgJgWQgJgTAGgZQAHgdAWADQAZADAiAOg");
	this.shape_43.setTransform(71.2,95.7,0.997,0.997,101.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_40,p:{rotation:135,x:35.7,y:78.3,scaleX:1,scaleY:1}},{t:this.shape_39,p:{rotation:135,x:35.5,y:78.6,scaleX:1,scaleY:1}},{t:this.shape_38,p:{rotation:135,x:47,y:105.1,scaleX:1,scaleY:1}},{t:this.shape_37,p:{scaleX:1,scaleY:1,rotation:135,x:47,y:105.1}},{t:this.shape_36,p:{rotation:135,x:44.3,y:101.3,scaleX:1,scaleY:1}},{t:this.shape_35,p:{rotation:135,x:44.3,y:101.3,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_40,p:{rotation:135,x:35.7,y:78.3,scaleX:1,scaleY:1}},{t:this.shape_39,p:{rotation:135,x:35.5,y:78.6,scaleX:1,scaleY:1}},{t:this.shape_38,p:{rotation:135,x:47,y:105.1,scaleX:1,scaleY:1}},{t:this.shape_41,p:{scaleX:1,scaleY:1,rotation:135,x:47,y:105.1}},{t:this.shape_36,p:{rotation:135,x:44.3,y:101.3,scaleX:1,scaleY:1}},{t:this.shape_35,p:{rotation:135,x:44.3,y:101.3,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_40,p:{rotation:105,x:44.1,y:82.5,scaleX:1,scaleY:1}},{t:this.shape_39,p:{rotation:105,x:44.1,y:82.8,scaleX:1,scaleY:1}},{t:this.shape_38,p:{rotation:105,x:67.3,y:100,scaleX:1,scaleY:1}},{t:this.shape_42,p:{scaleX:1,scaleY:1,rotation:105,x:67.3,y:100}},{t:this.shape_36,p:{rotation:105,x:63,y:98.1,scaleX:1,scaleY:1}},{t:this.shape_35,p:{rotation:105,x:63,y:98.1,scaleX:1,scaleY:1}}]},1).to({state:[{t:this.shape_40,p:{rotation:101.7,x:47.1,y:79.7,scaleX:0.997,scaleY:0.997}},{t:this.shape_39,p:{rotation:101.7,x:47.1,y:79.9,scaleX:0.997,scaleY:0.997}},{t:this.shape_38,p:{rotation:101.7,x:71.2,y:95.7,scaleX:0.997,scaleY:0.997}},{t:this.shape_43,p:{scaleX:0.997,scaleY:0.997,rotation:101.7,x:71.2,y:95.7}},{t:this.shape_36,p:{rotation:101.7,x:66.8,y:94.1,scaleX:0.997,scaleY:0.997}},{t:this.shape_35,p:{rotation:101.7,x:66.8,y:94.1,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.shape_40,p:{rotation:94.7,x:47.7,y:78.5,scaleX:0.997,scaleY:0.997}},{t:this.shape_39,p:{rotation:94.7,x:47.7,y:78.8,scaleX:0.997,scaleY:0.997}},{t:this.shape_38,p:{rotation:94.7,x:73.5,y:91.5,scaleX:0.997,scaleY:0.997}},{t:this.shape_37,p:{scaleX:0.997,scaleY:0.997,rotation:94.7,x:73.5,y:91.5}},{t:this.shape_36,p:{rotation:94.7,x:69,y:90.4,scaleX:0.997,scaleY:0.997}},{t:this.shape_35,p:{rotation:94.7,x:69,y:90.4,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.shape_40,p:{rotation:109.7,x:46.3,y:80.9,scaleX:0.997,scaleY:0.997}},{t:this.shape_39,p:{rotation:109.7,x:46.3,y:81.2,scaleX:0.997,scaleY:0.997}},{t:this.shape_38,p:{rotation:109.7,x:68,y:100.2,scaleX:0.997,scaleY:0.997}},{t:this.shape_41,p:{scaleX:0.997,scaleY:0.997,rotation:109.7,x:68,y:100.2}},{t:this.shape_36,p:{rotation:109.7,x:63.9,y:97.9,scaleX:0.997,scaleY:0.997}},{t:this.shape_35,p:{rotation:109.7,x:63.9,y:97.9,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.shape_40,p:{rotation:102.4,x:38.7,y:86.3,scaleX:0.999,scaleY:0.999}},{t:this.shape_39,p:{rotation:102.4,x:38.7,y:86.6,scaleX:0.999,scaleY:0.999}},{t:this.shape_38,p:{rotation:102.4,x:62.6,y:102.7,scaleX:0.999,scaleY:0.999}},{t:this.shape_42,p:{scaleX:0.999,scaleY:0.999,rotation:102.4,x:62.6,y:102.7}},{t:this.shape_36,p:{rotation:102.4,x:58.3,y:101,scaleX:0.999,scaleY:0.999}},{t:this.shape_35,p:{rotation:102.4,x:58.3,y:101,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.shape_40,p:{rotation:117.4,x:34.9,y:88,scaleX:0.999,scaleY:0.999}},{t:this.shape_39,p:{rotation:117.4,x:34.9,y:88.3,scaleX:0.999,scaleY:0.999}},{t:this.shape_38,p:{rotation:117.4,x:53.8,y:110,scaleX:0.999,scaleY:0.999}},{t:this.shape_43,p:{scaleX:0.999,scaleY:0.999,rotation:117.4,x:53.8,y:110}},{t:this.shape_36,p:{rotation:117.4,x:50.1,y:107.2,scaleX:0.999,scaleY:0.999}},{t:this.shape_35,p:{rotation:117.4,x:50.1,y:107.2,scaleX:0.999,scaleY:0.999}}]},1).to({state:[{t:this.shape_40,p:{rotation:-155.8,x:36,y:68.1,scaleX:0.998,scaleY:0.998}},{t:this.shape_39,p:{rotation:-155.8,x:35.7,y:68.1,scaleX:0.998,scaleY:0.998}},{t:this.shape_38,p:{rotation:-155.8,x:15.1,y:88.2,scaleX:0.998,scaleY:0.998}},{t:this.shape_42,p:{scaleX:0.998,scaleY:0.998,rotation:-155.8,x:15.1,y:88.2}},{t:this.shape_36,p:{rotation:-155.8,x:17.6,y:84.3,scaleX:0.998,scaleY:0.998}},{t:this.shape_35,p:{rotation:-155.8,x:17.6,y:84.3,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.shape_40,p:{rotation:-167.9,x:27.4,y:71.1,scaleX:0.998,scaleY:0.998}},{t:this.shape_39,p:{rotation:-167.9,x:27.1,y:71.1,scaleX:0.998,scaleY:0.998}},{t:this.shape_38,p:{rotation:-167.9,x:11.1,y:95.1,scaleX:0.998,scaleY:0.998}},{t:this.shape_41,p:{scaleX:0.998,scaleY:0.998,rotation:-167.9,x:11.1,y:95.1}},{t:this.shape_36,p:{rotation:-167.9,x:12.8,y:90.7,scaleX:0.998,scaleY:0.998}},{t:this.shape_35,p:{rotation:-167.9,x:12.8,y:90.7,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.shape_40,p:{rotation:-146.6,x:24.9,y:72.2,scaleX:0.998,scaleY:0.998}},{t:this.shape_39,p:{rotation:-146.6,x:24.6,y:72.1,scaleX:0.998,scaleY:0.998}},{t:this.shape_38,p:{rotation:-146.6,x:1,y:88.7,scaleX:0.998,scaleY:0.998}},{t:this.shape_42,p:{scaleX:0.998,scaleY:0.998,rotation:-146.6,x:1,y:88.7}},{t:this.shape_36,p:{rotation:-146.6,x:4.2,y:85.2,scaleX:0.998,scaleY:0.998}},{t:this.shape_35,p:{rotation:-146.6,x:4.2,y:85.2,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.shape_40,p:{rotation:-152.9,x:25.5,y:73.6,scaleX:0.998,scaleY:0.998}},{t:this.shape_39,p:{rotation:-152.9,x:25.2,y:73.5,scaleX:0.998,scaleY:0.998}},{t:this.shape_38,p:{rotation:-152.9,x:3.6,y:92.5,scaleX:0.998,scaleY:0.998}},{t:this.shape_43,p:{scaleX:0.998,scaleY:0.998,rotation:-152.9,x:3.6,y:92.5}},{t:this.shape_36,p:{rotation:-152.9,x:6.3,y:88.8,scaleX:0.998,scaleY:0.998}},{t:this.shape_35,p:{rotation:-152.9,x:6.3,y:88.8,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.shape_40,p:{rotation:-162.2,x:26.6,y:75.4,scaleX:0.998,scaleY:0.998}},{t:this.shape_39,p:{rotation:-162.2,x:26.3,y:75.4,scaleX:0.998,scaleY:0.998}},{t:this.shape_38,p:{rotation:-162.2,x:8,y:97.7,scaleX:0.998,scaleY:0.998}},{t:this.shape_37,p:{scaleX:0.998,scaleY:0.998,rotation:-162.2,x:8,y:97.7}},{t:this.shape_36,p:{rotation:-162.2,x:10.2,y:93.5,scaleX:0.998,scaleY:0.998}},{t:this.shape_35,p:{rotation:-162.2,x:10.2,y:93.5,scaleX:0.998,scaleY:0.998}}]},1).to({state:[{t:this.shape_40,p:{rotation:-171.5,x:27.9,y:77.1,scaleX:0.997,scaleY:0.997}},{t:this.shape_39,p:{rotation:-171.5,x:27.6,y:77.1,scaleX:0.997,scaleY:0.997}},{t:this.shape_38,p:{rotation:-171.5,x:13.2,y:102,scaleX:0.997,scaleY:0.997}},{t:this.shape_41,p:{scaleX:0.997,scaleY:0.997,rotation:-171.5,x:13.2,y:102}},{t:this.shape_36,p:{rotation:-171.5,x:14.6,y:97.6,scaleX:0.997,scaleY:0.997}},{t:this.shape_35,p:{rotation:-171.5,x:14.6,y:97.6,scaleX:0.997,scaleY:0.997}}]},1).to({state:[{t:this.shape_40,p:{rotation:147.4,x:19.9,y:78.1,scaleX:0.999,scaleY:0.999}},{t:this.shape_39,p:{rotation:147.4,x:19.7,y:78.3,scaleX:0.999,scaleY:0.999}},{t:this.shape_38,p:{rotation:147.4,x:25.2,y:106.6,scaleX:0.999,scaleY:0.999}},{t:this.shape_42,p:{scaleX:0.999,scaleY:0.999,rotation:147.4,x:25.2,y:106.6}},{t:this.shape_36,p:{rotation:147.4,x:23.4,y:102.3,scaleX:0.999,scaleY:0.999}},{t:this.shape_35,p:{rotation:147.4,x:23.4,y:102.3,scaleX:0.999,scaleY:0.999}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,77.6,131.2);

(lib.callback = function(){
	//Callback Criado por Sergio felipe 29/09/2014 às 09:32 AM
});


(lib.mc_mascote_06 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		if (lib.callback) lib.callback();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// mascote_andando
	this.instance = new lib.mc_mascote_gera();
	this.instance.setTransform(-58.1,34,0.545,0.545,0,0,0,38.2,65.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:29.4},23).to({_off:true},1).wait(1));

	// mascote_parado
	this.instance_1 = new lib.mc_mascote_parado("synched",0);
	this.instance_1.setTransform(30.3,34.2,1,1,0,0,0,23.1,35.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.2,-1.6,42.3,71.3);


// stage content:



(lib.mascoteIndice = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mc_mascote_06();
	this.instance.setTransform(209.6,66.2,1.802,1.802,0,0,0,37,35.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(120,64,76.2,128.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;