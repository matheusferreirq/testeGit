const config = {
    type: Phaser.AUTO,
    width: 1535,
    height: 730 ,
    physics: { default: "arcade" },
    scene: [CenaMenu, CenaJogo, CenaEscola]
};

const game = new Phaser.Game(config);
