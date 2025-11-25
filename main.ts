namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Check = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile7`) && mySprite.vy != -80) {
        mySprite.setPosition(Math.round((mySprite.x - 8) / 16) * 16 + 8, Math.round((mySprite.y - 8) / 16) * 16 + 8)
        mySprite.setVelocity(0, -80)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim0`,
        200,
        true
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(10)
    if (sprites.allOfKind(SpriteKind.Coin).length == 0) {
        game.gameOver(true)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile7`) && mySprite.vx != -80) {
        mySprite.setPosition(Math.round((mySprite.x - 8) / 16) * 16 + 8, Math.round((mySprite.y - 8) / 16) * 16 + 8)
        mySprite.setVelocity(-80, 0)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim1`,
        200,
        true
        )
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile7`) && mySprite.vx != 80) {
        mySprite.setPosition(Math.round((mySprite.x - 8) / 16) * 16 + 8, Math.round((mySprite.y - 8) / 16) * 16 + 8)
        mySprite.setVelocity(80, 0)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim`,
        200,
        true
        )
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile7`) && mySprite.vy != 80) {
        mySprite.setPosition(Math.round((mySprite.x - 8) / 16) * 16 + 8, Math.round((mySprite.y - 8) / 16) * 16 + 8)
        mySprite.setVelocity(0, 80)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim2`,
        200,
        true
        )
    }
})
let mySprite: Sprite = null
info.setLife(3)
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 368
    export const ARCADE_SCREEN_HEIGHT = 368
}
tiles.setCurrentTilemap(tilemap`level`)
tileUtil.createSpritesOnTiles(assets.tile`myTile7`, assets.image`myImage`, SpriteKind.Coin)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
mySprite.setPosition(11 * 16 + 8, 20 * 16 + 8)
