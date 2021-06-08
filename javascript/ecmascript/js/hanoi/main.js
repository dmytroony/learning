// size and color for all disks
var blin = [
  {
      radius: 40,
      color: "#05b8b2"
  },
  {
      radius: 60,
      color: "#f1ee1c"
  },
  {
      radius: 80,
      color: "#1eb70e"
  },
  {
      radius: 100,
      color: "#b8051e"
  },
  {
      radius: 120,
      color: "#053fb8"
  }
];
//массивы, в которых будем хранить блины и расставлять по нужным дивам
var positions = {
  pyr1: [],
  pyr2: [],
  pyr3: []
};
//условия победы: 1 позиция уже собрана, остались две других
var win = [1, 0, 0];
//параметры статистики
var stat = {
  step: 0,
  time: 0,
  rec: false
},
  timing;
//проверка на рекорды и доступность локального хранилища
var record = false;
var records;
if (typeof (localStorage) !== "undefined") {
  //будем записывать рекорды
  record = true;
  records = {
      s: localStorage.getItem("steprecord"),
      t: localStorage.getItem("timerecord")
  };
}
$(document).ready(function () {
  init();
  $(".pyr").click(function () {
      //запускаем таймер, если ещё не запущен
      if (!stat.rec) {
          timing = setInterval(timer, 1000);
          stat.rec = true;
      }
      //определяем какая пирамида выбрана
      var pyr = $(this).attr("id");
      //проверяем есть ли выбранные блины (в воздухе)
      var selection = $(".select").length;
      //если их нет, поднимаем верхних блин этой пирамиды в воздух
      if (!selection) {
          for (p in positions) {
              if (p == pyr) {
                  if (positions[p][0]) {
                      positions[p][0].addClass("select").animate({
                          top: -80 - 20 * (5 - positions[p].length)
                      }, 150)
                  }
              }
          }
          //если уже есть блин в воздухе, значит надо перемещать в выбранную пирамиду
      } else {
          //смотрим из какой пирамиды выбран этот блин
          var fromPyr = $(".select").parent().attr("id");
          var move;
          for (p in positions) {
              if (p == fromPyr) {
                  //если блин выбран из той же пирамиды, куда нажали - опускаем блин обратно
                  if (pyr == p) {
                      change(positions[p][0], p, pyr);
                  } else { //если это разные пирамиды
                      //смотрим размер выбранного блина
                      var selSize = positions[p][0].width();
                      //и размер блина, лежащего на верху выбранной пирамиды
                      var laySize = $("#" + pyr + " div:eq(0)").width();
                      //если нет размера (нет блина)
                      if (!laySize) {
                          //кладём выбранный блин в пустую пирамиду
                          change(positions[p][0], p, pyr);
                      } else { //если в пирамиде есть блин, надо сравнить размеры
                          //если размер выбранного меньше
                          if (selSize < laySize) {
                              //ставим выбранный блин в выбранную пирамиду
                              change(positions[p][0], p, pyr);
                          } else { //если размер выбранного больше
                              //возвращем выбранный на место и выделяем ошибку, что выбранный должен быть меньше
                              $(".select").removeClass("select");
                              $(".wrong").css({
                                  color: "#c00"
                              });
                          }
                      }
                  }
              }
          }
      }
      //разукрашиваем фон в цвет самого верхнего блина
  }).hover(function () {
      var color = $(this).find("div:eq(0)").css("background-color");
      if (color) {
          rgbacolor = color.replace("rgb", "rgba").replace(")", "") + ", 0.1)";
          $(this).css("background", rgbacolor);
      }
  }, function () {
      $(this).css("background", "none");
  }).romanyanke({
      year: 2011,
      url: "http://www.yanke.ru/blog/?p=485"
  });
});

