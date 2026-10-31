/*
        ======================================================
        CONFIGURAÇÃO DO WHATSAPP

        COLOQUE AQUI O NÚMERO DA SUA EMPRESA.

        Exemplo:

        55 = Brasil
        11 = São Paulo
        999999999 = número

        Ficaria:

        5511999999999

        Não coloque:
        +55
        espaços
        parênteses
        traços
        ======================================================
        */

const WHATSAPP_NUMBER = "68992293516";


/*
======================================================
MENSAGEM AUTOMÁTICA
======================================================
*/

const message = encodeURIComponent(
    "Olá! Vim pelo site da SolarTech e gostaria de solicitar um orçamento para instalação, manutenção ou limpeza de painéis solares."
);


/*
======================================================
LINK FINAL
======================================================
*/

const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;


/*
======================================================
APLICA O LINK AO BOTÃO FLUTUANTE
======================================================
*/

document
    .getElementById("whatsappFloat")
    .href = whatsappURL;


/*
======================================================
APLICA O LINK AO BOTÃO DA CTA
======================================================
*/

document
    .getElementById("ctaWhatsApp")
    .href = whatsappURL;


/*
======================================================
ANO AUTOMÁTICO DO FOOTER
======================================================
*/

document
    .getElementById("year")
    .textContent = new Date().getFullYear();
