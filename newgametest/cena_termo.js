// Criando classe para a cena
class CenaTermo extends Phaser.Scene {
    constructor() {
        super({ key: 'CenaTermo'});
    }

    preload() {
        this.load.image('bg', 'assets/menubgg.PNG');
        this.load.image('agreeButton', 'assets/agreeButton.png');

    };

    create() {
        // Animação de Fade In no início da cena
        this.cameras.main.fadeIn(500);
        
        // Adcionando fundo e diminuindo transparência
        const fundo = this.add.image(740, 365, 'bg').setScale(1.2)
        fundo.setAlpha(0.2);

        var texx = "AO CONTINUAR, VOCÊ CONFIRMA SUA CONCORDÂNCIA COM OS TERMOS ACIMA, ASSEGURANDO UMA EXPERIÊNCIA TOTALMENTE INTEGRADA E OTIMIZADA."

        // Adicionando textos 
        this.add.text(737.5, 365, 'TERMO DE USO:').setOrigin(0.5, 0.5)
        this.add.text(737.5, 400, texx).setOrigin(0.5, 0.5)
        
        // Adicionando botão e atribuindo a função de iniciar a animação de Fade Out e trocar de cena quando acabar
        var botaoConcordar = this.add.image(737.5, 450, "agreeButton")
            .setInteractive()
            .on("pointerdown", () => {
                this.cameras.main.fadeOut(2000)
                });

                this.cameras.main.once("camerafadeoutcomplete", () => {
                    this.scene.start("CenaBug")}); 
    };
}