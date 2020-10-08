// let out = document.querySelector('.out')
// let now = new Date();
// out.innerHTML = now

// out.innerHTML = now
// out.innerHTML = now.getFullYear()
// out.innerHTML = now.getMonth()+1 // Months are start from 0
// out.innerHTML = now.getDate()
// out.innerHTML = now.getHours()
// out.innerHTML = now.getMinutes()
// out.innerHTML = now.getSeconds()
// out.innerHTML = now.getMilliseconds()
// out.innerHTML = now.getDay()

// let d = new Date(2011, 1, 28)
// d.setDate(d.getDate() + 2)
// out.innerHTML = d

// let dateN = now.getDay()
// out.innerHTML = dateN

let out = document.querySelector(".out");

document.querySelector("button").onclick = () => {
  let dateStart = document.querySelector("#start-date").value;
  let dateEnd = document.querySelector("#end-date").value;

  dateStart = Date.parse(dateStart);
  dateEnd = Date.parse(dateEnd);

  for (let i = dateStart; i < dateEnd; i = i + 24 * 60 * 60 * 1000) {
    out.innerHTML += new Date(i).toISOString().substr(0, 10) + "<br>";
  }
};
