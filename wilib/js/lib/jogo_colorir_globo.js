define(function (require) {
  var gameTarefa = addTarefa();
  var edi = require('./edi'), //requisitando o EDI
    _configEDI = null;

  function _setConfig(config) { //setando as configurações do EDI
    _configEDI = config;
  }

  function _init(cb) {
    edi.iniciar(_configEDI); //montar o palco
    var peca = this,
      colors = ['#DA3A36', '#FAF753', '#5AC769', '#4B4CFE', '#43F1F0', '#990099', '#000000'],
      color = '';

    for (var i = 0; i < 6; i++) {
      peca.objetivos.push(0);
      edi.objetivos.push(0);
    }

    $('<div>')
      .css({
        background: 'url(../../img/svg/globo-emoldurado.svg)',
        width: 170,
        height: 163,
        position: 'absolute',
        left: 10,
        top: 80
      })
      .appendTo('#conteudo');

    var $svgContainer = $('<div>')
      .css({
        width: 214,
        height: 214,
        position: 'absolute',
        left: 295,
        top: 80
      })
      .appendTo('#conteudo');

    var $panel = $('<div>')
      .css({
        background: 'url(../../img/svg/painel-cores.svg)',
        width: 334,
        height: 64,
        position: 'absolute',
        left: 230,
        top: 320
      })
      .appendTo('#conteudo');

    colors.forEach(function (data) {
      $('<div>')
        .attr('color', data)
        .addClass('color')
        .css({
          background: data,
          width: 23,
          height: 23,
          margin: 10,
          float: 'left',
          borderRadius: '50%',
          border: '2px solid #fff',
          boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.3), inset 0 0 2px rgba(0, 0, 0, 0.3)'
        })
        .click(function () {
          color = $(this).attr('color');
          $('#principal').css('cursor', 'url(../../img/svg/pincel-' + color.substring(1, 7) + '.svg), auto');
        })
        .appendTo($panel);
    });

    $('<div>')
      .html('OK')
      .addClass('btn btn-default')
      .css({
        width: 50,
        height: 40,
        position: 'absolute',
        left: 700,
        top: 195,
        textAlign: 'center',
        fontSize: 25,
        lineHeight: 1.7
      })
      .click(finalizar)
      .appendTo('#conteudo');

    $('#principal').css('cursor', 'url(../../img/svg/pincel-none.svg), auto');

    $svgContainer.load('../../img/svg/globo.svg', function () {
      var $svg = $(this).find('svg');

      $svg.find('g').click(function () {
        $(this).find('path').attr('fill', color);
      });
    });

    function finalizar() {
      $(this).off();
      var $svg = $svgContainer.find('svg'),
        acertos = 0;

      $svg.find('g path[data-correta]').each(function (i, data) {
        if ($(data).attr('fill') == $(data).attr('data-correta')) {
          peca.objetivos.unshift(1);
          edi.objetivos.unshift(1);
          acertos++;
        } else {
          peca.objetivos.unshift(2);
          edi.objetivos.unshift(2);
        }

        peca.objetivos.pop();
        edi.objetivos.pop();
      });

      edi.finalizar();

      if (acertos == 6 && cb)
        cb();
    }

    ARR_TAREFAS[gameTarefa].resolve();
  }

  return {
    objetivos: [],
    setConfig: _setConfig,
    iniciar: _init
  };

});