function init() {
  //если локальное хранилище доступно, а рекордов нет (первый запуск), ставим рекорды по 999
  if (record) {
      if (!records.t) records.t = 999;
      if (!records.s) records.s = 999;
  }
  //обнуляем позиции
  positions = {
      pyr1: [],
      pyr2: [],
      pyr3: []
  };
  //заполняем первую позицию блинами
  for (i = 0; i < 5; i++) {
      $("#pyr1").append("<div class=\"blin\" id=\"b" + i + "\"></div>")
      $("#b" + i).css({
          width: blin[i].radius,
          background: blin[i].color,
          marginLeft: (120 - blin[i].radius) / 2
      })
  }
  //обнуляем массивы, которые содержат блины
  for (p in positions) {
      positions[p].length = 0;
  }
  //дальше проходим по всем пирамидам и заносим блины (как DOM элементы) в массив соответствующих позиций
  $(".pyr").each(function () {
      var from = $(this).attr("id");
      for (p in positions) {
          if (p == from) {
              var content = $(this).children();
              for (c = 0; c < content.length; c++) {
                  positions[p].push($(this).find("div:eq(" + c + ")"))
              }
          }
      }
  });
}

function draw() {
  //снимаем выделение с ошибки, т.к. ход был сделан правильно
  $(".wrong").css({
      color: "#000"
  });
  //перерисовываем кол-во шагов
  $("#stepCount").html(stat.step);
  //очищаем все пирамиды от блинов
  $(".pyr").empty();
  //проходим по всем блинам в позициях и добавляем в нужные пирамиды
  for (p in positions) {
      for (i = 0; i < positions[p].length; i++) {
          $("#" + p).append(positions[p][i])
      }
      //считаем нужный отступ сверху, чтобы все блины были прижаты к низу
      $("#" + p).css({
          paddingTop: 100 + (5 - positions[p].length) * 20,
          height: positions[p].length * 20
      })
  }
  //проверяем, не оказались ли все блины в одной позиции.
  //если оказались - засчитываем позицию как пройденную
  if (positions.pyr2.length == 5) {
      winner(1);
  }
  if (positions.pyr3.length == 5) {
      winner(2);
  }
}

function change(obj, from, to) {
  //ход - блин, из выбранной позиции
  move = positions[from].shift();
  //переворачиваем блины в пирамиде назначения, чтобы добавить в начало блин из выбранной позиции
  positions[to].reverse();
  //добавляем блин
  positions[to].push(move);
  //переворачиваем массив обратно, чтобы добавленный блин оказался в начале
  positions[to].reverse();
  //опускаем выбранный див и убираем класс-метку, что он выбран
  $(".select").animate({
      top: 0 - (5 * positions[to].length)
  }, 150, function () {
      $(this).removeClass("select");
  });
  //отмечаем в статистике сделанный шаг
  stat.step++;
  //перерисовываем пирамиды с новыми массивами блинов
  draw();
}

function winner(full) {
  //отмечаем позицию в объекте как пройденную
  win[full] = 1;
  //и добавляем класс палке, чтобы визуально это отметить
  $(".stick:eq(" + full + ")").addClass("win");
  //если все позиции пройдены - победа
  if (win.join() == "1,1,1") {
      //собираем сообщение о победе, прячем статистику, останавливаем таймер
      var wintext = "<h1>Подбеда</h1>Время: " + $(timeCount).html() + "<br> Ходов:" + $(stepCount).html();
      $("#stat").fadeOut();
      clearInterval(timing);
      //если рекорды доступны
      if (record) {
          //и рекорд времени больше результата
          if (records.t >= stat.time) {
              //поздравляем и переписываем рекорд
              wintext += "<p>Новый рекорд! Время " + humanizeTimer(stat.time) + " (" + stat.step + " ходов)</p>";
              localStorage.setItem('timerecord', stat.time);
              localStorage.setItem('steprecord', stat.step);
          } else { // если меньше, просто сообщаем лучший результат.
              wintext += "<p>Лучший результат: " + humanizeTimer(records.t) + " (" + records.s + " ходов)</p>";
          }
          //релоадим на кнопку ещё раз
          wintext += "<p><a href=\"javascript:location.reload(true)\">Ещё раз</a></p>";
      }
      //выводим сообщение
      $("#youwin").html(wintext).fadeIn();
  }
}

function timer() {
  stat.time++;
  $("#timeCount").html(humanizeTimer(stat.time));
}

function humanizeTimer(sec) {
  var minutes = (sec / 60 | 0);
  var seconds = sec % 60;
  if (seconds < 10) seconds = "0" + seconds;
  return minutes + ":" + seconds;
}
