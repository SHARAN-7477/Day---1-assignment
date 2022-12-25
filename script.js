1.Question :
Write a blog on Difference between HTTP1.1 vs HTTP2 ?

Answer :
HTTP/1

    It is works on the textual format
    There is head of line blocking that blocks all the requests behind it until it doesn’t get its all resources.
    It uses requests resource Inlining for use getting multiple pages
    It compresses data by itself

HTTP/2

	It works on the binary protocol.
	It allows multiplexing so one TCP connection is required for multiple requests.
	It uses PUSH frame by server that collects all multiple pages 
	It uses HPACK for data compression.


2.Question:
Write a blog about objects and its internal representation in Javascript ?

Answer :
    * Objects,it’s most important data-type and forms the building blocks for modern JavaScript.
    * These objects are quite different from JavaScript’s primitive data-types like 
    (Number, String, Boolean, null, undefined and symbol) in the sense.
    * that while these primitive data-types all store a single value each (depending on their types).
    * Like all JavaScript variables, both the object name (which could be a normal variable) and property name are case sensitive.
    * You can define a property by assigning it a value.
     Example:
            var myCar = new Object();
            myCar.make = 'Ford';
            myCar.model = 'Mustang';
            myCar.year = 1969;
    * Unassigned properties of an object are undefined (and not null).
    * Using the JavaScript Keyword like
            Example

            var person = new Object();
            person.firstName = “John”;
            person.lastName = “Doe”;
            person.age = 50;
            person.eyeColor = “blue”;