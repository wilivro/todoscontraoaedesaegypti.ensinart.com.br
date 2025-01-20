define(function(require) {
  var tarefaBoliche = addTarefa();
  var edi = require('../lib/edi'); //requisitando o EDI
  var alternativa_botao = require('../lib/alternativa_botao'); //requisitando o EDI
  var configEDI = null;

  function _setConfig(config) { //setando as configurações do EDI
    _configEDI = config;
  }

  function _telaAtual() {
    return edi.util.getURL('quest');
  }

  function _init(bt_botoes, callBack, settings) {
    _configEDI.qtdTelas = Object.keys(bt_botoes).length;
    edi.iniciar(_configEDI);
    var peca = this;

    //coloque dentro do objeto bt_botoes msgFinal para chamar uma mensagem no final

    var config = {
      width: 150,
      height: 40,
      topContainer: 95,
      fontSizeTexto: '14px',
      widthBoxTexto: 518,
      heightBoxTexto: 155,
      basquete: false,
      boliche: true,
      numeracao: true,
      tamanhoTextoBtn: 18,
      randomico: false
    };

    // não remover esse
    if (settings) $.extend(config, settings);

    config.margin = (config.basquete) ? 10 : '20px 15px';

    // e nem esse
    if (settings) $.extend(config, settings);

    var config2 = {
      positionX: 430,
      left: 0,
      finalizar: !config.boliche && !config.basquete,
      cor: '#FFF',
      tamanhoTexto: config.tamanhoTextoBtn,
      top: 0,
      width: config.width,
      height: config.height,
      randomico: config.randomico,
      margin: config.margin,
      displayFilho: (config.basquete) ? 'block' : 'inline-block'
    };

    var circuloQuestao = $('<div>'),
      ctSection = $('<section>'),
      container = $('<div>'),
      textoBox,
      tela;

    if (!config.basquete) {
      ctSection
        .attr('id', 'ctSection')
        .css({
          position: 'absolute',
          top: config.topContainer,
          left: 130
        })
        .appendTo('#conteudo');

      container
        .css({
          width: 'auto',
          height: 'auto',
          position: 'relative',
          display: 'table-cell'

        })
        .appendTo(ctSection);

      tela = bt_botoes['tela' + edi.util.getURL('quest')];



      if (config.numeracao) {
        circuloQuestao
          .css({
            position: 'absolute',
            float: 'left',
            left: '-100px',
            top: (config.heightBoxTexto / 2) - 30,
            height: 50,
            width: 50,
            textAlign: 'center',
            lineHeight: '50px',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'rgb(128, 126, 126)',
            border: '5px solid rgb(192, 207, 216)',
            opacity: 0.8,
            borderRadius: 50
          })
          .html(edi.util.getURL('quest'));
      }

      textoBox = $('<div>')
        .css({
          color: 'rgb(128, 126, 126)',
          width: config.widthBoxTexto,
          height: config.heightBoxTexto,
          borderRadius: 10,
          border: '1px solid rgb(167, 185, 195)',
          boxShadow: '1px 1px 5px 1px rgba(128,128,128,.3)',
          display: 'table-cell',
          fontSize: config.fontSizeTexto,
          letterSpacing: '1px',
          lineHeight: '18px',
          verticalAlign: 'middle',
          textAlign: 'center'
        }).attr('id', 'textoBox')
        .html(tela.texto)
        .append(circuloQuestao)
        .appendTo(container);

    } else {
      ctSection
        .attr('id', 'ctSection')
        .css({
          position: 'absolute',
          top: config.topContainer,
          left: 35
        })
        .appendTo('#conteudo');

      container
        .css({
          borderRadius: 10
        })
        .appendTo(ctSection);

      tela = bt_botoes['tela' + edi.util.getURL('quest')];

      if (config.numeracao) {
        circuloQuestao
          .css({
            position: 'absolute',
            float: 'left',
            marginTop: -170,
            marginLeft: -25,
            height: 50,
            background: 'rgba(255, 255, 2555, 1)',
            width: 50,
            zIndex: 1,
            textAlign: 'center',
            lineHeight: '50px',
            fontSize: 30,
            fontWeight: 'bold',
            color: 'rgb(128, 126, 126)',
            border: '5px solid rgba(192, 207, 216, .8)',
            borderRadius: 50
          })
          .html(edi.util.getURL('quest'));
      }

      textoBox = $('<div>')
        .css({
          width: 378,
          height: 250,
          borderRadius: 15,
          border: '1px solid rgb(167, 185, 195)',
          boxShadow: '1px 1px 5px 1px rgba(128,128,128,.3)',
          display: 'table-cell',
          fontSize: config.fontSizeTexto,
          letterSpacing: '1px',
          lineHeight: '18px',
          verticalAlign: 'middle',
          color: '#666',
          textAlign: 'center'
        }).attr('id', 'textoBox')
        .html(tela.texto)
        .append(circuloQuestao)
        .appendTo(container);
    }

    alternativa_botao.alternativa_botao(tela.btns, function(a) {
      if (callBack) callBack(a);
    }, null, config2);

    if (!config.basquete) {
      $('[data-edi="alternativa_botao"]').css({
        width: '100%',
        textAlign: 'center',
        position: 'relative'
      })
        .appendTo(container);
    } else {
      var ctEdi = $('<div>').css({
        position: 'absolute',
        left: config2.positionX
      }).appendTo('#conteudo');

      $('[data-edi="alternativa_botao"]').css({
        textAlign: 'center',
        position: 'relative',
        verticalAlign: 'middle',
        display: 'table-cell',
        height: 315,
        width: 100
      })
        .appendTo(ctEdi);
    }

    $('[data-edi="alternativa_botao"] .btn-default').click(function() {

      if ( !! tela.msgFinal) {
        var msgFinal = $('<div>')
          .css({
            width: 516,
            height: 25,
            backgroundColor: '#111',
            position: 'absolute',
            top: 94,
            left: 117,
            marginLeft: 12,
            display: 'inline-block',
            textAlign: 'center',
            color: '#FFF',
            borderRadius: '10px 10px 0 0',
            boxShadow: 'inset 0 10px 10px rgba(255, 255, 255, 0.3), inset 0 21px 20px rgba(255, 255, 255, 0.2)'
          })
          .attr('id', 'finalTexto')
          .appendTo('#conteudo');

        var closed = $('<div>')
          .css({
            position: 'absolute',
            backgroundColor: '#F00',
            right: 15,
            width: 20,
            height: 18,
            top: 1,
            borderRadius: 5,
            border: '2px solid #FFF',
            boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
            cursor: 'pointer'
          })
          .attr('id', 'fechar')
          .appendTo(msgFinal);

        $('<i>')
          .addClass('fa fa-times')
          .appendTo(closed);

        var ctTexto = $('<div>')
          .addClass('ctTexto')
          .css({
            position: 'absolute',
            width: 517,
            height: 133,
            top: 25,
            borderRadius: '0 0 8px 8px',
            color: '#999',
            lineHeight: '18px',
            backgroundColor: '#FFF'
          })
          .appendTo(msgFinal);

        $('<div>')
          .css({
            position: 'relative',
            textAlign: 'center',
            display: 'table-cell',
            verticalAlign: 'middle',
            width: 517,
            height: 133
          })
          .html(tela.msgFinal)
          .appendTo(ctTexto);

        msgFinal
          .transition({
            scale: 0
          }, 0);

        closed.click(function() {
          msgFinal
            .transition({
              scale: 0,
              top: 170
            }, 1000);
        });

        msgFinal.transition({
          scale: 1,
          top: 94
        }, 1000);

      }

      var bolicheAcerto,
        bolicheErro;


      if ($(this).attr('data-correta') == 'true') {
        if (config.boliche && !config.basquete) {
          bolicheAcerto = require('../../canvas/objetos/bolicheAcerto');
          bolicheAcerto.obj.appendTo(container);
          bolicheAcerto.play();
        }

        if (!config.boliche && config.basquete) {
          bolicheAcerto = require('../../canvas/objetos/basqueteAcerto');
          bolicheAcerto.obj.appendTo(container);
          bolicheAcerto.play();
        }

        textoBox.css({
          backgroundColor: '#0060B6',
          color: '#FFF'
        });
      } else {
        if (config.boliche) {
          bolicheErro = require('../../canvas/objetos/bolicheErro');
          bolicheErro.obj.appendTo(container);
          bolicheErro.play();
        }

        if (!config.boliche && config.basquete) {
          bolicheErro = require('../../canvas/objetos/basqueteErro');
          bolicheErro.obj.appendTo(container);
          bolicheErro.play();
        }

        textoBox.css({
          backgroundColor: '#F00',
          color: '#FFF'
        });
      }
    });
    ARR_TAREFAS[tarefaBoliche].resolve();
  }

  return {
    root: edi,
    objetivos: [],
    setConfig: _setConfig,
    alternativa_boliche: _init,
    telaAtual: _telaAtual
  };

});