define(function (require) {

    var _canvas = function() {

        var id = "canvas_" + $('canvas').length;
        var _icone = $('<canvas>')
            .css({
                position: 'absolute',
                top: 0,
                left: 0,
                background: 'transparent'
            })
            .attr('id', id)
            .attr('width', '65')
            .attr('data-name', 'prosseguir')
            .attr('height', '68')

        function _init(cor) {
            lib.properties.color = (!!cor)?cor:"#000";
            canvas = this.obj[0];
            exportRoot = new lib.prosseguir();

            stage = new createjs.Stage(canvas);

            stage.scaleX = WINDOW_WIDTH / WIDTH_DEFAULT;
            stage.scaleY = stage.scaleX;

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

    return {mascote:_canvas};

});