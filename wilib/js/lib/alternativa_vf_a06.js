define(function(require){function _setConfig(config){_configEDI=config}function _telaAtual(){return edi.util.getURL("quest")}function _init(alternativas,callBack,callBackFinal,settings){edi.iniciar(_configEDI),_configEDI.qtdTelas=edi.qtdTelas;var peca=this,config={aleatorio:!0,fontSize:10,top:80,left:10,textAlign:"initial",width:500};settings&&$.extend(config,settings),config.aleatorio&&alternativas.sort(function(){return.5-Math.random()});for(var ctAll=$("<secition>").css({position:"absolute",top:config.top,left:config.left}).appendTo("#conteudo"),finalizar=function(id,acertou){edi.objetivos.pop(),edi.objetivos.unshift(acertou?1:2),peca.objetivos.pop();var status=!!acertou;licao.config.WIQUADRO&&Wiquadro.api.addInteration(6,id,null,status),!peca.objetivos.length&&edi.objetivos.indexOf(2)>=0&&(edi.objetivos=[2]),0===peca.objetivos.length&&(edi.objetivos.indexOf(2)<0?callBackFinal&&callBackFinal(!0):callBackFinal&&callBackFinal(!1),edi.finalizar()),callBack&&callBack(acertou)},clique=function(){var $self=$(this),correta=JSON.parse($self.attr("data-correta")),pos=$self.attr("data-alternativa"),visto=$('.result[data-alternativa="'+$self.attr("data-alternativa")+'"'),id=$self.attr("id");$('[data-alternativa="'+pos+'"]').css({cursor:"default"}).off(),correta?($self.closest(".ct").find(".p2").css({color:"#9c0"}).html(alternativas[pos].msgT),$self.find(".middle").css({color:"#9c0"})):$self.closest(".ct").find(".p2").css({color:"#f00"}).html(alternativas[pos].msgF),require(["../../canvas/objetos/animaCerto","../../canvas/objetos/animaErrado"],function(Certo,Errado){if(correta){var certo=new Certo.animaCerto({cor:"#0060B6",width:20});certo.obj.css({position:"",marginLeft:5,marginTop:6,display:"inherit"}).appendTo(visto),certo.play(),finalizar(id,!0)}else{var errado=new Errado.animaErrado({cor:"#F00",width:20});errado.obj.css({position:"",marginLeft:5,marginTop:7,display:"inherit"}).appendTo(visto),errado.play(),finalizar(id,!1)}})},i=0;i<alternativas.length;i++){var middle;edi.objetivos.push(0),peca.objetivos.push(0),corretas.push(alternativas[i].dataCorreta?1:0);var ct=$("<div>").addClass("ct").css({border:"1px solid #CCC",background:"#fff",borderRadius:10,width:config.width-13,height:config.height,marginTop:5}).appendTo(ctAll),boxTexto=$("<div>").css({display:"inline-block",textAlign:"center",width:config.width-150,marginLeft:5,borderWidth:"0 1px 0 0",borderColor:"#CCC",borderStyle:"solid",height:ct.height()}).appendTo(ct),boxSuport=$("<div>").addClass("boxSuport").css({position:"absolute",textAlign:config.textAlign,width:config.width-155,height:ct.height()}).appendTo(boxTexto),boxCenter=$("<div>").css({display:"table-cell",verticalAlign:"middle",width:config.width-155,height:ct.height()}).appendTo(boxSuport),boxCirc1=($("<p>").css({display:"table-cell",color:"#666",width:config.width-155,fontSize:config.fontSize}).html(alternativas[i].texto).appendTo(boxCenter),$("<p>").addClass("p2").css({margin:0,width:config.width-155,fontSize:config.fontSize}).appendTo(boxCenter),$("<div>").attr({id:"btn1"+i,"class":"botao","data-alternativa":i,"data-correta":!!alternativas[i].dataCorreta}).css({display:"inline-block",width:65,borderWidth:"0 1px 0 0",borderColor:"#CCC",borderStyle:"solid",cursor:"pointer",height:ct.height()}).appendTo(ct).mousedown(clique)),certo=$("<div>").css({position:"absolute",width:65,height:ct.height()}).appendTo(boxCirc1);middle=$("<div>").addClass("middle").css({verticalAlign:"middle",display:"table-cell",textAlign:"center",width:65,height:ct.height(),color:"#666"}).html("CERTA").appendTo(certo);var boxCirc2=$("<div>").attr({id:"btn2"+i,"class":"botao","data-alternativa":i,"data-correta":!alternativas[i].dataCorreta}).css({cursor:"pointer",display:"inline-block",width:65,height:ct.height()}).appendTo(ct).mousedown(clique),errado=$("<div>").css({position:"absolute",width:65,height:ct.height()}).appendTo(boxCirc2);middle=$("<div>").addClass("middle").css({verticalAlign:"middle",display:"table-cell",textAlign:"center",width:65,height:ct.height(),color:"#666"}).html("ERRADA").appendTo(errado);$("<div>").attr({"data-alternativa":i,"class":"result"}).css({marginTop:config.height/2-16,marginLeft:64,background:"#FFF",borderWidth:"1px 1px 1px 2px",borderColor:"#CCC",borderLeftColor:"#FFF",borderStyle:"solid",borderRadius:"0 5px 5px 0",width:30,height:30}).appendTo(boxCirc2)}ARR_TAREFAS[tarefaAlternativa].resolve()}var tarefaAlternativa=addTarefa(),corretas=[],edi=require("../lib/edi"),_configEDI=null;return{objetivos:[],setConfig:_setConfig,iniciar:_init,telaAtual:_telaAtual}});