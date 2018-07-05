# React Notes

### Can only render one top-level element, so elements must be enclosed in a div, so you can render the div with everything inside it.
### "className" refers to the class you have created in the react app
### "render" is baked into "Component"

### Immutable Data Lesson
myObj = {key1: "value"}
function(myObj) {
  myObj.key1 = "foo"
}

vs.

num = 13
function(num) {
  num ++
  return num
}
another num is returned

