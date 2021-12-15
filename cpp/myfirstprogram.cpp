//#include <iostream>
//using namespace std;
//
//int main() {
//    cout << "Hello World!" << endl;
//    cout << "I\'m learning C++!";
//    return 0;
//}

//#include <iostream>
//
//int main() {
//    std::cout << "Hello World!\n\n";
//    std::cout << "I\'m learning C++";
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//int main() {
//    int myNum = 15;
//    double myFloatNum = 5.99;
//    char myLetter = 'D';
//    string myText = "Hello";
//    bool myBool = true;
////    cout << myNum << "\n" << myFloatNum << "\n" << myLetter << "\n" << myText << "\n" << myBool;
//    int myNum2 = 5;
//    int sum = myNum + myNum2;
////    cout << sum;
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//int main() {
//    const int myConstNum = 15;
////    myConstNum = 10;
//    cout << myConstNum;
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//int main() {
//    int x;
//    cout << "Type a number: ";
//    cin >> x;
//    cout << "Your number is: " << x;
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//int main() {
//    int x, y;
//    int sum;
//    cout << "Type a number: ";
//    cin >> x;
//    cout << "Type another number: ";
//    cin >> y;
//    sum = x + y;
//    cout << "Sum is: " << sum;
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//int main() {
//    double d1 = 12E4;
//    cout << d1;
//    return 0;
//}

//#include <iostream>
//#include <string>
//using namespace std;
//
//int main() {
//    string greeting = "Hello";
//    cout << greeting;
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//int main() {
//    int x = 5, y = 3;
//    cout << (x > y);
//    return 0;
//}

//#include <iostream>
//#include <string>
//using namespace std;
//
//int main() {
//    string firstName = "John";
//    string lastName = "Doe";
//    string fullName = firstName.append(lastName);
////    cout << fullName.length();
////    cout << fullName.size();
//    fullName[1] = 'a';
//    cout << fullName;
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//int main() {
//    string fullName;
//    cout << "Type your full name";
//    getline(cin, fullName);
//    cout << fullName;
//    return 0;
//}

//#include <iostream>
//#include <string>
//
//int main() {
//    std::string greeting = "Hello";
//    std::cout << greeting;
//    return 0;
//}

//#include <iostream>
//#include <cmath>
//
//int main() {
//    std::cout << sqrt(64);
//    return 0;
//}

//#include <iostream>
//
//int main() {
//    int i = 0;
//    while (i < 5) {
//        std::cout << i << "\n";
//        i++;
//    }
//    return 0;
//}

//#include <iostream>
//
//int main() {
//    int i = 0;
//    do {
//        std::cout << i << "\n";
//        i++;
//    }
//    while (i < 5);
//    return 0;
//}

//#include <iostream>
//
//int main() {
//    for (int i = 0; i < 5; ++i) {
//        std::cout << i << "\n";
//    }
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//int main() {
//    string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
//    for(int i = 0; i < 4; i++) {
//        cout << cars[i] << "\n";
//    }
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//int main() {
//    string food = "Spaghetti";
//    string &spaghetti = food;
//    string* ptr = &food;
//    cout << &food << "\n" << spaghetti << "\n" << &spaghetti << "\n" << *ptr << "\n" << ptr;
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//void swapNums(int &x, int &y) {
//    int z = x;
//    x = y;
//    y = z;
//}
//
//int main() {
//    int firstNum = 10;
//    int secondNum = 20;
//
//    cout << "Before swap: " << "\n";
//    cout << firstNum << secondNum << "\n";
//
//    // Call the function, which will change the values of firstNum and secondNum
//    swapNums(firstNum, secondNum);
//
//    cout << "After swap: " << "\n";
//    cout << firstNum << secondNum << "\n";
//
//    return 0;
//}

//Function OVERLOADING

