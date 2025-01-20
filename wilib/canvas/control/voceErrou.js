(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 89,
	height: 82,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.gr_x = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.349)").s().p("AhPA/Qg2g5AAgmQAAgTAEgGQAGgKAcgWQAHA5ArA2IAMANIAIgLQA8hNAyAAQAUAAAPAPQAOAOAAAPQghgVg5AnQgxAmgJANIgUAdg");
	this.shape.setTransform(29.8,14.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DB0000").ss(1,1,1).p("AA9AYQA9A6BAAAQgiBGgnAAQghAAhBg7IgPgQIgGAIQg6BXgkAAQgrAAgphFIAIAAQAwAAA8hKIAKgMIgNgOQg2g4AAgoQAAghA7gtQAIA4ArA4IALAOIAHgMQA+hPAyAAQAnAAAVA8IgJgBQgRAAghAYQggAYgWAdIgLAOg");
	this.shape_1.setTransform(26.8,21.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FF0000","#ED1C24"],[0,1],0,18.6,0,-18.6).s().p("Ai5BnIAJAAQAwAAA8hKIAKgMIgNgOQg2g4AAgoQgBghA8gtQAIA4ArA4IALAOIAGgMQA/hPAyAAQAnAAAUA8IgIgBQgSAAggAYQghAYgVAdIgMAOIALAKQA9A6A/AAQghBGgnAAQgiAAhBg7IgOgQIgGAIQg6BXglAAQgrAAgphFg");
	this.shape_2.setTransform(26.8,21.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhjDIQgcAAgagWQgYgUgWglIgUghIAtADQAmABA2hCIgBgCQg8g9AAgwQABgrBCgzIAbgUIAFAhQAHAwAjAwQA9hMA6gCQAcAAAVAVQASATAMAiIAKAeIgmgFQgKgBgcAVQgeAXgUAZIgBABQA1AyA4AAIAgAAIgOAdQgUAngUATQgYAYgbgBQgqgBhGhAQgYAmgWAUQgcAbgbAAg");
	this.shape_3.setTransform(26.6,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AifC+QgYgVgYgnIgdgxIA/AEIABAAQAeABAwg4Qg5g8gCg0QACgvBGg2IApgeIAHAxQAGAqAbAoQA7hGA7gCIABAAQAfAAAYAYQATAUANAkIAPAuIg1gHIgCABIgHADQgNAHgJAHQgZARgSAXQAuApAwAAIAxAAIgWArQgTAogWAVQgZAYgcACIAAABIgFgBQgsgChCg6QgVAggUASQghAegeAAQghAAgcgYg");
	this.shape_4.setTransform(27,22);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3.2,0.5,47.5,43);


(lib.gr_txt_errou = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Você errou!", "italic bold 14px 'Trebuchet MS'");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(38.3,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,0,81.6,20.3);


(lib.mc_erro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_19 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(19).call(this.frame_19).wait(1));

	// x
	this.instance = new lib.gr_x("synched",0);
	this.instance.setTransform(40.6,24.2,0.203,0.203,120,0,0,26.6,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:26.4,regY:23.9,scaleX:0.35,scaleY:0.35,rotation:195},7).to({regX:26.5,regY:24,scaleX:1.39,scaleY:1.39,rotation:270,x:40.7,y:24},6).to({scaleX:1,scaleY:1,rotation:360},6).wait(1));

	// txt
	this.instance_1 = new lib.gr_txt_errou("synched",0);
	this.instance_1.setTransform(40.3,60,0.218,0.218,0,0,0,40.1,10.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({regX:40.2,scaleX:1.06,scaleY:1.06},6,cjs.Ease.get(1)).to({regX:40.3,scaleX:1,scaleY:1},6,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36,19.2,9.6,10.2);


// stage content:



(lib.voceErrou = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mc_erro();
	this.instance.setTransform(45.2,34.3,1,1,0,0,0,40.8,24.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(83.5,69,12.4,12.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;