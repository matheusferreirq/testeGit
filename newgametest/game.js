// Definindo as configurações do jogo
const config = {
    type: Phaser.AUTO,
    width: 1535,
    height: 730 ,
    physics: { default: "arcade" },
    scene: [CenaMenu, CenaEscola, CenaTermo, CenaBug]
};

// Criando o jogo
const game = new Phaser.Game(config);
