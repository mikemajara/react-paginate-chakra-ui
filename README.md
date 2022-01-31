# Chakra-UI pagination for react

## Motivation

Both rc-paginate and react-paginate render `ul` components. I tend to use Chakra-UI these days and I prefer their structure.

This is a very simple, opinionated component, that will allow you to setup a pagination component in no time and give it Chakra-UI like style.

## Install

🚧 Package under construction, it's not yet published on npm, so you'll have to install as follows

```
npm install https://github.com/mikemajara/react-paginate-chakra-ui
```

```
yarn add https://github.com/mikemajara/react-paginate-chakra-ui
```

## Usage

```jsx
<Paginate
  page={page}
  margin={0}
  size="sm"
  fontWeight="regular"
  variant="ghost"
  selectedVariant="outline"
  count={100}
  pageSize={10}
  onClick={handlePageClick}
/>
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