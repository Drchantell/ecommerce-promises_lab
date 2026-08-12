TypeScript OOP Lab – Critical Thinking Reflection

This lab introduced me to Object-Oriented Programming (OOP) in TypeScript. I learned about classes, inheritance, encapsulation, access modifiers, and polymorphism. I found some of these concepts complicated, so I need more beginner tutorials and practice to fully understand how they work together.

1. How does TypeScript enforce type safety?

TypeScript allows us to tell the program what type of data we expect.
let productName: string = "Laptop";
let price: number = 1200;
This helps catch mistakes if I accidentally use the wrong type of data.

2. How did inheritance reduce code duplication?

Inheritance allows PhysicalProduct and DigitalProduct to reuse information from the main Product class.
class PhysicalProduct extends Product {}
class DigitalProduct extends Product {}
Instead of writing the same code multiple times, both classes can inherit common properties and methods from Product.

3. What are the benefits of encapsulation and access modifiers?

Access modifiers control who can use or change information inside a class.
public – can be accessed from anywhere.
private – can only be accessed inside the class.
protected – can be accessed inside the class and its child classes.
This helps keep data organized and protected.

4. How would polymorphism help add a SubscriptionProduct?

Polymorphism makes it easier to add another type of product because the new class can also inherit from Product.
class SubscriptionProduct extends Product {}
The new class can use the common features of Product while also having its own subscription features.

Reflection

This lab helped introduce me to TypeScript and OOP, but I still need more practice. The concepts of inheritance, encapsulation, interfaces, and polymorphism were challenging for me. I would benefit from more beginner tutorials and small practice projects before moving on to more advanced OOP concepts.

Author:
Dr. Chantell McDowell
Per Scholas Assignment
