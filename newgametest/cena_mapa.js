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

    create () {
        // Cria o mapa com base no JSON carregado
    const map = this.make.tilemap({ key: "mapa" });

    // Associa os tilesets (o nome aqui deve ser o mesmo do Tiled!)
    const tileset1 = map.addTilesetImage("bridges", "tiles1");
    const tileset2 = map.addTilesetImage("free version", "tiles2");
    const tileset3 = map.addTilesetImage("furniture", "tiles3");
    const tileset4 = map.addTilesetImage("inside", "tiles4");
    const tileset5 = map.addTilesetImage("interior free", "tiles5");
    const tileset6 = map.addTilesetImage("PixelSpaces Free Pack", "tiles6");
    const tileset7 = map.addTilesetImage("RM2k3School-Classroom-GB", "tiles7");
    const tileset8 = map.addTilesetImage("RM2k3School-Classroom", "tiles8");
    const tileset9 = map.addTilesetImage("Serene_Village_XP", "tiles9");

    // Criar as camadas do Tiled
    const camada7 = map.createLayer("Camada de Blocos 7", [
        tileset1, tileset2, tileset3, tileset4, tileset5, 
        tileset6, tileset7, tileset8, tileset9
    ]);
    const camada5 = map.createLayer("Camada de Blocos 5", [
        tileset1, tileset2, tileset3, tileset4, tileset5, 
        tileset6, tileset7, tileset8, tileset9
    ]);
    const camada4 = map.createLayer("Camada de Blocos 4", [
        tileset1, tileset2, tileset3, tileset4, tileset5, 
        tileset6, tileset7, tileset8, tileset9
    ]);
    const camada2 = map.createLayer("Camada de Blocos 2", [
        tileset1, tileset2, tileset3, tileset4, tileset5, 
        tileset6, tileset7, tileset8, tileset9
    ]);
    const camada1 = map.createLayer("Camada de Blocos 1", [
        tileset1, tileset2, tileset3, tileset4, tileset5, 
        tileset6, tileset7, tileset8, tileset9
    ]);
    const camada3 = map.createLayer("Camada de Blocos 1", [
        tileset1, tileset2, tileset3, tileset4, tileset5, 
        tileset6, tileset7, tileset8, tileset9
    ]);
    const camada6 = map.createLayer("Camada de Blocos 6", [
        tileset1, tileset2, tileset3, tileset4, tileset5, 
        tileset6, tileset7, tileset8, tileset9
    ]);

    }


}