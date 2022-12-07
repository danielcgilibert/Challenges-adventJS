function fitsInOneBox(boxes) {
  const sortBoxes = boxes.sort((a, b) => a.l + a.w + a.h - (b.l + b.w + b.h))
  let valid = true

  sortBoxes.forEach((box, index) => {
    if (sortBoxes.length === index + 1) {
      return
    }
    if (
      box.l >= sortBoxes[index + 1].l ||
      box.w >= sortBoxes[index + 1].w ||
      box.h >= sortBoxes[index + 1].h
    ) {
      valid = false
      return
    }
  })
  return valid
}

console.log(
  fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2 },
  ])
)
