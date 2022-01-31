# Chakra-UI pagination for react

## Motivation

Both [rc-pagination](https://github.com/react-component/pagination) and [react-paginate](https://github.com/AdeleD/react-paginate) are (1) overly complex and have too many options and (2) render `<ul>` & `<li>` components. I tend to use Chakra-UI lately and I prefer their **simple and opinionated** approach to structuring and styling an app. 

This is a very simple, opinionated component, that will allow you to setup a pagination component in no time and, including Chakra-UI like styles (size, colorScheme, etc)

## Install

🚧 Package under construction, it's not yet published on npm, so you'll have to install as follows

```
npm install react-paginate-chakra-ui
```

```
yarn add react-paginate-chakra-ui
```

## Usage

```jsx
const MyComponent = () => {
  const [page, setPage] = useState(0);
  const handlePageClick = (p: number) => setPage(p);

  return (
    <Providers>
      <Paginate
        page={page}
        margin={1}
        shadow="sm"
        fontWeight="bold"
        variant="outline"
        selectedVariant="solid"
        count={100}
        pageSize={10}
        onPageChange={handlePageClick}
      />
    </Providers>
  );
};

```

## Examples

![snapshot1](/images/Screenshot%202022-01-31%20at%2020.23.12.png)
![snapshot2](/images/Screenshot%202022-01-31%20at%2020.25.29.png)
![snapshot3](/images/Screenshot%202022-01-31%20at%2020.25.58.png)
![snapshot4](/images/Screenshot%202022-01-31%20at%2020.27.00.png)
![snapshot5](/images/Screenshot%202022-01-31%20at%2020.27.50.png)
![snapshot6](/images/Screenshot%202022-01-31%20at%2020.28.39.png)
![snapshot7](/images/Screenshot%202022-01-31%20at%2020.29.29.png)

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