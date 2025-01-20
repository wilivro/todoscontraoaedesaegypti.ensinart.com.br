(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 80,
	height: 90,
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


(lib.gr_esq = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AgTgpQgKAEgLAUQgKARABAQQAAAHAEADQADADADgBQADAAAHgFQAMAIARAFIAEAAIAEAHIACAAIAigFIgCgDQAHgCABgIQAFgTgugHQgJgDgLAAQALgbgKgJQgCgCgEAAg");
	this.shape.setTransform(13,6.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAIArIgEgHIgEgBQgRgEgMgIQgHAEgDAAQgDACgDgDQgEgDAAgHQgBgPAKgSQALgUAKgEIADgBQAEAAACACQAKAJgLAbQALABAJACQAuAHgFAUQgBAGgHADIACACIgiAGg");
	this.shape_1.setTransform(13,6.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AgrAAQgFgKAEgPQADgQANABQAOACATAIQAWAJAGAHQAIAKAGAVQAAAWgSABQgZACgQgMQgZgRgGgNg");
	this.shape_2.setTransform(13.4,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgMAeQgZgRgGgNQgFgKAEgPQADgQANABQAOACATAIQAWAJAGAHQAIAKAGAVQAAAWgSABIgHABQgVAAgNgLg");
	this.shape_3.setTransform(13.4,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("AgwBoQBdhQgBgdQAAgTAOgpIAOgmIghACIghBXQgEAPhJAg");
	this.shape_4.setTransform(7.2,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhHAhQBJghAEgOIAhhXIAhgCIgOAmQgOAqAAASQABAdhdBQg");
	this.shape_5.setTransform(7.2,19.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,20.2,32);


(lib.gr_dir = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AAUgpQALAFAKATQAKARAAAPQgBAHgEAEQgCACgEAAQgDgBgGgEQgNAIgSAEIgDABIgEAGIgkgEIACgDQgHgDgBgGQgFgTAugJQAIgBAMgBQgLgbAKgJQADgCADABg");
	this.shape.setTransform(5.1,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgrAmIACgDQgHgDgBgGQgFgTAugJIAUgCQgLgbAKgJQADgCADABIADAAQALAFAKATQAKARAAAPQgBAHgEAEQgCACgEAAQgDgBgGgEQgNAIgSAEIgDABIgEAGg");
	this.shape_1.setTransform(5.1,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#999999").ss(1,1,1).p("AgcAoQAZACAQgNQAYgQAHgNQAFgLgEgOQgEgQgMABQgPACgSAIQgWAJgGAHQgIAJgGAWQAAAWASABg");
	this.shape_2.setTransform(4.7,4.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAoQgSgBAAgWQAGgWAIgJQAGgHAWgJQASgIAPgCQAMgBAEAQQAEAOgFALQgHANgYAQQgOAMgWAAIgFgBg");
	this.shape_3.setTransform(4.7,4.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#999999").ss(1,1,1).p("AAxBoQhdhQABgdQAAgSgNgqIgPgmIAhACIAhBXQAEAOBJAh");
	this.shape_4.setTransform(10.9,19.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsgFQABgSgNgqIgPgmIAhACIAhBXQAEAOBJAhIgXBHQhdhQAAgdg");
	this.shape_5.setTransform(10.9,19.5);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,20.2,32);


(lib.gr_det = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0057").s().p("AgMAfIAKg9IAPA9g");
	this.shape.setTransform(1.4,3.2);

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


(lib.mc_esq = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gr_esq("synched",0);
	this.instance.setTransform(0.8,22.6,1,1,-15,0,0,0.7,22.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.8,rotation:15},14).to({regX:0.7,rotation:-15},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-2.8,16,33.2);


(lib.mc_dir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gr_dir("synched",0);
	this.instance.setTransform(17.8,25.7,1,1,15,0,0,17.8,25.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.7,regY:25.6,scaleX:1,scaleY:1,rotation:-7.8,x:17.7},14).to({regX:17.8,regY:25.7,scaleX:1,scaleY:1,rotation:15,x:17.8},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.9,-2.9,16,33.2);


(lib.mc_detalhes = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.gr_det("synched",0);
	this.instance.setTransform(0.8,0.1,0.999,0.999,-5.2,0,0,0.8,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:1.4,regY:3.2,rotation:-3,x:1.6,y:3.2},0).wait(1).to({rotation:-1,x:1.5},0).wait(1).to({rotation:0.8},0).wait(1).to({rotation:2.5,x:1.4,y:3.3},0).wait(1).to({rotation:4},0).wait(1).to({rotation:5.4,x:1.3},0).wait(1).to({rotation:6.6},0).wait(1).to({rotation:7.6},0).wait(1).to({rotation:8.5},0).wait(1).to({rotation:9.2,x:1.2},0).wait(1).to({rotation:9.8},0).wait(1).to({rotation:10.2},0).wait(1).to({rotation:10.4},0).wait(1).to({regX:1.2,regY:0,rotation:10.5,y:0.1},0).wait(1).to({regX:1.4,regY:3.2,rotation:8.4,x:1,y:3.3},0).wait(1).to({rotation:6.4},0).wait(1).to({rotation:4.5,x:1.1},0).wait(1).to({rotation:2.8},0).wait(1).to({rotation:1.2,x:1.2},0).wait(1).to({rotation:-0.2},0).wait(1).to({rotation:-1.4,x:1.3,y:3.2},0).wait(1).to({rotation:-2.6,y:3.3},0).wait(1).to({rotation:-3.5,x:1.4,y:3.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-4.3},0).wait(1).to({rotation:-5,y:3.3},0).wait(1).to({rotation:-5.5,y:3.2},0).wait(1).to({rotation:-5.9,x:1.5},0).wait(1).to({rotation:-6.1},0).wait(1).to({regX:0.8,regY:0.1,rotation:-6.2,x:0.8,y:0.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0,2.7,6.4);


(lib.mc_mascote_05 = function(mode,startPosition,loop) {
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

	// esq
	this.instance_2 = new lib.mc_esq();
	this.instance_2.setTransform(72.5,29.8,1,1,0,0,0,9.1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(14));

	// mascote
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgIACIAPgEIADAFg");
	this.shape.setTransform(57.3,9.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADgFIAGAFIgRAGg");
	this.shape_1.setTransform(56.6,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGgDIAGgEIAHAPg");
	this.shape_2.setTransform(51.4,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDgHIAFgBIACARg");
	this.shape_3.setTransform(52.6,6.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCgJIAFADIgEAQg");
	this.shape_4.setTransform(54.8,6.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgDAeQgRgFAAgYIABgBIANAFIgDAEIgGgDQADAPAJADQAEACAFgDQAHgEACgJQACgJgDgKQgDgOgGgBQgDgCgGAGQgGAGgEAHIAAABIgDgBIABgBQAIgPAHgFQAEgEAEACQAIADAEAQQADAMgCAMQgCAKgIAFQgFADgFAAIgDgBg");
	this.shape_5.setTransform(53.8,11.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#999999").ss(1,1,1).p("ABjgRQgKAKgSAHQglASgnAAQhDAAgagW");
	this.shape_6.setTransform(52.5,34.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhigFIDFgMQgKAJgSAIQglASgnAAQhDAAgagXg");
	this.shape_7.setTransform(52.5,34.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#999999").ss(1,1,1).p("AALAAQgBAAgDgCQgEgEgFACQgEACgDADQgBACAAAC");
	this.shape_8.setTransform(41.7,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgIABQACgDAEgCQAFgCAEAEIAEACIgUAFIABgEg");
	this.shape_9.setTransform(41.7,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#999999").ss(1,1,1).p("AANALQAGgMgPgHQgFgDgHADIgFAE");
	this.shape_10.setTransform(64.2,29.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgNgEIAFgEQAHgDAFADQAPAHgGALg");
	this.shape_11.setTransform(64.2,29.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(1,1,1).p("AgJA1QAmAAAbgZQAZgWAeg6Qg7AghBAAQhCAAgfgMQALAnATATQAYAbAvAAg");
	this.shape_12.setTransform(53,34.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhQAaQgTgTgLgnQAfAMBCAAQBBAAA7ggQgeA6gZAWQgbAZgmAAQgvAAgYgbg");
	this.shape_13.setTransform(53,34.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgSgIIAoAOIgrACg");
	this.shape_14.setTransform(47.4,17.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgYgIIAxABIguAQg");
	this.shape_15.setTransform(48.9,18.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgWAAIAugHIgHAPg");
	this.shape_16.setTransform(58.8,18.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgHAFIACgJIANAAIgCAJg");
	this.shape_17.setTransform(51.8,24.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.7,1,1).p("AgeAaQAKALAPAAQAOAAANgLQANgLACgPQADgOgKgLQgJgLgPAAQgOAAgNALQgNALgCAOQgDAPAJALg");
	this.shape_18.setTransform(56.7,24.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgeAaQgJgLADgPQACgOANgLQANgLAOAAQAPAAAJALQAKALgDAOQgCAPgNALQgNALgOAAQgPAAgKgLg");
	this.shape_19.setTransform(56.7,24.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(0.6,1,1).p("AgyAbIBlgcIgLgZIhaAig");
	this.shape_20.setTransform(65.4,21.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgyAIIBagiIALAZIhlAcg");
	this.shape_21.setTransform(65.4,21.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0D0057").s().p("AjEgaIDBgSICDAYIBFBBg");
	this.shape_22.setTransform(53.9,4.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0D0057").s().p("AgNBIQgiAAgWgKQgWgKACgOIAAgBIAShsIChAAIgSBsIAAABQgCAOgZAKQgaAKgfAAIgBAAg");
	this.shape_23.setTransform(55.9,9.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.7,1,1).p("AAGglQgOAAgNAMQgNALgCAOQgDAPAJALQAKALAPAAQAOAAANgLQANgLACgPQADgOgJgLQgKgMgPAAg");
	this.shape_24.setTransform(47.2,24.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgeAbQgJgMADgPQACgOANgLQANgMAOABQAPgBAKAMQAJALgDAOQgCAPgNAMQgNALgOgBQgPABgKgLg");
	this.shape_25.setTransform(47.2,24.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#999999").ss(0.6,1,1).p("AhuiKQgwBngBBcQgBBSAuA6QAvA6BCAAQBBAAAvg6QAwg6ABhSQABhbgvhoQgzh0g+AAQg7AAg0B0g");
	this.shape_26.setTransform(53.9,36.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AhyDFQgug6ABhTQABhbAwhoQA0hzA7AAQA+AAAzBzQAvBpgBBaQgBBTgwA6QgvA6hBAAQhCAAgvg6g");
	this.shape_27.setTransform(53.9,36.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#999999").ss(0.6,1,1).p("Ah3iVQgzBwgBBjQgBBYAyA+QAxA/BIAAQBGAAAzg/QAzg+ABhZQAChhgzhxQg3h9hCABQhAAAg5B8g");
	this.shape_28.setTransform(54.8,36.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("Ah7DUQgyg+AChZQABhiAzhxQA4h7BAAAQBDgBA3B8QAzBygCBhQgCBZgzA+QgzA/hFAAQhIAAgyg/g");
	this.shape_29.setTransform(54.8,36.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#999999").ss(0.8,1,1).p("AgyAYQAfANAdAAQAeAAAVgLQAVgLAAgPQAAgOgVgLQgVgLgeAAQgfAAgdAJQgfALAAAOQAAANAfANg");
	this.shape_30.setTransform(64.9,63.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgyAYQgfgNAAgNQAAgOAfgLQAdgJAfAAQAeAAAVALQAVALAAAOQAAAPgVALQgVALgeAAQgdAAgfgNg");
	this.shape_31.setTransform(64.9,63.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#999999").ss(0.8,1,1).p("AgxAYQAeAMAdAAQAeAAAVgKQAVgLAAgPQAAgOgVgLQgVgKgeAAQgfAAgcAJQggAKAAAOQAAANAgANg");
	this.shape_32.setTransform(64.2,63.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgxAYQgggNAAgNQAAgOAggKQAcgJAfAAQAeAAAVAKQAVALAAAOQAAAPgVALQgVAKgeAAQgdAAgegMg");
	this.shape_33.setTransform(64.2,63.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#999999").ss(0.8,1,1).p("AhRAAQAAgOAVgLQAVgLAeAAQAfAAAdAJQAfAKAAAPQAAANgfANQgfANgdAAQgeAAgVgLQgVgLAAgPg");
	this.shape_34.setTransform(43.8,63.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("Ag8AaQgVgLAAgPQAAgNAVgLQAVgLAeAAQAfAAAdAJQAfAJAAAPQAAANgfANQgfANgdAAQgeAAgVgLg");
	this.shape_35.setTransform(43.8,63.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#999999").ss(0.8,1,1).p("AhRAAQAAgOAVgLQAVgKAeAAQAfAAAdAIQAfALAAAOQAAANgfANQgfAMgdAAQgeAAgVgKQgVgLAAgPg");
	this.shape_36.setTransform(44.5,64);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Ag8AaQgVgLAAgPQAAgOAVgLQAVgKAeAAQAfAAAcAIQAgALAAAOQAAANggANQgeAMgdAAQgdAAgWgKg");
	this.shape_37.setTransform(44.5,64);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(14));

	// dir
	this.instance_3 = new lib.mc_dir();
	this.instance_3.setTransform(36.3,28.5,1,1,0,0,0,9.1,15);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.6,-0.4,50.4,69.2);


// stage content:
(lib.mascotecomemorando = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mc_mascote_05();
	this.instance.setTransform(62.4,46,1.296,1.296,0,0,180,37.1,35);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(46.9,45,65.2,88.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;