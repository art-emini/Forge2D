import { Body, Bodies, World } from 'matter-js';
import PIXI from 'pixi.js';

import Texture from '../material/texture';

import makeID from '../../utils/makeID';

import Vector2 from '../math/vector2';
import Forge2D from '../..';
import Game from '../game';

export default class Sprite {
  public readonly id: string = makeID();

  public physicsBody: Body;
  public renderableBody: PIXI.Sprite;

  constructor(
    public readonly game: Game,
    public position: Vector2,
    public scale: Forge2D.Types.Math.Scale,
    public texture: Texture,
    public matterBodyOptions?: Matter.IChamferableBodyDefinition
  ) {
    this.physicsBody = Bodies.rectangle(
      this.position.x,
      this.position.y,
      this.scale.w,
      this.scale.h,
      this.matterBodyOptions
    );
    World.addBody(this.game.Matter.Engine.world, this.physicsBody);

    this.renderableBody = PIXI.Sprite.from(
      this.texture.asset.value,
      this.texture.pixiOptions
    );
    this.game.PIXI.App.stage.addChild(this.renderableBody);
  }
}
