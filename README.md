# react-virtual-list
[![npm](https://img.shields.io/npm/v/react-vlist.svg?style=flat-square)](http://npm.im/react-vlist)
[![MIT License](https://img.shields.io/npm/l/react-list.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![Travis](https://travis-ci.org/guiqui/react-virtual-list.svg?branch=master&style=flat-square)](https://travis-ci.org/guiqui/react-virtual-list)
[![codecov](https://codecov.io/gh/guiqui/react-virtual-list/branch/master/graph/badge.svg)](https://codecov.io/gh/guiqui/react-virtual-list)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/0fa1fa94403a4390912aceed77a919b9)](https://www.codacy.com/app/gquiman/react-virtual-list?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=guiqui/react-virtual-list&amp;utm_campaign=Badge_Grade)

This is a list component that support viartualize rendering.
It can be easly customize by providing its own item renderer.

[![Buy Me A Coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/gquiman)


- Super fast. 😛
- Responsive Components!
- Easy to use.
- Easy to Customize with Item Renderers.
- Support thousand of records.
## Demo
Check out a working demo [here](https://guiqui.github.io/react-virtual-list/index.html)
## Some Demo Code
- [![Edit 5xnwjvjxwx](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/5xnwjvjxwx) Simple Demo.
- [![Edit pj5jpm577](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/pj5jpm577) Demo with select Item,highlight selected and on click handler.
## Installation
```javascript
npm install react-vlist
```
## Configuration

This is an example with a minimal use of the VirtualList component
```javascript
import React from "react";
import ReactDOM from "react-dom";
import VirtualList from "react-vlist";
import "./Application.css";

const data = [{ name: "hola" }];
for (let i = 0; i < 1000; i++) {
  data.push({ name: `Row ${i}` });
}
function App() {
  return (
    <div className="app-container">
      <h1>Virtual List</h1>
      <VirtualList
        className="list"
        data={data}
        itemheight={50}
        renderItems={(item, index, style) => (
          <div className="itemRenderer" key={index} style={style}>
            <img
              className="itemImage"
              src="https://i.stack.imgur.com/4QkvN.jpg?s=64&g=1"
            />
            <div className="itemTitleContainer">
              <div className="itemTitle">{item.name}</div>
              <div className="itemContent">{item.name}</div>
            </div>
          </div>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
```

So the first thing is to create some data
```javascript
const data = [{ name: "hola" }];
for (let i = 0; i < 1000; i++) {
  data.push({ name: `Row ${i}` });
}
```
The next thing we implement a render method that use the list.

```javascript
 <VirtualList
        className="list"
        data={data}
        itemheight={50}
        renderItems={(item, index, style) => (
          <div className="itemRenderer" key={index} style={style}>
            <img
              className="itemImage"
              src="https://i.stack.imgur.com/4QkvN.jpg?s=64&g=1"
            />
            <div className="itemTitleContainer">
              <div className="itemTitle">{item.name}</div>
              <div className="itemContent">{item.name}</div>
            </div>
          </div>
        )}
      />
```


The list recive 3 params:
- data: Data is an array of elements to be render by the list
- itemheight: is the height of each item of the list
- renderItems: It is a hight order function where you can set what component is to be use to render the list elements.
  * The function recive the following params:
    * item:A element from the data object.
    * index:The cardinal order of the element, it positio in the data array.
    * style:The style to be applied to position the element. 
  * This function returns:
    * A react component.(Make sure you assign the style to the returning component so it get position properly)


## Other Free Apps we have created:
- [Profile Me](https://profile.softcloud.pro/) - Creates Professional Profile pictures.
- [Background RM](https://rmbackground.softcloud.pro/) - Remove pictures Background.
- [MetersApp](https://app.meters.app/login) - Create Quotes using measures from floorplan.
