define(function (require) {
  var tarefaRevela = addTarefa();

  var edi = require('./edi'),//requisitando o EDI
    _configEDI = null;

  var revelaMod = require('../lib/revela');//requisitando Revela

  function _setConfig(config) {//setando as configurações do EDI
    _configEDI = config;
  }

  function _init(btnRevela, callback, callbackFinal, settings) {
    edi.iniciar(_configEDI);//montar o palco

    var config = {
      tempoBloqueio: 1000,
      bloqueiaClickFinal: true,
      width: 549,
      height: 312,
      larguraBola: 135,
      alturaBola: 135,
      fontSize: '14px',
      marginLeft: 25,
      marginRight: 25,
      marginBottom: 20,
      borderRadius: '50%',
      left: 0,
      top: null,
      left: null
    };

    if (settings) {
      $.extend(config, settings);
    }

    var sc_quadro = $('<section>')
      .attr('id', 'sc_quadro')
      .css({
        position: 'absolute',
        width: config.width,
        height: config.height,
        top: (!!config.top) ? config.top : ((383 - config.height) / 2) + 40,
        left: (!!config.left) ? config.left : (788 - config.width) / 2,
        textAlign: 'center'
      })
      .appendTo('#conteudo');

    for (var i = 0; i < btnRevela.length; i++) {

      var cor = btnRevela[i].cor ? btnRevela[i].cor : edi.util.corAleatoria();
      var corGradiente = {
        'background': 'radial-gradient(ellipse at center,  #ffffff 0%,' + cor + ' 65%)', /* W3C */
        'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr=#ffffff, endColorstr=' + cor + ',GradientType=1 )' /* IE6-9 fallback on horizontal gradient */
      };

      var dv_FicaTexto = $('<div>')
        .attr('id', 'bola' + i)
        .css({
          position: 'relative',
          width: config.larguraBola,
          height: config.alturaBola,
          display: 'inline-block',
          backgroundColor: cor,
          marginLeft: config.marginLeft,
          marginRight: config.marginRight,
          marginBottom: config.marginBottom,
          borderRadius: config.borderRadius,
          border: '2px solid rgba(0,0,0,0.5)'

        })
        .transition({scale: 0})
        .appendTo(sc_quadro);

      $('<div>')
        .attr('id', 'texto' + i)
        .addClass('bold')
        .css({
          position: 'relative',
          width: config.larguraBola,
          height: config.alturaBola,
          fontSize: config.fontSize,
          color: '#FFF',
          display: 'table-cell',
          verticalAlign: 'middle',
          textAlign: 'center',
          padding: 0
        })
        .html('<span class="revela" data-revela="' + i + '">' + btnRevela[i].texto + '</span>')
        .appendTo(dv_FicaTexto);

      $('<div>')
        .attr({
          'id': 'btn_' + i,
          'data-revela': i
        })
        .addClass('clique')
        .css({
          position: 'absolute',
          top: 0,
          width: config.larguraBola,
          height: config.alturaBola,
          borderRadius: '50%',
          cursor: 'pointer'
        })
        .css(corGradiente)
        .appendTo(dv_FicaTexto);
    }

    var cont = 0;
    var animacao = setInterval(function () {

      $('#bola' + cont).transition({
        scale: 1
      }, 300);

      cont++;

      if (cont == btnRevela.length)
        clearInterval(animacao);

    }, 300);

    revelaMod.revela('clique', 'revela', callback, callbackFinal, {
      tempoBloqueio: config.tempoBloqueio,
      ocultarBtn: true,
      piscar: false
    });

    ARR_TAREFAS[tarefaRevela].resolve();
  }

  return {
    objetivos: [],
    setConfig: _setConfig,
    revela_bolas: _init
  };

});
