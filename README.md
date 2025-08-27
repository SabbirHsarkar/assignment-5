Question-1
The difference between getElementsById,getElementsByClassName, and querySelector/querySelectorAll lie in their selection method, return type, and whether the returned collection is "live" or "static."
1. Selection Method:
getElementById(id):It selects a single element based on its unique id attribute.
getElementsByClassName(className): It selects all elements that have a specific class name.
querySelector(selector):It selects the first element that matches a specified CSS selector .
querySelectorAll(selector): It selects all elements that match a specified CSS selector.
2. Return Type:
getElementById: It returns a single Element object.
getElementsByClassName:It returns an HTMLCollection, which is a live, array-like object of elements.
querySelector:It returns a single Element object.
querySelectorAll:It returns a NodeList, which is a static, array-like object of elements.
3. "Live" vs. "Static" Collections:
getElementsByClassName:
It returns a live HTMLCollection. This means that if elements are added or removed from the DOM that match the class, the HTMLCollection will automatically update to reflect these changes.
querySelectorAll:
It returns a static NodeList. This means that the collection represents the state of the DOM at the time the method was called and will not update if elements are subsequently added, removed, or modified in the DOM.
4. Performance:
getElementById is generally the fastest method for selecting a single element because it directly accesses the element by its unique ID.
getElementsByClassName can be faster than querySelector when specifically selecting by class name, as it has a more optimized lookup for this specific case.
querySelector and querySelectorAll are more flexible due to their ability to use any CSS selector.



Question-2:

Creating and inserting a new element into the DOM in JavaScript, we need two main steps.
Creating the element: Using the document.createElement() method to create a new HTML element node. This method takes the tag name of the desired element as an argument.
    const newDiv = document.createElement('div'); 

Inserting the element: After creating the element, we need to append it to an existing element in the DOM. Common methods for insertion include:
appendChild(): This method appends a node as the last child of a specified parent node.
        const parentElement = document.getElementById('myContainer'); // Get an existing element
        parentElement.appendChild(newDiv); 
Adding Content to the New Element:Before or after inserting the element, we can add content to it:
textContent: Sets or returns the text content of a node and its descendants.

    newDiv.textContent = 'Hello, world!';
  innerHTML: Sets or returns the HTML content of an element.

    newDiv.innerHTML = '<span>This is a new span.</span>';
appendChild() (for text nodes): Creating a text node using document.createTextNode() and then append it to our new element.
    const textNode = document.createTextNode('Some text content');
    newDiv.appendChild(textNode);  

question-3

Event bubbling is the default JavaScript mechanism in the DOM where an event triggered on a specific child element first triggers its own handler.Then "bubbles up" to its parent, grandparent, and other ancestor elements, up to the document's root element. This process allows parent elements to respond to events that occur on their child elements, providing a way to handle events hierarchically across nested elements. 

Question-4

Event Delegation is a technique in JavaScript where we attach a single event listener to a parent element instead of attaching listeners to multiple child elements.The parent listens for events that bubble up from its children, and we can use event.target to determine which child triggered the event.
Reduces memory usage: Instead of adding separate listeners to every child element, you use one listener on the parent.
Handles dynamic content: Works for elements added to the DOM later, after the page has loaded.
Simpler code management: Easier to maintain and avoids repetitive code.

Question-5:
Difference:
The preventDefault() and stopPropagation() methods in JavaScript event handling serve distinct purposes,
event.preventDefault():
This method prevents the default action associated with an event from occurring. For instance, clicking a link (<a> tag) typically navigates the browser to the specified href. Calling event.preventDefault() within the click event handler for that link will stop the navigation, allowing us to implement custom behavior instead. Other common uses include preventing form submissions or disabling the default action of keyboard events. It does not, however, stop the event from continuing its propagation  through the DOM.
event.stopPropagation():
This method prevents the event from propagating further up or down the DOM tree during the event flow phases like capturing and bubbling. When an event occurs on an element, it typically travels through its parent elements  or from the root down to the target element. Calling event.stopPropagation() stops this journey, preventing any event handlers on parent or ancestor elements from being triggered for the same event. It prevent the default action of the event.
So,preventDefault() addresses the default browser behavior of an element & stopPropagation() addresses the flow of the event through the DOM.


