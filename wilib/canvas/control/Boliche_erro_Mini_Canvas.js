(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 520,
	height: 157,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};

// stage content:
(lib.Boliche_erro_Mini_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
        $('[data-name="bolicheErro"]').remove();
        require(["../wilib/js/lib/edi"],function(edi){
            edi.finalizar();
        })
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgonAMTIAA4kMBRPAAAIAAYkg");
	mask.setTransform(260,78.7);

	// mcPino
	this.instance = new lib.mcPino();
	this.instance.setTransform(381.8,78.8,0.159,0.159,0,0,0,78.8,235.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54));

	// mcPino
	this.instance_1 = new lib.mcPino();
	this.instance_1.setTransform(416.8,87.2,0.159,0.159,0,0,0,78.8,236);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(54));

	// mcPino
	this.instance_2 = new lib.mcPino();
	this.instance_2.setTransform(404.7,68.9,0.159,0.159,0,0,0,78.8,236);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(54));

	// mcPino
	this.instance_3 = new lib.mcPino();
	this.instance_3.setTransform(450.9,94.3,0.159,0.159,0,0,0,78.8,236);

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(54));

	// mcPino
	this.instance_4 = new lib.mcPino();
	this.instance_4.setTransform(437.2,75.1,0.159,0.159,0,0,0,78.8,235.7);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(54));

	// mcPino
	this.instance_5 = new lib.mcPino();
	this.instance_5.setTransform(424.7,56.8,0.159,0.159,0,0,0,78.5,235.7);

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(54));

	// mcPino
	this.instance_6 = new lib.mcPino();
	this.instance_6.setTransform(487.5,95.9,0.159,0.159,0,0,0,78.8,236);

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(54));

	// mcPino
	this.instance_7 = new lib.mcPino();
	this.instance_7.setTransform(471.8,78.8,0.159,0.159,0,0,0,78.8,235.7);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(54));

	// mcPino
	this.instance_8 = new lib.mcPino();
	this.instance_8.setTransform(457.2,61.8,0.159,0.159,0,0,0,78.8,235.7);

	this.instance_8.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(54));

	// mcPino
	this.instance_9 = new lib.mcPino();
	this.instance_9.setTransform(441.8,48.9,0.159,0.159,0,0,0,78.8,236);

	this.instance_9.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(54));

	// mcBolaBoliche
	this.instance_10 = new lib.mcBolaBoliche();
	this.instance_10.setTransform(-26.8,68.8,0.218,0.218,0,0,0,119.6,119.6);

	this.instance_11 = new lib.mcBolaBoliche2();
	this.instance_11.setTransform(529.1,90,0.218,0.218);

	this.instance_10.mask = this.instance_11.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_10}]},9).to({state:[{t:this.instance_10}]},11).to({state:[{t:this.instance_10}]},8).to({state:[{t:this.instance_10}]},20).to({state:[{t:this.instance_11}]},5).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({x:83.2,y:88.8},9).to({x:208.8,y:82.1},11).to({x:300.1,y:65.2},8).to({x:470.1},20).to({_off:true,regX:0,regY:0,x:529.1,y:90},5).wait(1));

	// mcPistaBoliche
	this.instance_12 = new lib.mcPistaBoliche();
	this.instance_12.setTransform(255.6,117.6,0.7,0.7,0,0,0,396.4,38.5);

	this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54));

	// Layer 15
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkDCLIAAkWIIGAAIAAEWg");
	this.shape.setTransform(260,78.7,10,5.621);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(260,78.5,520,157.4);


// symbols:
(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AApkXQgmgjgwACQgzACgjAmQgjAlACAzQACAzAmAjQAlAjAzgCQAxgCAjgmQAjgmgCgzQgCgzgmgigAkTBqQAjgmAzgCQAzgCAmAjQAlAiACAzQACAzgiAmQgjAmgzACQgzABglgiQgmgjgCgzQgCgzAiglgABfAoQgjAlACAzQACAzAmAjQAlAiAzgCQAzgCAjglQAjgmgCgzQgCgzgmgiQglghgzAAQgzACgjAmg");
	this.shape.setTransform(-75.9,-29);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkMEYQglgjgCgzQgDgzAjglQAjgmAzgCQAzgCAmAjQAlAiACAzQACAzgiAmQgjAmg0ACIgEAAQgwAAgkghgABmDWQgmgjgCgzQgCgzAjglQAjgmAygCQA0AAAlAhQAmAiACAzQABAzgiAmQgjAlgzACIgGAAQgvAAgjgggAh9hiQglgjgCgzQgCgzAiglQAjgmA0gCQAwgCAmAjQAmAiABAzQACAzgiAmQgjAmgxACIgFAAQgwAAgkghg");
	this.shape_1.setTransform(-75.9,-29);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(2,1,1).p("AgtyrQDxgJDiBVQDbBTCsCeQCrCgBkDTQBmDaAKD0QAJDyhVDhQhTDbifCsQifCsjTBjQjbBnjzAJQjxAJjihVQjbhTisieQirighkjTQhmjagKj0QgJjyBVjhQBTjbCfisQCfisDThjQDbhnDzgJg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AmlRgQjahTisifQisifhjjTQhnjbgKjzQgJjyBVjhQBTjbCfisQCfirDThkQDbhnDzgJQDxgJDiBVQDaBSCtCfQCrCfBkDUQBmDaAKD0QAJDxhVDiQhTDaieCsQigCsjTBjQjbBnjzAKIguABQjZAAjMhNg");

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-120.7,-120.7,241.5,241.4);


