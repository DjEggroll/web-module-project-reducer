# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
1. The onClick event fires 

2. onClick calls the handleAddOne function

3. handleAddOne calls dispatch which passes the return/result of addOne()

4. addOne() returns and object {type:ADD_ONE} which is then passed into the reducer function

5. The switch takes in the action argument passed into the reducer and checks the action.type, in this case it is ADD_ONE which returns a copy of state along with the total being incremented by 1

6. State has changed, resulting in a re-render of the component




* TotalDisplay shows the total plus 1.
