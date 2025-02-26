// Criando classe para a cena
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
        // Adicionando fundo e logo
        this.add.image(700, 365, 'bg').setScale(1);
        this.add.image(750, 160, "logo").setScale(0.9);

        // Adicionando botão e atribuindo a função de iniciar a animação de Fade Out e trocar de cena quando acabar
        var botao = this.add.image(745, 365, "button").setScale(0.5)
            .setInteractive()
            .on("pointerdown", () => {
                this.cameras.main.fadeOut(1350)
                });

                this.cameras.main.once("camerafadeoutcomplete", () => {
                    this.scene.start("CenaTermo")}); 

            // Animação de aumentar de tamanho
            this.tweens.add({
                targets: botao,
                scaleX: 0.55, 
                scaleY: 0.55,
                duration: 500, 
                yoyo: true, 
                repeat: -1, 
                ease: "Sine.easeInOut" 
            });

            // Diminuindo a transparência e tamanho quando o mouse está em cima do botão
            botao.on("pointerover", () => {
                botao.setScale(0.45);
                botao.setAlpha(0.7); 
            });
            
            botao.on("pointerout", () => {
                botao.setScale(0.5);
                botao.setAlpha(1);
            });
                       
    }
}