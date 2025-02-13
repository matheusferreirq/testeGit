// Criando classe para a cena
class CenaBug extends Phaser.Scene {
    constructor (){
        super({key: "CenaBug"})
    }

    preload() {
        this.load.spritesheet('glitch', "assets/glitch.png", {
            frameWidth: 300,
            frameHeight: 166
        });

        this.load.image("botaoEntendido", "assets/entendidoButton.png")
    }

    create() {
        
        // Adicionando sprite do bug do fundo e diminuindo e transparência
        this.bug = this.add.sprite(737.5, 270, "glitch").setScale(7);
        this.bug.setAlpha(0.3)

        // Criando animação de bug e reproduzindo
        this.anims.create({
            key: 'bugou',
            frames: this.anims.generateFrameNumbers('glitch', {start: 0, end: 20}),
            frameRate: 15,
            repeat: -1
        });

        this.bug.anims.play('bugou', true);

        var textin = 'Você está sendo hackeado!!!! Possui 10 minutos para resolver suas tasks, antes que seus dados sejam vazados'

        // Adicionando botão e atribuindo a função de iniciar a animação de Fade Out e trocar de cena quando acabar
        this.add.text(737.5, 365, textin).setOrigin(0.5)
        var botaozinho = this.add.image(737.5, 430, "botaoEntendido").setOrigin(0.5, 0.5)
            .setInteractive()
            .on("pointerdown", () => {
                this.cameras.main.fadeOut(1350)
            });

            this.cameras.main.once("camerafadeoutcomplete", () => {
                this.scene.start("CenaEscola");
            });
        botaozinho.setScale(0.75);
    };
}