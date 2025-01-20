define(function (require) {
  var tarefaRevela = addTarefa();

  var edi = require('./edi'),
    _configEDI = null;

  function _setConfig(config) {
    _configEDI = config;
  }

  function _init(textos, settings, cbFinal) {
    edi.iniciar(_configEDI);

    var config = {
      width: 288,
      height: 270,
      desconto: 47,
      nota: {
        musical: [
          {nota: 1, width: 39, height: 56, x1: 175, y1: 40, x2: 330, y2: 0},
          {nota: 1, width: 39, height: 56, x1: 25, y1: 35, x2: -105, y2: 0},
          {nota: 1, width: 39, height: 56, x1: 175, y1: 155, x2: 300, y2: 195},
          {nota: 2, width: 31, height: 52, x1: 105, y1: 170, x2: -75, y2: 100},
          {nota: 3, width: 41, height: 53, x1: 95, y1: 50, x2: 275, y2: 90},
          {nota: 3, width: 41, height: 53, x1: 30, y1: 150, x2: -140, y2: 180}
        ]
      }
    };

    if (settings) {
      $.extend(config, settings);
    }

    var notas = [], index = 0;

    function revelaTexto() {
      if (!!textosOcultos[index]) {
        textosOcultos[index].animate({
          width: ctDiv.width() - 20
        }, (!!textosOcultos[index].find('span').length) ? 2000 : 10, function () {
          index++;
          revelaTexto();
          if (textosOcultos.length == index) {
            edi.finalizar();
            if (!!cbFinal) cbFinal();
          }
        });
      }
    }

    function moveNotas($this, cb) {
      $this.forEach(function ($nota, num) {
        $nota.animate({
          top: config.nota.musical[num].y2,
          left: config.nota.musical[num].x2

        }, 1000, function () {
          if ($this.length - 1 == num)
            cb();
        });
      });
    }

    var sc = $('<section>')
      .css({
        position: 'absolute',
        cursor: 'pointer',
        top: 80,
        left: 250
      })
      .click(function () {

        moveNotas(notas, revelaTexto);
      })
      .appendTo('#conteudo');


    $('<img>')
      .attr({
        src: '../wilib/img/svg/folha_parda.svg',
        width: config.width,
        height: config.height
      })
      .appendTo(sc);


    function espera() {
      setTimeout(function (nota) {
        nota.addClass('movimentoOnda');
      }, (Math.random() * 1000 + 100), $nota);
    }

    for (var n = 0; n < config.nota.musical.length; n++) {
      var $nota = $('<img>')
        .addClass('nota')
        .css({
          position: 'absolute',
          top: config.nota.musical[n].y1,
          left: config.nota.musical[n].x1,
          zIndex: 1
        })
        .attr({
          id: 'nota' + n,
          src: '../wilib/img/svg/nota_musical_' + config.nota.musical[n].nota + '.svg',
          width: config.nota.musical[n].width,
          height: config.nota.musical[n].height
        })
        .appendTo(sc);

      notas.push($nota);

      espera();
    }

    var ctDiv = $('<div>')
      .css({
        position: 'absolute',
        top: 0,
        width: config.width - config.desconto,
        height: config.height - 7
      })
      .appendTo(sc);

    var middle = $('<div>')
      .css({
        position: 'relative',
        display: 'table-cell',
        verticalAlign: 'middle',
        textAlign: 'center',
        width: ctDiv.width(),
        height: ctDiv.height()
      })
      .appendTo(ctDiv);

    var textosOcultos = [];

    for (var i = 0; i < textos.length; i++) {
      var ctLinhas = $('<div>')
        .css({
          width: config.width - config.desconto - 20,
          height: 15,
          borderBottom: (textos[i] !== '') ? '1px solid #666' : '',
          display: 'inline-block'
        })
        .appendTo(middle);

      var linha = $('<div>')
        .css({
          position: 'absolute',
          width: 0,
          height: 20,
          color: '#666',
          marginTop: -2,
          overflow: 'hidden',
          textAlign: 'left'
        })
        .appendTo(ctLinhas);

      if (textos[i] !== '')
        $('<span>')
          .css({
            position: 'absolute',
            textAlign: 'center',
            width: config.width - config.desconto - 20,
            top: 0,
            left: 0
          })
          .html(textos[i])
          .appendTo(linha);

      textosOcultos.push(linha);

    }


    ARR_TAREFAS[tarefaRevela].resolve(config.cb);
  }

  return {
    objetivos: [],
    setConfig: _setConfig,
    revela_a03: _init
  };

});
