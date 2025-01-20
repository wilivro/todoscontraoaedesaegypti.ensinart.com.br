define(function(require) {
  var tarefaalternativa_balao = addTarefa();
  var edi = require('../lib/edi'), //requisitando o EDI
    _configEDI = null;

  function _setConfig(config) { //setando as configurações do EDI
    _configEDI = config;
  }

  function _popUp(texto, config) { //setando as configurações do EDI
    return edi.util.popUp(texto, config);
  }

  function _init(alter, callBack, callBackFinal, settings) {
    edi.iniciar(_configEDI); //montar o palco

    var peca = this,
      corretas = 0,
      qtdObjetivos = 0;

    //config padrão
    var config = {
      width: 250,
      height: 100,
      margin: 0,
      padding: 0,
      left: 140,
      top: 40,
      colunas: 2,
      fontSize: 12,
      lineHeight: 1,
      color: '#666',
      textAlign: 'center',
      leftPerson: -10,
      topPerson: 45,
      topIco: 0,
      leftIco: -16,
      balao: true
    };

    //adicionando objetivos
    alter.forEach(function(obj) {
      if (obj.dataCorreta) {
        peca.objetivos.push(0);
        edi.objetivos.push(0);
        qtdObjetivos++;
      }
    });

    //mesclando configurações
    if (settings) $.extend(config, settings);

    var addEventosCerto = function(elemento) {
      elemento.click(handlerClick)
        .mouseenter(function() {
          $(this).css('opacity', 0.5);
        })
        .mouseleave(function() {
          $(this).css('opacity', 1);
        });
    };

    var addEventosErrado = function(elemento) {
      elemento.click(handlerClick)
        .mouseenter(function() {
          $(this).css('opacity', 0.5);
        })
        .mouseleave(function() {
          $(this).css('opacity', 1);
        });
    };

    //criando sessão principal
    var $alterBalao = $('<section>')
      .addClass('alter-balao')
      .attr('data-edi', 'alternativa_balao')
      .css({
        width: config.width * config.colunas + ((config.margin + config.padding) * 2),
        position: 'relative',
        left: config.left,
        top: config.top
      })
      .appendTo('#conteudo');

    //criando as colunas e depois os itens
    for (var i = 0; i < alter.length; i++) {

      var $texto = $('<div>'),
        $p = $('<p>'),
        $svgBox = ('<div>'),
        tam,
        svg;

      //dividindo intens entre as colunas

      var $item = $('<div>')
        .addClass('item')
        .css({
          width: config.width,
          height: config.height,
          margin: config.margin,
          padding: config.padding,
          position: 'relative',
          display: 'inline-block'
        })
        .appendTo($alterBalao);

      //personagem
      if (config.balao) {
        var $pers = $('<img>')
          .attr({
            src: '../wilib/img/svg/personagem_004.svg',
            id: 'peson-' + i
          })
          .css({
            width: config.width - config.width * 0.7,
            height: config.height - config.height * 0.3,
            position: 'absolute',
            left: config.leftPerson,
            top: config.topPerson
          })
          .appendTo($item);

        //balão por traz do texto

        $svgBox = $('<div>')
          .attr('id', 'svgBox')
          .css({
            position: 'absolute',
            left: 20,
            top: 7
          })
          .appendTo($item);

        tam = {
          w: config.width - 20,
          h: config.height - 3
        };

        svg = $('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="' + tam.w + 'px" height="' + tam.h + 'px" viewBox="0 0 260 115"><defs><g id="Layer0_0_MEMBER_' + i + '_FILL"><path id="balao' + i + '" fill="#fff" stroke="none" d="M 343.45 172.4Q 340.3 171.2 336.95 170.55 330.3 169.2 322.95 170.15 309.9169921875 171.74296875 301.8 178.5 298.723046875 181.075 296.35 184.4 294.55 186.8 293.55 189.45 294.55 186.8 296.35 184.4 288.2 181.95 279.35 182.55 279.65 182.7 280 182.85 284 184.95 286.6 187.4 284 184.95 280 182.85 279.65 182.7 279.35 182.55 274.25703125 179.9359375 268.2 178.5 260.861328125 176.75 252.1 176.75 243.253125 176.723046875 235.8 178.5 229.4693359375 180.017578125 224.15 182.85 216.55 186.85 213.9 192 208.85 202.65 223.8 212.5 223.95 212.6 224.15 212.7 226.8 214.1 229.7 215.2 226.8 214.1 224.15 212.7 223.95 212.6 223.8 212.5 223.55 212.9 223.4 213.3 222.1 216.3 222.5 219.65L 222.5 219.7Q 223.3 225.75 229.65 229.5 229.7 229.4 229.75 229.4L 229.8 229.4Q 234.65 226.6 240.4 225.9L 242.1 225.75 240.4 225.9Q 234.65 226.6 229.8 229.4L 229.7 229.55 229.65 229.5Q 219.7 235.3 220.8 244.3 221.55 250.3 227.7 254.05 233.7 257.85 242 257.5L 242 257.45Q 242.1 255.5 242.65 253.55 242.1 255.5 242 257.45L 242.1 257.5 242 257.5Q 241.9 259.35 242.1 260.75 243.3 270.8 254.05 276.65 264.75 282.55 278.65 280.85 287.75 279.7 295.2 275.45 298.6 273.4 301.2 271.05 298.6 273.4 295.2 275.45L 295.3 275.55Q 299.35 279.75 306 281.75 312.6 283.7 319.95 282.85 330.55 281.5 337.65 275.15 336.5 273.75 335.55 271.8 336.5 273.75 337.65 275.15 337.75 275.05 337.9 274.95L 337.8 275.25Q 341.05 278.9 346.6 280.65 352.1 282.3 358.3 281.5 368.95 280.2 374.7 273.25 372.1 271.55 370.5 269.45 372.1 271.55 374.7 273.25 382.65 278.5 393.9 277.1 402.65 276 408.9 271.15 415.05 266.25 415.8 259.85L 415.75 259.8Q 415.75 259.75 415.8 259.75 416.05 258.3 415.85 256.65 416.05 258.3 415.8 259.75 424.2 256.95 429 251.15 433.75 245.3 432.95 238.85 432.45 234.95 429.9 231.6 426.95 227.75 421.8 225.35 426.95 227.75 429.9 231.6L 429.95 231.5Q 436.1 224.15 435.05 215.85 433.9 206.7 424.85 200.9 415.8 195.05 403.25 195.35 403.7 199.25 402.35 202.95 403.7 199.25 403.25 195.35 403.2 195.3 403.15 195.3L 403.2 195.25Q 402.05 186.7 392.95 181.75 388.6828125 179.4181640625 383.8 178.5 378.2734375 177.449609375 371.95 178.25 371.063671875 178.357421875 370.2 178.5 362.9962890625 179.68515625 357.15 183.3L 357.1 183.4Q 358.3 185.55 359.1 188.3 358.3 185.55 357.1 183.4 356.2 181.85 355.1 180.45 354.2689453125 179.430859375 353.3 178.5 349.42578125 174.726171875 343.45 172.4M 191.7 209.8Q 191.7 208.3 189.7 207.2 187.65 206.1 184.8 206.1 181.9 206.1 179.9 207.2 177.8 208.3 177.85 209.8 177.8 211.3 179.9 212.4 181.9 213.5 184.8 213.5 187.65 213.5 189.7 212.4 191.7 211.3 191.7 209.8M 196.65 192.35Q 190.9 192.3 186.9 194.45 182.8 196.65 182.8 199.7 182.8 202.7 186.9 204.9 190.9 207.05 196.65 207.05 202.35 207.05 206.45 204.9 206.95 204.65 207.4 204.35 210.45 202.35 210.45 199.7 210.45 197.05 207.4 195.05 206.95 194.75 206.45 194.45 202.35 192.3 196.65 192.35 Z"/></g><path id="Layer0_0_MEMBER_0_1_STROKES" stroke="#CCCCCC" stroke-width="1.45" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M 296.35 184.4Q 298.723046875 181.075 301.8 178.5 309.9169921875 171.74296875 322.95 170.15 330.3 169.2 336.95 170.55 340.3 171.2 343.45 172.4 349.42578125 174.726171875 353.3 178.5 354.2689453125 179.430859375 355.1 180.45 356.2 181.85 357.1 183.4L 357.15 183.3Q 362.9962890625 179.68515625 370.2 178.5 371.063671875 178.357421875 371.95 178.25 378.2734375 177.449609375 383.825 178.5 388.6828125 179.4181640625 392.95 181.75 402.05 186.7 403.2 195.25L 403.15 195.3Q 403.2 195.3 403.25 195.35 415.8 195.05 424.85 200.9 433.9 206.7 435.05 215.85 436.1 224.15 429.95 231.5L 429.9 231.6Q 432.45 234.95 432.95 238.85 433.75 245.3 429 251.15 424.2 256.95 415.8 259.75 415.75 259.75 415.75 259.8L 415.8 259.85Q 415.05 266.25 408.9 271.15 402.65 276 393.9 277.1 382.65 278.5 374.7 273.25 368.95 280.2 358.3 281.5 352.1 282.3 346.6 280.65 341.05 278.9 337.8 275.25L 337.9 274.95Q 337.75 275.05 337.65 275.15 330.55 281.5 319.95 282.85 312.6 283.7 306 281.75 299.35 279.75 295.3 275.55L 295.2 275.45Q 287.75 279.7 278.65 280.85 264.75 282.55 254.05 276.65 243.3 270.8 242.1 260.75 241.9 259.35 242 257.5 233.7 257.85 227.7 254.05 221.55 250.3 220.8 244.3 219.7 235.3 229.65 229.5 223.3 225.75 222.5 219.7L 222.5 219.65Q 222.1 216.3 223.4 213.3 223.55 212.9 223.8 212.5 208.85 202.65 213.9 192 216.55 186.85 224.15 182.85 229.4693359375 180.017578125 235.825 178.5 243.253125 176.723046875 252.1 176.75 260.861328125 176.75 268.225 178.5 274.25703125 179.9359375 279.35 182.55 288.2 181.95 296.35 184.4 294.55 186.8 293.55 189.45M 357.1 183.4Q 358.3 185.55 359.1 188.3M 429.9 231.6Q 426.95 227.75 421.8 225.35M 415.8 259.75Q 416.05 258.3 415.85 256.65M 337.65 275.15Q 336.5 273.75 335.55 271.8M 374.7 273.25Q 372.1 271.55 370.5 269.45M 403.25 195.35Q 403.7 199.25 402.35 202.95M 186.9 204.9Q 190.9 207.05 196.65 207.05 202.35 207.05 206.45 204.9 206.95 204.65 207.4 204.35 210.45 202.35 210.45 199.7 210.45 197.05 207.4 195.05 206.95 194.75 206.45 194.45 202.35 192.3 196.65 192.35 190.9 192.3 186.9 194.45 182.8 196.65 182.8 199.7 182.8 202.7 186.9 204.9 ZM 279.35 182.55Q 279.65 182.7 280 182.85 284 184.95 286.6 187.4M 295.2 275.45Q 298.6 273.4 301.2 271.05M 229.7 215.2Q 226.8 214.1 224.15 212.7 223.95 212.6 223.8 212.5M 229.8 229.4Q 234.65 226.6 240.4 225.9L 242.1 225.75M 229.65 229.5L 229.7 229.55 229.8 229.4 229.75 229.4Q 229.7 229.4 229.65 229.5 ZM 179.9 212.4Q 181.9 213.5 184.8 213.5 187.65 213.5 189.7 212.4 191.7 211.3 191.7 209.8 191.7 208.3 189.7 207.2 187.65 206.1 184.8 206.1 181.9 206.1 179.9 207.2 177.8 208.3 177.85 209.8 177.8 211.3 179.9 212.4 ZM 242 257.45L 242 257.5 242.1 257.5 242 257.45Q 242.1 255.5 242.65 253.55"/></defs><g transform="matrix( 1, 0, 0, 1, -177.05,-168.95) "><use xlink:href="#Layer0_0_MEMBER_' + i + '_FILL"/><use xlink:href="#Layer0_0_MEMBER_0_1_STROKES"/></g></svg>')
          .appendTo($svgBox);

        $texto
          .attr({
            'data-correta': alter[i].dataCorreta,
            'id': 'texto-' + i
          })
          .css({
            width: config.width - 100,
            height: config.height - 20,
            fontSize: config.fontSize,
            lineHeight: config.lineHeight,
            textAlign: config.textAlign,
            color: config.color,
            position: 'absolute',
            left: 80,
            top: 20,
            display: 'table'
          })
          .appendTo($item);

        $p
          .html(alter[i].texto)
          .attr('data-index', i)
          .attr('data-fraseFim', alter[i].dataFrase ? alter[i].dataFrase : '')
          .addClass('texto-p')
          .css({
            width: '100%',
            display: 'table-cell',
            verticalAlign: 'middle',
            cursor: 'pointer'
          }).appendTo($texto);

        addEventosCerto($p);
      } else {

        //balão por traz do texto

        $svgBox = $('<div>')
          .attr('id', 'svgBox')
          .css({
            position: 'absolute'
          })
          .appendTo($item);


        tam = {
          w: config.width - 20,
          h: config.height - 3
        };

        svg = $('<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="none" x="0px" y="0px" width="' + tam.w + 'px" height="' + tam.h + 'px" viewBox="0 0 177 142"><defs><g id="S_mbolo_1_0_Layer0_' + i + '_FILL"><path id="balao' + i + '" fill="#FFFFFF" stroke="none" d="M 148.7 17.05Q 123.2 0 87.15 0 51.05 0 25.5 17.05 0 34.05 0 58.15 0 82.25 25.5 99.3 26.95 100.3 28.45 101.2L 12.05 139.7 57.45 113.05Q 71.25 116.35 87.15 116.35 123.2 116.35 148.7 99.3 174.25 82.25 174.25 58.15 174.25 34.05 148.7 17.05 Z"/></g><path id="S_mbolo_2_0_Layer0_0_1_STROKES" stroke="#CCCCCC" stroke-width="1" stroke-linejoin="round" stroke-linecap="round" fill="none" d="M 148.7 17.05Q 174.25 34.05 174.25 58.15 174.25 82.25 148.7 99.3 123.2 116.35 87.15 116.35 71.25 116.35 57.45 113.05L 12.05 139.7 28.45 101.2Q 26.95 100.3 25.5 99.3 0 82.25 0 58.15 0 34.05 25.5 17.05 51.05 0 87.15 0 123.2 0 148.7 17.05 Z"/></defs><g id="fundoBalao" transform="matrix( 1.00201416015625, 0, 0, 1.0021514892578125, 1.2,1) "><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlink:href="#S_mbolo_1_0_Layer0_' + i + '_FILL"/></g></g><g id="bodaBalao" transform="matrix( 1.00201416015625, 0, 0, 1.0021514892578125, 1.2,1) "><g transform="matrix( 1, 0, 0, 1, 0,0) "><use xlink:href="#S_mbolo_2_0_Layer0_0_1_STROKES"/></g></g></svg>')
          .appendTo($svgBox);

        $texto
          .attr({
            'data-correta': alter[i].dataCorreta,
            'id': 'texto-' + i
          })
          .addClass('bold')
          .css({
            width: config.width - 50,
            height: config.height - 20,
            fontSize: config.fontSize,
            lineHeight: config.lineHeight,
            textAlign: config.textAlign,
            color: config.color,
            position: 'absolute',
            left: 16,
            top: 0,
            display: 'table'
          })
          .appendTo($item);

        $p
          .html(alter[i].texto)
          .attr('data-index', i)
          .attr('data-fraseFim', alter[i].dataFrase ? alter[i].dataFrase : '')
          .addClass('texto-p')
          .css({
            width: '100%',
            display: 'table-cell',
            verticalAlign: 'middle',
            cursor: 'pointer'
          }).appendTo($texto);

        addEventosErrado($p);
      }
    }

    function handlerClick() {
      var self = $(this),
        correta = self.parent().attr('data-correta');

      self.css('opacity', 1);

      if ( !! $(this).attr('data-fraseFim')) {

        edi.util.popUp($(this).attr('data-fraseFim'), {
          topBtn: -8
        });
      }


      if (correta == 'true') {
        edi.objetivos.unshift(1);
        animaIco(self, true);
        $('#balao' + self.attr('data-index')).attr('fill', '#00f');

        //chamando callback
        if (callBack) callBack(true, self);

        corretas++;
      } else {
        edi.objetivos.unshift(2);
        animaIco(self, false);
        $('#balao' + self.attr('data-index')).attr('fill', '#f00');

        //chamando callback
        if (callBack) callBack(false, self);
      }

      peca.objetivos.pop();
      edi.objetivos.pop();
      edi.finalizar();

      var acertouTodas = (corretas == qtdObjetivos);

      if (peca.objetivos.length === 0) {
        $('.texto-p').off();
        if (callBackFinal) callBackFinal(acertouTodas, self);
      }

      self.css('color', '#fff');

    }

    //animação acertou/errou
    function animaIco(a, b) {
      var img;
      if (b) {
        img = "../../canvas/objetos/animaCerto";
        require([img], function(canvas) {
          var mascote = new canvas.animaCerto({
            width: 28,
            cor: '#fff'
          });
          mascote.obj.css({
            top: config.topIco,
            left: config.leftIco
          }).appendTo(a.parent());
          mascote.play();
        });
      } else {
        img = "../../canvas/objetos/animaErrado";
        require([img], function(canvas) {
          var mascote = new canvas.animaErrado({
            width: 28,
            cor: '#fff'
          });
          mascote.obj.css({
            top: config.topIco + 5,
            left: config.leftIco
          }).appendTo(a.parent());
          mascote.play();
        });
      }
    }

    ARR_TAREFAS[tarefaalternativa_balao].resolve();
  }

  return {
    objetivos: [],
    setConfig: _setConfig,
    alternativa_balao: _init,
    popUp: _popUp
  };

});