(function (lib, img, cjs) {

    (lib.edi = null);
    (lib.licao = null);


    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 788,
        height: 383,
        fps: 24,
        color: "#FFFFFF",
        manifest: []
    };


// symbols:

    (lib.callback = function(){
    });

    (lib.mc_seta2 = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        var seta = this;

        this.frame_0 = function () {
            this.stop();
        }

        this.frame_19 = function () {
            this.stop();

            if (!!licao.config.WIQUADRO)
                Wiquadro.api.addInteration(1, 'btn2', 'seta2', 'T');

            if (lib.edi.objetivos.indexOf(0) < 0) {
                $("[data-name='showSetas']").css({
                    zIndex: -1
                });
                
                if (lib.callback) lib.callback();
                    lib.edi.finalizar();
            }
        }

        seta.on("click", function () {
            this.play();
            this._listeners = null;
            lib.edi.objetivos.pop();
            lib.edi.objetivos.unshift(1);
        });

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_1 = new cjs.Graphics().p("AgMABIAAgCIAZAAIAAACg");
        var mask_graphics_2 = new cjs.Graphics().p("AgOAVIACgpIAYAAIADApg");
        var mask_graphics_3 = new cjs.Graphics().p("AgQAqIAEhTIAYAAIAFBTg");
        var mask_graphics_4 = new cjs.Graphics().p("AgTA/IAGh+IAZAAIAIB+g");
        var mask_graphics_5 = new cjs.Graphics().p("AgVBXIAIitIAZAAIAKCtg");
        var mask_graphics_6 = new cjs.Graphics().p("AgYBuIALjbIAYAAIAODbg");
        var mask_graphics_7 = new cjs.Graphics().p("AgbBYIAGgDIAAAAIALjdIAYAAIAODdIg3Azg");
        var mask_graphics_8 = new cjs.Graphics().p("AgmBaIAbgPIABAAIAKjcIAZAAIAODcIhNBHg");
        var mask_graphics_9 = new cjs.Graphics().p("AhKBjIBig6IABAAIAKjcIAbAAIANDcIiVCLg");
        var mask_graphics_10 = new cjs.Graphics().p("Ah8BuIDGhxIABAAIAKjeIAbAAIANDeIj5Dlg");
        var mask_graphics_11 = new cjs.Graphics().p("AjjDmIAAgCIgBAAIABAAIgFh/IDXAAIAAAGIDHhyIAAAAIALjeIAaAAIAODeIj+DpIAAAEg");
        var mask_graphics_12 = new cjs.Graphics().p("AjiDmIAAgCIgBAAIABAAIgHjRIDcAAIgDBYIDHhyIABAAIAKjeIAbAAIANDeIj+DpIAAAEg");
        var mask_graphics_13 = new cjs.Graphics().p("AjfDmIAAgCIgBAAIABAAIgNl3IDnAAIgID+IDHhyIAAAAIALjeIAaAAIAODeIj+DpIAAAEg");
        var mask_graphics_14 = new cjs.Graphics().p("AjbEvIAAgCIgBAAIABAAIgVpbID1AAIgOHiIDHhzIAAAAIALjdIAaAAIAODdIj+DrIAAADg");
        var mask_graphics_15 = new cjs.Graphics().p("AjZFyIAAgCIgBAAIABAAIgZrhID+AAIgTJoIDHhzIAAAAIALjdIAaAAIAODdIj+DrIAAADg");
        var mask_graphics_16 = new cjs.Graphics().p("Ai2GNIAAgCIgBAAIABAAIgZrpIhGAAIA1guIEfAAIA1AuIhFAAIgVJwIDJh0IAAAAIALjcIAaAAIAODcIkADrIAAAEg");
        var mask_graphics_17 = new cjs.Graphics().p("Ai2GjIAAgCIgBAAIABAAIgZrqIhGAAIBnhZIC8AAIBmBZIhFAAIgVJxIDJh0IAAAAIALjcIAaAAIAODcIkADrIAAAEg");
        var mask_graphics_18 = new cjs.Graphics().p("Ai2GzIAAgCIgBAAIABAAIgZrqIhGAAICMh5IB0AAICJB5IhFAAIgVJxIDJh0IAAAAIALjcIAaAAIAODcIkADrIAAAEg");
        var mask_graphics_19 = new cjs.Graphics().p("Ai2HMIAAgCIgBAAIABAAIgZrpIhGAAIDFisIDECsIhFAAIgVJwIDJh0IAAAAIALjdIAaAAIAODdIkADrIAAAEg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: null, x: 0, y: 0}).wait(1).to({graphics: mask_graphics_1, x: 33.2, y: 0.2}).wait(1).to({graphics: mask_graphics_2, x: 33.3, y: 2.2}).wait(1).to({graphics: mask_graphics_3, x: 33.3, y: 4.2}).wait(1).to({graphics: mask_graphics_4, x: 33.3, y: 6.4}).wait(1).to({graphics: mask_graphics_5, x: 33.4, y: 8.7}).wait(1).to({graphics: mask_graphics_6, x: 33.4, y: 11}).wait(1).to({graphics: mask_graphics_7, x: 33.1, y: 13.7}).wait(1).to({graphics: mask_graphics_8, x: 32, y: 14.7}).wait(1).to({graphics: mask_graphics_9, x: 28.4, y: 18}).wait(1).to({graphics: mask_graphics_10, x: 23.4, y: 22.6}).wait(1).to({graphics: mask_graphics_11, x: 12.6, y: 23.1}).wait(1).to({graphics: mask_graphics_12, x: 12.5, y: 23.1}).wait(1).to({graphics: mask_graphics_13, x: 12.2, y: 23.1}).wait(1).to({graphics: mask_graphics_14, x: 11.8, y: 15.7}).wait(1).to({graphics: mask_graphics_15, x: 11.6, y: 9}).wait(1).to({graphics: mask_graphics_16, x: 8.1, y: 6.3}).wait(1).to({graphics: mask_graphics_17, x: 8.1, y: 4.2}).wait(1).to({graphics: mask_graphics_18, x: 8.1, y: 2.6}).wait(1).to({graphics: mask_graphics_19, x: 8.1, y: 0}).wait(1));

        // mask
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#202C62").s().p("Ah6AAIDGh0IABAAIAyAAIj9Dpg");
        this.shape.setTransform(23.1, 34);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#28377A").s().p("Ai2HMIAAgCIgBAAIABAAIgZrpIhGAAIDFisIDECsIhFAAIgVJwIgEB3IAAAEgADjDdIALjdIAaAAIAODdg");
        this.shape_1.setTransform(8.1, 0);

        this.shape.mask = this.shape_1.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [
            {t: this.shape_1},
            {t: this.shape}
        ]}, 1).wait(19));

        // Layer 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#28377A").s().p("AgMAPIAAgdIAZAAIAAAdg");
        this.shape_2.setTransform(33.2, -3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(31.9, -4.5, 2.6, 3.2);


    (lib.mc_seta = function (mode, startPosition, loop) {
        this.initialize(mode, startPosition, loop, {});

        var seta = this;

        this.frame_0 = function () {
            this.stop();
        }

        this.frame_19 = function () {
            this.stop();

            if (!!licao.config.WIQUADRO)
                Wiquadro.api.addInteration(1, 'btn1', 'seta1', 'T');

            if (lib.edi.objetivos.indexOf(0) < 0) {
                $("[data-name='showSetas']").css({
                    zIndex: -1
                });

                if (lib.callback) lib.callback();
                    lib.edi.finalizar();
            }
        }

        seta.on("click", function () {
            this.play();
            this._listeners = null;
            lib.edi.objetivos.pop();
            lib.edi.objetivos.unshift(1);
        });

        // actions tween:
        this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(1));

        // mask (mask)
        var mask = new cjs.Shape();
        mask._off = true;
        var mask_graphics_1 = new cjs.Graphics().p("AgMABIAAgCIAZAAIAAACg");
        var mask_graphics_2 = new cjs.Graphics().p("AgOAVIACgpIAYAAIADApg");
        var mask_graphics_3 = new cjs.Graphics().p("AgQAqIAEhTIAYAAIAFBTg");
        var mask_graphics_4 = new cjs.Graphics().p("AgTA/IAGh+IAZAAIAIB+g");
        var mask_graphics_5 = new cjs.Graphics().p("AgVBXIAIitIAZAAIAKCtg");
        var mask_graphics_6 = new cjs.Graphics().p("AgYBuIALjbIAYAAIAODbg");
        var mask_graphics_7 = new cjs.Graphics().p("AgbBYIAGgDIAAAAIALjdIAYAAIAODdIg3Azg");
        var mask_graphics_8 = new cjs.Graphics().p("AgmBaIAbgPIABAAIAKjcIAZAAIAODcIhNBHg");
        var mask_graphics_9 = new cjs.Graphics().p("AhKBjIBig6IABAAIAKjcIAbAAIANDcIiVCLg");
        var mask_graphics_10 = new cjs.Graphics().p("Ah8BuIDGhxIABAAIAKjeIAbAAIANDeIj5Dlg");
        var mask_graphics_11 = new cjs.Graphics().p("AjjDmIAAgCIgBAAIABAAIgFh/IDXAAIAAAGIDHhyIAAAAIALjeIAaAAIAODeIj+DpIAAAEg");
        var mask_graphics_12 = new cjs.Graphics().p("AjiDmIAAgCIgBAAIABAAIgHjRIDcAAIgDBYIDHhyIABAAIAKjeIAbAAIANDeIj+DpIAAAEg");
        var mask_graphics_13 = new cjs.Graphics().p("AjfDmIAAgCIgBAAIABAAIgNl3IDnAAIgID+IDHhyIAAAAIALjeIAaAAIAODeIj+DpIAAAEg");
        var mask_graphics_14 = new cjs.Graphics().p("AjbEvIAAgCIgBAAIABAAIgVpbID1AAIgOHiIDHhzIAAAAIALjdIAaAAIAODdIj+DrIAAADg");
        var mask_graphics_15 = new cjs.Graphics().p("AjZFyIAAgCIgBAAIABAAIgZrhID+AAIgTJoIDHhzIAAAAIALjdIAaAAIAODdIj+DrIAAADg");
        var mask_graphics_16 = new cjs.Graphics().p("Ai2GNIAAgCIgBAAIABAAIgZrpIhGAAIA1guIEfAAIA1AuIhFAAIgVJwIDJh0IAAAAIALjcIAaAAIAODcIkADrIAAAEg");
        var mask_graphics_17 = new cjs.Graphics().p("Ai2GjIAAgCIgBAAIABAAIgZrqIhGAAIBnhZIC8AAIBmBZIhFAAIgVJxIDJh0IAAAAIALjcIAaAAIAODcIkADrIAAAEg");
        var mask_graphics_18 = new cjs.Graphics().p("Ai2GzIAAgCIgBAAIABAAIgZrqIhGAAICMh5IB0AAICJB5IhFAAIgVJxIDJh0IAAAAIALjcIAaAAIAODcIkADrIAAAEg");
        var mask_graphics_19 = new cjs.Graphics().p("Ai2HMIAAgCIgBAAIABAAIgZrpIhGAAIDFisIDECsIhFAAIgVJwIDJh0IAAAAIALjdIAaAAIAODdIkADrIAAAEg");

        this.timeline.addTween(cjs.Tween.get(mask).to({graphics: null, x: 0, y: 0}).wait(1).to({graphics: mask_graphics_1, x: 33.2, y: 0.2}).wait(1).to({graphics: mask_graphics_2, x: 33.3, y: 2.2}).wait(1).to({graphics: mask_graphics_3, x: 33.3, y: 4.2}).wait(1).to({graphics: mask_graphics_4, x: 33.3, y: 6.4}).wait(1).to({graphics: mask_graphics_5, x: 33.4, y: 8.7}).wait(1).to({graphics: mask_graphics_6, x: 33.4, y: 11}).wait(1).to({graphics: mask_graphics_7, x: 33.1, y: 13.7}).wait(1).to({graphics: mask_graphics_8, x: 32, y: 14.7}).wait(1).to({graphics: mask_graphics_9, x: 28.4, y: 18}).wait(1).to({graphics: mask_graphics_10, x: 23.4, y: 22.6}).wait(1).to({graphics: mask_graphics_11, x: 12.6, y: 23.1}).wait(1).to({graphics: mask_graphics_12, x: 12.5, y: 23.1}).wait(1).to({graphics: mask_graphics_13, x: 12.2, y: 23.1}).wait(1).to({graphics: mask_graphics_14, x: 11.8, y: 15.7}).wait(1).to({graphics: mask_graphics_15, x: 11.6, y: 9}).wait(1).to({graphics: mask_graphics_16, x: 8.1, y: 6.3}).wait(1).to({graphics: mask_graphics_17, x: 8.1, y: 4.2}).wait(1).to({graphics: mask_graphics_18, x: 8.1, y: 2.6}).wait(1).to({graphics: mask_graphics_19, x: 8.1, y: 0}).wait(1));

        // mask
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#1B7CC1").s().p("Ai2HMIAAgCIgBAAIABAAIgZrpIhGAAIDFisIDECsIhFAAIgVJwIgEB3IAAAEgADjDdIALjdIAaAAIAODdg");
        this.shape.setTransform(8.1, 0);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#319CD7").s().p("Ah6AAIDGh0IABAAIAyAAIj9Dpg");
        this.shape_1.setTransform(23.1, 34);

        this.shape.mask = this.shape_1.mask = mask;

        this.timeline.addTween(cjs.Tween.get({}).to({state: []}).to({state: [
            {t: this.shape_1},
            {t: this.shape}
        ]}, 1).wait(19));

        // Layer 1
        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#1B7CC1").s().p("AgMAPIAAgdIAZAAIAAAdg");
        this.shape_2.setTransform(33.3, -3);

        this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(20));

    }).prototype = p = new cjs.MovieClip();
    p.nominalBounds = new cjs.Rectangle(32, -4.5, 2.7, 3.2);


// stage content:
    (lib.showSetas = function () {
        this.initialize();
        lib.edi.objetivos.push(0);
        lib.edi.objetivos.push(0);
        // Camada 1
        this.seta_02 = new lib.mc_seta2();
        this.seta_02.setTransform(496.6, 299.5, 4.108, 4.108, -90);

        this.seta_01 = new lib.mc_seta();
        this.seta_01.setTransform(266.6, 161.6, 4.108, 4.108, 90);

        this.addChild(this.seta_01, this.seta_02);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(666.4, 357.6, 218.5, 146.1);

})(lib = lib || {}, images = images || {}, createjs = createjs || {});
var lib, images, createjs;