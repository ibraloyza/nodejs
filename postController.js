const posts=[
    {id:1,title:"post one"},
    {id:2,title:"post two"}  
]




export const getPostLength = () =>posts.length;

// you can export dofferent way
// export const getPost = () => posts;
const getPost = () => posts;

// export {
//     getPost
// }; //export as an object   and when you import you need {}

export default getPost; // if you use default when you immport  you don't need {} 

// 