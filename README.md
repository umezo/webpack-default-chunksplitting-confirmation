# Abstract
this repocitory contains sample codes to comfirm how webpack split chunks.
its cases are explained by [Tobias Koppers in this post](https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366)

# Build
build whole samples
`npm run build`

# Samples

## 1. Vendors

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

## 2. Vendor Overlapping

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


## 3. Shared Modules
mode production
### bundle and chunks
```
  92 0.js       BigSharedComponent (no code remains. tree shaking?)
 65K 1.js       Vue.js
 132 2.js       chunk-c, ComponentC
 169 3.js       chunk-b, ComponentB, SmallSharedComponent
 171 4.js       chunk-a, ComponentA, SmallSharedComponent
2.3K sample3.js
```

## 4. Multiple Shared Modules

### bundle and chunks
mode production
```
 99K 0.js       react, react-dom
176K 1.js       angular
  97 2.js       SharedAngularComponent
 116 3.js       SharedReactComponent
 132 4.js       chunk-d, ComponentA
 130 5.js       chunk-c
 139 6.js       chunk-b, ComponentB
 120 7.js       chunk-a, ComponentA
2.4K sample4.js
```
