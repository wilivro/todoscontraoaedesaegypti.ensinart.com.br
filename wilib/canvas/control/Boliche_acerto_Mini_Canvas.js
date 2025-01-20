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
  (lib.Boliche_acerto_Mini_Canvas = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // timeline functions:
    this.frame_53 = function () {
      this.stop();
      $('[data-name="bolicheAcerto"]').remove();
      require(["../wilib/js/lib/edi"], function (edi) {
        edi.finalizar();
      });
    };

    // actions tween:
    this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

    // Fundo (mask)
    var mask = new cjs.Shape();
    mask._off = true;
    mask.graphics.p("EgomAMTIAA4kMBRNAAAIAAYkg");
    mask.setTransform(260, 78.7);

    // mcBolaBoliche
    this.instance = new lib.mcBolaBoliche();
    this.instance.setTransform(-26.8, 68.8, 0.218, 0.218, 0, 0, 0, 119.6, 119.6);

    this.instance_1 = new lib.mcBolaBoliche2();
    this.instance_1.setTransform(549.1, 150, 0.218, 0.218);

    this.instance.mask = this.instance_1.mask = mask;

    this.timeline.addTween(cjs.Tween.get({}).to({state: [{t: this.instance}]}).to({state: [{t: this.instance}]}, 9).to({state: [{t: this.instance}]}, 39).to({state: [{t: this.instance_1}]}, 5).wait(1));
    this.timeline.addTween(cjs.Tween.get(this.instance).to({x: 83.2, y: 88.8}, 9).to({
      x: 528.4,
      y: 95.9
    }, 39).to({_off: true, regX: 0, regY: 0, x: 549.1, y: 150}, 5).wait(1));

    // mcPino
    this.instance_2 = new lib.mcPino();
    this.instance_2.setTransform(381.8, 78.8, 0.159, 0.159, 0, 0, 0, 78.8, 235.7);

    this.instance_2.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(32).to({regY: 298.7, y: 88.8}, 0).to({
      regX: 78.5,
      regY: 298.9,
      rotation: 109.8,
      x: 391.9,
      y: 138.8
    }, 4).wait(18));

    // mcPino
    this.instance_3 = new lib.mcPino();
    this.instance_3.setTransform(416.8, 87.2, 0.159, 0.159, 0, 0, 0, 78.8, 236);

    this.instance_3.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({
      regX: 78.9,
      regY: 236.1,
      scaleX: 0.16,
      scaleY: 0.16,
      rotation: 128.3,
      x: 487.8,
      y: 140.2
    }, 4).wait(15));

    // mcPino
    this.instance_4 = new lib.mcPino();
    this.instance_4.setTransform(404.7, 68.9, 0.159, 0.159, 0, 0, 0, 78.8, 236);

    this.instance_4.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(34).to({
      regX: 78.9,
      regY: 235.8,
      scaleX: 0.16,
      scaleY: 0.16,
      rotation: -53.2,
      x: 383.7,
      y: 70.9
    }, 3).to({regX: 79.4, rotation: -87.5, y: 77.9}, 2).wait(15));

    // mcPino
    this.instance_5 = new lib.mcPino();
    this.instance_5.setTransform(450.9, 94.3, 0.159, 0.159, 0, 0, 0, 78.8, 236);

    this.instance_5.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(37).to({
      regX: 79.1,
      regY: 236.1,
      scaleX: 0.16,
      scaleY: 0.16,
      rotation: 120.8,
      x: 499.9,
      y: 130.3
    }, 3).wait(14));

    // mcPino
    this.instance_6 = new lib.mcPino();
    this.instance_6.setTransform(437.2, 75.1, 0.159, 0.159, 0, 0, 0, 78.8, 235.7);

    this.instance_6.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({
      regX: 78.7,
      regY: 235.6,
      scaleX: 0.16,
      scaleY: 0.16,
      rotation: -57.6,
      x: 417.2,
      y: 74.1
    }, 3).wait(14));

    // mcPino
    this.instance_7 = new lib.mcPino();
    this.instance_7.setTransform(424.7, 56.8, 0.159, 0.159, 0, 0, 0, 78.5, 235.7);

    this.instance_7.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(38).to({
      regX: 78.3,
      regY: 236,
      scaleX: 0.16,
      scaleY: 0.16,
      rotation: -101.5,
      x: 411.7,
      y: 69.8
    }, 4).wait(12));

    // mcPino
    this.instance_8 = new lib.mcPino();
    this.instance_8.setTransform(487.5, 95.9, 0.159, 0.159, 0, 0, 0, 78.8, 236);

    this.instance_8.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40).to({
      regX: 78.7,
      regY: 236.2,
      scaleX: 0.16,
      scaleY: 0.16,
      rotation: 61.4,
      x: 567.5,
      y: 105.9
    }, 4).wait(10));

    // mcPino
    this.instance_9 = new lib.mcPino();
    this.instance_9.setTransform(471.8, 78.8, 0.159, 0.159, 0, 0, 0, 78.8, 235.7);

    this.instance_9.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({
      regX: 78.9,
      regY: 235.6,
      scaleX: 0.16,
      scaleY: 0.16,
      rotation: 45.9,
      x: 551.8
    }, 4).wait(11));

    // mcPino
    this.instance_10 = new lib.mcPino();
    this.instance_10.setTransform(457.2, 61.8, 0.159, 0.159, 0, 0, 0, 78.8, 235.7);

    this.instance_10.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(41).to({
      regX: 79,
      regY: 235.6,
      rotation: 76.2,
      x: 485.2,
      y: 72.8
    }, 4).wait(9));

    // mcPino
    this.instance_11 = new lib.mcPino();
    this.instance_11.setTransform(441.8, 48.9, 0.159, 0.159, 0, 0, 0, 78.8, 236);

    this.instance_11.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(41).to({
      regX: 85,
      regY: 242.3,
      x: 442.8,
      y: 49.9
    }, 0).to({regX: 85.2, rotation: -88.7, y: 69.9}, 4).wait(9));

    // mcPistaBoliche
    this.instance_12 = new lib.mcPistaBoliche();
    this.instance_12.setTransform(255.6, 117.6, 0.7, 0.7, 0, 0, 0, 396.4, 38.5);

    this.instance_12.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(54));

    // Fundo
    this.shape = new cjs.Shape();
    this.shape.graphics.f("#FFFFFF").s().p("AijCVIAAkqIFHAAIAAEqg");
    this.shape.setTransform(260, 78.7, 15.758, 5.247);

    this.shape.mask = mask;

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(54));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(260, 78.5, 520, 157.4);


