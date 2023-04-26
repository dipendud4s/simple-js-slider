let container;
let active = 0;
let animation = 500;

function slide(next) {
  const direction = next - active;
  const length = container.children.length - 1;
  if (next < 0) {
    active = length - 1;
  } else if (next >= length) {
    active = 0
  } else {
    active = next
  }

  if (direction > 0) {
    // add a copy to last
    const clone = container.firstElementChild.cloneNode(true)
    clone.style.marginLeft = 0
    container.appendChild(clone)

    // go left
    container.firstElementChild.style.marginLeft = '-100%'

    // remove after animation
    setTimeout(() => {
      container.removeChild(container.firstElementChild)
    }, animation + 10)
  } else {
    const clone = container.lastElementChild.cloneNode(true)
    clone.style.marginLeft = '-100%'
    container.prepend(clone)
    container.removeChild(container.lastElementChild)

    // remove margin after animation
    setTimeout(() => {
      container.firstElementChild.style.marginLeft = 0
    }, 10)
  }

}

function autoSlide(time) {
  setInterval(() => {
    slide(active + 1)
  }, time)
}

export default function init(ele, config) {
  animation = config.animation
  const main = document.querySelector(ele);
  main.style.position = 'relative'

  container = document.createElement('div');
  container.classList.add('jsSlider')
  const imageArray = config.images;
  imageArray.forEach((url, i) => {
    const imageTag = document.createElement('img')
    imageTag.src = url;
    imageTag.style.transition = `margin ${animation / 1000}s ease-in-out`;
    imageTag.onclick = () => slide(i + 2)
    container.appendChild(imageTag)
  });
  main.appendChild(container)

  if (config.nav) {
    const left = document.createElement('div');
    left.classList.add('leftNav')
    left.innerText = '<'
    left.onclick = () => slide(active - 1)
    const right = document.createElement('div');
    right.onclick = () => slide(active + 1)
    right.classList.add('rightNav')
    right.innerText = '>'
    main.appendChild(left)
    main.appendChild(right)
  }


  if (config.auto) {
    autoSlide(config.auto)
  }
}