define(function (require) {

    var id = "canvas_"+$('canvas').length;
    var _icone = $('<canvas>')
        .css({
            position: 'absolute',
            top: 0,
            left: 0,
            background: 'transparent'
        })
        .attr('id', id)
        .attr('width', '105')
        .attr('data-name','muitoBem')
        .attr('height', '107')

    function _init() {
        canvas = this.obj[0];
        exportRoot = new lib.muitoBem();

        stage = new createjs.Stage(canvas);
        
        stage.scaleX = WINDOW_WIDTH/WIDTH_DEFAULT;
        stage.scaleY = stage.scaleX;

        var canvasWidth = 105;
        var canvasHeight = 107;

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