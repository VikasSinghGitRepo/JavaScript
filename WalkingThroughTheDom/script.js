console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.Child)
console.log(document.body.childNodes[1].childNodes[1])

let arr1=Array.from(document.body.childNodes)
console.log(arr1) 

let a=document.body.firstChild
console.log(a.parentNode)
console.log(a.parentElement)
console.log(a.firstChild.nextSibling)
console.log(document.documentElement.parentNode)
console.log(document.documentElement.parentElement)

let b=document.body
console.log(b.firstElementChild)
console.log(b.firstChild)
console.log(b.previousElementSibling)
console.log(b.nextElementSibling)


//for tables
let t=document.body.firstElementChild.firstElementChild
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead)
console.log(t.tHead.firstElementChild)
console.log(t.tFoot)
console.log(t.tbodies)

console.log(t.rows[1].rowIndex)
console.log(t.cells)
console.log(t.rows.sectionRowIndex)

let td=t.firstElementChild.firstElementChild
console.log(td.cellIndex)

