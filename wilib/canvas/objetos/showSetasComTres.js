define(function(require){var _canvas=function(){function _init(edi,licao,settings,cb){canvas=this.obj[0],lib.edi=edi,lib.licao=licao,exportRoot=new lib.Revela_Q04,lib.callback&&(lib.callback=cb),stage=new createjs.Stage(canvas);var configCanvas={width:788};settings&&$.extend(configCanvas,settings);var canvasWidth=788,canvasHeight=383;stage.scaleX=configCanvas.width*WINDOW_WIDTH/(canvasWidth*WIDTH_DEFAULT),stage.scaleY=stage.scaleX,_icone.attr({width:canvasWidth*stage.scaleX,height:canvasHeight*stage.scaleY}),_icone.css({"transform-origin":"top left",transform:"scale("+1/stage.scaleX+")"}),stage.addChild(exportRoot),stage.update(),createjs.Ticker.setFPS(lib.properties.fps),createjs.Ticker.addEventListener("tick",stage)}var id="canvas_"+$("canvas").length,_icone=$("<canvas>").css({position:"absolute",top:68,left:0,background:"transparent"}).attr("id",id).attr("width","1788").attr("data-name","Revela_Q04").attr("height","383");return{obj:_icone,play:_init}};return{seta:_canvas}});