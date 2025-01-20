(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 196,
	height: 149,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#C4C4C4"],[0.659,1],0,14.7,0,0,14.7,41.9).s().p("AACEPQhQABg7hQQg6hQAAhwQABhvA5hPQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABIQAABrgxBRIAAABIgFAFIgMAQQg2A/hJAAIgBAAg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.6,-27.1,39.3,54.3);


(lib.lupa = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.29)").s().p("AACEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	this.shape.setTransform(25,30.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgvDaIADnAQADAEAKADIAEACQAJACANABIAGABQATgBAOgFQALgCADgFIAAHAQghANgWAAQgYAAgQgNg");
	this.shape_1.setTransform(22.2,89.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#666666","#FFFFFF","#999999","#D5D5D5"],[0,0.247,0.678,0.988],0,-3.7,0,3.9).s().p("AgGAmQgNgCgJgCIgEgCQgLgCgDgFIABAAQAXgeACggQAKACAKgBQALAAAPAEQgFAcAaAdQgEAFgKACQgOAFgTABIgGAAg");
	this.shape_2.setTransform(22.4,64.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#996600","#FFFFFF","#CC9900","#FFFFCC"],[0,0.247,0.678,0.988],-37.7,-21.3,4.4,-21.3).s().p("AAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(37.8,51.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#666666","#FFFFFF","#999999","#D5D5D5"],[0,0.247,0.678,0.988],-39,18,3.2,18).s().p("AAAgFQgOgUgQgPIAHgIIANARIANAXQARAaALAfQgNgegSgYg");
	this.shape_4.setTransform(39.1,12.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#666666","#FFFFFF","#999999","#D5D5D5"],[0,0.247,0.678,0.988],-17.8,12.2,24.1,-12).s().p("AAgEsQgKABgKgCQhNgJg5hOQhChYAAh8QAAh+BChXQBAhaBaAAQBTABA9BIIgHAIQgwgtg+AAQhQAAg6BQQg6BPgBBuQAABxA7BPQA6BQBQgBQBJABA3hAIACACQg4BLhJARQgPgEgNAAg");
	this.shape_5.setTransform(19,30.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#666666","#FFFFFF","#999999","#D5D5D5"],[0,0.247,0.678,0.988],-5.3,0.1,-21.7,16.5).s().p("AheEPQADgHAAgHIAAgDQAvgMAng2IAKgSQArhFAHhgQAIhsgshQQgkhGg5gNQAIgGAEgJIACgLIALACQA/ANArBQQAwBZgIB4QgHBagiBEQgMAYgQAWQg3BNhGAAQAGgJgDgNg");
	this.shape_6.setTransform(25.7,30.9,1,1,0,0,0,-7.9,-0.1);

	this.addChild(this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,44.7,113.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(16.5,26.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({startPosition:0},0).to({x:176.5},46,cjs.Ease.get(1)).to({x:16.5},48,cjs.Ease.get(1)).to({startPosition:0},2,cjs.Ease.get(1)).wait(39));

	// Layer 2
	this.text = new cjs.Text("Curiosidade", "italic 14px 'Trebuchet MS'", "#BFBFBF");
	this.text.textAlign = "center";
	this.text.lineHeight = 16;
	this.text.setTransform(89.1,23);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(154));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-0.6,132.5,54.3);


(lib.imagemlupa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.lupa();
	this.instance.setTransform(-11.9,85.8,0.693,0.617,0,-50.2,-7.6,22.3,56.3);
	this.instance.alpha = 0.25;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({x:141.7},45,cjs.Ease.get(1)).to({x:148.5},1,cjs.Ease.get(1)).to({x:-11.9},48,cjs.Ease.get(1)).to({x:-11.7},1,cjs.Ease.get(1)).wait(40));

	// Layer 5
	this.instance_1 = new lib.lupa();
	this.instance_1.setTransform(15.4,52.5,1,1,0,0,0,22.2,56.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({x:170.4,y:53.5},45,cjs.Ease.get(1)).to({x:177.4},1,cjs.Ease.get(1)).to({x:15.4,y:52.5},48,cjs.Ease.get(1)).wait(41));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AACEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_19 = new cjs.Graphics().p("AACEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_20 = new cjs.Graphics().p("AAUEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_21 = new cjs.Graphics().p("AA1EPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_22 = new cjs.Graphics().p("ABVEPQhSAAg5hPQg6hQAAhwQABhuA5hQQA5hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_23 = new cjs.Graphics().p("AB0EPQhSAAg4hPQg6hQAAhwQAAhuA6hQQA4hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_24 = new cjs.Graphics().p("ACTEPQhSAAg7hPQg4hQAAhwQABhuA3hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_25 = new cjs.Graphics().p("ACxEPQhSAAg7hPQg4hQAAhwQABhuA3hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_26 = new cjs.Graphics().p("ADOEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_27 = new cjs.Graphics().p("ADqEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_28 = new cjs.Graphics().p("AEGEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_29 = new cjs.Graphics().p("AEhEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_30 = new cjs.Graphics().p("AE7EPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_31 = new cjs.Graphics().p("AFUEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_32 = new cjs.Graphics().p("AFtEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_33 = new cjs.Graphics().p("AGEEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hIAAIgCAAg");
	var mask_graphics_34 = new cjs.Graphics().p("AGcEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg3A/hIAAIgBAAg");
	var mask_graphics_35 = new cjs.Graphics().p("AGyEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_36 = new cjs.Graphics().p("AHHEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hIAAIgCAAg");
	var mask_graphics_37 = new cjs.Graphics().p("AHcEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_38 = new cjs.Graphics().p("AHwEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AIDEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hIAAIgCAAg");
	var mask_graphics_40 = new cjs.Graphics().p("AIWEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_41 = new cjs.Graphics().p("AIoEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_42 = new cjs.Graphics().p("AI5EPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_43 = new cjs.Graphics().p("AJJEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_44 = new cjs.Graphics().p("AJZEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg3A/hIAAIgBAAg");
	var mask_graphics_45 = new cjs.Graphics().p("AJnEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_46 = new cjs.Graphics().p("AJ1EPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_47 = new cjs.Graphics().p("AKDEPQhSAAg7hPQg6hQAAhwQAAhuA6hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAUA8AABHQABBrgxBRIAAABIgFAGIgMAQQg3A/hIAAIgBAAg");
	var mask_graphics_48 = new cjs.Graphics().p("AKPEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_49 = new cjs.Graphics().p("AKbEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_50 = new cjs.Graphics().p("AKmEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_51 = new cjs.Graphics().p("AKwEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_52 = new cjs.Graphics().p("AK5EPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_53 = new cjs.Graphics().p("ALCEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_54 = new cjs.Graphics().p("ALKEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_55 = new cjs.Graphics().p("ALREPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_56 = new cjs.Graphics().p("ALYEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg3A/hIAAIgBAAg");
	var mask_graphics_57 = new cjs.Graphics().p("ALdEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_58 = new cjs.Graphics().p("ALiEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_59 = new cjs.Graphics().p("ALmEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_60 = new cjs.Graphics().p("ALqEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_61 = new cjs.Graphics().p("ALsEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_62 = new cjs.Graphics().p("ALuEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_63 = new cjs.Graphics().p("ALvEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hIAAIgCAAg");
	var mask_graphics_64 = new cjs.Graphics().p("ALwEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_65 = new cjs.Graphics().p("AMSEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_66 = new cjs.Graphics().p("ALxEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_67 = new cjs.Graphics().p("ALREPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg3A/hIAAIgBAAg");
	var mask_graphics_68 = new cjs.Graphics().p("AKxEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_69 = new cjs.Graphics().p("AKSEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_70 = new cjs.Graphics().p("AJzEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_71 = new cjs.Graphics().p("AJWEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_72 = new cjs.Graphics().p("AI5EPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_73 = new cjs.Graphics().p("AIcEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_74 = new cjs.Graphics().p("AIBEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_75 = new cjs.Graphics().p("AHmEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_76 = new cjs.Graphics().p("AHMEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg3A/hIAAIgBAAg");
	var mask_graphics_77 = new cjs.Graphics().p("AGyEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_78 = new cjs.Graphics().p("AGZEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_79 = new cjs.Graphics().p("AGBEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_80 = new cjs.Graphics().p("AFqEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_81 = new cjs.Graphics().p("AFTEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_82 = new cjs.Graphics().p("AE9EPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_83 = new cjs.Graphics().p("AEoEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_84 = new cjs.Graphics().p("AETEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_85 = new cjs.Graphics().p("AD/EPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_86 = new cjs.Graphics().p("ADsEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_87 = new cjs.Graphics().p("ADZEPQhSAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hIAAIgCAAg");
	var mask_graphics_88 = new cjs.Graphics().p("ADIEPQhSAAg7hPQg6hQAAhwQABhuA5hQQA7hQBSAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_89 = new cjs.Graphics().p("AC2EPQhSAAg6hPQg4hQAAhwQABhuA3hQQA6hQBTAAQA9AAAwAtQARAPAOAUQAUAaAMAeQAWA8AABHQgBBrgwBRIgBABIgEAGIgNAQQg2A/hIAAIgCAAg");
	var mask_graphics_90 = new cjs.Graphics().p("ACmEPQhSAAg6hPQg4hQAAhwQAAhuA4hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_91 = new cjs.Graphics().p("ACWEPQhSAAg6hPQg4hQAAhwQAAhuA4hQQA6hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hIAAIgCAAg");
	var mask_graphics_92 = new cjs.Graphics().p("ACHEPQhSAAg4hPQg6hQAAhwQAAhuA6hQQA4hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_93 = new cjs.Graphics().p("AB5EPQhSAAg4hPQg6hQAAhwQAAhuA6hQQA4hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_94 = new cjs.Graphics().p("ABrEPQhSAAg4hPQg6hQAAhwQAAhuA6hQQA4hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hIAAIgCAAg");
	var mask_graphics_95 = new cjs.Graphics().p("ABeEPQhSAAg4hPQg6hQAAhwQAAhuA6hQQA4hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hIAAIgCAAg");
	var mask_graphics_96 = new cjs.Graphics().p("ABSEPQhSAAg4hPQg6hQAAhwQAAhuA6hQQA4hQBTAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_97 = new cjs.Graphics().p("ABHEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_98 = new cjs.Graphics().p("AA8EPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_99 = new cjs.Graphics().p("AAyEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_100 = new cjs.Graphics().p("AAoEPQhQAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBRAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_101 = new cjs.Graphics().p("AAgEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg3A/hIAAIgBAAg");
	var mask_graphics_102 = new cjs.Graphics().p("AAYEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg3A/hIAAIgBAAg");
	var mask_graphics_103 = new cjs.Graphics().p("AAQEPQhQAAg6hPQg6hQAAhwQAAhuA6hQQA6hQBRAAQA9AAAwAtQAQAPAPAUQAUAaAMAeQAVA8AABHQAABrgwBRIgBABIgEAGIgNAQQg2A/hJAAIgBAAg");
	var mask_graphics_104 = new cjs.Graphics().p("AAKEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg3A/hIAAIgBAAg");
	var mask_graphics_105 = new cjs.Graphics().p("AAEEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_106 = new cjs.Graphics().p("AACEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_107 = new cjs.Graphics().p("AACEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_108 = new cjs.Graphics().p("AACEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_109 = new cjs.Graphics().p("AACEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_110 = new cjs.Graphics().p("AACEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_111 = new cjs.Graphics().p("AACEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_112 = new cjs.Graphics().p("AACEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");
	var mask_graphics_113 = new cjs.Graphics().p("AACEPQhQAAg7hPQg6hQAAhwQABhuA5hQQA7hQBQAAQA+AAAwAtQAQAPAOAUQAUAaANAeQAVA8AABHQAABrgxBRIAAABIgFAGIgMAQQg2A/hJAAIgBAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:16.5,y:26.5}).wait(19).to({graphics:mask_graphics_19,x:16.5,y:26.5}).wait(1).to({graphics:mask_graphics_20,x:21.4,y:26.5}).wait(1).to({graphics:mask_graphics_21,x:24.7,y:26.5}).wait(1).to({graphics:mask_graphics_22,x:27.9,y:26.5}).wait(1).to({graphics:mask_graphics_23,x:31.1,y:26.5}).wait(1).to({graphics:mask_graphics_24,x:34.1,y:26.5}).wait(1).to({graphics:mask_graphics_25,x:37.1,y:26.5}).wait(1).to({graphics:mask_graphics_26,x:40,y:26.5}).wait(1).to({graphics:mask_graphics_27,x:42.9,y:26.5}).wait(1).to({graphics:mask_graphics_28,x:45.6,y:26.5}).wait(1).to({graphics:mask_graphics_29,x:48.3,y:26.5}).wait(1).to({graphics:mask_graphics_30,x:50.9,y:26.5}).wait(1).to({graphics:mask_graphics_31,x:53.5,y:26.5}).wait(1).to({graphics:mask_graphics_32,x:55.9,y:26.5}).wait(1).to({graphics:mask_graphics_33,x:58.3,y:26.5}).wait(1).to({graphics:mask_graphics_34,x:60.6,y:26.5}).wait(1).to({graphics:mask_graphics_35,x:62.8,y:26.5}).wait(1).to({graphics:mask_graphics_36,x:65,y:26.5}).wait(1).to({graphics:mask_graphics_37,x:67.1,y:26.5}).wait(1).to({graphics:mask_graphics_38,x:69.1,y:26.5}).wait(1).to({graphics:mask_graphics_39,x:71,y:26.5}).wait(1).to({graphics:mask_graphics_40,x:72.9,y:26.5}).wait(1).to({graphics:mask_graphics_41,x:74.6,y:26.5}).wait(1).to({graphics:mask_graphics_42,x:76.3,y:26.5}).wait(1).to({graphics:mask_graphics_43,x:78,y:26.5}).wait(1).to({graphics:mask_graphics_44,x:79.5,y:26.5}).wait(1).to({graphics:mask_graphics_45,x:81,y:26.5}).wait(1).to({graphics:mask_graphics_46,x:82.4,y:26.5}).wait(1).to({graphics:mask_graphics_47,x:83.7,y:26.5}).wait(1).to({graphics:mask_graphics_48,x:84.9,y:26.5}).wait(1).to({graphics:mask_graphics_49,x:86.1,y:26.5}).wait(1).to({graphics:mask_graphics_50,x:87.2,y:26.5}).wait(1).to({graphics:mask_graphics_51,x:88.2,y:26.5}).wait(1).to({graphics:mask_graphics_52,x:89.2,y:26.5}).wait(1).to({graphics:mask_graphics_53,x:90.1,y:26.5}).wait(1).to({graphics:mask_graphics_54,x:90.8,y:26.5}).wait(1).to({graphics:mask_graphics_55,x:91.6,y:26.5}).wait(1).to({graphics:mask_graphics_56,x:92.2,y:26.5}).wait(1).to({graphics:mask_graphics_57,x:92.8,y:26.5}).wait(1).to({graphics:mask_graphics_58,x:93.3,y:26.5}).wait(1).to({graphics:mask_graphics_59,x:93.7,y:26.5}).wait(1).to({graphics:mask_graphics_60,x:94,y:26.5}).wait(1).to({graphics:mask_graphics_61,x:94.3,y:26.5}).wait(1).to({graphics:mask_graphics_62,x:94.5,y:26.5}).wait(1).to({graphics:mask_graphics_63,x:94.6,y:26.5}).wait(1).to({graphics:mask_graphics_64,x:94.6,y:26.5}).wait(1).to({graphics:mask_graphics_65,x:98.1,y:26.5}).wait(1).to({graphics:mask_graphics_66,x:94.8,y:26.5}).wait(1).to({graphics:mask_graphics_67,x:91.5,y:26.5}).wait(1).to({graphics:mask_graphics_68,x:88.3,y:26.5}).wait(1).to({graphics:mask_graphics_69,x:85.2,y:26.5}).wait(1).to({graphics:mask_graphics_70,x:82.2,y:26.5}).wait(1).to({graphics:mask_graphics_71,x:79.2,y:26.5}).wait(1).to({graphics:mask_graphics_72,x:76.3,y:26.5}).wait(1).to({graphics:mask_graphics_73,x:73.5,y:26.5}).wait(1).to({graphics:mask_graphics_74,x:70.7,y:26.5}).wait(1).to({graphics:mask_graphics_75,x:68,y:26.5}).wait(1).to({graphics:mask_graphics_76,x:65.4,y:26.5}).wait(1).to({graphics:mask_graphics_77,x:62.9,y:26.5}).wait(1).to({graphics:mask_graphics_78,x:60.4,y:26.5}).wait(1).to({graphics:mask_graphics_79,x:58,y:26.5}).wait(1).to({graphics:mask_graphics_80,x:55.6,y:26.5}).wait(1).to({graphics:mask_graphics_81,x:53.4,y:26.5}).wait(1).to({graphics:mask_graphics_82,x:51.2,y:26.5}).wait(1).to({graphics:mask_graphics_83,x:49,y:26.5}).wait(1).to({graphics:mask_graphics_84,x:47,y:26.5}).wait(1).to({graphics:mask_graphics_85,x:45,y:26.5}).wait(1).to({graphics:mask_graphics_86,x:43,y:26.5}).wait(1).to({graphics:mask_graphics_87,x:41.2,y:26.5}).wait(1).to({graphics:mask_graphics_88,x:39.4,y:26.5}).wait(1).to({graphics:mask_graphics_89,x:37.7,y:26.5}).wait(1).to({graphics:mask_graphics_90,x:36.1,y:26.5}).wait(1).to({graphics:mask_graphics_91,x:34.5,y:26.5}).wait(1).to({graphics:mask_graphics_92,x:33,y:26.5}).wait(1).to({graphics:mask_graphics_93,x:31.6,y:26.5}).wait(1).to({graphics:mask_graphics_94,x:30.2,y:26.5}).wait(1).to({graphics:mask_graphics_95,x:28.9,y:26.5}).wait(1).to({graphics:mask_graphics_96,x:27.7,y:26.5}).wait(1).to({graphics:mask_graphics_97,x:26.5,y:26.5}).wait(1).to({graphics:mask_graphics_98,x:25.4,y:26.5}).wait(1).to({graphics:mask_graphics_99,x:24.4,y:26.5}).wait(1).to({graphics:mask_graphics_100,x:23.5,y:26.5}).wait(1).to({graphics:mask_graphics_101,x:22.6,y:26.5}).wait(1).to({graphics:mask_graphics_102,x:21.8,y:26.5}).wait(1).to({graphics:mask_graphics_103,x:21.1,y:26.5}).wait(1).to({graphics:mask_graphics_104,x:20.4,y:26.5}).wait(1).to({graphics:mask_graphics_105,x:19.8,y:26.5}).wait(1).to({graphics:mask_graphics_106,x:18.9,y:26.5}).wait(1).to({graphics:mask_graphics_107,x:18,y:26.5}).wait(1).to({graphics:mask_graphics_108,x:17.3,y:26.5}).wait(1).to({graphics:mask_graphics_109,x:16.6,y:26.5}).wait(1).to({graphics:mask_graphics_110,x:16.2,y:26.5}).wait(1).to({graphics:mask_graphics_111,x:15.8,y:26.5}).wait(1).to({graphics:mask_graphics_112,x:15.6,y:26.5}).wait(1).to({graphics:mask_graphics_113,x:15.5,y:26.5}).wait(1).to({graphics:null,x:0,y:0}).wait(40));

	// Layer 1
	this.text = new cjs.Text("Curiosidade", "italic 17px 'Trebuchet MS'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 19;
	this.text.setTransform(88.5,9.4,1.311,1.569);

	this.text.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(113).to({_off:true},1).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.9,-4.1,91.7,114.3);


(lib.gr_boneco1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.imagemlupa();
	this.instance.setTransform(55.6,55.7,0.789,0.789);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(68.8,64.1,0.789,0.789,0,0,0,18.5,11.1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(13.1,52.4,163.1,90.2);


// stage content:



(lib.curiosidade = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(11));

	// Layer 2
	this.instance = new lib.gr_boneco1("synched",0);
	this.instance.setTransform(183,9.4,0.213,0.213,0,0,0,97,96.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1,scaleY:1,x:78.6,y:98.6,alpha:1},14,cjs.Ease.get(1)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(264.6,74.5,29,19);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;