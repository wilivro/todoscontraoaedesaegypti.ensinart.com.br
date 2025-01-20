(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 67,
	height: 64,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



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


(lib.gr_direito = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(0.6,1,1).p("AgBgdQAJAIANASIACADIAGAAIANAjIgCgBQABAIgEADQgLALgagoIgMgSQgNASgLgGQgDgDgBgDIgBgDQgDgIAJgSQAKgRAKgDQAFgCAEACQACABACAEQABAGAAAFg");
	this.shape.setTransform(17.7,22.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAAQIgMgSQgNASgLgGQgDgDgBgDIgBgDQgDgIAJgSQAKgRAKgDQAFgCAEACQACABACAEQABAGAAAFQAJAIANASIACADIAGAAIANAjIgCgBQABAIgEADQgCACgDAAQgMAAgUgfg");
	this.shape_1.setTransform(17.7,22.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(0.6,1,1).p("AgZglIAHgEQAJgDAIAGQAPAOAIASQAKAWgCAKQgCAJgIAFQgKAGgIgIQgdgggCgRg");
	this.shape_2.setTransform(14.9,25.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACAmQgdgggCgRIAEgaIAHgEQAJgDAIAGQAPAOAIASQAKAWgCAKQgCAJgIAFQgEADgEAAQgFAAgFgFg");
	this.shape_3.setTransform(14.9,25.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.6,1,1).p("AhhhpIDDDMIgMAGg");
	this.shape_4.setTransform(9.8,16.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhhhoIDDDLIgMAGg");
	this.shape_5.setTransform(9.8,16.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(0.6,1,1).p("AgHBaQAdgSAnjHIAaCSQg+BbgZAOQgQAKg9gNIgKgbQBAAFAQgJg");
	this.shape_6.setTransform(28.9,12.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhMB5IgKgbQA/AFARgJQAcgSAnjHIAaCSQg/BbgXAOQgHAEgQAAQgVAAghgHg");
	this.shape_7.setTransform(28.9,12.9);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.7,31.8);


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


(lib.mc_detalhes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gr_det("synched",0);
	this.instance.setTransform(0.8,0.1,0.999,0.999,-5.2,0,0,0.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:0,rotation:10.5,y:0},14,cjs.Ease.get(1)).to({regY:0.1,scaleX:1,scaleY:1,rotation:-6.2,y:0.1},15,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0,2.7,6.4);


(lib.mc_det02_dir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gr_direito("synched",0);
	this.instance.setTransform(35.6,10.9,1,1,0,0,0,35.6,10.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:60},14,cjs.Ease.get(1)).to({regY:11,rotation:45,x:35.5,y:11},2,cjs.Ease.get(-1)).to({regY:10.9,rotation:60,x:35.6,y:10.9},2).to({regY:11,rotation:45,x:35.5,y:11},2).to({regY:10.9,rotation:60,x:35.6,y:10.9},2).to({rotation:0},17).wait(186));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,39.7,31.8);


(lib.mc_mascote_04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_13 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(13).call(this.frame_13).wait(1));

	// det_01
	this.instance = new lib.mc_detalhes();
	this.instance.setTransform(73.3,11.9,1,1,0,0,0,1.4,3.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// olhos
	this.instance_1 = new lib.mc_olhos();
	this.instance_1.setTransform(51.1,24.2,1,1,0,0,0,6.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14));

	// logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAFgEIAEAFIgSAEg");
	this.shape.setTransform(57.4,7.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABgHIAHAFIgPAKg");
	this.shape_1.setTransform(56.1,5.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIAAIAGgGIALANg");
	this.shape_2.setTransform(51.1,7.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFgFIAFgCIAGAPg");
	this.shape_3.setTransform(51.8,6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCgIIAGABIgCAQg");
	this.shape_4.setTransform(53.7,5.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AABAgQgQgBgFgYIgBgBIAQACIgDAEIgGgBQAGAOAIABQAHAAAEgEQAGgGgBgJQgBgIgGgLQgGgMgEgBQgLgBgFAYIgBABIgCgBIAAgBQAEgQAGgHQAEgFAFAAQAHAAAIAQQAHANABAKQAAALgGAHQgFAGgIAAIgCAAg");
	this.shape_5.setTransform(54.4,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(14));

	// mascote
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(0.7,1,1).p("AhUgIQBWA1BTg8");
	this.shape_6.setTransform(52.5,34);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#999999").ss(0.6,1,1).p("AglgBIACAAQADgnAggQQARgIANAHQAOAHABATQABAJgDANQADAFABAFQAAAHgGAOQgGAMgVAOQgPAMgIABQgJACgCgKQgCgQACgFIgFgEQgCAJgGADQgLADgBgWQgDgVALgBg");
	this.shape_7.setTransform(75.3,56.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgUA1QgCgQACgFIgFgEQgCAJgGADQgLADgBgWQgDgVALgBIACAAQADgnAggQQARgIANAHQAOAHABATQABAJgDANQADAFABAFQAAAHgGAOQgGAMgVAOQgPAMgIABIgDAAQgGAAgCgIg");
	this.shape_8.setTransform(75.3,56.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTgIIAqAPIgtABg");
	this.shape_9.setTransform(46.9,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgagIIA1AAIgxARg");
	this.shape_10.setTransform(48.5,18.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXAAIAvgIIgGARg");
	this.shape_11.setTransform(58.8,18.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHAFIACgJIANAAIgCAJg");
	this.shape_12.setTransform(51.6,24.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(0.7,1,1).p("AAGgmQglAAgHAmQgCAPAJAMQAKAMAQAAQAmAAAGgnQADgOgKgMQgKgMgQAAg");
	this.shape_13.setTransform(56.6,24.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfAbQgJgMACgPQAHgmAlAAQAQAAAKAMQAKAMgDAOQgGAngmAAQgQAAgKgMg");
	this.shape_14.setTransform(56.6,24.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(0.6,1,1).p("AgzAIIgBAUIBpgcIgMgbg");
	this.shape_15.setTransform(65.6,21);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgzAIIBcgjIAMAaIhpAdg");
	this.shape_16.setTransform(65.6,21);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#0D0057").s().p("AjMgbIDJgTICIAaIBIBDg");
	this.shape_17.setTransform(53.7,3.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#0D0057").s().p("AhIBBQgXgKADgPIAAAAIAShyICoAAIgTBxIAAABQgDAPgaAKQgbAJggABQgjgBgYgJg");
	this.shape_18.setTransform(55.8,8.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(0.7,1,1).p("AgmAAQgGAnAnAAQAmAAAFgnQAEgOgKgMQgKgLgQAAQglAAgHAlg");
	this.shape_19.setTransform(46.8,24.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgmAAQAHgmAlABQAQgBAKALQAKANgEAOQgFAngmAAQgnAAAGgng");
	this.shape_20.setTransform(46.8,24.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#999999").ss(0.6,1,1).p("AgphkQBPBkgBAYQgBAYAYA2IgcgDQgYgxgFgTQgBgIgegcIgfgc");
	this.shape_21.setTransform(73,44.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAfBjQgXgygFgSQgCgIgdgcIgfgcIAShEQBPBlgBAYQgBAYAYA2g");
	this.shape_22.setTransform(73,44.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#999999").ss(0.6,1,1).p("AB3iQQg1h4hBAAQg9AAg2B4QgxBsgCBfQgBBWAwA8QAwA8BFAAQBDAAAyg8QAxg8ABhWQABhegwhtg");
	this.shape_23.setTransform(53.7,37.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("Ah2DNQgwg9ABhVQAChfAwhsQA3h4A9AAQBBAAA0B4QAxBtgBBeQgBBVgyA9QgyA8hCAAQhGAAgvg8g");
	this.shape_24.setTransform(53.7,37.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#999999").ss(0.6,1,1).p("AB/ibQg4iBhFAAQhDAAg6CBQg1B0gCBmQAABcAzBBQA0BBBKAAQBIAAA1hBQA1hAAChdQABhlg1h1g");
	this.shape_25.setTransform(54.6,36.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("Ah/DcQgzhBAAhcQAChmA1h0QA6iBBDAAQBFAAA4CBQA1B1gBBlQgCBdg1BAQg1BBhIAAQhKAAg0hBg");
	this.shape_26.setTransform(54.6,36.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#999999").ss(0.8,1,1).p("Ag0gbQghAKAAAPQAAANAhAOQAgANAeAAQAfAAAWgLQAWgMAAgPQAAgOgWgLQgWgMgfAAQghAAgdAKg");
	this.shape_27.setTransform(65.2,65.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("Ag0AZQgggOgBgNQABgPAggKQAdgKAhAAQAfAAAWAMQAXALgBAOQABAPgXAMQgWALgfAAQgeAAgggNg");
	this.shape_28.setTransform(65.2,65.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#999999").ss(0.8,1,1).p("AgzgbQghAKAAAPQAAANAhANQAfAOAeAAQAfAAAWgMQAWgLAAgPQAAgPgWgLQgWgLgfAAQggAAgdAKg");
	this.shape_29.setTransform(64.4,65.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgzAYQghgNAAgNQAAgPAhgKQAdgKAgAAQAfAAAWALQAWALAAAPQAAAPgWALQgWAMgfAAQgeAAgfgOg");
	this.shape_30.setTransform(64.4,65.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#999999").ss(0.8,1,1).p("ABVgDQAAAPghANQgfANgeAAQgfAAgWgLQgXgMAAgPQAAgPAXgLQAWgLAfAAQAgAAAdAJQAhALAAAOg");
	this.shape_31.setTransform(43.2,65.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("Ag+AaQgWgLgBgPQABgOAWgMQAWgLAfAAQAgAAAeAJQAgALABAOQgBAOggANQggAOgeAAQgfAAgWgMg");
	this.shape_32.setTransform(43.2,65.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#999999").ss(0.8,1,1).p("ABVgDQAAAPghANQgfANgeAAQgfAAgWgLQgWgMAAgPQAAgPAWgLQAVgLAgAAQAgAAAdAKQAhAKAAAOg");
	this.shape_33.setTransform(44,65.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("Ag+AbQgWgMAAgPQAAgOAWgLQAVgMAgAAQAgAAAdAKQAhAJAAAPQAAAPghANQgfANgeAAQgfAAgWgLg");
	this.shape_34.setTransform(44,65.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#999999").ss(0.6,1,1).p("AAYgoIgFAJQAGAPACARIAAAFIAFAEIgBACIgGAjIgBgCQgDAHgFACQgPADgDgwIAAgVQgVAKgGgLQgCgEABgDIABgCQADgLAPgLQAPgKALACQAFAAACAFQACACAAAFg");
	this.shape_35.setTransform(61,35);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgCAJIAAgVQgVAKgGgLQgCgEABgDIABgCQADgLAPgLQAPgKALACQAFAAACAFQACACAAAFIgFAJQAGAPACARIAAAFIAFAEIgBACIgGAjIgBgCQgDAHgFACIgCAAQgNAAgDgtg");
	this.shape_36.setTransform(61,35);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#999999").ss(0.6,1,1).p("AgCAtQgLABgDgMQgKgpAHgRIARgUIAFAAQAJABAEAJQAJAXgDAQQgCAYgIAJQgGAHgIAAg");
	this.shape_37.setTransform(57.6,36);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgQAiQgKgpAHgRIARgUIAFAAQAJABAEAJQAJAXgDAQQgCAYgIAJQgGAHgIAAIgBAAQgKAAgDgLg");
	this.shape_38.setTransform(57.6,36);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.6,1,1).p("AAUCKIg0kTIBBETg");
	this.shape_39.setTransform(57.6,25.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AAUCKIg0kTIBBETg");
	this.shape_40.setTransform(57.6,25.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#999999").ss(0.6,1,1).p("AgOg0QgFAAgCAFQgBACAAAFIAEAJQgGAPgCARIAAAFIgFAEIABABIAGAkIACgCQACAHAFABQAPAEADgxQABgJgBgMQAVALAHgLQABgEgBgDIAAgDQgFgMgPgJQgNgKgMACg");
	this.shape_41.setTransform(49.8,33.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgPA1QgFgBgCgHIgCACIgGgkIgBgBIAFgEIAAgFQACgRAGgPIgEgJIABgHQACgFAFAAQAMgCANAKQAPAJAFAMIAAADIAAAHQgHALgVgLQABAMgBAJQgDAugNAAIgCgBg");
	this.shape_42.setTransform(49.8,33.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#999999").ss(0.6,1,1).p("AAEgsQgEgBgDABQgJABgDAKQgJAUACASQAFAbAGAHQAGAHAIAAQALAAADgLQAKgpgHgSg");
	this.shape_43.setTransform(53.2,34.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AADAuQgIAAgGgHQgGgHgFgbQgCgSAJgUQADgKAJgBQADgBAEABIAQAUQAHASgKApQgCALgLAAIgBAAg");
	this.shape_44.setTransform(53.2,34.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(0.6,1,1).p("AAhiJIhBETIAMAAg");
	this.shape_45.setTransform(53.2,24.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AggCKIBBkTIg1ETg");
	this.shape_46.setTransform(53.2,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(14));

	// det_02
	this.instance_2 = new lib.mc_det02_dir();
	this.instance_2.setTransform(24.6,39.2,1,1,0,0,0,18.8,14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.6,-1.5,75.5,71.9);


// stage content:
(lib.mascoteVarinha = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mc_mascote_04();
	this.instance.setTransform(38.8,33,0.9,0.9,0,0,180,37,35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(33.4,32.2,67.2,64.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;