(lib.mcPistaBoliche = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("EA8DAEsMh4FAAAEA6WADIMh0rAAAEA4wABpMhxfAAAEA3PAAPMhudAAAEA1ygBEMhrkAAAEA0bgCVMho1AAAEAzIgDiMhmPAAAEAx5gErMhjxAAA");
	this.shape.setTransform(396.4,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#682600").ss(1,1,1).p("EA98AGAMh73AAAINBr/MBh1AAAg");
	this.shape_1.setTransform(396.4,38.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E1781C").s().p("AnjDaICzAZIjgAbgAizB7ICwAYIjYAagAA+AhICtAXIjQAYgAFmgnICrAXIjJAUgACxh2IClAWIjGAVgABMjDIChAUIjCAVgAg5kNICaATIi8AUg");
	this.shape_2.setTransform(143.7,35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3EEC5").s().p("Eg96AGAINAr/MBh1AAAINAL/gEA8DAEZMh4FAAAgEgvvADsIDggbIizgZgEA6WAC1Mh0rAAAgEgq6ACLIDYgaIiwgYgEA4wABWMhxeAAAgEgnCAAuIDQgYIitgWgEA3PgACMhucAAAgEgiVgAcIDJgWIirgXgEA1zgBXMhrkAAAgEglNgBtIDGgVIilgWgEA0bgCoMho1AAAgEgmygC8IDCgVIihgUgEAzIgD1MhmPAAAgEgo6gEIIC+gUIicgTgEAx5gE+MhjxAAAg");
	this.shape_3.setTransform(396.4,38.4);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,794.8,78.9);


(lib.mcPino = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(204,204,204,0.451)").s().p("EgDFAiXQhIhaBEhyQARgbAQggQDrm9BqoDQAOhDgHhHQgdkkh0kBQh+kchCk3QgIgkAegOIAVgJQBYBgAzCeQA8C1BMCtQCuGPgzHJQgDAigLAhQiuI2kOHUQgFAIgFAAQgGAAgHgJgAj5wcQgijIBKivQAbg/AChOQAGjPgxivQgJgcgRgZQhdiABghMQA0AOAEBFIAAAHQCLCrgcESQgMB0gLB0QgLB8gxBqQAYCZhXAbIgGABQgOAAgEgXg");
	this.shape.setTransform(118.8,231.7);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AH5h2QkYBEkAAAQjqAAjvg8QArBkAnBRQDdAwClAAQCeAAEtg2QAvhjAjhUg");
	this.shape_1.setTransform(78.9,436.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D90000").s().p("AmmBHQgnhRgrhkQDvA8DqAAQEAAAEYhEQgjBUgvBjQkuA2idAAQilAAjdgwg");
	this.shape_2.setTransform(78.9,436.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("AkmBXQB4AGB+AAQClAACwgLQgFgmABgnQABgrAFg2QipALiuAAQh+AAh4gGQAEA+ABAeQABAlgGAtg");
	this.shape_3.setTransform(78.7,155.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D90000").s().p("AklBXQAFgtgBglQAAgegEg+QB3AGB+AAQCuAACogLQgEA2gBArQAAAnAEAmQivALimAAQh+AAh3gGg");
	this.shape_4.setTransform(78.7,155.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("EgARgkxQiEAVhgBfQibCZgKExQgFCHA7FBQA/FaAEC4QADB6g+CVQgdBGh0DbQhsDMg5CTQhVDhgfDsQg7G7DyKNQBLDMBnDYQAzBtAtBZQBrBADMAAQDLABB5hBQAshZA0htQBmjYBMjMQDxqNg6m7QgfjshVjhQg5iThsjMQh1jbgdhGQg+iVADh6QAFi4A/laQA7lBgFiHQgLkxiaiZQhhhfiEgVIAAgEIgRACIgRgCg");
	this.shape_5.setTransform(78.7,235.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("EgAGAk1QjMAAhrhAQgthZgzhtQhnjYhLjMQjyqNA7m7QAfjsBVjhQA5iTBsjMQB0jbAdhGQA+iVgDh5QgEi5g/laQg7lAAFiIQAKkxCbiZQBghfCEgVIAAgEIARACIARgCIAAAEQCEAVBhBfQCaCZALExQAFCIg7FAQg/FagFC5QgDB5A+CVQAdBGB1DbQBsDMA5CTQBVDhAfDsQA6G7jxKNQhMDMhmDYQg0BtgsBZQh4BBjJAAIgDgBg");
	this.shape_6.setTransform(78.7,235.8);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,159.4,473.6);


(lib.mcBolaBoliche2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.451)").s().p("ADmCNIAfgJIAegHQBmALAUBfIAEAPQgCApgYAjQgQAXgYARQkagFChjYgAiUClQgyAJg2gjQizhzARh0QgRh0Cvh2QAqgdAsgGQAbAKAZALIAIgBQD2BcgJCLQAHBpiVCEQgxAsg1gEIgLAAQgKAAgKgCg");
	this.shape.setTransform(178.3,59.4);

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(119.7,119.7);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,241.5,241.4);


(lib.mcBolaBoliche = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.451)").s().p("ADmCNIAfgJIAegHQBmALAUBfIAEAPQgCApgYAjQgQAXgYARQkagFChjYgAiUClQgyAJg2gjQizhzARh0QgRh0Cvh2QAqgdAsgGQAbAKAZALIAIgBQD2BcgJCLQAHBpiVCEQgxAsg1gEIgLAAQgKAAgKgCg");
	this.shape.setTransform(178.3,59.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(9));

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(119.7,119.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90},2).to({rotation:180},2).to({rotation:270},2).to({rotation:360},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,241.5,241.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;