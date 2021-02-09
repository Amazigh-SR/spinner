// process.stdout.write("hello from spinner1.js... \rheyyy\n");
//8 rotations to complete a full circle i.e. 45/2 degrees per rotation

const rotations = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 0;

for (const rotation of rotations) {
  setTimeout(() => {
    process.stdout.write(`\r${rotation}   `);
  }, delay);
  delay += 200;
}

setTimeout(() => {
  process.stdout.write("\n");
}, delay);
