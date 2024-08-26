export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);
  // Set number of columns as a css style variable, so we can calculate max item width in CSS
  block.style.setProperty(`--number-of-columns`, `${cols.length}`);
}
