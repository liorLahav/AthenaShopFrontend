export const getSizeByShoe : string = `
    query getSizesByShoe($id: uuid!) {
  sneaker_shop_shoe_items_by_pk(id: $id) {
    size
  }
}`
