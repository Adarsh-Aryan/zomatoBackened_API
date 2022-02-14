Page 1
List of city

> https://zomato-villa-api.herokuapp.com/location
List of restaurants 

> https://zomato-villa-api.herokuapp.com/restaurants
restaurants wrt to city 

> https://zomato-villa-api.herokuapp.com/restaurants?stateId=1
quick search data  

> https://zomato-villa-api.herokuapp.com/mealType

Page 2
restaurants wrt to quickSearch 

> https://zomato-villa-api.herokuapp.com/restaurants?meal_id=1


filter
> cuisine filter
  data respect to cuisine and quickSearch 
  
  > https://zomato-villa-api.herokuapp.com/filter/4?cuisine=1
> cost filter
  
  > https://zomato-villa-api.herokuapp.com/filter/1?hcost=1000&lcost=500
 data respect to cuisine and cost 
> cuisine filter + cost filter 
  > https://zomato-villa-api.herokuapp.com/filter/1?lcost=200&hcost=500&cuisine=1

> sort
    sort low to high in same quickSearch
    https://zomato-villa-api.herokuapp.com/filter/1?cuisine=1&sort=1
    sort high to low in same quickSearch
    https://zomato-villa-api.herokuapp.com/filter/1?cuisine=1&sort=-1

> pagination
   > https://zomato-villa-api.herokuapp.com/filter/1?cuisine=1&skip=2&limit=2


Page 3
> restaurants details
> https://zomato-villa-api.herokuapp.com/details/2


> Menu of that restaurants
> https://zomato-villa-api.herokuapp.com/menu/2



page 4
> menu items on user selection
  > https://zomato-villa-api.herokuapp.com/menuItem
  
  > body [1,4,5]

> api to place order
  > https://zomato-villa-api.herokuapp.com/placeOrder

page 5
> list all order
  
  > https://zomato-villa-api.herokuapp.com/orders?email="aakash@gmail.com"

Delete order 
> https://zomato-villa-api.herokuapp.com/deleteOrder/61ffab62c39f96bf7ba39676
 

 update order
 > https://zomato-villa-api.herokuapp.com/updateOrder/61ffab62c39f96bf7ba39676?status=Success