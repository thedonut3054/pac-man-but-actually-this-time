namespace SpriteKind {
    export const Coin = SpriteKind.create()
    export const Check = SpriteKind.create()
    export const fcheck = SpriteKind.create()
    export const FrontPoint = SpriteKind.create()
    export const bcheck = SpriteKind.create()
    export const backPoint = SpriteKind.create()
    export const tpoint = SpriteKind.create()
}
function ResetGhosts () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    timer.after(1000, function () {
        Ghost = sprites.create(assets.image`myImage7`, SpriteKind.Enemy)
        Ghost.setPosition(9 * 16 + 8, 15 * 16 + 8)
        Ghost.follow(mySprite, 70)
    })
    timer.after(3000, function () {
        Ghost2 = sprites.create(assets.image`myImage10`, SpriteKind.Enemy)
        Ghost2.setPosition(11 * 16 + 8, 15 * 16 + 8)
        Ghost.follow(mySprite, 70)
    })
    timer.after(5000, function () {
        Ghost3 = sprites.create(assets.image`myImage12`, SpriteKind.Enemy)
        Ghost3.setPosition(13 * 16 + 8, 15 * 16 + 8)
        Ghost3.follow(mySprite, 70)
    })
    timer.after(7000, function () {
        Ghost4 = sprites.create(assets.image`myImage11`, SpriteKind.Enemy)
        Ghost4.setPosition(11 * 16 + 8, 13 * 16 + 8)
        Ghost4.follow(mySprite, 70)
    })
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
        Shoot_Forward()
        Shoot_Backward()
        Turn_Waypoint2()
    }
})
function Shoot_Backward () {
    sprites.destroyAllSpritesOfKind(SpriteKind.bcheck)
    if (mySprite.vx != 0) {
        if (mySprite.vx > 0) {
            BackCheck = sprites.create(assets.image`myImage8`, SpriteKind.bcheck)
            BackCheck.setFlag(SpriteFlag.Invisible, false)
            BackCheck.setPosition(mySprite.x, mySprite.y)
            BackCheck.setVelocity(-1000, 0)
        } else if (mySprite.vx < 0) {
            BackCheck = sprites.create(assets.image`myImage8`, SpriteKind.bcheck)
            BackCheck.setFlag(SpriteFlag.Invisible, false)
            BackCheck.setPosition(mySprite.x, mySprite.y)
            BackCheck.setVelocity(1000, 0)
        }
    } else if (mySprite.vy != 0) {
        if (mySprite.vy > 0) {
            BackCheck = sprites.create(assets.image`myImage8`, SpriteKind.bcheck)
            BackCheck.setFlag(SpriteFlag.Invisible, false)
            BackCheck.setPosition(mySprite.x, mySprite.y)
            BackCheck.setVelocity(0, -1000)
        } else if (mySprite.vy < 0) {
            BackCheck = sprites.create(assets.image`myImage8`, SpriteKind.bcheck)
            BackCheck.setFlag(SpriteFlag.Invisible, false)
            BackCheck.setPosition(mySprite.x, mySprite.y)
            BackCheck.setVelocity(0, 1000)
        }
    }
}
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
        Shoot_Forward()
        Shoot_Backward()
        Turn_Waypoint2()
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
        Shoot_Forward()
        Shoot_Backward()
        Turn_Waypoint2()
    }
})
scene.onHitWall(SpriteKind.bcheck, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.backPoint)
    BackWaypoint = sprites.create(assets.image`myImage9`, SpriteKind.backPoint)
    BackWaypoint.setFlag(SpriteFlag.Invisible, false)
    BackWaypoint.setPosition(Math.round((sprite.x - 8) / 16) * 16 + 8, Math.round((sprite.y - 8) / 16) * 16 + 8)
    sprites.destroy(sprite)
    Ghost2.follow(BackWaypoint, 70)
})
scene.onHitWall(SpriteKind.fcheck, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.FrontPoint)
    FrontWaypoint = sprites.create(assets.image`myImage6`, SpriteKind.FrontPoint)
    FrontWaypoint.setFlag(SpriteFlag.Invisible, false)
    FrontWaypoint.setPosition(Math.round((sprite.x - 8) / 16) * 16 + 8, Math.round((sprite.y - 8) / 16) * 16 + 8)
    sprites.destroy(sprite)
    Ghost.follow(FrontWaypoint, 70)
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
        Shoot_Forward()
        Shoot_Backward()
        Turn_Waypoint2()
    }
})
function Turn_Waypoint2 () {
    sprites.destroyAllSpritesOfKind(SpriteKind.tpoint)
    Turn_Waypoint = sprites.create(assets.image`myImage1`, SpriteKind.tpoint)
    Turn_Waypoint.setPosition(Math.round((mySprite.x - 8) / 16) * 16 + 8, Math.round((mySprite.y - 8) / 16) * 16 + 8)
    Ghost3.follow(Turn_Waypoint, 70)
}
function Shoot_Forward () {
    sprites.destroyAllSpritesOfKind(SpriteKind.fcheck)
    if (mySprite.vx != 0) {
        if (mySprite.vx < 0) {
            frontcheck = sprites.create(assets.image`myImage5`, SpriteKind.fcheck)
            frontcheck.setFlag(SpriteFlag.Invisible, false)
            frontcheck.setPosition(mySprite.x, mySprite.y)
            frontcheck.setVelocity(-1000, 0)
        } else if (mySprite.vx > 0) {
            frontcheck = sprites.create(assets.image`myImage5`, SpriteKind.fcheck)
            frontcheck.setFlag(SpriteFlag.Invisible, false)
            frontcheck.setPosition(mySprite.x, mySprite.y)
            frontcheck.setVelocity(1000, 0)
        }
    } else if (mySprite.vy != 0) {
        if (mySprite.vy < 0) {
            frontcheck = sprites.create(assets.image`myImage5`, SpriteKind.fcheck)
            frontcheck.setFlag(SpriteFlag.Invisible, false)
            frontcheck.setPosition(mySprite.x, mySprite.y)
            frontcheck.setVelocity(0, -1000)
        } else if (mySprite.vy > 0) {
            frontcheck = sprites.create(assets.image`myImage5`, SpriteKind.fcheck)
            frontcheck.setFlag(SpriteFlag.Invisible, false)
            frontcheck.setPosition(mySprite.x, mySprite.y)
            frontcheck.setVelocity(0, 1000)
        }
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    timer.throttle("action", 500, function () {
        mySprite.setVelocity(0, 0)
        animation.runImageAnimation(
        mySprite,
        assets.animation`myAnim3`,
        200,
        false
        )
        mySprite.setPosition(11 * 16 + 8, 20 * 16 + 8)
        info.changeLifeBy(-1)
    })
})
let frontcheck: Sprite = null
let Turn_Waypoint: Sprite = null
let FrontWaypoint: Sprite = null
let BackWaypoint: Sprite = null
let BackCheck: Sprite = null
let Ghost4: Sprite = null
let Ghost3: Sprite = null
let Ghost2: Sprite = null
let Ghost: Sprite = null
let mySprite: Sprite = null
info.setLife(3)
game.setGameOverEffect(true, effects.none)
game.setGameOverEffect(false, effects.none)
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 368
    export const ARCADE_SCREEN_HEIGHT = 368
}
tiles.setCurrentTilemap(tilemap`level`)
tileUtil.createSpritesOnTiles(assets.tile`myTile7`, assets.image`myImage`, SpriteKind.Coin)
mySprite = sprites.create(assets.image`myImage0`, SpriteKind.Player)
mySprite.setPosition(11 * 16 + 8, 20 * 16 + 8)
ResetGhosts()