//int plusFunc(int x, int y) {
//    return x + y;
//}
//
//double plusFunc(double x, double y) {
//    return x + y;
//}
//
//int main() {
//    int myNum1 = plusFunc(8, 5);
//    double myNum2 = plusFunc(4.3, 6.26);
//    cout << "Int: " << myNum1 << "\n";
//    cout << "Double: " << myNum2;
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//int main() {
//    string txt = "Hello";
//    string &greeting = txt;
//    string *ptr = &greeting;
//    cout << *ptr;
//    *ptr = "Hi!";
//    cout << *ptr;
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//void myFunction();
//
//void myFunction(const string& firstName) {
//    cout << "Hello, " << firstName << "!";
//}
//
//int main() {
//    myFunction("Dmytro");
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
//void swapNums(int &x, int &y) {
//    int z = x;
//    x = y;
//    y = z;
//}
//
//int main() {
//    int firstNum = 10;
//    int secondNum = 20;
//
//    cout << "Before swap: " << "\n";
//    cout << firstNum << ", " << secondNum;
//
//    swapNums(firstNum, secondNum);
//
//    cout << "\nAfter swap: " << "\n";
//    cout << firstNum << ", " << secondNum;
//
//    return 0;
//}

//#include <iostream>
//using namespace std;
//
////int plusFuncInt(double x, double y) {
////    return x + y;
////}
////
////double plusFuncDouble(double x, double y) {
////    return x + y;
////}
//
//int plusFunc(int x, int y) {
//    return x + y;
//}
//
//double plusFunc(double x, double y) {
//    return x + y;
//}
//
//int main() {
//    int myNum1 = plusFunc(8, 5);
//    double myNum2 = plusFunc(4.3, 6.26);
//
//    cout << "Int: " << myNum1 << "\n";
//    cout << "Double: " << myNum2;
//    return 0;
//}

//#include <iostream>
//using namespace std;

//class MyClass {
//public:
//    int myNum;
//    string myString;
//};
//
//int main() {
//    MyClass myObj;
//
//    myObj.myNum = 15;
//    myObj.myString = "Some text";
//
//    cout << myObj.myNum << ", " << myObj.myString;
//    return 0;
//}

//class Car {
//public:
//    string brand;
//    string model;
//    int year;
//};
//
//int main() {
//    Car carObj1;
//    carObj1.brand = "BMW";
//    carObj1.model = "X5";
//    carObj1.year = 1999;
//
//    Car carObj2;
//    carObj2.brand = "Ford";
//    carObj2.model = "Mustang";
//    carObj2.year = 1969;
//
//    cout << carObj1.brand << " " << carObj1.model << " " << carObj1.year;
//
//    return 0;
//}

//class MyClass {
//public:
//    void myMethod();
//};
//
//void MyClass::myMethod() {
//    cout << "Hello World!";
//}
//
//int main() {
//    MyClass myObj;
//    myObj.myMethod();
//
//    return 0;
//}

//class Car {
//public:
//    int speed(int maxSpeed);
//};
//
//int Car::speed(int maxSpeed) {
//    return maxSpeed;
//}
//
//int main() {
//    Car myObj;
//    cout << myObj.speed(200);
//    return 0;
//}

//class MyClass {
//public:
//    MyClass() {
//        cout << "Hello World!";
//    }
//};
//
//int main() {
//    MyClass myObj;
//    return 0;
//}

//class Car {
//public:
//    string brand;
//    string model;
//    int year;
//    Car(string x, string y, int z) {
//        brand = x;
//        model = y;
//        year = z;
//    }
//};
//
//int main() {
//    Car carObj1("BMW", "X5", 1999);
//    Car carObj2("Ford", "Mustang", 1969);
//
//    cout << carObj1.brand << carObj1.model << carObj1.year << "\n";
//    cout << carObj2.brand << carObj2.model << carObj2.year;
//    return 0;
//}

//class Car {
//public:
//    string brand;
//    string model;
//    int year;
//    Car(string x, string y, int z);
//};
//
//Car::Car(string x, string y, int z) {
//    brand = x;
//    model = y;
//    year = z;
//}
//
//int main() {
//    Car carObj1("BMW", "X5", 1999);
//    Car carObj2("Ford", "Mustang", 1999);
//    cout << carObj1.brand << ", " << carObj2.brand;
//    return 0;
//}

