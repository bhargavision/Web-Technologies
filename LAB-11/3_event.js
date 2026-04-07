const EventEmitter = require("events");

const emitter = new EventEmitter();

// Listener 1
emitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Listener 2 (multiple listeners for same event)
emitter.on("greet", (name) => {
  console.log(`Welcome, ${name}!`);
});

// Another event listener
emitter.on("dataEvent", (data) => {
  console.log("Data received:", data);
});

// Emit events
console.log("Emitting greet event...");
emitter.emit("greet", "User");

console.log("Emitting dataEvent...");
emitter.emit("dataEvent", { id: 1, message: "Event-driven data" });

// Asynchronous event demonstration
setTimeout(() => {
  console.log("Emitting async event after 2 seconds...");
  emitter.emit("greet", "Async User");
}, 2000);
