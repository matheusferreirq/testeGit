class CenaEscola extends Phaser.Scene {
    constructor() {
        super({ key: 'CenaEscola'});
    }

    preload(){
        this.load.image('inSchool', 'assets/insideSchool.PNG');

        this.load.spritesheet("player", "assets/Unarmed_Walk/playerAnim.png", {
            frameWidth: 64,
            frameHeight: 64
        });
    }
    
    
    create() {
        this.add.image(767.5, 365, 'inSchool');
        this.cameras.main.fadeIn(500)

            // Criando o jogador
    this.player = this.physics.add.sprite(400, 400, "player").setScale(2);
    this.player.setCollideWorldBounds(true);

    // Criando animações
    this.anims.create({
        key: "andar-baixo",
        frames: this.anims.generateFrameNumbers("player", { start: 1, end: 6 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: "andar-esquerda",
        frames: this.anims.generateFrameNumbers("player", { start: 7, end: 12 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: "andar-direita",
        frames: this.anims.generateFrameNumbers("player", { start: 13, end: 18 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: "andar-cima",
        frames: this.anims.generateFrameNumbers("player", { start: 19, end: 24 }),
        frameRate: 10,
        repeat: -1
    });

    // Criando os controles
    this.cursor = this.input.keyboard.createCursorKeys();
    this.keys = this.input.keyboard.addKeys({
        W: Phaser.Input.Keyboard.KeyCodes.W,
        A: Phaser.Input.Keyboard.KeyCodes.A,
        S: Phaser.Input.Keyboard.KeyCodes.S,
        D: Phaser.Input.Keyboard.KeyCodes.D
    });

    // Adicionando detecção de colisão com a porta
    this.physics.add.overlap(this.player, this.door, this.enterDoor, null, this);

    // Variável para garantir que a cena mude apenas uma vez
    this.canEnter = true;
    }

    update(){
        let moving = false;

    this.player.setVelocity(0);

    if (this.cursor.left.isDown || this.keys.A.isDown) {
        this.player.setVelocityX(-160);
        this.player.anims.play("andar-esquerda", true);
        moving = true;
    } 
    else if (this.cursor.right.isDown || this.keys.D.isDown) {
        this.player.setVelocityX(160);
        this.player.anims.play("andar-direita", true);
        moving = true;
    } 
    else if (this.cursor.up.isDown || this.keys.W.isDown) {
        this.player.setVelocityY(-160);
        this.player.anims.play("andar-cima", true);
        moving = true;
    } 
    else if (this.cursor.down.isDown || this.keys.S.isDown) {
        this.player.setVelocityY(160);
        this.player.anims.play("andar-baixo", true);
        moving = true;
    } 

    if (!moving) {
        this.player.anims.stop();
    }
    }
}