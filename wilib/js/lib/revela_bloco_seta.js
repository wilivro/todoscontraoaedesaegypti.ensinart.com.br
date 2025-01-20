define(function (require) {
  var tarefaRevela = addTarefa();

  var edi = require('../lib/edi'),//requisitando o EDI
    _configEDI = null;

  function _setConfig(config) {//setando as configurações do EDI
    _configEDI = config;
  }

  function _init(rev, opt, cb, cbfinal) {
    edi.iniciar(_configEDI);//montar o palco

    var peca = this,
      config = {
        width: 125,
        height: 125,
        left: 10,
        top: 10,
        qtdX: 2,
        tempoBloqueio: 1000,
        btnFontColor: '#fff',
        setaFontSize: 14,
        setaTextAlign: 'left',
        setaFontColor: '#666'
      };

    if (!cb) {
      cd = opt;
    } else {
      $.extend(config, settings);
    }

    var $containerGeral = $('<section>')
      .attr('id', 'rev-bloco-seta')
      .css({
        position: 'absolute',
        width: 788,
        height: 315
      })
      .appendTo('#conteudo');

    var $seta = $('<div>')
      .attr('id', 'seta')
      .css({
        background: 'url(../../img/svg/seta_branca2.svg) no-repeat',
        width: 437,
        height: 290,
        position: 'absolute',
        left: 10,
        top: 10,
        display: 'none'
      })
      .appendTo($containerGeral);

    var $setaInner = $('<div>')
      .attr('id', 'seta-inner')
      .css({
        width: 350,
        height: 150,
        position: 'absolute',
        left: 10,
        top: 70,
        display: 'table'
      })
      .appendTo($seta);

    $('<p>')
      .css({
        width: '100%',
        display: 'table-cell',
        verticalAlign: 'middle',
        fontSize: config.setaFontSize,
        textAlign: config.setaTextAlign,
        color: config.setaFontColor
      })
      .appendTo($setaInner);

    var $blocos = $('<div>')
      .css({
        background: '#fff',
        width: (config.width + 20) * config.qtdX,
        position: 'absolute',
        left: config.left,
        top: config.top
      })
      .appendTo($containerGeral);

    rev.forEach(function (data) {
      var $bloco = $('<div>')
        .addClass('bloco finalizar')
        .attr('data-revela', data.revText)
        .css({
          borderRadius: 10,
          width: config.width,
          height: config.height,
          border: '5px solid #fff',
          boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3),' +
          'inset 0 0 3px rgba(0, 0, 0, 0.3)',
          float: 'left',
          display: 'table',
          margin: '5px',
          cursor: 'pointer'
        })
        .appendTo($blocos)
        .click(click)
        .mouseenter(mouseenter)
        .mouseleave(mouseleave);

      $('<p>')
        .html(data.btnText)
        .css({
          width: '100%',
          display: 'table-cell',
          verticalAlign: 'middle',
          textAlign: 'center'
        })
        .appendTo($bloco);

      peca.objetivos.push(0);
      edi.objetivos.push(0);
    });

    function mouseenter() {
      $(this).addClass('active');
    }

    function mouseleave() {
      $(this).removeClass('active');
    }

    function click() {
      var $self = $(this);

      if ($self.hasClass('finalizar')) {
        $self.removeClass('finalizar');
        finalizar();
      }

      $('.bloco')
        .removeClass('active')
        .off();

      $self.addClass('active').off('mouseleave click');

      edi.regressiva(config.tempoBloqueio, 'para clicar em outro botão', function () {
        $('.bloco')
          .click(click)
          .mouseleave(mouseleave)
          .mouseenter(mouseenter);

        $self.off('mouseleave click');
      });

      $seta.css({left: 10, display: 'none'});
      $seta.find('p').html($self.attr('data-revela'));
      $seta.fadeIn(100);
      $seta.animate({
        left: 330
      }).show();
    }

    function finalizar() {
      peca.objetivos.pop();
      edi.objetivos.pop();
      edi.finalizar();
    }

    ARR_TAREFAS[tarefaRevela].resolve();
  }

  return {
    objetivos: [],
    setConfig: _setConfig,
    revela_bloco_seta: _init
  };

});
