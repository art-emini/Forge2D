namespace Forge2D {
  export namespace Types {
    export interface Config {
      renderer?: Misc.Renderer | undefined;
      canvas?: HTMLCanvasElement | string;

      requireFocus?: boolean;

      physics?: {
        enabled: boolean;
        gravity?: Math.Vector2Like;
        debug?: boolean;
      };

      scale?: Math.Scale;
    }

    export namespace Misc {
      export enum Renderer {
        Canvas = 0,
        WebGL = 1,
      }
    }

    export namespace Math {
      export interface Vector2Like {
        x: number;
        y: number;
      }
      export interface Bounds extends Vector2Like {
        w: number;
        h: number;
      }
      export interface Scale {
        w: number;
        h: number;
      }
    }
  }
}

export default Forge2D;
