//Criando classe para a cena 
class CenaMapa extends Phaser.Scene {
    constructor() {
        super({ key: 'CenaMapa'});
    }

    preload () {
        
        // Carrega os arquivos JSON do mapa
        this.load.tilemapTiledJSON('mapa', 'assets/mapa/MAPA OFICIAL.json');

        // Carrega as imagens usadas no Tiled
        this.load.image('tiles1', 'assets/tille sets/bridges.png');
        this.load.image('tiles2', 'assets/tille sets/free version.png');
        this.load.image('tiles3', 'assets/tille sets/furniture.png'); 
        this.load.image('tiles4', 'assets/tille sets/inside.png');
        this.load.image('tiles5', 'assets/tille sets/interior free.png');
        this.load.image('tiles6', 'assets/tille sets/PixelSpaces Free Pack.png');
        this.load.image('tiles7', 'assets/tille sets/RM2k3School-Classroom-GB.png');
        this.load.image('tiles8', 'assets/tille sets/RM2k3School-Classroom.png');
        this.load.image('tiles9', 'assets/tille sets/Serene_Village_XP.png'); 

    }
}