define(function (require) {

    var _canvas = function(){

        var id = "canvas_"+$('canvas').length;
        var _icone = $('<canvas>')
            .css({
                position: 'absolute',
                top: 0,
                left: 0,
                background: 'transparent'
            })
            .attr('id', id)
            .attr('width', '280')
            .attr('data-name','homemEscritorio')
            .attr('height', '315')

        function _init(settings) {
            canvas = this.obj[0];
            console.log(canvas)
            exportRoot = new lib.homem_escritorio();

            lib.clickHomem = this.clickHomem;

            stage = new createjs.Stage(canvas);
            stage.enableMouseOver(10);

            var configCanvas = {
                width: 280
            };

            if (settings) {
                $.extend(configCanvas, settings);
            }

            var canvasWidth = 280;
            var canvasHeight = 315;

            stage.scaleX = (configCanvas.width*WINDOW_WIDTH)/(canvasWidth*WIDTH_DEFAULT);
            stage.scaleY = stage.scaleX;

            _icone.attr({
                width:canvasWidth*stage.scaleX,
                height:canvasHeight*stage.scaleY
            });

            _icone.css({
                "transform-origin":'top left',
                "transform":"scale("+(1/stage.scaleX)+")"
            });

            stage.addChild(exportRoot);
            stage.update();

            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }

        return {
            obj: _icone,
            play: _init,
            clickHomem: null
        };
    }

    return {homem:_canvas};

});