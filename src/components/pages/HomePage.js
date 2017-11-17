import React, { Component } from 'react';


class HomePage extends Component {
  render() {
    return (
   	 <div class="float-xl-left">
  <div id="accordion" role="tablist">
  <div class="card">
    <div class="card-header" role="tab" id="headingOne">
      <h5 class="mb-0">
        <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        REACT HISTORY---- 5/10/2017
        </a>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body">
        <h4>React was created by Jordan Walke, a software engineer at Facebook. He was influenced by Angular and XHP, an HTML component framework for PHP. It was first deployed on Facebook's newsfeed in 2011 and later on Instagram.com in 2012. It was open-sourced at JSConf US in May 2013.
React Native, which enables native Android, iOS, and UWP development with React, was announced at Facebook's React.js Conf in February 2015 and open-sourced in March 2015.
On April 18, 2017, Facebook announced React Fiber, a new core algorithm of React framework library for building user interfaces. React Fiber will become the foundation of any future improvements and feature development of the React framework.</h4>
   </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingTwo">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          REACT ADVANTAGES---- 6/2/2017
        </a>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body">
        <h4><p>React is a simple, yet powerful, UI library. When it was released in 2013, it offered an alternative to the existing popular monolithic JavaScript frameworks of the time. React’s most important advances are the emphasis on components, one-way data flow, the Virtual DOM, JSX, and architecture that extends beyond HTML.</p>

<p>React’s simplicity lies in that it makes it easy to declare user-interfaces in self-contained independent components. It hides its complex rendering engine implementation and exposes a simple component API. There are only a few public methods to override inside the component such as componentWillMount, componentDidMount, etc.</p>



<p>Components</p>
<p>The React UI is declared inside components. A component is like a function that accepts props as inputs and outputs the declared interface. The UI should be composed of as many components as possible to maximize reusability.</p>

<p>If a widget is composed of multiple components, the state should be inside the parent component. Any asynchronous I/O requests shouldn’t be inside the pure component. Doing so would make it less usable as it couples the I/O requests to the component. If you tried to use the component in a large list, it would create a large amount of requests on rendering the components.</p>


<p>One-Way Data Flow</p>
<p>React uses one-way data flow, so only changes to the data result in changes to the UI. If you use Redux, you change data in a global app store, and the components listen for changes there. The benefits of having all the app state in one place is having one source of truth. Another benefit is it makes it easier to inspect changes in the app and captures the different states of the app. This helps when trying to reproduce errors.</p>

<p>Virtual DOM</p>
<p>The Virtual DOM allows the UI to be efficient in diffing UI changes. This in-between process between what the component should render and what the actual rendering is that it allows React to work on different platforms. React Native runs on mobile devices and there are also native OS platforms that run on Ubuntu, Mac, and Windows.</p>


<p>Ecosystem</p>
<p>React isn’t just the UI, it’s a framework/ecosystem. You can manage the state using a state manager such as Redux. This is abstracted away from the component tree. It makes debugging easier to not have state hidden in multiple places. There are good tools following this stack such as Redux DevTools, which allows you to see the app state as a collapsable tree widget.</p></h4>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" role="tab" id="headingThree">
      <h5 class="mb-0">
        <a class="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          WHY REACT ---- 10/3/2017
        </a>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body">
        <p>React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.</p>

<p>We built React to solve one problem: building large applications with data that changes over time. To do this, React uses two main ideas.</p>

<p>Simple</p>
<p>Simply express how your app should look at any given point in time, and React will automatically manage all UI updates when your underlying data changes.</p>

<p>Declarative</p>
When the data changes, React conceptually hits the "refresh" button, and knows to only update the changed parts.

<p>Build Composable Components</p>
<p>React is all about building reusable components. In fact, with React the only thing you do is build components. Since they're so encapsulated, components make code reuse, testing, and separation of concerns easy.</p>
      </div>
    </div>
  </div>
</div>

</div>

    );
  }
}

export default HomePage;
