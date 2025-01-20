(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 78,
	height: 71,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.mc_lapis = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7BBFDA").s().p("AgJAUIgJggIABAFQAEgCADgDIAGgHIAXAOIgKAQQgJAJgIAAIgBAAg");
	this.shape.setTransform(2.5,3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#91017E").s().p("AgDAGIgFgPIARAJIgGAFQgDAEgCABg");
	this.shape_1.setTransform(0.9,1.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#217FB8").s().p("AAlBOIhmiCIABAAQAKABAKgJIAKgTIAAAAIBkCOIgGALQgIAGgHAAQgEAAgEgCg");
	this.shape_2.setTransform(8,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#217FB8").s().p("AAQBUIg/iZIABAAQAJAEAMgGIAPgQIAAAAIA6CkIgJAJQgFACgFAAQgHAAgGgEg");
	this.shape_3.setTransform(10,9.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7BBFDA").s().p("AgRASIAAgcQAEAAAEgCIAHgGIAUASIgPAPQgGAEgHAAIgHgBg");
	this.shape_4.setTransform(7.1,0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#91017E").s().p("AgGgJIANAMIgHAFQgCACgEAAg");
	this.shape_5.setTransform(6,-2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},4).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},10).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},4).to({state:[{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},5).to({state:[{t:this.shape_2},{t:this.shape},{t:this.shape_1}]},11).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},4).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.6,18.4);


