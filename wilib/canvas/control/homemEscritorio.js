(function (lib, img, cjs) {

    var p; // shortcut to reference prototypes

// library properties:
    lib.properties = {
        width: 280,
        height: 315,
        fps: 24,
        color: "#FFFFFF",
        manifest: []
    };

// symbols:

    (lib.selecionado = function() {
        this.initialize();

        // Camada 1
        this.shape = new cjs.Shape();
        this.shape.graphics.f("#FFFFFF").s().p("AngPFIGao+IgDgUQjOABg2glQgpgsgUgtQgSgogBgoIgGgBIgJgoQgNg/gKg9IgHgpQgIgtgFguIgCgKQgJhHgGhHQgEiOAJhgIABgMIABgIQAJhFAUg6QACgPADgMQAFgbALgJIATgRQAAgBABAAQAAgBAAAAQABAAAAgBQAAAAABAAIADAAICWhBIAehAIAUACIBOibIgCgQQgEgRALgRIAIgKIAEAAIACgIQAJgnAcgZIAFgFQAHgGAJgFQAKgEAMgCQAXgFAcADQAQABATADQAbAPAVARQAUAOAPARQAOAOALAQIgCArIgDAAIgGBPIgXAVQAGAFADAFIACAEQAGAMgFAKIgDAFQgFAGgJACQgKADgLgDIgEgDIgDgBIgDANIgRAWIAAAGIgQABIgKAMIAFACIgIASIgHgGIgGANIgCAFIgMAGIgCgBIACAOIgMAdIgDAUIgVADIgIgGIAAAgQBQAbghB7IgBAFQgLAngJAoIBxA1IAJgOIBTAnIgEATIDjBOQAMAMALAMIAFAHQARAWAKAYIADAKIAAAAIgEBAQAAABgLABIgDgdIgOgEIgEgZIgMAAIgNgmQgRgEgTAMIgLAkIALgBIAwAeIgOAcIgCAMIgHABIAhAoIADAPIg2gzIgHABIgjAvIh0gNIjPAFIADAWIhEAHIApCCIgFAEIBIArIg3A9IEIAAIgCHGIisHpIBQAcIAAAuIjpgKIgOgYIgEAWIhbgIIAFg2IguAEIg0ghIA1BPIgYAcgAhAhbIgCgDIgCAAgAgjjzIBcATIgIAUIDcAeIBIgiIAAgBIg+hLIALgKIhxgFIgDALIhSgKIAAgJIgBgDIAAgDIhzgPIgLBVgABjuLIADACIADACQALADAJgCQALgCAEgJIABgCQAEgJgFgKQgDgIgHgFIgMALIADAKIgIgHIgIAMQgEAGACgHgABTuwIABgBIADgIgABXu5IAAAAIABgCgAgLv9IAAgBIgDgCgAhQwPIACgBIAAgBgAgNwgIABAAIAAAAg");
        this.shape.setTransform(49.1,119.2);

        this.addChild(this.shape);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(0,0,98.2,238.4);

    (lib.clickHomem = function(){
        //Callback Criado por Sergio felipe 29/09/2014 às 09:32 AM
    });

// stage content:
    (lib.homem_escritorio = function() {
        this.initialize();

        // Camada 2
        this.instance = new lib.selecionado("synched",0);
        this.instance.setTransform(88.5,179.3,1,1,0,0,0,49.1,119.2);
        var cor = this.instance;
        cor.alpha = 0.01;
        cor.children[0].on("mouseover",function(){
            cor.alpha = 0.5;
            cor.parent.parent.update()
            cor.parent.parent.enableMouseOver(10);
        });
        cor.children[0].on("mouseout",function(){
            cor.alpha = 0.01;
            cor.parent.parent.update()
        });

        cor.children[0].on("click",function(){
            lib.clickHomem();
            cor.alpha = 0.01;
            cor.parent.parent.enableMouseOver(0);
        });

        this.shape = new cjs.Shape();
        this.shape.graphics.f("#682209").s().p("AgqCxIAAmkIBVAuIAAG5g");
        this.shape.setTransform(214.8,282.6);

        this.shape_1 = new cjs.Shape();
        this.shape_1.graphics.f("#BA8C72").s().p("AiTAZIAkgKIAkASIgiAMgAAhgSIBPgaIAjARIhZAag");
        this.shape_1.setTransform(231.4,255.6);

        this.shape_2 = new cjs.Shape();
        this.shape_2.graphics.f("#220308").s().p("AjxiTIHjiSIAAGVInjC2g");
        this.shape_2.setTransform(243.4,277.6);

        this.shape_3 = new cjs.Shape();
        this.shape_3.graphics.f("#0D0000").s().p("AhZBAIAAghIAAgqICzg0IAAArIAAAjIgPAAIAAgeIAAgQIiLAkIAAASIAAApg");
        this.shape_3.setTransform(237.9,249.7);

        this.shape_4 = new cjs.Shape();
        this.shape_4.graphics.f("#582102").s().p("AkdAsIC4gzIAAAfIAaAAIAAgmICKgpIAAAgIAQAAIAAgkIBogeIBnAjInkCQgAjfAsIAmAVIAhgNIgkgSgAgpAAIAZAQIBXgYIgkgRgACJg+IApAVIAmgOIgrgQg");
        this.shape_4.setTransform(239,253.7);

        this.shape_5 = new cjs.Shape();
        this.shape_5.graphics.f("#C28C70").s().p("AgmgEIAkgKIApAPIgmAOg");
        this.shape_5.setTransform(256.8,247.9);

        this.shape_6 = new cjs.Shape();
        this.shape_6.graphics.f("#A39F96").s().p("AizClIgimGQAKAWAzARQA/AVBZAAQBYAAA/gVQA4gSAHgZIg/GXQhWA0hNAAQhYAAhPhBg");
        this.shape_6.setTransform(184.8,284.5);

        this.shape_7 = new cjs.Shape();
        this.shape_7.graphics.f("#67645F").s().p("AiYAxQgzgRgJgWIgCgPQAGgZA4gSQBAgVBYAAQBZAAA/AVQA/AUAAAcIAAAAIgBAGQgHAZg3ASQg/AVhZAAQhYAAhAgVg");
        this.shape_7.setTransform(184.8,260.8);

        this.shape_8 = new cjs.Shape();
        this.shape_8.graphics.f("#4F2A18").s().p("AAHAdIgEgZIgKAAIgNgkQAKACAKAKQAFAHAHAJIAHAKIACAbg");
        this.shape_8.setTransform(133.6,157);

        this.shape_9 = new cjs.Shape();
        this.shape_9.graphics.f("#1A1A18").s().p("AiCATIAAgkIEEAAIAAAkg");
        this.shape_9.setTransform(104.1,198.2);

        this.shape_10 = new cjs.Shape();
        this.shape_10.graphics.f("#FCFFFF").s().p("AhGBHQAMhQAShMIBvA0QgcA8ACA7g");
        this.shape_10.setTransform(93.1,139.1);

        this.shape_11 = new cjs.Shape();
        this.shape_11.graphics.f("#701012").s().p("AgIAlIAFguIgZgfIAZggIAhAbIgNAkIANAxIgNAhg");
        this.shape_11.setTransform(81.7,117.7);

        this.shape_12 = new cjs.Shape();
        this.shape_12.graphics.f("#010101").s().p("AnSIHIGZo8IgCgUQjPABg1glQgqgsgUguQgRgogBgoQBiAIBbgSQB6gWBrhDIBJArIg3A9IABAAIAAAmIEGAAIgCGdIirHqIBPAcIAAAuIjogKIgOgYIgFAVIhbgHIAFg2IgtAEIg0giIA1BQIgYAcgAGepIIASgDIAgAoIADAPgAEkraIAMgKIAEgEIBFBYIgWABg");
        this.shape_12.setTransform(87.1,223.9);

        this.shape_13 = new cjs.Shape();
        this.shape_13.graphics.f("#FBF8E9").s().p("AggGVIgIgXIgCgDQgGgYgBgaQAAgrARgxIABAAIACgJIARACIBdAUIgIATIgCAHIgBACIgGAUQgJAmADApIAEAWIhEAGgAB0CwIAAgKIgBgDIAAgDQgCg7Acg+IAIgNIBUAnIgFASIgbBbIgDAMgAjllWIgDABIAeg/IAUACIgKAUICQCqIgZAfIgTAagAgNi5IgjgbIAehRIASAQIAAAfIAABHgAgwjUg");
        this.shape_13.setTransform(86.1,131.7);

        this.shape_14 = new cjs.Shape();
        this.shape_14.graphics.f("#1B191A").s().p("Ai5HrIgGgBIgJgoQgNg/gKg9IgHgrQgIgtgFguIgCgKQgJhHgGhHQgEiMAJhgIABgMIABgIQAJhFAUg6IgBANQgWD8BBDqQBpAnBnASQBCAMBCAEIAEADIAJAXIAZAAIArCEIgFAEQhuBDh5AXQg+AMhEAAQgcAAgegCgACqBWIi/ghIgVkrIgBgNQgRizh2AMICWhBIADgBICIC6IAAAAIAnA3IAbAjIAMghQALglAEgnIAAhHQBSAbghB7IgBAFQgLAngJAoQgSBNgMBSIgLBTIgSgDIgCAKg");
        this.shape_14.setTransform(65.7,146.7);

        this.shape_15 = new cjs.Shape();
        this.shape_15.graphics.f("#652B15").s().p("AgYAwIADgXIABAQQAMAVAKgSQgEANgIAAQgGAAgIgJgAgDgpIgPgEIAJgLIAEAAQAXgBAHAxIAAAEIgBACIgGAEIgKAKQAEglgPgQg");
        this.shape_15.setTransform(77.9,75.5);

        this.shape_16 = new cjs.Shape();
        this.shape_16.graphics.f("#5B280B").s().p("AgUAOIgIgcIARACIAIATIAgAEIAAACIgQABIgdABg");
        this.shape_16.setTransform(93.4,91.5);

        this.shape_17 = new cjs.Shape();
        this.shape_17.graphics.f("#58190A").s().p("Ah9ACIAKgSIBNibIACAWIgEAYIgRB6IA+A+IADACIAnAeIgeBRgABuAuIhBgoIAiAGIAwAZIgDAFIgMAFg");
        this.shape_17.setTransform(79.5,93.1);

        this.shape_18 = new cjs.Shape();
        this.shape_18.graphics.f("#762D1A").s().p("ADTFtIgCgbIgHgLQgHgJgHgHQgKgKgLgCQgQgFgTAMIgLAkIgSACIhGhYIgEADIhvgFIAbhbIDhBOQANAMALANIAFAGQAQAWALAZIADAJIAAAAIgFBAQAAABgKABgAjkkyIAfgBIgKAMgAi2mJIAGAEIAAABIgBABIgBADIgBABIAAADQgBAHAEAIQAEAKALAHIgDAMIgRAWgAitltQgEgIACgHIAOAOIABABIACADIgDAKQgHgFgFgIg");
        this.shape_18.setTransform(114.6,123.7);

        this.shape_19 = new cjs.Shape();
        this.shape_19.graphics.f("#FFFFFF").s().p("ABsHNQhCgEhAgLQhpgThpgnQhBjsAWj6IABgNQACgPADgLQAFgcALgJIATgQQAAgBAAgBQABAAAAgBQAAAAABAAQAAAAABAAIADAAQB2gMARCyIABANIAVErIC/AiQgRAwAAAsQABAaAGAYIgCAAgAB/hDIAMgkIAPAKQgEAngLAlgAA9hJIAAAAIASgaIAaAgIgFAwgAEGl7IACgFIABgBQACgFAFgCIAAgBIAKAJQgKAKAFAKgAEKmMIADABIgBABgACom4IgBgFIgBgOIAEgBIAfAbQgKAOAKANg");
        this.shape_19.setTransform(70.7,123.5);

        this.shape_20 = new cjs.Shape();
        this.shape_20.graphics.f("#501600").s().p("ABDA1IgXgIIAGgDIAFAAQAJgBAKAEIAFAEIgMALgABKArQgJgFgKABIgGABQgFABgEACIgDgBIgBAAIABAAIAAgBIAUgjIAmAaIgPAPIgGgEgAgKAhQAGgBADgFIAEAFIAAgQIg6gkQAQAAATAJQAUALAJALQAFAHACAGIAAAGIgBAEIgCADIgEADIgIADgAAMALQgMgNgUgLQgWgLgSAAIgCgBIgDgCIADADQgNAAgGAGIgNgJIAfgfQAyAPAqAmIgMAYIgFgIgAhLgPQAEgDAKgBIACAOg");
        this.shape_20.setTransform(93.6,79.5);

        this.shape_21 = new cjs.Shape();
        this.shape_21.graphics.f("#000000").s().p("ABMBGIgFgCIgCgBQgLgGgFgLQgDgHABgHIAAgEIABgBIABgCIABgBIAAgBIABgCIACgHIgDAJIgGgFIgKgHQgEAEgGACIgDAAIgJABQgRgBgWgKQgWgKgMgOQgIgJAAgIIAAAAIgygeIAGgGIACgBIACgEIAgAUIANAJQAGgHAOAAIAAAAIABAAQATABAUAKQAVALAMAPIAGAIQAEAGgBAGIAPAKIABAAIADACIAAgBQAEgDAFgBIAGgBQAKAAAJAFIAHADQAFAEAEAGIACAEQAFAMgFAKIgCAFQgFAGgKABQgFACgFAAIgKgCgABAAWQgEACgDAFIgBABIgBAFQgCAHAEAIQAEAIAIAGIAEACIADABQAKADAJgBQALgCAFgJIAAgCQAFgJgFgKQgEgIgHgFIgFgDQgJgFgKACIgEAAIgGADIAWAIIABAGIADAKIgJgHIgJgIIgJgJIgBABgAgogsQgJABgFADIgDAEQgFALALANQALAMAUAJQATAKAQAAIAHAAIAIgEIAEgCIACgDIABgFIAAgFQgCgEgFgIQgLgNgTgKQgRgJgQgBIA5AnIAAANIgFgEIgXgUIgggcIgEABg");
        this.shape_21.setTransform(91.4,82);

        this.shape_22 = new cjs.Shape();
        this.shape_22.graphics.f("#8D4421").s().p("ABfIBIjNAFQgDgpAJgmIAGgUIABgCIACgHIDZAeIBJgiIAAAAIAWgBIASgCIAMgBIAvAfIgOAbIgBAMIgHACIgSADIgHACIgkAvgAjPjCIgDhKIBsAwIgGAOIgwgZIgigGIBCAoIABAOIgLAegAjli4IhAhAIARh7QARATALgXQgMASgMgVIgBgQIgCgWIgBgRQgFgQALgRIAPAEQARAQgEAnIAKgKIAyAeIAAAAQAAAIAIAKQAMAPAWALQAWAKATAAIAJAAIADgBQAGgBAEgEIAKAHIABBQIAAAEIgigFIgIgVIgSgBIAIAdIhIgkIgiADIgDBhgAiJlZQgUgKgLgNQgLgOAFgKIADgEIAQAKIABAGIAhAhQAJAEAHgCIAMAJIgHABQgSgBgTgJgAhJlaQABgGgEgIIALgaIAAgBIANgSIhAgnIgqAEIgCABIABAAIgfAgIgggUIA2hHIAsAAIATgbQAmApAcAWQAVARAOAHQAJAGAIAAIgFA+IgigRIgNANIACABIgUAjIgBABg");
        this.shape_22.setTransform(103.1,117.6);

        this.shape_23 = new cjs.Shape();
        this.shape_23.graphics.f("#040002").s().p("AgxDXIgTgPIgngfIAChgIAjgEIBGAlIAEABIAWALIAEACIgIASIgGgGIhqgxIADBKIBIApIgCAUIgYADgABJAwIgBgCQgFgKAKgJIAJAIIgHAMQgFAGACgHIgCAFIgBgDgAgCAEQgKgLAKgNIAXAUQgDAFgGABIgEABQgGAAgEgDgABRgTIgCgBIAMgNIAlARIgBAQIgIAFgAgnhWIAAAAIAogFIBAAnIgMATIAAAAQgsgmgwgPgAhphHIAAgEQgHgygaACIADgIQAIgnAcgZIAFgFQAIgGAIgFQAKgEAMgCQAXgFAeADQAOABATADQAbAPAWARQATAOAPARQAOAOALAQIgCArIgDAAQgIAAgMgFQgOgHgUgRQgcgXgngoIgQAaIgtAAIg1BHIgDAEIAAgBg");
        this.shape_23.setTransform(91.2,82.2);

        this.shape_24 = new cjs.Shape();
        this.shape_24.graphics.f("#E4E3DE").s().p("AibD2IDuhuIAAmhIBQAQIAAHZIkuAuIgCAVQgLABgKAGg");
        this.shape_24.setTransform(46.1,252.6);

        this.shape_25 = new cjs.Shape();
        this.shape_25.graphics.f("#860000").s().p("ACfCPQjPg2kCghQgVgMgHgWQAAgVAhgZQApgrArgcQAwgfAygNQAagGAagCIGSCvIgTAlIgTAlQgdAuhAAAQgVAAgYgFg");
        this.shape_25.setTransform(52.1,206.5);

        this.shape_26 = new cjs.Shape();
        this.shape_26.graphics.f("#000000").s().p("AgcJDQgQgQAAgWQAAgXAQgRIAKgHQAKgHAJgBIAIAAQAXAAAQAPQAQARAAAXQAAAWgQAQQgQAQgXABQgVgBgQgQgAgGl1IgSgKIALgSIgUgFIAMgZIgXgIIAQgaIgXgKIAMgVIgXgKIALghIgfgSIASgDQAtgRAhgSIgEAXIAVAFIgQAZIAaAKIgLASIANALIgHAUIAXANIgNAZIAcAOIgSAeIAbANQgyAMguAgg");
        this.shape_26.setTransform(31.7,231.5);

        this.shape_27 = new cjs.Shape();
        this.shape_27.graphics.f("#7E0100").s().p("Ah9CtIgDgGIgBgCQhHh3BEiUQBkiMBrAfQCUCehcCZIgBADQgNAVgRAUIhxA7QgXAPgWAAQglAAgegtg");
        this.shape_27.setTransform(32.4,149.9);

        this.shape_28 = new cjs.Shape();
        this.shape_28.graphics.f("#380106").s().p("ADBHsIgmgIIhQgQIlghKQgZgfATg2IABAFIAAgBQAHAWAVALQEAAiDRA1QBjAUAng9IATglIgqB3QgnAYguAAQgXAAgZgGgAlYhWQgziMBAiDQAyhfBtgnQATgMBVAOIAAACQhtgfhkCMQhECWBHB3IABACIADAGQAvBGBBgoIBzg7QARgUANgVIgjA+QghAbg3AbQgjASgtARIgSADIgOAAQhIAAgYhFg");
        this.shape_28.setTransform(46.9,177.5);

        this.shape_29 = new cjs.Shape();
        this.shape_29.graphics.f("#F2E9E4").s().p("AkTA8IgUAAIA2hiIASghIFUAIICzAEIhQCDg");
        this.shape_29.setTransform(152.8,164.5);

        this.shape_30 = new cjs.Shape();
        this.shape_30.graphics.f("#99C2E2").s().p("AlQBTIAagcIHrAMIBPiDIiygEICtgJIBSgFIgLAUIgiBAIglBIIgFAJg");
        this.shape_30.setTransform(156.3,165);

        this.shape_31 = new cjs.Shape();
        this.shape_31.graphics.f("#E0EDF6").s().p("ADlBTIAlhIIAdA/IAIASgAkchbIH3AAIAKAXIitAJIlUgIIgSAgg");
        this.shape_31.setTransform(158.9,164.1);

        this.shape_32 = new cjs.Shape();
        this.shape_32.graphics.f("#EDB4E1").s().p("AgoBAIgdg/IAihAIAvAAIA6B/g");
        this.shape_32.setTransform(192.7,165.1);

        this.shape_33 = new cjs.Shape();
        this.shape_33.graphics.f("#ABADB9").s().p("AgwgFIAegJIBDAOIgmAPg");
        this.shape_33.setTransform(245.4,155.9);

        this.shape_34 = new cjs.Shape();
        this.shape_34.graphics.f("#4F5E5B").s().p("AhKAPICDgnIASANIiIAkg");
        this.shape_34.setTransform(227,157.4);

        this.shape_35 = new cjs.Shape();
        this.shape_35.graphics.f("#060000").s().p("AiIBmQhggXABgdQACgdAYgJIAmAAIAAgkQBwg3CLgbIAyAcIBiASIAACIIlQAfgAjNAvQAkAWAtgLIgrgaIgbgIQgOAIADAPgAhdgRIANAKICIgmIgSgNgAByg2IA9AWIAngPIhFgQg");
        this.shape_35.setTransform(228.9,160.8);

        this.shape_36 = new cjs.Shape();
        this.shape_36.graphics.f("#8E0001").s().p("AgxBkIAAjUQADACALACIABAAIAOACIAUABIAOAAQAMgBAJgCQAHgBAIgFIgPDWQgVAPgUAAQgVAAgWgPg");
        this.shape_36.setTransform(216.2,152.3);

        this.shape_37 = new cjs.Shape();
        this.shape_37.graphics.f("#660000").s().p("AgUAIIgDgPIAXAAIAAAQIgUgBgAAPgHIAUACQAPADAAACQgIAEgHACQgJABgMABgAgjAGQgLgDgDgCIAAgBQADgCAHgDIAFALg");
        this.shape_37.setTransform(216.2,140.8);

        this.shape_38 = new cjs.Shape();
        this.shape_38.graphics.f("#001B00").s().p("AAWAwIAAhxIAaAAIgJBxIgBARIgQABgAgLA/IgEgMIgghdIASgQIAdBrIACAQIgNgCg");
        this.shape_38.setTransform(213.8,135);

        this.shape_39 = new cjs.Shape();
        this.shape_39.graphics.f("#6A6C5F").s().p("AhjgZIDHAVIgBAfg");
        this.shape_39.setTransform(183.3,141.4);

        this.shape_40 = new cjs.Shape();
        this.shape_40.graphics.f("#CFCECA").s().p("AkUFfIAAgfICIg1IAAhWIg5gGIgHARIgpAAIA4oeIBaANIAAAaIF4DOIhQFDIiKgPIjHgWIDGA2IgBAgIB9AtIAAAng");
        this.shape_40.setTransform(187.4,120.5);

        this.shape_41 = new cjs.Shape();
        this.shape_41.graphics.f("#201815").s().p("AiFAQIAAgfIELAAIAAAfg");
        this.shape_41.setTransform(104.2,197.2);

        this.shape_42 = new cjs.Shape();
        this.shape_42.graphics.f("#DCD2D3").s().p("AhQBmICVjJIAMgCIiKDLg");
        this.shape_42.setTransform(116.3,172.8);

        this.shape_43 = new cjs.Shape();
        this.shape_43.graphics.f("#D8DCC5").s().p("AhPBnICKjKIAVgDIhTB7IgBBSg");
        this.shape_43.setTransform(118.5,172.6);

        this.shape_44 = new cjs.Shape();
        this.shape_44.graphics.f("#1B191A").s().p("Aq0JVIATu3IAAghIACheIABgfIABhSIVSgCIgiSpg");
        this.shape_44.setTransform(185.1,234.3);

        this.shape_45 = new cjs.Shape();
        this.shape_45.graphics.f("#666165").s().p("Ai9C2IEplrIBSAAIgXAhIgVADIgMABIgLABIifDIIAAAhIB0gCIgCBeg");
        this.shape_45.setTransform(109.8,177.2);

        this.shape_46 = new cjs.Shape();
        this.shape_46.graphics.f("#D7D6D1").s().p("Ag6gPIAVAAIAXAAIBJAAIgBAdIh0ACg");
        this.shape_46.setTransform(112,184.6);

        this.shape_47 = new cjs.Shape();
        this.shape_47.graphics.f("#C7BCCD").s().p("AhUBlICfjIIAKgBIiVDJg");
        this.shape_47.setTransform(114.6,172.8);

        this.shape_48 = new cjs.Shape();
        this.shape_48.graphics.f("#62655A").s().p("ApUAAIAXghIA9hZIPWAAIDTDzI1RACg");
        this.shape_48.setTransform(186.3,162.4);

        this.shape_49 = new cjs.Shape();
        this.shape_49.graphics.f("#5A7E1A").s().p("AlITiIAA7qIBZAAIAAjhIg6ARQgDhWAygmIAUgYIhGgBQguB+hqhJQAjg+BFgFQgZgBgLgQQgnARg/geQA7hOBdAGIBQARIgSglIgYgFQiLAmgFiHQBoADAlBQIAUAFIgWgsQgChbBegtQAeB8huAMIAoBTIAHgiQARhNBBgeQgVgTgFhDIATgiIA9AxIACAHQAFAYgIAVQA3AWATAqIACgNQgsgiAOgrIAOgdIBAA3IAXA+Ig4gFIgMAZQADAKABAMIA6gTQAEgJAFgHIAEgGQAPgUAZgQIAUgLIA/AhQgyBbhQgtIhAAWIgBAKQgTACgQgCIgBAAQAfAKAMAOQgSAbgdAMIAAAdIAzgGQgMgIgLgMQAggnBEANIgIgjQCGACAUBQQgqAMgqgMQgVAUgdAAQBdAlASAzQg9AdhDgdIAAALIgiAAQAkA2gJA7QgqgMgIgWIAADYIDjAAIAAmHIBbAAIAAGHIAfAAIAAmEIBSAAIAAGEIA3AAIAAA4IsLAAIAACVIAbAAIAAiDICfAAIAAEWIDUAAIAAjYICVAAIAAg7IBAAAIAAETIBmAAIAAkPIBCAAIAAaZgAiAPYIAADXII/AAIAAk3IrjAAIAAE3IAkAAIAAjXgAkkNPILjAAIAAqJIrjAAgAGlhgIAAEHIAaAAIAAkrIrjAAIAAErIF4AAIAAjnICvAAIAADnIAYAAIAAjYIA6AAIgCDYIAkAAIAAkHgAg4uUQgIAfgmALIAAAiIAhAEQATgzBUADQgWgOAIgOQgLgFgJgHgAkft4IA7AAIAFgjIgXgQQgFAggkATgAjwu0IgHgOIhVgSIgGAUQAzgJAvAVgAjuvFIAHAPIBFgQQgTgKAFgcQgXAOglgVgAigxpQAJAHALABQgDBGgSAeQAkgJA5AIQhFgMAIhZIgLACIAAgQQgKADgKAFg");
        this.shape_49.setTransform(68.5,146);

        this.shape_50 = new cjs.Shape();
        this.shape_50.graphics.f("#90BF4F").s().p("AvpU3MgCSgptUAdoADiAGPAmLg");
        this.shape_50.setTransform(134.2,154.5);

        this.shape_51 = new cjs.Shape();
        this.shape_51.graphics.f("#5A7E1A").s().p("AQXV6UgGPgmLgdogDhIgHiHMAnPACUMgBXApfg");
        this.shape_51.setTransform(144.3,147.8);

        this.addChild(this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
    }).prototype = p = new cjs.Container();
    p.nominalBounds = new cjs.Rectangle(150.1,165,260,300.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;