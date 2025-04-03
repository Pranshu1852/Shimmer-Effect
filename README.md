# Shimmer-Effect

### Hello Everyone i created this Shimmer Effect package that can add and remove shimmer effect to the element you want in your website.

## How to Use:

### Step1:-
First install using this command: ```npm i @pranshupatel/shimmer-effect```

### Step2:-
Import the function by adding below line in the top of your script file.
```js
import Shimmer from './node_modules/@pranshupatel/shimmer-effect/script.js';
```

Also add ```type='module'``` in your script declaration in HTML.
```HTML
<script defer type="module" src="./script.js"></script>
```
### Step3:-
Create an instance of the Shimmer class and provide the element queryselector and timer till shimmer effect should be on that element.
```js
const shimmerElement=new Shimmer('.element',5000); // timer should be in millisecond
shimmerElement.shimmerEffect(); // Call it when you want to trigger the shimmer effect
```
#### OR
Create an instance of the Shimmer class and only provide the element queryselector.
```js
const shimmerElement=new Shimmer('.element'); // timer should be in millisecond
shimmerElement.shimmerEffect(); // Call it when you want to trigger the shimmer effect
shimmerElement.removeShimmer(); // call it when you want to end the shimmer effect
```