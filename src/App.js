const spinner = {
  create(entry) {
    let elm = document.querySelector(entry);
    let spinnerElm = document.createElement("div");

    spinnerElm.innerHTML = `
    <div class="animation">
      <div class="anim1"></div>
    </div>`;

    elm.insertBefore(spinnerElm, elm.childNodes[0]);
  },
  destroy(entry) {
    let elm = "";
    if (entry.nodeType === 1) {
      elm = entry;
    } else {
      elm = document.querySelector(entry);
    }
    elm.innerHTML = "";
  },
  loader(entry) {
    let elm = document.querySelector(entry);
    let spinnerElm = document.createElement("div");

    spinnerElm.innerHTML = `
    <div class="animation">
      <div class="anim1"></div>
      <div class="prog"></div>
    </div>`;

    elm.insertBefore(spinnerElm, elm.childNodes[0]);
    this.increment(elm);
  },
  increment(elm) {
    let prog = elm.querySelector('.prog');
    let percentage = 0;
    let i = setInterval(() => {
      percentage++;
      percentage = Math.min(percentage, 100);
      prog.innerText = `${percentage}%`;
      if(percentage === 100){
          clearInterval(i);
          this.destroy(elm);
      }
    }, 50);
  }
}

setTimeout(function(){
  spinner.create('.entry');
}, 3000);

setTimeout(function(){
  spinner.destroy('.entry');
}, 6000);

setTimeout(function(){
  spinner.loader('.entryTwo');
}, 3000);
