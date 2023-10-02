document.addEventListener('DOMContentLoaded', () => {
	const navLine = document.querySelector('.nav__line'),
				navItem = document.querySelectorAll('.nav__item');

	navLine.style.width = `${navItem[0].offsetWidth}px`;

	navItem.forEach(el => {
		el.addEventListener('mouseenter', (e) => {
			navLine.style.width = `${e.currentTarget.offsetWidth}px`;
			navLine.style.left = `${e.currentTarget.offsetLeft}px`;
		});

		el.addEventListener('mouseleave', () => {
			navLine.style.width = `${navItem[0].offsetWidth}px`;
			navLine.style.left = `0px`;
		});
	});
});


var text = $(".split");

var split = new SplitText(text);

function random(min, max){
  return (Math.random() * (max - min)) + min;
}

$(split.chars).each(function(i){
  TweenMax.from($(this), 2.5, {
    opacity: 0,
    x: random(-500, 500),
    y: random(-500, 500),
    z: random(-500, 500),
    scale: .1,
    delay: i * .02,
    yoyo: true,
    repeat: -1,
    repeatDelay: 10
  });
});