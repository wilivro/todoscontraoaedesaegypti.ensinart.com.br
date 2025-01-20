define(function (require) {

    var _icone = $('<canvas>')
        .css({
            position: 'absolute',
            top: 0,
            left: 0,
            background: '#FFF'
        })
        .attr('width', '520')
        .attr('data-name','bolicheErro')
        .attr('height', '157')

    function _init() {
        canvas = this.obj[0];
        exportRoot = new lib.Boliche_erro_Mini_Canvas();

        stage = new createjs.Stage(canvas);
        stage.scaleX = getScale();
        stage.scaleY = getScale();

        var canvasWidth = _icone.width();
        var canvasHeight = _icone.height();

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
    };

});