(lib.gr_teste = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3A56A7").ss(1.5,0,0,3).p("ABEgIIh4AhABgAzIAHBfIiFBAIhHlPICxhTIAOC1AA9h6IiGAmABIhEIiLAmAA1B7IhOAjABMA1IhzAg");
	this.shape.setTransform(10.3,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(0.6,0,0,3).p("AhWAgQAwAfASAAQAhAACEiWIgzCKIg0AXQg3AXgRAAQgUAAgogkAhWAgIgEAZIgBAIIgCgCQgCAHgFACIgBAAQAAAAgBAAIAAAAIgLgMQgFgMgCgVQgBgMABgKQgVAKgGgLQgBgDAAgCIABgCQABgEACgDQAFgHALgIQADgCADgBQAKgGAIABQABAAACABQAFABACADQACADgBAEQgBAEgDAFQAFAMACAUIABAEIAEAEg");
	this.shape_1.setTransform(31.7,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ahyh+ICyhTIANC2IgFADQgLAHgFAIIh5AhIB5ghIgEAHIAAACIAAAAIABAFIAAAAIAAABIAAAAIAAAAQADAEAGAAIABAAIAAAAQAGAAAIgDIAAAAIAAAAIABgBIABAAIAAAAIABAAIgBAKIABAMQACAVAEALIgCgJIAHBfIiGBAgAgmCeIBOgjgAg0BVIBzghgAhPgeICKgmgAhWhUICHgmgABiBIIAAAAIgMgMQgEgLgCgVIgBgMIABgKIgBAAIAAAAIgBAAIgBABIAAAAIAAAAQgIADgGAAIAAAAIgBAAQgGAAgDgEIAAAAIAAAAIAAgBIAAAAIgBgFIAAAAIAAgCIAEgHQAFgIALgHIAFgDQALgGAIABIACABQAGAAABAEQACADgBAEQgBAEgDAFQAFALADAVIAAAEIAFAEIgBADIgEAaIgBAIIgCgCQgDAHgFABIAAAAIgBABIAAgBgABuA6IAAAEIgBAEg");
	this.shape_2.setTransform(11.5,21);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1.3,48.2,44.3);


(lib.gr_olhos = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAfAAQADgQASgBQARABgCAQQgDARgSAAQgSAAADgRgAAjgDQgCAJAMAAQALAAACgJQACgMgMAAQgLAAgCAMgAhBAAQACgQASgBQASABgDAQQgCARgTAAQgSAAAEgRgAg9gDQgCAJALAAQALAAACgJQACgMgLAAQgLAAgCAMg");
	this.shape.setTransform(6.7,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAlAAQADgKALAAQALAAgCAKQgCALgLAAQgMAAACgLgAg7AAQACgKALAAQALAAgBAKQgDALgKAAQgMAAACgLg");
	this.shape_1.setTransform(6.5,1.3);

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


(lib.mc_det = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gr_det("synched",0);
	this.instance.setTransform(0.8,0.1,0.999,0.999,-5.2,0,0,0.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,rotation:10.5,y:0},14,cjs.Ease.get(1)).to({regY:0.1,scaleX:1,scaleY:1,rotation:-6.2,y:0.1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0,2.7,6.4);


(lib.mc_mascote = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// lapis
	this.instance = new lib.mc_lapis();
	this.instance.setTransform(37.5,41.9,1,1,0,0,0,7.3,9.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// det_01
	this.instance_1 = new lib.mc_det();
	this.instance_1.setTransform(73.3,11.9,1,1,0,0,0,1.4,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

	// olhos
	this.instance_2 = new lib.mc_olhos();
	this.instance_2.setTransform(51.1,24.2,1,1,0,0,0,6.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14));

	// mascote
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,0,0,3).p("ABmgSQgpAkhCAAQhEAAgbgY");
	this.shape.setTransform(52.2,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhkgFIDJgNQgpAkhCAAQhDAAgbgXg");
	this.shape_1.setTransform(52.2,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,0,0,3).p("AALADQgBgCgCgBQgFgEgFADQgIABAAAI");
	this.shape_2.setTransform(41.1,30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgCgDQAFgDAFAEIADADIgVAFQAAgGAIgDg");
	this.shape_3.setTransform(41.1,30.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,0,0,3).p("AANAMQAHgMgQgHQgFgDgHADQgEACgCAC");
	this.shape_4.setTransform(64.2,29.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgOgEIAGgEQAHgDAFADQAQAGgHANg");
	this.shape_5.setTransform(64.2,29.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(1,0,0,3).p("Ah0geQAMAoATAUQAZAbAvAAQAoAAAcgZQAZgXAfg7Qg9AghCAAQhEAAgggMg");
	this.shape_6.setTransform(53,35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhSAbQgTgUgMgoQAgAMBEAAQBCAAA9ggQgfA7gZAXQgcAZgoAAQgvAAgZgbg");
	this.shape_7.setTransform(52.7,35.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(0.6,0,0,3).p("AABgiQAnACAQAgQAIARgHANQgHANgSACQgLAAgLgDQgDADgHABQgJABgMgGQgMgGgNgVQgMgPgBgGQgCgJAJgCQAOgEAHAEIAEgGQgLgCgBgGQgCgKAUgDQAVgCABALg");
	this.shape_8.setTransform(46.9,52.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVApQgMgGgNgVQgMgPgBgGQgCgJAJgCQAOgEAHAEIAEgGQgLgCgBgGQgCgKAUgDQAVgCABALIAAACQAnACAQAgQAIARgHANQgHANgSACQgLAAgLgDQgDADgHABIgCAAQgJAAgKgFg");
	this.shape_9.setTransform(46.9,52.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgJABIAFgFIANAJg");
	this.shape_10.setTransform(50.2,8.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgHgCIAHgFIAIAPg");
	this.shape_11.setTransform(51.4,6.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADgFIAGAFIgRAGg");
	this.shape_12.setTransform(56.4,8.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAgHIAHACIgNANg");
	this.shape_13.setTransform(55.7,7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgCgHIAGgBIgFARg");
	this.shape_14.setTransform(53.9,6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAaQgGgHAAgLQABgKAHgNQAIgQAHAAQAFAAAEAFQAGAHAEAQIAAABIgCABIgBgBQgFgYgLABQgEABgGAMQgGALgBAIQgBAJAGAGQAEAEAGAAQAJgBAGgOIgGABIgDgEIAQgCIgBABQgFAYgQABIgCAAQgIAAgFgGg");
	this.shape_15.setTransform(53.1,11);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgTgIIApAPIgsACg");
	this.shape_16.setTransform(47,17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgZgIIAzABIgvAQg");
	this.shape_17.setTransform(48.6,18.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAAIAvgIIgGAQg");
	this.shape_18.setTransform(58.7,18.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgHAFIACgJIANAAIgCAJg");
	this.shape_19.setTransform(51.6,24.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.7,0,0,3).p("AgeAbQAJALAQAAQAOAAANgLQAOgLACgQQADgOgKgMQgJgLgQAAQgOAAgOALQgNAMgCAOQgDAQAKALg");
	this.shape_20.setTransform(56.5,24.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgeAbQgKgMADgPQACgOANgMQAOgLAOAAQAQAAAJALQAKAMgDAOQgCAPgOAMQgNALgOAAQgQAAgJgLg");
	this.shape_21.setTransform(56.5,24.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(0.6,0,0,3).p("Ag0AbIBngcIgLgaIhcAjg");
	this.shape_22.setTransform(65.5,21.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgzAIIBcgjIALAbIhnAbg");
	this.shape_23.setTransform(65.4,21.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#0D0057").s().p("AjJgbIDGgSICHAYIBGBDg");
	this.shape_24.setTransform(53.6,3.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#0D0057").s().p("AhHBAQgXgLADgOIAAgBIAShuIClAAIgSBuIAAABQgCAOgaALQgaAKghgBQgjABgXgKg");
	this.shape_25.setTransform(55.7,8.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.7,0,0,3).p("AgeAbQAJALAQAAQAOAAANgLQAOgLACgQQACgPgJgLQgJgLgQAAQgOAAgOALQgNALgCAPQgDAQAKALg");
	this.shape_26.setTransform(46.8,24.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgeAbQgKgLADgQQACgOANgMQAOgLAOAAQAQAAAJALQAJAMgCAOQgCAQgOALQgNALgOAAQgQAAgJgLg");
	this.shape_27.setTransform(46.8,24.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#999999").ss(0.6,0,0,3).p("ABlgsQhlBPgVgBQgYAAg1AXIACgbQAxgYATgEQAIgCAageIAcgf");
	this.shape_28.setTransform(58.5,50.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhhAgQAxgXATgFQAIgCAageIAcgfIBDARQhkBQgWgBQgYgBg1AYg");
	this.shape_29.setTransform(58.6,50);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#999999").ss(0.6,0,0,3).p("AB1iOQg1h2g/AAQg9AAg1B2QgwBqgCBeQgBBUAvA8QAwA7BEAAQBCAAAwg7QAxg8ABhUQAChdgwhrg");
	this.shape_30.setTransform(53.7,37.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ah1DJQgvg7ABhUQACheAwhqQA1h2A9AAQA/AAA1B2QAwBrgCBdQgBBUgxA7QgwA8hCAAQhEAAgwg8g");
	this.shape_31.setTransform(53.7,37.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#999999").ss(0.6,0,0,3).p("AB+iZQg5h/hEAAQhBAAg6B/Qg0BygBBmQgBBbAzA/QAzBABJAAQBHAAA0hAQA1g/ABhbQABhkgzh0g");
	this.shape_32.setTransform(54.6,36.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("Ah9DZQgzg/ABhbQABhlA0hzQA6h/BBAAQBEAAA5B/QAzB0gBBkQgBBbg1A/Qg0BAhHAAQhJAAgzhAg");
	this.shape_33.setTransform(54.6,36.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#999999").ss(0.8,0,0,3).p("AgzAYQAfANAeAAQAfAAAVgLQAWgLAAgPQAAgOgWgLQgVgLgfAAQggAAgdAJQggAKAAAPQAAANAgANg");
	this.shape_34.setTransform(64.9,64.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgzAYQgggNAAgNQAAgPAggKQAdgJAgAAQAfAAAVALQAWALAAAOQAAAPgWALQgVALgfAAQgeAAgfgNg");
	this.shape_35.setTransform(64.9,64.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#999999").ss(0.8,0,0,3).p("AgzAZQAfAMAeAAQAfAAAVgKQAWgMAAgPQAAgOgWgMQgVgKgfAAQggAAgdAJQggALAAAOQAAANAgAOg");
	this.shape_36.setTransform(64.2,65);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgzAZQgggOAAgNQAAgPAggKQAdgJAgAAQAfgBAVALQAWAMAAAOQAAAPgWALQgVALgfAAQgeAAgfgMg");
	this.shape_37.setTransform(64.2,65);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#999999").ss(0.8,0,0,3).p("AhTAAQAAgOAWgLQAVgLAfAAQAfAAAeAJQAgAKAAAPQAAANggANQgfANgeAAQgfAAgVgLQgWgLAAgPg");
	this.shape_38.setTransform(43.3,64.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("Ag9AaQgWgLAAgPQAAgOAWgLQAVgLAfAAQAfAAAeAJQAgAKAAAPQAAANggANQgfANgeAAQgfAAgVgLg");
	this.shape_39.setTransform(43.3,64.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#999999").ss(0.8,0,0,3).p("AhTAAQAAgOAWgLQAVgLAfAAQAgAAAdAJQAgALAAAOQAAANggANQgfANgeAAQgeAAgWgLQgWgLAAgPg");
	this.shape_40.setTransform(44,65.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ag9AaQgWgLAAgPQAAgOAWgLQAVgLAfAAQAgAAAdAJQAgALAAAOQAAANggANQgfANgeAAQgeAAgWgLg");
	this.shape_41.setTransform(44,65.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("Ah4AzIAFgcQA0AkATAAQAjgBCCiWIgzCKIg0AXQg3AYgRAAQgVAAgtgqg");
	this.shape_42.setTransform(37.2,33.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(14));

	// teste
	this.instance_3 = new lib.gr_teste("synched",0);
	this.instance_3.setTransform(49.3,33.1,0.643,0.643,-90,0,0,46.2,21);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({scaleX:1,scaleY:1,rotation:0},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(25.1,-0.8,50.2,70.7);


// stage content:



(lib.mc_quest = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mc_mascote();
	this.instance.setTransform(37,35.9,1,1,0,0,0,37,35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(64,35.5,50.2,70.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;