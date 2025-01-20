define(function (require) {
  var tarefaRevela = addTarefa();

  var edi = require('./edi'), //requisitando o EDI
    _configEDI = null;

  function _setConfig(config) { //setando as configurações do EDI
    _configEDI = config;
  }

  function _init(btnRevela, callback, callbackFinal, settings) {
    edi.iniciar(_configEDI); //montar o palco

    var peca = this;

    var config = {
      width: 250,
      height: 122,
      margin: '6px 10px 0px 0px',
      fontSize: '12px'
    };

    if (settings) {
      $.extend(config, settings);
    }


    function mouseOver() {
      $(this).removeClass('loadingR')
        .css({
          '-webkit-animation': 'loadingR linear 1.5s paused',
          '-moz-animation': 'loadingR linear 1.5s paused',
          '-ms-animation': 'loadingR linear 1.5s paused',
          'animation': 'loadingR linear 1.5s paused',
          backgroundImage: 'url(../wilib/img/svg/asterisco_amarelo.svg)'
        });
    }

    function mouseOut() {
      $(this).addClass('loadingR')
        .css({
          backgroundImage: 'url(../wilib/img/svg/asterisco.svg)',
          '-webkit-animation': 'loadingR linear 1.5s infinite',
          '-moz-animation': 'loadingR linear 1.5s infinite',
          '-ms-animation': 'loadingR linear 1.5s infinite',
          'animation': 'loadingR linear 1.5s infinite'
        });
    }

    var clique = function () {
      var _this = $(this);
      var revelado = $('#retangulo' + _this.attr('data-revela'));
      _this.css('cursor', 'default');
      _this.off();

      $('#texto' + _this.data('i')).fadeIn();
      $('#borda' + _this.data('i')).transition({
        "box-shadow": "rgba(0, 0, 0, 0.8) 0px 1px 3px"
      }, 500);

      peca.objetivos.pop();
      edi.objetivos.pop();
      edi.objetivos.unshift(1);

      if (!!callback) callback($(this));

      if (!!licao.config.WIQUADRO)
        Wiquadro.api.addInteration(1, revelado.attr('id'), _this.attr('id'), true);

      if (peca.objetivos.length === 0) {
        edi.finalizar();
        if (callbackFinal) callbackFinal(self);
      }

      $(this).removeClass('loadingR')
        .css({
          '-webkit-animation': 'loadingR linear 1.5s paused',
          '-moz-animation': 'loadingR linear 1.5s paused',
          '-ms-animation': 'loadingR linear 1.5s paused',
          'animation': 'loadingR linear 1.5s paused',
          backgroundImage: 'url(../wilib/img/svg/asterisco_amarelo.svg)'
        });

      revelado.animate({
        height: config.alturaRetangulo + 4,
        overflow: 'initial'
      }, 300);
    };

    var sc_principal = $('<section>')
      .css({
        position: 'relative',
        verticalAlign: 'middle',
        textAlign: 'center'
      })
      .appendTo('#conteudo');


    for (var i = 0; i < btnRevela.length; i++) {
      console.log(config.width);
      var sc_conteudo = $('<section>')
        .attr('id', 'borda' + i)
        .css({
          position: 'relative',
          width: config.width,
          height: config.height,
          margin: config.margin,
          padding: '0px',
          display: 'inline-block',
          textAlign: 'left',
          borderRadius: 15
        })
        .appendTo(sc_principal);

      var dv_ficaAsterisco = $('<div>')
        .css({
          position: 'relative',
          width: config.width * 0.35,
          height: config.height,
          textAlign: 'center',
          padding: '0px',
          display: 'inline-block'
        })
        .appendTo(sc_conteudo);

      var dv_centralizaAsterisco = $('<div>')
        .css({
          position: 'relative',
          width: config.width * 0.35,
          height: config.height,
          padding: '0px',
          display: 'table-cell',
          verticalAlign: 'middle',
          textAlign: 'center'
        })
        .appendTo(dv_ficaAsterisco);

      $('<div>')
        .click(clique)
        .on('mouseover', mouseOver)
        .on('mouseout', mouseOut)
        .attr('data-i', i)
        .css({
          position: 'relative',
          width: 60,
          height: 60,
          padding: '0px',
          marginLeft: '15px',
          'background-image': 'url(../wilib/img/svg/asterisco.svg)',
          'background-size': '100%',
          cursor: 'pointer',
          '-webkit-animation': 'loadingR linear 1.5s infinite',
          '-moz-animation': 'loadingR linear 1.5s infinite',
          '-ms-animation': 'loadingR linear 1.5s infinite',
          'animation': 'loadingR linear 1.5s infinite'
        })
        .appendTo(dv_centralizaAsterisco);

      var dv_ficaTexto = $('<div>')
        .css({
          position: 'relative',
          width: config.width * 0.65,
          height: config.height,
          padding: '0px',
          display: 'inline-block'
        })
        .appendTo(sc_conteudo);

      var dv_centralizaTexto = $('<div>')
        .css({
          position: 'relative',
          width: config.width * 0.65,
          height: config.height,
          padding: '0px',
          display: 'table-cell',
          verticalAlign: 'middle',
          textAlign: 'center'
        })
        .appendTo(dv_ficaTexto);

      $('<div>')
        .attr('id', 'texto' + i)
        .css({
          position: 'relative',
          padding: '0px',
          fontSize: config.fontSize,
          display: 'none'
        })
        .html(btnRevela[i].texto)
        .appendTo(dv_centralizaTexto);

      peca.objetivos.push(0);
      edi.objetivos.push(0);

    }

    var $conteudo = $('#conteudo');

    $conteudo.css({
      'margin-top': ($conteudo.height() - sc_principal.height() ) / 2,
      'margin-left': ($conteudo.width() - sc_principal.width() ) / 2
    });

    ARR_TAREFAS[tarefaRevela].resolve();
  }

  return {
    objetivos: [],
    setConfig: _setConfig,
    revela_roletinha: _init
  };

});