// symbols:
  (lib.Tween1 = function () {
    this.initialize();

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#000000").ss(0.5, 1, 1).p("AApkXQgmgjgwACQgzACgjAmQgjAlACAzQACAzAmAjQAlAjAzgCQAxgCAjgmQAjgmgCgzQgCgzgmgigAkTBqQAjgmAzgCQAzgCAmAjQAlAiACAzQACAzgiAmQgjAmgzACQgzABglgiQgmgjgCgzQgCgzAiglgABfAoQgjAlACAzQACAzAmAjQAlAiAzgCQAzgCAjglQAjgmgCgzQgCgzgmgiQglghgzAAQgzACgjAmg");
    this.shape.setTransform(-75.9, -29);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f("#000000").s().p("AkMEYQglgjgCgzQgDgzAjglQAjgmAzgCQAzgCAmAjQAlAiACAzQACAzgiAmQgjAmg0ACIgEAAQgwAAgkghgABmDWQgmgjgCgzQgCgzAjglQAjgmAygCQA0AAAlAhQAmAiACAzQABAzgiAmQgjAlgzACIgGAAQgvAAgjgggAh9hiQglgjgCgzQgCgzAiglQAjgmA0gCQAwgCAmAjQAmAiABAzQACAzgiAmQgjAmgxACIgFAAQgwAAgkghg");
    this.shape_1.setTransform(-75.9, -29);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f().s("#000000").ss(2, 1, 1).p("AgtyrQDxgJDiBVQDbBTCsCeQCrCgBkDTQBmDaAKD0QAJDyhVDhQhTDbifCsQifCsjTBjQjbBnjzAJQjxAJjihVQjbhTisieQirighkjTQhmjagKj0QgJjyBVjhQBTjbCfisQCfisDThjQDbhnDzgJg");

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#990000").s().p("AmlRgQjahTisifQisifhjjTQhnjbgKjzQgJjyBVjhQBTjbCfisQCfirDThkQDbhnDzgJQDxgJDiBVQDaBSCtCfQCrCfBkDUQBmDaAKD0QAJDxhVDiQhTDaieCsQigCsjTBjQjbBnjzAKIguABQjZAAjMhNg");

    this.addChild(this.shape_3, this.shape_2, this.shape_1, this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = new cjs.Rectangle(-120.7, -120.7, 241.5, 241.4);


  (lib.mcPistaBoliche = function () {
    this.initialize();

    // Layer 1
    this.shape = new cjs.Shape();
    this.shape.graphics.f().s("#FFFFFF").ss(2, 1, 1).p("EA8DAEsMh4FAAAEA6WADIMh0rAAAEA4wABpMhxfAAAEA3PAAPMhudAAAEA1ygBEMhrkAAAEA0bgCVMho1AAAEAzIgDiMhmPAAAEAx5gErMhjxAAA");
    this.shape.setTransform(396.4, 36.5);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#682600").ss(1, 1, 1).p("EA98AGAMh73AAAINBr/MBh1AAAg");
    this.shape_1.setTransform(396.4, 38.4);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#E1781C").s().p("AnjDaICzAZIjgAbgAizB7ICwAYIjYAagAA+AhICtAXIjQAYgAFmgnICrAXIjJAUgACxh2IClAWIjGAVgABMjDIChAUIjCAVgAg5kNICaATIi8AUg");
    this.shape_2.setTransform(143.7, 35);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f("#F3EEC5").s().p("Eg96AGAINAr/MBh1AAAINAL/gEA8DAEZMh4FAAAgEgvvADsIDggbIizgZgEA6WAC1Mh0rAAAgEgq6ACLIDYgaIiwgYgEA4wABWMhxeAAAgEgnCAAuIDQgYIitgWgEA3PgACMhucAAAgEgiVgAcIDJgWIirgXgEA1zgBXMhrkAAAgEglNgBtIDGgVIilgWgEA0bgCoMho1AAAgEgmygC8IDCgVIihgUgEAzIgD1MhmPAAAgEgo6gEIIC+gUIicgTgEAx5gE+MhjxAAAg");
    this.shape_3.setTransform(396.4, 38.4);

    this.addChild(this.shape_3, this.shape_2, this.shape_1, this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 794.8, 78.9);


  (lib.mcPino = function () {
    this.initialize();

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics.f("rgba(204,204,204,0.451)").s().p("EgDFAiXQhIhaBEhyQARgbAQggQDrm9BqoDQAOhDgHhHQgdkkh0kBQh+kchCk3QgIgkAegOIAVgJQBYBgAzCeQA8C1BMCtQCuGPgzHJQgDAigLAhQiuI2kOHUQgFAIgFAAQgGAAgHgJgAj5wcQgijIBKivQAbg/AChOQAGjPgxivQgJgcgRgZQhdiABghMQA0AOAEBFIAAAHQCLCrgcESQgMB0gLB0QgLB8gxBqQAYCZhXAbIgGABQgOAAgEgXg");
    this.shape.setTransform(118.8, 231.7);

    // Layer 1
    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics.f().s("#000000").ss(2, 1, 1).p("AH5h2QkYBEkAAAQjqAAjvg8QArBkAnBRQDdAwClAAQCeAAEtg2QAvhjAjhUg");
    this.shape_1.setTransform(78.9, 436.5);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics.f("#D90000").s().p("AmmBHQgnhRgrhkQDvA8DqAAQEAAAEYhEQgjBUgvBjQkuA2idAAQilAAjdgwg");
    this.shape_2.setTransform(78.9, 436.5);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics.f().s("#000000").ss(2, 1, 1).p("AkmBXQB4AGB+AAQClAACwgLQgFgmABgnQABgrAFg2QipALiuAAQh+AAh4gGQAEA+ABAeQABAlgGAtg");
    this.shape_3.setTransform(78.7, 155.7);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics.f("#D90000").s().p("AklBXQAFgtgBglQAAgegEg+QB3AGB+AAQCuAACogLQgEA2gBArQAAAnAEAmQivALimAAQh+AAh3gGg");
    this.shape_4.setTransform(78.7, 155.7);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics.f().s("#000000").ss(2, 1, 1).p("EgARgkxQiEAVhgBfQibCZgKExQgFCHA7FBQA/FaAEC4QADB6g+CVQgdBGh0DbQhsDMg5CTQhVDhgfDsQg7G7DyKNQBLDMBnDYQAzBtAtBZQBrBADMAAQDLABB5hBQAshZA0htQBmjYBMjMQDxqNg6m7QgfjshVjhQg5iThsjMQh1jbgdhGQg+iVADh6QAFi4A/laQA7lBgFiHQgLkxiaiZQhhhfiEgVIAAgEIgRACIgRgCg");
    this.shape_5.setTransform(78.7, 235.8);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics.f("#FFFFFF").s().p("EgAGAk1QjMAAhrhAQgthZgzhtQhnjYhLjMQjyqNA7m7QAfjsBVjhQA5iTBsjMQB0jbAdhGQA+iVgDh5QgEi5g/laQg7lAAFiIQAKkxCbiZQBghfCEgVIAAgEIARACIARgCIAAAEQCEAVBhBfQCaCZALExQAFCIg7FAQg/FagFC5QgDB5A+CVQAdBGB1DbQBsDMA5CTQBVDhAfDsQA6G7jxKNQhMDMhmDYQg0BtgsBZQh4BBjJAAIgDgBg");
    this.shape_6.setTransform(78.7, 235.8);

    this.addChild(this.shape_6, this.shape_5, this.shape_4, this.shape_3, this.shape_2, this.shape_1, this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 159.4, 473.6);


  (lib.mcBolaBoliche2 = function () {
    this.initialize();

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics.f("rgba(255,255,255,0.451)").s().p("ADmCNIAfgJIAegHQBmALAUBfIAEAPQgCApgYAjQgQAXgYARQkagFChjYgAiUClQgyAJg2gjQizhzARh0QgRh0Cvh2QAqgdAsgGQAbAKAZALIAIgBQD2BcgJCLQAHBpiVCEQgxAsg1gEIgLAAQgKAAgKgCg");
    this.shape.setTransform(178.3, 59.4);

    // Layer 1
    this.instance = new lib.Tween1("synched", 0);
    this.instance.setTransform(119.7, 119.7);

    this.addChild(this.instance, this.shape);
  }).prototype = p = new cjs.Container();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 241.5, 241.4);


  (lib.mcBolaBoliche = function (mode, startPosition, loop) {
    this.initialize(mode, startPosition, loop, {});

    // Layer 2
    this.shape = new cjs.Shape();
    this.shape.graphics.f("rgba(255,255,255,0.451)").s().p("ADmCNIAfgJIAegHQBmALAUBfIAEAPQgCApgYAjQgQAXgYARQkagFChjYgAiUClQgyAJg2gjQizhzARh0QgRh0Cvh2QAqgdAsgGQAbAKAZALIAIgBQD2BcgJCLQAHBpiVCEQgxAsg1gEIgLAAQgKAAgKgCg");
    this.shape.setTransform(178.3, 59.4);

    this.timeline.addTween(cjs.Tween.get(this.shape).wait(9));

    // Layer 1
    this.instance = new lib.Tween1("synched", 0);
    this.instance.setTransform(119.7, 119.7);

    this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation: 90}, 2).to({rotation: 180}, 2).to({rotation: 270}, 2).to({rotation: 360}, 2).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(-1, -1, 241.5, 241.5);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;