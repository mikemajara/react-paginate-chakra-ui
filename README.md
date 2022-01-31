# Chakra-UI pagination for react

## Motivation

Both [rc-pagination](https://github.com/react-component/pagination) and [react-paginate](https://github.com/AdeleD/react-paginate) are (1) overly complex and have too many options and (2) render `<ul>` & `<li>` components. I tend to use Chakra-UI lately and I prefer their **simple and opinionated** approach to structuring and styling an app. 

This is a very simple, opinionated component, that will allow you to setup a pagination component in no time and, including Chakra-UI like styles (size, colorScheme, etc)

## Install

```
npm install react-paginate-chakra-ui
```

```
yarn add react-paginate-chakra-ui
```

## Usage

```jsx
// index.tsx
import { chakra, ChakraProvider, Stack } from "@chakra-ui/react";
import * as React from "react";
import { render } from "react-dom";
import { Paginate } from "react-paginate-chakra-ui";
import "focus-visible";
import "./styles.css";

function App() {
  const [page, setPage] = React.useState(0);
  const handlePageClick = (p: number) => setPage(p);

  return (
    <Stack p={5}>
      <chakra.div>Page: {page}</chakra.div>
      <Paginate
        // required props 👇
        page={page}
        count={100}
        pageSize={10}
        onPageChange={handlePageClick}
        // optional props 👇
        margin={2}
        shadow="lg"
        fontWeight="blue"
        variant="outline"
        // ...border and other props also work 💪
        border="2px solid"
        // you can use w to adjust to parent
        // container
        w="full"
      />
    </Stack>
  );
}

const rootElement = document.getElementById("root");
render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  rootElement
);
```

## Props

| prop            	| default              	| required 	|
|-----------------	|----------------------	|----------	|
| count           	|                      	| yes      	|
| pageSize        	|                      	| yes      	|
| onClick         	|                      	| yes      	|
| margin          	|                    1 	| no       	|
| size            	| md                   	| no       	|
| selectedVariant 	| solid                	| no       	|
| variant         	| outline              	| no       	|
| previousIcon    	| \<ChevronLeftIcon />  	| no       	|
| nextIcon        	| \<ChevronRightIcon /> 	| no       	|
| colorScheme     	| gray                 	| no       	|
| fontWeight      	| regular              	| no       	|
| borderRadius    	| md                   	| no       	|

## Codesandbox
## Examples

![snapshot1](/images/Screenshot%202022-01-31%20at%2020.23.12.png)
![snapshot2](/images/Screenshot%202022-01-31%20at%2020.25.29.png)
![snapshot3](/images/Screenshot%202022-01-31%20at%2020.25.58.png)
![snapshot4](/images/Screenshot%202022-01-31%20at%2020.27.00.png)
![snapshot5](/images/Screenshot%202022-01-31%20at%2020.27.50.png)
![snapshot6](/images/Screenshot%202022-01-31%20at%2020.28.39.png)
![snapshot7](/images/Screenshot%202022-01-31%20at%2020.29.29.png)

## Roadmap
- [ ] Add styles for selected component
  - [x] size
  - [x] colorScheme
  - [x] variant
  - [x] fontWeight
  - [ ] spacing
- [ ] Include variants for paging display
  - [x] Display +-N pages relative to current
  - [ ] Only display 1 page
  - [ ] Keep fixed number of tiles
- [ ] Improve typing
- [ ] Add tests