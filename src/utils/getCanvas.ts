export default function getCanvas(canvas?: string | HTMLCanvasElement) {
  if (canvas && typeof canvas !== 'string') {
    return canvas;
  }

  if (typeof canvas === 'string') {
    const e = document.querySelector(canvas) as HTMLCanvasElement | null;

    if (e) {
      return e;
    }
  }

  // final fallback
  const e = document.createElement('canvas');
  document.appendChild(e);
  return e;
}
