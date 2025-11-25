namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 368
    export const ARCADE_SCREEN_HEIGHT = 368
}
tiles.setCurrentTilemap(tilemap`level`)
tileUtil.createSpritesOnTiles(assets.tile`myTile7`, assets.image`myImage`, SpriteKind.Coin)
