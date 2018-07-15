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
```
709K 0.js       react, react-dom
1.4M 1.js       angular
1.6K 2.js       chunk-d, ComponentD
1.6K 3.js       chunk-c, ComponentC
1.8K 4.js       chunk-b, ComponentB
1.8K 5.js       chunk-a, ComponentA
9.2K sample1.js
```

### loading sequence
![loading sequence image](./images/sample1.gif)
