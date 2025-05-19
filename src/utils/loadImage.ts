export default function loadImage(src: string): Promise<any> {
  return new Promise((res, rej) => {
    const loader = new Image();
    loader.src = src;
    loader.onload = res;
    loader.onerror = rej
  });
}
