(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.erradoBranco = function() {
	this.initialize();

	// Camada 1
	this.erro_02 = new lib.mc_errado2();
	this.erro_02.setTransform(1,0);

	this.addChild(this.erro_02);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

(lib.cor = function(){
	return cor;
});

// symbols:
(lib.mc_errado2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(lib.cor()).s().p("AgdAYQAFgKALgMQALgLASgOQACAOAEALQADALAFALg");
	this.shape.setTransform(8.5,2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(lib.cor()).s().p("Ag0gFQAAgcAzglQAFAzAiApIAPAQIhBAhQgogsAAggg");
	this.shape_1.setTransform(10.4,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(lib.cor()).s().p("AAfBaIAAAAIhHhLQguguAAglQAAgcAygkQAHAyAhAsIA5A+IAAAAIAJAJIARAPIAABVQgYgMgggfg");
	this.shape_2.setTransform(13.9,13.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(lib.cor()).s().p("ABICJQggAAgzgyIAAAAIhJhMQguguAAglQAAgbAyglQAHAyAjAsIA3A+IAAAAIAJAJQA1AxA1AAQgcA7ggAAIAAAAg");
	this.shape_3.setTransform(18.3,13.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(lib.cor()).s().p("AicBYIAHAAQAqAAAyg+IAJgMIgLgLQguguAAglQAAgcAygkQAHAyAjAsIA4A+IgBAAIAJAJQA1AwA1AAQgcA8ggAAQggAAg1gzIgMgNIgEAHQguBJgjAAQgkAAgjg5g");
	this.shape_4.setTransform(15.8,14.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(lib.cor()).s().p("AicBYIAHAAQAqAAAyg+IAJgMIgLgLQguguAAglQAAgcAygkQAHAyAjAsIALALIAFgJQARgVAPgOIAyAxQgSAQgNASIgMAMIAJAJQA1AwA1AAQgcA8ggAAQggAAg1gzIgMgNIgEAHQguBJgjAAQgkAAgjg5g");
	this.shape_5.setTransform(15.8,14.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(lib.cor()).s().p("AicBYIAHAAQAqAAAyg+IAJgMIgLgLQguguAAglQAAgcAygkQAHAyAjAsIALALIAFgJQA1hDApABQAjgBAQAzIgHAAQgMAAgdASQgcAVgSAZIgMAMIAJAJQA1AwA1AAQgcA8ggAAQggAAg1gzIgMgNIgEAHQguBJgjAAQgkAAgjg5g");
	this.shape_6.setTransform(15.8,14.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;