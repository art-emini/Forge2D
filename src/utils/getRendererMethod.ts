import Forge2D from '..';

export default function getRendererMethod(): Forge2D.Types.Misc.Renderer {
  try {
    const canvas = document.createElement('canvas');
    return !!window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      ? 1
      : 0;
  } catch (e) {
    return 0;
  }
}
