const { Telegraf } = require('telegraf');
const TOKEN = '5580475681:AAGnNjSuEe1QUZmOp4PM19LwGqE5SKY4BpM';
const bot = new Telegraf(TOKEN);
const web_link = "https://blueteamserver.duckdns.org";


bot.start((ctx) =>
    ctx.reply(Bienvenida(), {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Tienda En linea", callback_data:'Tienda En Linea' },
                ]
            ],
            /*launch:[[{text: "Tienda en linea", web_app:{url: web_link}}]],
            //keyboard: [[{ text: "Tienda en Linea 👍", web_app: { url: web_link } }]],*/
        },
    })
);
bot.launch();

function Bienvenida() {
    return 'Visita Nuestra Tienda en linea clic... 👇';
}
