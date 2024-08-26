// function customRender(reactElement,container){
//     const 
// }

const reactElement = {
    type: 'div',
    props: {
        href: 'https://google.com',
        target: 'blank'
    },
    children: 'Click me to visit google'
}
const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer)