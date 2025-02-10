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

        let botao = this.add.image(767.5, 365, "button").setScale(0.5)
            .setInteractive()
            .on("pointerdown", () => this.scene.start("CenaJogo"));
    }
}
