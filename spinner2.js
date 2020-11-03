const frames = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|', '/', '-', '\\', '|', '/', '-', '\\'];
let fps = 100;

for (let i = 0; i < frames.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${frames[i]}`);
  }, fps);
  fps += 200;
}