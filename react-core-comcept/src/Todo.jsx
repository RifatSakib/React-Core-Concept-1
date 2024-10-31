// export default function Todo({task}){
//     return(

//         <li> task: {task}</li>
// )
// }

// conditional rendering option 1: 

// export default function Todo({task, isDone}){ //destructuring style
//     if(isDone === true){
//         return <li>Finished: {task}</li>
//     }
//     else{
//         return <li>Work on: {task}</li>
//     }
// }

// conditional rendering option 2
// export default function Todo({task, isDone}){
//     if(isDone){ //truthy value
//         return <li>Finish2: {task}</li>
//     }
//     return <li>Work on2: {task}</li>
// }

// conditional rendering option 3: ternary operator
// export default function Todo({task, isDone}){
//     return (
//         <li> {isDone ? 'Finished3': 'Work on3' } : {task}</li>
//     )
// }


// // conditional rendering option 4: &&
// export default function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone && ': Done'}</li>
//     )
// }


// conditional rendering option 5: ||
// export default function Todo({task, isDone}){
//     return (
//         <li>{task} {isDone || ': Do it'}</li>
//     )
// }


// conditional rendering option 6
export default function Todo({task, isDone}){
    let listItem;
    if(isDone){
        listItem = <li>Finish6: {task}</li>
    }
    else{
        listItem = <li>Work on6: {task}</li>
    }
     return listItem;
}