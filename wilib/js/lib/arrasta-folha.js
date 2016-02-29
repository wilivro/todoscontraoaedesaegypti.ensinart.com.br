define(function(require){"use strict";function _setConfig(config){_configEDI=config}function _init(folhas,callBack,callBackFinal,settings){edi.iniciar(_configEDI);var config={width:100,height:120,fontSize:13,lineHeight:1,minScale:.6,maxScale:1.3,tamanhoAlvo:640};settings&&$.extend(config,settings);var $arrastaFolha=$("<section>").addClass("arrasta-folha").attr("data-edi","arrastaFolha").appendTo("#conteudo"),rotate=($("<div>").addClass("pasta-back").appendTo($arrastaFolha),$("<div>").addClass("pasta-front").appendTo($arrastaFolha),-45),left=5;folhas.forEach(function(obj){var $arrasta=$("<div>").addClass("arrasta").attr("data-correta",0).css({position:"absolute",left:left,top:59}).appendTo($arrastaFolha),$folha=$("<div>").addClass("arrasta-folha-folha").html("<span>"+obj+"</span>").attr("data-rotate",rotate).css({transform:"rotate("+rotate+"deg) scale("+config.minScale+")",fontSize:config.fontSize}).appendTo($arrasta);$folha.mouseenter(function(){self=$(this),self.css({transform:"rotate("+self.attr("data-rotate")+"deg) scale(0.8)",zIndex:1})}).mouseleave(function(){self=$(this),self.css({transform:"rotate("+self.attr("data-rotate")+"deg) scale("+config.minScale+")",zIndex:0})}).click(function(){self=$(this),self.css({transform:"rotate(0deg) scale("+config.minScale+")",zIndex:1})}),rotate+=15,left+=3});var $alvos=$("<section>").addClass("arrasta-folha-alvos").appendTo($arrastaFolha);folhas.forEach(function(obj){$("<div>").addClass("alvo").attr("data-correta",0).css({width:config.tamanhoAlvo/folhas.length,height:315,"float":"left"}).appendTo($alvos)});var self;arrastaMod.arrasta("arrasta","alvo",function(a,b,c){b.unbind(),b.find(".arrasta-folha-folha").off(),c.find(".add").css({width:"auto",height:"auto"}),a&&(b.css({top:c.height()/2-b.height()/2,left:c.width()/2-b.width()/2,display:"table-cell"}),b.find(".arrasta-folha-folha").css({transform:"rotate(0deg) scale("+config.maxScale+")",lineHeight:config.lineHeight})),callBack&&callBack(a,b,c)},function(a){callBackFinal&&callBackFinal(a)},{target:!1}),ARR_TAREFAS[tarefaArrastaFolha].resolve()}var tarefaArrastaFolha=addTarefa(),edi=require("../lib/edi"),_configEDI=null,arrastaMod=require("../lib/arrasta");return{objetivos:[],setConfig:_setConfig,arrastaFolha:_init}});