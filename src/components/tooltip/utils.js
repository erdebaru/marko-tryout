// calculate the location of tooltip. the location is relative to the viewport
export function calculate(el, target, location = 'top', spacing = 0) {
  const { width, height } = el.getBoundingClientRect();
  const { top: targetTop, left: targetLeft, width: targetWidth, height: targetHeight, } = target.getBoundingClientRect();
  switch(location){
    case 'top': return { top: targetTop - height - spacing, left: targetLeft + targetWidth / 2 - width / 2 };
    case 'bottom': return { top: targetTop + targetHeight + spacing, left: targetLeft + targetWidth / 2 - width / 2 };
    case 'left': return { top: targetTop + targetHeight / 2 - height / 2, left: targetLeft - width - spacing };
    case 'right': return { top: targetTop + targetHeight / 2 - height / 2, left: targetLeft + targetWidth + spacing };
  }
}