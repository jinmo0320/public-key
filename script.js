const public = document.getElementById("public");
const me = document.getElementById("me");
const arnold = document.getElementById("arnold");
const eve = document.getElementById("eve");

const log = document.getElementById("log");
const logMe = document.getElementById("log-me");
const logArnold = document.getElementById("log-arnold");
const logEve = document.getElementById("log-eve");

let clock;
let base;

public.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (public.value) {
      const div = document.createElement("div");
      div.className = "log-item";
      const p = document.createElement("p");
      const text = document.createTextNode("Public");
      p.appendChild(text);
      const text2 = document.createTextNode(public.value);
      div.appendChild(p);
      div.appendChild(text2);
      log.appendChild(div);

      const nums = public.value.split(", ");
      clock = nums[0];
      base = nums[1];
    }
  }
});

let numMe = undefined;
let numArnold = undefined;

let ppnMe = undefined;
let ppnArnold = undefined;

me.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (me.value) {
      const div = document.createElement("div");
      div.className = "log-item";
      const p = document.createElement("p");
      const text = document.createTextNode("Me");
      p.appendChild(text);

      numMe = me.value;
      ppnMe = Math.pow(base, numMe) % clock;
      const text2 = document.createTextNode(ppnMe);
      div.appendChild(p);
      div.appendChild(text2);
      log.appendChild(div);

      const text3 = document.createTextNode(
        `${base}^${numMe} mod ${clock} = ${ppnMe}`
      );
      logMe.appendChild(text3);
    }
  }
});

arnold.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (arnold.value) {
      const div = document.createElement("div");
      div.className = "log-item";
      const p = document.createElement("p");
      const text = document.createTextNode("Arnold");
      p.appendChild(text);

      numArnold = arnold.value;
      ppnArnold = Math.pow(base, numArnold) % clock;
      const text2 = document.createTextNode(ppnArnold);
      div.appendChild(p);
      div.appendChild(text2);
      log.appendChild(div);

      const text3 = document.createTextNode(
        `${base}^${numArnold} mod ${clock} = ${ppnArnold}`
      );
      logArnold.appendChild(text3);
    }
  }
});

eve.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (eve.value) {
      const div = document.createElement("div");
      div.className = "log-item";
      const p = document.createElement("p");
      const text = document.createTextNode("Eve");
      p.appendChild(text);
      const text2 = document.createTextNode(eve.value);
      div.appendChild(p);
      div.appendChild(text2);
      log.appendChild(div);

      const text3 = document.createTextNode("?");
      logEve.appendChild(text3);
    }
  }
});

let secretMe;
let secretArnold;

addEventListener("keydown", (e) => {
  if (e.key === "Alt" && ppnMe != undefined && ppnArnold != undefined) {
    secretMe = Math.pow(ppnArnold, numMe) % clock;
    secretArnold = Math.pow(ppnMe, numArnold) % clock;
    const text1 = document.createTextNode(
      `${ppnArnold}^${numMe} mod ${clock} = ${secretMe}`
    );
    const text2 = document.createTextNode(
      `${ppnMe}^${numArnold} mod ${clock} = ${secretArnold}`
    );
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.appendChild(text1);
    p2.appendChild(text2);
    logMe.appendChild(p1);
    logArnold.appendChild(p2);
  }
});
