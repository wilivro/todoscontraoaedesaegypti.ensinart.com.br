define(function(require){function _setConfig(config){_configEDI=config}function _telaAtual(){return edi.util.getURL("quest")}function _init(btnRevela,boxRevela,callback,callbackFinal,settings,callbackTempoBloqueio){function BtnRevClick(){var self=$(this),dataRev=$(this).attr("data-revela");config.ocultarRev&&$boxRev.fadeOut(),$boxRev.each(function(i,obj){dataRev==$(obj).attr("data-revela")&&(setTimeout(function(){"fade"==config.efeito?config.inverso?$(obj).fadeOut():$(obj).fadeIn():"slideDown"==config.efeito&&(config.inverso?$(obj).slideUp():$(obj).slideDown())},config.delay),config.ocultarBtn&&self.fadeOut(),self.attr("visualizada")||(peca.objetivos.pop(),edi.objetivos.pop(),edi.objetivos.unshift(1)),self.attr("visualizada",!0),callback&&callback(self,$(obj)),licao.config.WIQUADRO&&Wiquadro.api.addInteration(1,$(obj).attr("id"),self.attr("id"),"T"),ordem++,$('[data-index="'+ordem+'"]').on("click",BtnRevClick))}),$(this).removeClass("piscar"),$btnRev.off("click"),0!==peca.objetivos.length?config.tempoBloqueio?edi.regressiva(config.tempoBloqueio,"para clicar em outro botão",function(){$btnRev.on("click",BtnRevClick),callbackTempoBloqueio&&callbackTempoBloqueio(),$btnRev.mouseenter(function(){config.piscar&&$(this).addClass("piscar")}),$btnRev.mouseout(function(){config.piscar&&$(this).removeClass("piscar")}),self.off("click"),0===peca.objetivos.length&&config.bloqueiaClickFinal&&$btnRev.off("click")},config):($btnRev.on("click",BtnRevClick),$btnRev.mouseenter(function(){config.piscar&&$(this).addClass("piscar")}),$btnRev.mouseout(function(){config.piscar&&$(this).removeClass("piscar")}),self.off("click"),0===peca.objetivos.length&&config.bloqueiaClickFinal&&$btnRev.off("click")):config.bloqueiaClickFinal||edi.regressiva(config.tempoBloqueio,"para clicar em outro botão",function(){callbackTempoBloqueio&&callbackTempoBloqueio(),$btnRev.on("click",BtnRevClick),$btnRev.mouseenter(function(){config.piscar&&$(this).addClass("piscar")}),$btnRev.mouseout(function(){config.piscar&&$(this).removeClass("piscar")}),self.off("click")}),finalizada||edi.finalizar(),0===peca.objetivos.length&&(finalizada=!0,callbackFinal&&callbackFinal(self))}edi.iniciar(_configEDI);var peca=this,finalizada=!1,ordem=0,$btnRev=$("."+btnRevela),$boxRev=$("."+boxRevela),config={inverso:!1,tempoBloqueio:1e3,efeito:"fade",piscar:!0,ocultarBtn:!1,ocultarRev:!1,ordenado:!1,delay:0,bloqueiaClickFinal:!0};settings&&$.extend(config,settings),$btnRev.css("cursor","pointer"),config.inverso||$boxRev.hide(),$btnRev.on("click",BtnRevClick),$btnRev.attr("data-edi",'revela"'),$btnRev.mouseenter(function(){config.piscar&&$(this).addClass("piscar")}),$btnRev.mouseout(function(){config.piscar&&$(this).removeClass("piscar")}),$btnRev.each(function(i,data){peca.objetivos.push(0),edi.objetivos.push(0),$(data).attr("data-index",i)}),config.ordenado&&($btnRev.each(function(i,data){$(data).off("click")}),$('[data-index="0"]').on("click",BtnRevClick)),ARR_TAREFAS[tarefaRevela].resolve(config.cb)}var tarefaRevela=addTarefa(),edi=require("./edi"),_configEDI=null;return{root:edi,objetivos:[],setConfig:_setConfig,telaAtual:_telaAtual,revela:_init}});