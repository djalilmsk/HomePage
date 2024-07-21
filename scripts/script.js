const bars = document.querySelector('header nav .bars');
console.log(bars);

bars.addEventListener('click', function () {
  const firstSpan = document.querySelector('header nav .bars span:first-child');
  const lastSpan = document.querySelector('header nav .bars span:last-child');
  const middleSpan = document.querySelector('header nav .bars span:nth-child(2)');
  const myList = document.querySelector('header nav ul');

  if (!firstSpan.classList.contains('positive-rotate')) {
    firstSpan.classList.add('positive-rotate');
    lastSpan.classList.add('negative-rotate');
    middleSpan.classList.add('vanish');
    myList.classList.add('topdown');
  } else {
    firstSpan.classList.remove('positive-rotate');
    lastSpan.classList.remove('negative-rotate');
    middleSpan.classList.remove('vanish');
    myList.classList.remove('topdown');
  }
});
