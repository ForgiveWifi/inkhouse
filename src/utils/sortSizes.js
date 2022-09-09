const options = ["KIDS","S","M","L","XL", "XXL", "XXXL"]

function sortSizes(sizes) {
  return sizes.sort((a,b) => options.indexOf(a) - options.indexOf(b))
}

export default sortSizes;