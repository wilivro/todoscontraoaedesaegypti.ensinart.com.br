(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 105,
	height: 107,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.gr_txt_visto = function() {
	this.initialize();

	// Layer 1
	this.text = new cjs.Text("Muito bem,\nvocê acertou!", "italic bold 12px 'Trebuchet MS'", "#000");
	this.text.textAlign = "center";
	this.text.lineHeight = 12;
	this.text.setTransform(45.8,0);

	this.addChild(this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(6.9,0,81.9,34);


(lib.mc_Visto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_3 = new cjs.Graphics().p("AAcBCQgOgRgNgFQgWgIgFgYIgBgKQAAgQAMgNQAUgYAXgOIAACEIAAgBg");
	var mask_graphics_4 = new cjs.Graphics().p("AgYBKQgNgRgOgFQgXgIgGgYIgBgKQAAgQAMgNQA6g8A3gCQAUABASAKIhkCYIgGgIg");
	var mask_graphics_5 = new cjs.Graphics().p("Ag1AqQgNgRgOgFQgXgIgGgWIgBgKQAAgSAMgNQA6g8A3gCQAmABAeAmQAMAOAJAQIAHASIh9CMQgXg0gQgUg");
	var mask_graphics_6 = new cjs.Graphics().p("AgMB8IgLgbQgYg3gRgWQgNgQgOgEQgXgHgGgYIgBgLQAAgRAMgNQA6g8A3gCQAmABAeAlQAMAOAJARIAdBJIiBB/IgFgLg");
	var mask_graphics_7 = new cjs.Graphics().p("AABCnIAAgCQgKgIgFgRQgFgRgRgoIgLgbQgYg3gRgUQgNgQgOgFQgXgIgGgYIAAgLQgBgRAMgNQA6g8A5gCQAkABAfAlQALAOAKARIAMgSIA/DcQgEAFgGAEIgeAVQglAZgKAKQgHAHgIADIAAACIgMABIgCACg");
	var mask_graphics_8 = new cjs.Graphics().p("AhGC5IAAgCQgMgIgFgRQgFgRgRgpIgLgbQgYg2gRgUQgNgRgOgEQgXgIgGgYIAAgLQgBgSAMgNQA6g8A5gBQAmABAfAlQALAOAKARQAjg2AsgzICNBLQhcB3gxBoQgGALgKAHIgeAVQgjAZgKAKQgHAHgIADIAAACIgMAAIgCADg");
	var mask_graphics_9 = new cjs.Graphics().p("AhzDkIAAgCQgNgIgEgRQgFgRgRgpIgMgbQgYg2gQgWQgOgRgNgEQgYgIgFgWIgBgLQAAgSAMgNQA5g8A6gBQAmABAeAlQALAOAKARQA8hZBPhQIAWgWICWAxQgjAnglAwQhpCFg3BzQgFALgKAHIgdAVQgkAZgLAKQgGAHgJADIAAACIgMAAIgBADg");
	var mask_graphics_10 = new cjs.Graphics().p("AigEZIABgCQgNgIgFgRQgFgRgQgpIgMgbQgYg2gQgWQgOgRgNgEQgYgIgFgYIgBgLQAAgSAMgLQA5g8A6gBQAmABAeAlQALAOAKAPQA+hXBNhQQBKhLBJg1IBxBEQhKA/hWBvQhqCFg0BzQgFALgLAHIgeAVQgkAZgLAKQgHAHgIADIAAACIgMAAIgBADg");
	var mask_graphics_11 = new cjs.Graphics().p("Ai3E1IABgCQgNgIgFgRQgFgRgQgoIgMgbQgYg3gQgWQgOgQgNgFQgYgIgFgYIgBgLQAAgRAMgNQA5g6A6gCQAmABAeAjQALAOAKARQA+hWBNhRQByhzBvhAQAKgFAMAAQAXAAAOATIAOAVQAIALAAAPQAAAVgSAPQhVA/hnCFQhqCGg0ByQgFAMgLAGIgeAVQgkAZgLAKQgHAHgIADIAAACIgMABIgBACg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(3).to({graphics:mask_graphics_3,x:28,y:36.9}).wait(1).to({graphics:mask_graphics_4,x:33.3,y:36.1}).wait(1).to({graphics:mask_graphics_5,x:36.2,y:39.3}).wait(1).to({graphics:mask_graphics_6,x:37.3,y:41.4}).wait(1).to({graphics:mask_graphics_7,x:39.7,y:45.5}).wait(1).to({graphics:mask_graphics_8,x:47,y:43.7}).wait(1).to({graphics:mask_graphics_9,x:51.6,y:39.4}).wait(1).to({graphics:mask_graphics_10,x:56,y:34.1}).wait(1).to({graphics:mask_graphics_11,x:58.3,y:31.3}).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.498)").s().p("Aj7BIQAUgKAIgKQAfgBAoBXIAMAdQBIh5BqhqQBthvBpg8QgqAdhIBJQiPCOiWDbQgkiMg8gUg");
	this.shape.setTransform(59.9,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B5D1A2","#6CD625"],[0,1],-11.2,32.1,37.6,-16.7).s().p("Ai0DQIgMgbQgZg7gVgbQgUgbgbgKQAsguAlAAQAgAAAnBWIANAdQBIh5BqhqQBthvBpg8IAOAVQhYBChtCLQhrCJg4B4IgfAVQgmAagNANQgIgZgQgng");
	this.shape_1.setTransform(57.9,30.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#568933").ss(1,1,1).p("AEej6QhYBChtCLQhrCJg4B4IgfAVQgmAagNANQgIgZgQgnIgMgbQgZg7gVgaQgUgbgbgKQAsgvAlAAQAgAAAnBWIANAdQBIh4BqhrQBthvBpg8g");
	this.shape_2.setTransform(57.9,30.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiiEjQgLgDgDgLQgEgNgTgwIgLgbQgZg4gTgZQgSgXgUgHQgLgDgCgLQgDgLAHgIQAzgzAuAAQAZAAAYAbQASAWATAqQBDhlBehiQBuhwBsg+QARgIAKAOIAOAUQALAQgPAMQhXBBhqCIQhpCHg5B3QgCAFgEADIgfAUQgiAYgPAOQgGAFgIAAg");
	this.shape_3.setTransform(58,30.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AilEsQgQgEgEgQQgHgWgQgmIgLgbQgYg2gSgZQgRgVgRgGQgQgFgEgQIAAgIQAAgMAIgIQA1g2AzAAQAeAAAaAeQAQATAPAfQBAheBYhbQBvhyBug+QAIgEAHAAQAQAAAIANIAPAVQAFAHAAAKQAAAPgMAIQhVBBhqCIQhqCFg2B2QgDAHgHAEIgfAVQgiAYgOAMQgJAJgLgBIgBABIgIgCg");
	this.shape_4.setTransform(58.9,31.3);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},3).wait(9));

	// Layer 2
	this.instance = new lib.gr_txt_visto("synched",0);
	this.instance.setTransform(47.8,86.4,0.273,0.273,0,0,0,47.9,19.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:47.8,scaleX:1.25,scaleY:1.25,y:86.5},7,cjs.Ease.get(-1)).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.6,81.2,22.4,9.3);


// stage content:



(lib.muitoBem = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.mc_Visto();
	this.instance.setTransform(52.6,87.1,1,1,0,0,0,47.8,86.4);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(93.9,135.4,22.4,9.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;