(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.certoBranco = function() {
	this.initialize();

	// Camada 1
	this.certo_03 = new lib.mc_visto2();
	this.certo_03.setTransform(1,0);

	this.addChild(this.certo_03);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

(lib.cor = function(){
	return cor;
});

// symbols:
(lib.mc_visto2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,false,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f(lib.cor()).s().p("AgOAAQAOgPAPgIIAAAvQgLgQgSgIg");
	this.shape.setTransform(1.6,23.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f(lib.cor()).s().p("AgWAGQgLgQgWgIQAeghAbAAQAWAAAdA7IADAJIg1AjQgPgigKgMg");
	this.shape_1.setTransform(5.7,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f(lib.cor()).s().p("AgDAcQgWgugNgQQgLgRgWgJQAeghAdAAQAUAAAdA9IAjBXIg1Ang");
	this.shape_2.setTransform(7.3,30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f(lib.cor()).s().p("AgVAcQgWgugNgQQgLgRgWgJQAfghAcAAQAWAAAbA9IAJAWIAeguIAgA1QgQAagNAbIg8Asg");
	this.shape_3.setTransform(9.1,30.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f(lib.cor()).s().p("AhBAwQgWgwgNgOQgLgRgWgJQAeghAdAAQAWAAAdA+IAIATQAqhDAvg2IA8AAQhNBjgpBUIg5Asg");
	this.shape_4.setTransform(13.5,28.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f(lib.cor()).s().p("AhmBbQgWgwgNgQQgLgRgWgJQAegfAdAAQAWAAAdA8IAIAVQA8hhBGhEQAXgWAWgUIAwAAQghAkglAuQhQBjgoBYIg7Asg");
	this.shape_5.setTransform(17.2,23.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f(lib.cor()).s().p("AiKCEQgWgxgNgPQgLgSgWgJQAeghAdAAQAWAAAdA+IAIAWQA+hhBEhEQBNhQBNgsIALANQg/AzhQBjQhNBjgqBYIg7Asg");
	this.shape_6.setTransform(20.8,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;