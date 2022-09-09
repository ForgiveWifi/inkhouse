

function countShirts(items) {
  let count = 0 
  items.forEach(item => {
    count += item.quantity
  })
  return(count)
}

export default countShirts;