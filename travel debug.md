# **travel debug**

## 6.16

## 浏览器默认事件 被动，如执行则会报错



触发或者去修改了 浏览器已设置的被动事件， 会导致报错

> 该错误是由浏览器的事件监听机制引起的。在现代浏览器中，为了提高性能，浏览器默认将某些事件标记为被动（passive），以避免阻塞页面滚动等操作。
>
> 当一个被动事件监听器中调用了`event.preventDefault()`方法时，浏览器会抛出该错误，因为被动事件监听器不允许阻止默认行为。
>
> 解决这个问题的方法是使用`{ passive: false }`选项将事件监听器标记为非被动，以允许阻止默认行为。
>
> 例如，在添加事件监听器时，可以像这样使用`{ passive: false }`选项：
>
> ```javascript
> element.addEventListener('touchstart', handleTouchStart, { passive: false });
> ```
>
> 请注意，该错误可能会在浏览器的开发者工具中显示，并且通常不会影响网页的正常功能。它只是一个警告，提醒开发者在事件监听器中不要调用`event.preventDefault()`。
>
> 如果你不是开发网页，而是在浏览网页时遇到了该错误，请尝试使用最新版本的浏览器，并确保你的浏览器和相关插件都是最新的，以获得最佳的性能和兼容性。

Vue.config.productionTip = false fastClick.attach(document.body)

这个错误是在main.js添加这些代码后报错，请告诉我如何修改

>
>
>错误提示中提到无法在被动事件监听器内部调用`preventDefault()`，而`fastclick`库的工作原理是通过覆盖默认的点击事件来消除移动设备上的点击延迟。这导致在某些情况下，浏览器将事件标记为被动的，从而无法在事件处理程序中调用`preventDefault()`。
>
>为了解决这个问题，你可以尝试使用以下方法进行修改：
>
>1. 首先，确保你已经安装了`fastclick`库。可以通过运行以下命令安装：
>   ```
>   npm install fastclick
>   ```
>
>2. 打开你的`main.js`文件，并引入`fastclick`库：
>   ```javascript
>   import FastClick from 'fastclick'
>   ```
>
>3. 在`Vue`实例创建之前，使用`FastClick`库的`attach`方法来绑定到文档的`body`元素上。将以下代码添加到`main.js`文件的顶部：
>   ```javascript
>   document.addEventListener('DOMContentLoaded', function() {
>     FastClick.attach(document.body);
>   }, false);
>   ```
>
>4. 最后，确保在使用`Vue.config.productionTip = false`之前添加`fastclick`的引入和绑定代码。
>
>修改完成后，保存文件并重新运行你的Vue项目，应该能够解决该错误。



点入点击的默认行为，浏览器假如执行3ms才执行， 我们通过quickclick的作用将其重新设置为无延迟，这就触发了被动事件监听器，浏览器检测我们正在修改行为，所以我们的行为会被阻止是吗



> 是的，你的理解基本上是正确的。
>
> 浏览器在执行事件监听器时，会根据事件类型和执行环境来判断是否将监听器标记为被动监听器。被动监听器的特点是不能调用`preventDefault()`方法来阻止事件的默认行为，这是为了提高页面的性能和滚动的平滑度。
>
> 当你使用FastClick库或其他类似的库来消除移动设备上的点击延迟时，它们会在点击事件上调用`preventDefault()`来阻止默认行为，以达到无延迟的效果。然而，由于浏览器检测到你正在在被动监听器中调用`preventDefault()`，它会抛出一个警告，并阻止你的行为生效。
>
> 为了解决这个问题，你可以在`DOMContentLoaded`事件中使用`FastClick.attach()`来绑定FastClick库，这样它就会绕过被动事件监听器的限制。通过将FastClick绑定到`DOMContentLoaded`事件，它会在DOM加载完成后立即生效，而不会触发被动事件监听器。
>
> ```javascript
> document.addEventListener('DOMContentLoaded', function() {
>   FastClick.attach(document.body);
> }, false);
> ```
>
> 这样就可以确保FastClick库能够正常工作，消除移动设备上的点击延迟，并避免被浏览器的被动事件监听器阻止。



## preventDefault()就是指阻止默认行为， 并将默认行为修改， 浏览器的阻止则是表示我的默认行为不能被修改

> 几乎正确。`preventDefault()`方法用于阻止事件的默认行为，比如在点击链接时阻止浏览器打开链接，或者在提交表单时阻止页面刷新。
>
> 当调用`preventDefault()`时，你实际上是告诉浏览器不要执行事件的默认行为。然而，浏览器对于某些事件，如滚动事件、触摸事件等，会采用被动事件监听器的方式进行处理，以提高页面性能。被动事件监听器不允许在事件处理过程中调用`preventDefault()`方法，因为这可能导致滚动的不流畅或性能问题。
>
> 当你在被动事件监听器中调用`preventDefault()`时，浏览器会发出警告，因为它认为你在违反被动事件监听器的限制。浏览器可能会忽略你的`preventDefault()`调用，或者采取其他措施来保持页面的流畅性。
>
> 因此，你的理解基本是正确的。`preventDefault()`用于阻止默认行为，而浏览器的阻止是指它会限制在被动事件监听器中调用`preventDefault()`的效果，以保持页面的性能和流畅度。



## preventDefault()的作用

> `preventDefault()`是一个事件对象的方法，用于阻止事件的默认行为发生。默认行为指的是浏览器在特定事件发生时默认执行的操作，比如点击链接跳转页面、提交表单、按下回车键触发提交等。
>
> 通过调用`preventDefault()`方法，你可以告诉浏览器不要执行事件的默认行为，而是按照你的代码逻辑来处理事件。这可以用于在事件处理程序中自定义行为，阻止不必要的页面跳转或表单提交，或者修改事件的默认行为以满足特定需求。
>
> 例如，在处理点击事件时，你可以使用`preventDefault()`来阻止链接的跳转：
>
> ```javascript
> document.querySelector('a').addEventListener('click', function(event) {
>   event.preventDefault(); // 阻止链接跳转
>   // 执行自定义的逻辑
> });
> ```
>
> 另外，需要注意的是，并非所有的事件都可以通过`preventDefault()`来阻止默认行为，这取决于具体的事件类型和浏览器的实现。在某些情况下，浏览器可能对某些默认行为做了限制或禁止了阻止。



preventDefault()就是指阻止默认行为， 并将默认行为修改， 浏览器的阻止则是表示我的默认行为不能被修改

> 几乎正确。`preventDefault()`方法用于阻止事件的默认行为，比如在点击链接时阻止浏览器打开链接，或者在提交表单时阻止页面刷新。
>
> 当调用`preventDefault()`时，你实际上是告诉浏览器不要执行事件的默认行为。然而，浏览器对于某些事件，如滚动事件、触摸事件等，会采用被动事件监听器的方式进行处理，以提高页面性能。被动事件监听器不允许在事件处理过程中调用`preventDefault()`方法，因为这可能导致滚动的不流畅或性能问题。
>
> 当你在被动事件监听器中调用`preventDefault()`时，浏览器会发出警告，因为它认为你在违反被动事件监听器的限制。浏览器可能会忽略你的`preventDefault()`调用，或者采取其他措施来保持页面的流畅性。
>
> 因此，你的理解基本是正确的。`preventDefault()`用于阻止默认行为，而浏览器的阻止是指它会限制在被动事件监听器中调用`preventDefault()`的效果，以保持页面的性能和流畅度。





## 

<img src="travel debug.assets/image-20230617135633930.png" alt="image-20230617135633930" style="zoom:67%;" />







