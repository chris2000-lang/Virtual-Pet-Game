class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Milk.png');
    }

 
    updateFoodStock(foodStock){
      this.food_stock_val = foodObj.getFoodStock();
      if(food_stock_val <= 0){
        foodObj.updateFoodStock(this.food_stock_val *0);
      }else{
       foodObj.updateFoodStock(this.food_stock_val -1);
      }
    }
  
  

  getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
      var x=80,y=100;
      
      imageMode(CENTER);
      image(this.image,720,220,70,70);

    if(this.foodStock!=0){
    for(var i=0;i<this.foodStock;i++){
    if(i%10==0){
    x=80;
    y=y+50;
}
 image(this.image,x,y,50,50);
          x=x+30;
}
}
}
}