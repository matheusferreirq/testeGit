class CenaMenu extends Phaser.Scene {
    constructor() {
        super({ key: "CenaMenu" });
    }

    preload(){
        this.load.image('bg', 'assets/menubgg.PNG');
        this.load.image('logo', 'assets/logoHackerados1.png')
        this.load.image('button', 'assets/playButton.png')
    }


    create() {
        this.add.image(767.5, 365, 'bg').setScale(1);
        this.add.image(750, 160, "logo").setScale(0.9);

        var botao = this.add.image(745, 365, "button").setScale(0.5)
            .setInteractive()
            .on("pointerdown", () => {
                this.cameras.main.fadeOut(1350)
                });

                this.cameras.main.once("camerafadeoutcomplete", () => {
                    this.scene.start("CenaTermo")}); 

            this.tweens.add({
                targets: botao,
                scaleX: 0.55, // Aumenta o tamanho horizontal
                scaleY: 0.55, // Aumenta o tamanho vertical
                duration: 500, // Tempo da animação
                yoyo: true, // Retorna ao tamanho original
                repeat: -1, // Repete infinitamente
                ease: "Sine.easeInOut" // Efeito suave
            });

            botao.on("pointerover", () => {
                botao.setScale(0.55);
                botao.setAlpha(0.8); // Deixa o botão mais transparente
            });
            
            botao.on("pointerout", () => {
                botao.setScale(0.5);
                botao.setAlpha(1);
            });
                       
    }
}
