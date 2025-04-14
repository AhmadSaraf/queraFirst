"use strict";

Array.from(document.getElementsByClassName("theme-switch")).forEach((el) =>
  el.addEventListener("click", () =>
    document.documentElement.classList.toggle("dark"),
  ),
);