//class MyClass {
//public:
//    int x;
//private:
//    int y;
//};
//
//int main() {
//    MyClass myObj;
//    myObj.x = 25;
////    myObj.y = 50;
//    return 0;
//}

//class Employee {
//private:
//    int salary;
//public:
//    void setSalary(int s) { // Setter
//        salary = s;
//    }
//    int getSalary() { // Setter
//        return salary;
//    }
//};
//
//int main() {
//    Employee myObj;
//    myObj.setSalary(50000);
//    cout << myObj.getSalary();
//    return 0;
//}

//class Vehicle {
//public:
//    string brand = "Ford";
//    void honk() {
//        cout << "Tooo, tooo!\n";
//    }
//};
//
//class Car: public Vehicle {
//public:
//    string model = "Mustang";
//};
//
//int main() {
//    Car myCar;
//    myCar.honk();
//    cout << myCar.brand + " " + myCar.model;
//    return 0;
//}

//class MyClass {
//public:
//    void myFunction() {
//        cout << "Some content in parent class.";
//    }
//};
//
//class MyChild: public MyClass {};
//
//class MyGrandChild: public MyChild {};
//
//int main() {
//    MyGrandChild myObj;
//    myObj.myFunction();
//    return 0;
//}

//class MyClass {
//public:
//    void myFunction() {
//        cout << "Some content in parent class.";
//    }
//};
//
//class MyOtherClass {
//public:
//    void myOtherFunction() {
//        cout << "Some content in another class.";
//    }
//};
//
//class MyChildClass: public MyClass, public MyOtherClass {};
//
//int main() {
//    MyChildClass myObj;
//    myObj.myFunction();
//    myObj.myOtherFunction();
//    return 0;
//}

//class Employee {
//protected:
//    int salary;
//};
//
//class Programmer: public Employee {
//public:
//    int bonus;
//    void setSalary(int s) {
//        salary = s;
//    }
//    int getSalary() {
//        return salary;
//    }
//};
//
//int main() {
//    Programmer myObj;
//    myObj.setSalary(50000);
//    myObj.bonus = 15000;
//    cout << "Salary: " << myObj.getSalary() << "\n";
//    cout << "Bonus: " << myObj.bonus << "\n";
//    cout << "Total: " << myObj.getSalary() + myObj.bonus;
//    return 0;
//}

//class Animal {
//public:
//    void animalSound() {
//        cout << "The animal makes a sound\n";
//    }
//};
//
//class Pig : public Animal {
//public:
//    void animalSound() {
//        cout << "The pig says: wee wee\n";
//    }
//};
//
//class Dog : public Animal {
//public:
//    void animalSound() {
//        cout << "The dog says: bow wow\n";
//    }
//};
//
//int main() {
//    Animal myAnimal;
//    Pig myPig;
//    Dog myDog;
//
//    myAnimal.animalSound();
//    myPig.animalSound();
//    myDog.animalSound();
//    return 0;
//}

//#include <iostream>
//#include <fstream>
//using namespace std;
//
//int main() {
//    ofstream MyFile("createdFile.txt");
//    MyFile << "Files can be tricky, but it\'s fun enough!";
//    MyFile.close();
//
//    string myText;
//    ifstream MyReadFile("createdFile.txt");
//    while (getline (MyReadFile, myText)) {
//        cout << myText;
//    }
//    MyReadFile.close();
//}


#include <iostream>
#include <fstream>
using namespace std;

int main() {
    try {
        int age;
        cout << "Enter your age...";
        cin >> age;
        if (age >= 18) cout << "Access granted.\n";
//        else throw (age);
        else throw 505;
    }
//    catch (int myNum) {
    catch (...) {
        cout << "Access denied!\n";
//        cout << "Error number: " << myNum;
//        cout << "Error number: ";
    }
}
