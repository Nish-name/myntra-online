# api for products category
> http://localhost:9500/categories

# api for all products 
> http://localhost:9500/products

`
* Page 2
# product data wrt to product category
> http://localhost:9500/products?categoryId=Gadgets

# filter on basis of category + brand
> http://localhost:9500/products/Fashion?brand=Levis

//# filter on basis of category + price

# filter on basis of category + size
> http://localhost:9500/products/HouseHold?size=M

# filter on basis of category + size + color
> http://localhost:9500/products/Fashion?size=L&color=Purple

//# filter on basis of category + product rating

* Page 3
# Details of the product
> http://localhost:9500/product_details/2

# Place Order
> http://localhost:9500/placeOrder

* Page 4
# List of all orders
> http://localhost:9500/viewOrders

# List of all orders wrt to mail
> http://localhost:9500/viewOrders?email=test@test.com

# Update the order
> http://localhost:9500/updateOrder/1

# Delete the order
> http://localhost:9500/deleteOrder/2