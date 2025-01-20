define(function(require) {
  "use strict";
  var tarefaReflita = addTarefa();

  var edi = require('../lib/edi'), //requisitando o EDI
    arrasta = require('../lib/arrasta'),
    _configEDI = null;

  function _setConfig(config) { //setando as configurações do EDI
    _configEDI = config;
  }

  function _init(alvos, cb, cbfinal, settings) {
    edi.iniciar(_configEDI); //montar o palco

    var config = {
      textoMais: 'Lorem Ipsum',
      textoMenos: 'Lorem Ipsum',
      textoOutro: 'Lorem Ipsum',
      sinal: true,
      arrasta: {
        width: 220,
        height: 80,
        left: 10,
        top: 10,
        qtdX: 1,
        margin: 10,
        fontSize: 13,
        textAlign: 'center',
        color: '#666'
      },
      alvo: {
        width: 240,
        height: 103,
        left: 302,
        top: 0,
        qtdX: 2,
        margin: 0,
        fontSize: 13,
        textAlign: 'center',
        color: '#666'
      }
    };

    if (settings) {
      $.extend(config, settings);
    }

    var addEventos = function(_this) {
      var $self = $(this);
      _this
        .mouseenter(function() {
          $self
            .removeClass('arr-cinza')
            .addClass('arr-verde');
        })
        .mouseleave(function() {

          $self
            .removeClass('arr-verde')
            .addClass('arr-cinza');
        });
    };

    // criando array com os arrastas
    var arrastas = [{
      txt: config.textoMais,
      dataCorreta: (config.sinal) ? '+' : '1'
    }, {
      txt: config.textoMenos,
      dataCorreta: (config.sinal) ? '-' : '2'
    }, {
      txt: config.textoOutro,
      dataCorreta: (config.sinal) ? '*' : '3'
    }];

    /********************
      CRIANDO CONTAINERS
    ********************/

    // container principal
    var $arrastaBox = $('<section>')
      .attr({
        'id': 'arrasta-mais-menos',
        'data-id': 'arrasta-mais-menos'
      })
      .css({
        width: 790,
        height: 315,
        position: 'absolute'
      })
      .appendTo('#conteudo');

    // container dos arrastas
    var $arrastas = $('<div>')
      .css({
        // definindo largura do pai baseado no tamanho do filho e do margin do filho
        width: (config.arrasta.width * config.arrasta.qtdX) + (config.arrasta.margin * 2),
        position: 'absolute',
        left: config.arrasta.left,
        top: config.arrasta.top
      })
      .appendTo($arrastaBox);

    // container dos alvos
    var $alvos = $('<div>')
      .css({
        width: (config.alvo.width * config.alvo.qtdX) + (config.alvo.margin * 2) + 4,
        position: 'absolute',
        left: config.alvo.left,
        top: config.alvo.top,
        display: 'table'
      })
      .appendTo($arrastaBox);

    /********************
      CRIANDO ARRASTAS
    ********************/
    arrastas.forEach(function(data, i) {
      var $arrastaBox = $('<div>')
        .attr('data-ref', data.dataCorreta)
        .css({
          width: config.arrasta.width,
          height: config.arrasta.height,
          position: 'relative',
          border: '1px solid #ccc',
          margin: config.arrasta.margin,
          boxShadow: '2px 2px 0px #ccc',
          borderRadius: 5
        })
        .appendTo($arrastas);

      for (var x = 0; x < alvos.length; x++) {
        var $arrasta = $('<div>')
          .addClass('arrasta arr-cinza')
          .attr('data-correta', data.dataCorreta)
          .css({
            width: 50,
            height: 50,
            position: 'absolute',
            left: 10,
            top: (config.arrasta.height / 2) - 25,
            border: '1px solid #ccc',
            borderRadius: '50%',
            display: 'table',
            boxShadow: 'inset 0 0 3px rgba(0, 0, 0, 0.3),' +
              'inset 0 10px 1px 1px  rgba(255, 255, 255, 0.2)',
          })
          .appendTo($arrastaBox);

        addEventos($arrasta);

        $('<p>')
          .html(data.dataCorreta)
          .css({
            width: '100%',
            display: 'table-cell',
            verticalAlign: 'middle',
            textAlign: 'center',
            fontSize: 35
          })
          .appendTo($arrasta);
      }

      var $texto = $('<div>')
        .css({
          width: config.arrasta.width - 70,
          height: '100%',
          position: 'absolute',
          right: 0,
          top: 0,
          display: 'table'
        })
        .appendTo($arrastaBox);

      $('<p>')
        .html(data.txt)
        .css({
          display: 'table-cell',
          verticalAlign: 'middle',
          width: '100%',
          fontSize: config.arrasta.fontSize,
          textAlign: config.arrasta.textAlign,
          color: config.arrasta.color
        })
        .appendTo($texto);
    });

    /********************
        CRIANDO ALVOS
    ********************/
    alvos.forEach(function(data, i) {
      // criando container do alvo
      var $alvoBox = $('<div>')
        .css({
          width: config.alvo.width,
          height: config.alvo.height,
          margin: config.alvo.margin,
          float: 'left',
          border: '1px solid #ccc',
          position: 'relative'
        })
        .appendTo($alvos);

      // criandos a div.arrasta
      var $alvo = $('<div>')
        .addClass('alvo')
        .attr('data-correta', data.dataCorreta)
        .css({
          background: '#eee',
          width: 50,
          height: 50,
          position: 'absolute',
          top: (config.alvo.height / 2) - 25,
          left: 10,
          border: '1px solid rgba(0, 0, 0, 0.1)',
          borderRadius: '50%'
        })
        .appendTo($alvoBox);

      // criando container do texto
      var $texto = $('<div>')
        .addClass('txt')
        .css({
          width: config.alvo.width - 70,
          height: config.alvo.height,
          position: 'absolute',
          right: 0,
          top: 0,
          display: 'table'
        })
        .appendTo($alvoBox);

      $('<p>')
        .html(data.txt)
        .css({
          display: 'table-cell',
          verticalAlign: 'middle',
          width: '100%',
          fontSize: config.alvo.fontSize,
          textAlign: config.alvo.textAlign,
          color: config.alvo.color
        })
        .appendTo($texto);
    });

    // tratando o mouseenter



    // chamando o módulo arrasta
    arrasta.arrasta('arrasta', 'alvo', function(a, b, c) {
      if (a) {
        $(b).off().addClass('arr-azul');
      } else {
        $(b).off().addClass('arr-vermelho');
      }

      $(b)
        .css({
          width: 50,
          height: 50,
          display: 'table',
          left: -1,
          top: -1
        });

      if (cb) cb(a, b, c);
    }, function() {
      if (cbfinal) cbfinal();
    });

    ARR_TAREFAS[tarefaReflita].resolve();
  }

  return {
    setConfig: _setConfig,
    arrasta_mais_menos: _init
  };

});