//Criando classe para a cena 
class CenaEscola extends Phaser.Scene {
    constructor() {
        super({ key: 'CenaEscola'});
    }

    preload(){
        this.load.image('inSchool', 'assets/mapaEscola.png');

        this.load.tilemapTiledJSON('mapaOficial', 'assets/MAPA OFICIAL.json');

        this.load.image('furniture', 'assets/tileSets/furniture.png');
        this.load.image('bridges', 'assets/tileSets/bridges.png');
        this.load.image('freeVersion', 'assets/tileSets/free version.png');
        this.load.image('inside', 'assets/tileSets/inside.png');
        this.load.image('interiorFree', 'assets/tileSets/interior free.png');
        this.load.image('pixelSpaces', 'assets/tileSets/PixelSpaces Free Pack.png');
        this.load.image('classroom', 'assets/tileSets/RM2k3School-Classroom-GB.png');
        this.load.image('classroom2', 'assets/tileSets/RM2k3School-Classroom.png');

        this.load.spritesheet("player", "assets/Unarmed_Walk/playerAnim.png", {
            frameWidth: 64,
            frameHeight: 64
        });
    }

    
    create() {

        // Criação de mapa

        const tiledMap = this.make.tilemap({ key: 'mapaOficial' });

        let tileSetList = [];
        tileSetList[0] = tiledMap.addTilesetImage('furniture', 'furniture', 16, 16, 1, 2);
        tileSetList[1] = tiledMap.addTilesetImage('bridges', 'bridges');
        tileSetList[2] = tiledMap.addTilesetImage('freeVersion', 'freeVersion');
        tileSetList[3] = tiledMap.addTilesetImage('inside', 'inside');
        tileSetList[4] = tiledMap.addTilesetImage('interiorFree', 'interiorFree');
        tileSetList[5] = tiledMap.addTilesetImage('pixelSpaces', 'pixelSpaces');
        tileSetList[6] = tiledMap.addTilesetImage('classroom', 'classroom');
        tileSetList[7] = tiledMap.addTilesetImage('classroom2', 'classroom2');
        
        tiledMap.createLayer(0, tileSetList[0], 0, 0)
        tiledMap.createLayer(1, tileSetList[1], 0, 0)
        tiledMap.createLayer(2, tileSetList[2], 0, 0)
        tiledMap.createLayer(3, tileSetList[3], 0, 0)
        tiledMap.createLayer(4, tileSetList[4], 0, 0)
        tiledMap.createLayer(5, tileSetList[5], 0, 0)
        tiledMap.createLayer(6, tileSetList[6], 0, 0)
        tiledMap.createLayer(7, tileSetList[7], 0, 0)

        // Animação de Fade In no início da cena
        this.cameras.main.fadeIn(500);
        
        // Adicionando o fundo e mudando a escala
        // var background = this.add.image(767.5, 365, 'inSchool').setOrigin(0.5, 0.5);
        // background.setScale(1.5)
        
        
        // Criando o jogador
        this.player = this.physics.add.sprite(400, 400, "player").setScale(2.7);
        this.player.setCollideWorldBounds(true);

        // Criando animações
        this.anims.create({
            key: "andar-baixo",
            frames: this.anims.generateFrameNumbers("player", { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "andar-esquerda",
            frames: this.anims.generateFrameNumbers("player", { start: 6, end: 11 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "andar-direita",
            frames: this.anims.generateFrameNumbers("player", { start: 12, end: 17 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "andar-cima",
            frames: this.anims.generateFrameNumbers("player", { start: 18, end: 23 }),
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
    }

    update(){
            
        // Definindo o estado inicial do personagem
        let moving = false;
        this.player.setVelocity(0);

        // Adicionando os comandos que vão rodar quando cada tecla são pressionadas
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