# Abstract
this repocitory contains sample codes to comfirm how webpack split chunks.
its cases are explained by [Tobias Koppers in this post](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)

# Samples

## Vendors

### build
```
npm run build:sample1
```

### bundle and chunks
mode production
```
 99K 0.js       react, react-dom
176K 1.js       angular
 129 2.js       chunk-d, ComponentD
 129 3.js       chunk-c, ComponentC
 134 4.js       chunk-b, ComponentB
 134 5.js       chunk-a, ComponentA
2.4K sample1.js
```

### loading sequence
mode development
![loading sequence image](./images/sample1.gif)

## Vendor Overlapping

### build
```
npm run build:sample2
```

### bundle and chunks
mode production
```
 99K 0.js       react, react-dom
 70K 1.js       lodash
 139 2.js       chunk-c, ComponentC
 139 3.js       chunk-b, ComponentB
 134 4.js       chunk-a, ComponentA
2.3K sample2.js
```

### loading sequence
mode development
![loading sequence image](./images/sample2.gif)
