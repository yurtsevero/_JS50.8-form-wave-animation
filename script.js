const labels = document.querySelectorAll(".form__label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (char, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${char}</span>`
    )
    .join("");
});

const spans = document.querySelectorAll("span");

spans.forEach((span) => {
  span.classList.add("wave");
});
