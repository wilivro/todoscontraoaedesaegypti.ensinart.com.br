define(function (require) {
    var tarefaApresentacao = addTarefa();

    var edi = require('../lib/edi'),//requisitando o EDI
        _configEDI = null;

    function _setConfig(config) {//setando as configurações do EDI
        config.enunciado = false;
        _configEDI = config;
    }

    function _init(titulo, texto, settings) {

        edi.iniciar(_configEDI);//montar o palco

        var config = {
            tempo: 5,
            mascote: true,
            raio: true,
            azul: false,
            roxo: false,
            laranja: false,
            vermelhor: false,
            lineHeight: undefined
        };

        if (settings) {
            $.extend(config, settings);
        }

        var $apresentacao = $('<section>')
            .attr('id', 'apresentacao-main')
            .css({
                width: 790,
                height: 385,
                textshadow: '1px 1px 2px rgba(0, 0, 0, 0.3)',
                position: 'absolute',
                left: 0,
                top: 0
            })
            .appendTo('#conteudo');

        if (config.roxo)
            $apresentacao.css({background: 'radial-gradient(#A94A65, #531222 80%), linear-gradient(#531222 80%, #A94A65, #531222 80%)'});

        if (config.vermelho)
            $apresentacao.css({background: 'radial-gradient(#EA5224, #D21C1C 80%), linear-gradient(#D21C1C 80%, #EA5224, #531222 80%)'});

        if (config.laranja)
            $apresentacao.css({background: 'radial-gradient(#FABA2E 10%, #FFA313 80%), linear-gradient(#FABA2E 80%, #F7AF2D, #FFA313 80%)'});

        if (config.azul)
            $apresentacao.css({background: 'radial-gradient(#8abbd7 10%, #066dab 80%), linear-gradient(#c5deea 80%, #8abbd7, #066dab 80%)'});

        if (config.raio) {
            var $raio = $('<img>')
                .attr('id', 'apresentacao-raio')
                .attr('src', '../wilib/img/svg/raio.svg')
                .css({
                    position: 'absolute',
                    left: -110,
                    top: -55,
                    '-webkit-animation': 'rotate 30s linear infinite',
                    animation: 'rotate 30s linear infinite'
                })
                .appendTo($apresentacao);
        }

        var $titulo = $('<div>')
            .attr('id', 'apresentacao-titulo')
            .css({
                position: 'absolute',
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                left: 0,
                top: 120
            })
            .appendTo($apresentacao);

        var divCenter = $('<div>')
            .css({
                display: 'table-cell',
                verticalAlign: 'middle',
                width: 285,
                height: 150
            })
            .appendTo($titulo);

        var pCenter = $('<p>')
            .css({
                display: 'table-cell',
                width: 285,
                fontSize: 28
            })
            .html(titulo)
            .appendTo(divCenter);

        var $texto = $('<div>')
            .attr('id', 'apresentacao-texto')
            .css({
                width: 350,
                height: 220,
                position: 'absolute',
                left: 840,
                top: 84
            })
            .appendTo($apresentacao);

        $texto.animate({left: 380}, 1000);

        var pTexto = $('<p>')
            .css({
                height: 220,
                fontSize: 15,
                color: '#fff',
                textAlign: 'center',
                display: 'table-cell',
                verticalAlign: 'middle'
            })
            .html(texto)
            .appendTo($texto);

        if (config.lineHeight) {
            $texto.find('p').css('lineHeight', config.lineHeight);
        }


        require(["../../canvas/objetos/mascoteIndice"], function (canvas) {
    var anima = new canvas.mascoteIndice();
    anima.obj.css({
        top: 255,
        left: -50
    }).appendTo('#conteudo');
    anima.play();
});

           edi.regressiva(config.tempo*1000, 'para finalizar!', function(){
               edi.finalizar();
           });

            ARR_TAREFAS[tarefaApresentacao].resolve();
    }

    return {
        setConfig: _setConfig,
        apresentacao: _init
    };

});
