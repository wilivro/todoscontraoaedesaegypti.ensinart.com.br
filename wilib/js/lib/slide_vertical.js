define(function (require) {
  var tarefaslide_vertical = addTarefa();

  var edi = require('./edi'),//requisitando o EDI
    _configEDI = null;

  function _setConfig(config) {//setando as configurações do EDI
    _configEDI = config;
  }

  function _init(slides, cb, cbfinal, opt) {

    //jshint validthis: true
    edi.iniciar(_configEDI);//montar o palco

    var finalizada = false;

    var config = {
      fontSize: 13,
      textAlign: 'left',
      lineHeight: 1,
      color: '#666',
      showNumber: false,
      cb: null,
      tempoBloqueio: 500
    };

    if (opt) {
      $.extend(config, opt);
    }

    // container principal
    var $slide_vertical = $('<section>')
      .attr({
        'id': 'slide-vertical',
        'data-edi': 'slide'
      })
      .css({
        background: '#eee',
        width: 790,
        height: 315,
        position: 'absolute'
      })
      .appendTo('#conteudo');

    var $view = $('<div>')
      .attr('id', 'slide-view')
      .css({
        background: '#fff',
        width: 700,
        height: 200,
        position: 'absolute',
        left: 44,
        top: 55,
        overflow: 'hidden',
        border: '1px solid rgba(0, 0, 0, 0.1)'
      })
      .appendTo($slide_vertical);


    var $slideBox = $('<div>')
      .attr('id', 'slide-box')
      .css({
        width: 700,
        display: 'table',
        position: 'absolute',
        left: 0,
        top: 0
      })
      .appendTo($view);

    // criando os slides
    slides.forEach(function (data, i) {

      var $slide = $('<div>')
        .addClass('slide-slide')
        .css({
          width: 700,
          height: 200
        })
        .appendTo($slideBox);

      var $barraSup = $('<div>')
        .css({
          background: '#3399CC',
          width: 700,
          height: 25,
          position: 'relative'
        })
        .appendTo($slide);

      var $conteudo = $('<div>')
        .css({
          width: 700,
          height: 150,
          position: 'relative'
        })
        .appendTo($slide);

      var $barraInf = $('<div>')
        .addClass('barra-inf a')
        .css({
          background: '#3399CC',
          width: 700,
          height: 25,
          position: 'relative',
          cursor: 'pointer'
        })
        .appendTo($slide)
        .click(handlerClickNext);

      // criando os numeros
      if (config.showNumber) {
        $('<span>')
          .html((i < 9) ? '0' + (i + 1) : i + 1)
          .addClass('numero')
          .css({
            position: 'absolute',
            left: (!!data.img) ? 100 : 50,
            bottom: (!!data.img) ? 10 : 50,
            width: 45,
            height: 45,
            display: 'block',
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '1px 1px 3px rgba(0, 0, 0 , 0.3)',
            zIndex: 100,
            textAlign: 'center',
            lineHeight: 1.9,
            fontSize: 25,
            color: '#666'
          })
          .appendTo($conteudo);
      }

      // adicionando a img
      if (data.img) {
        $('<img>')
          .addClass('img')
          .attr('src', data.img)
          .css({
            width: 120,
            height: 120,
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderRadius: 5,
            position: 'absolute',
            left: 15,
            top: 15
          })
          .appendTo($conteudo);
      }

      // adicionando o texto
      if (data.txt) {
        var $txt = $('<div>')
          .addClass('txt')
          .css({
            width: 530,
            height: 150,
            position: 'absolute',
            left: 150,
            top: 0,
            display: 'table'
          })
          .appendTo($conteudo);

        $('<p>')
          .html(data.txt)
          .css({
            display: 'table-cell',
            verticalAlign: 'middle',
            width: '100%',
            fontSize: config.fontSize,
            lineHeight: config.lineHeight,
            textAlign: config.textAlign,
            color: config.color
          })
          .appendTo($txt);
      }

      // adicionando botoes
      if (i == slides.length - 1) {
        $('<span>')
          .html('FIM - CLIQUE AQUI PARA FINALIZAR')
          .css({
            position: 'absolute',
            left: 10,
            top: 3,
            color: '#fff'
          })
          .appendTo($barraInf);

        $barraInf.addClass('final');
      } else {
        $('<span>')
          .addClass('btn-next')
          .html((slides[i].btn) ? slides[i].btn : 'CLIQUE AQUI')
          .css({
            position: 'absolute',
            left: 10,
            top: 3,
            color: '#fff'
          })
          .appendTo($barraInf);
      }

      if (i > 0) {
        $('<span>')
          .html((slides[i].btn) ? slides[i - 1].btn : 'CLIQUE AQUI')
          .css({
            position: 'absolute',
            left: 10,
            top: 3,
            color: '#fff'
          })
          .appendTo($barraSup);

        $('<span>')
          .addClass('btn-prev')
          .html('<i class="fa fa-arrow-circle-up"></i> voltar')
          .css({
            position: 'absolute',
            right: 10,
            top: 3,
            color: '#fff',
            cursor: 'pointer'
          })
          .appendTo($barraSup)
          .click(handlerClickPrev);
      }
    });

    function handlerClickNext() {
      var $self = $(this);

      // removendo a classe 'a' para decrementar objetivos
      $self.removeClass('a');

      if (!$self.hasClass('final')) {
        $($slideBox).animate({
          top: '-=200'
        });

        $('.barra-inf, .btn-prev').off();

        edi.regressiva(config.tempoBloqueio, 'para clicar em outro botão', function () {
          $('.btn-prev').click(handlerClickPrev);
          $('.barra-inf').click(handlerClickNext);
        }, {
          posx: 335,
          posy: 75
        });

        if (cb) cb();
      } else {
        $self.off();

        if ($('.a').length === 0 && !finalizada) {
          edi.finalizar();
          if (cbfinal) cbfinal();

          finalizada = true;
        }
      }
    }

    function handlerClickPrev() {
      $($slideBox).animate({
        top: '+=200'
      });
    }

    ARR_TAREFAS[tarefaslide_vertical].resolve(config.cb);
  }

  return {
    objetivos: [],
    setConfig: _setConfig,
    slide_vertical: _init
  };

});
