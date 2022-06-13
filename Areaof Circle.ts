class Circle {  
    Radius: number;  
    constructor(Radius: number) {  
     this.Radius = Radius;  
    }  
    AreaOfCircle() {  
     return 3.14 * this.Radius * this.Radius;  
    }  
    CircumferenceOfCircle() {  
     return 2 * 3.14 * this.Radius;  
    }  
   }  
   var circle = new Circle(5);  
   var area = circle.AreaOfCircle();  
   var circumference = circle.CircumferenceOfCircle();  
   alert("The Area of the Circle is :" + area);  
   alert("The circumference of the Circle is :" + circumference);