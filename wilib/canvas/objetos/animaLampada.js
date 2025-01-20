define(function (require) {

    var _canvas = function() {

        var id = "canvas_" + $('canvas').length;
        var _icone = $('<canvas>')
            .css({
                position: 'relative',
                top: 0,
                left: 0,
                background: 'transparent'
            })
            .attr('id', id)
            .attr('width', '120')
            .attr('data-name', 'reflita')
            .attr('height', '120')

        function _init() {
            canvas = this.obj[0];
            exportRoot = new lib.lampada();

            stage = new createjs.Stage(canvas);

            stage.scaleX = getScale();
            stage.scaleY = getScale();

            var canvasWidth = $("#" + id).width();
            var canvasHeight = $("#" + id).height();

            $("#" + id).attr({
                width: canvasWidth * stage.scaleX,
                height: canvasHeight * stage.scaleY
            });

            $("#" + id).css({
                "transform-origin": 'top left',
                "transform": "scale(" + (1 / stage.scaleX) + ")"
            });

            stage.addChild(exportRoot);
            stage.update();

            createjs.Ticker.setFPS(lib.properties.fps);
            createjs.Ticker.addEventListener("tick", stage);
        }

        return {
            obj: _icone,
            play: _init
        };
    }

    return {lampada:_canvas};

});
