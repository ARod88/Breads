const React = require("react");
const Default = require("./layouts/default");

// JSX Component
const Index = ({ breads, title }) => {
    return (
        <Default title= {title} >
            <h2>Index Page</h2>
            <div className="newButton">
                <a className="button" href="/breads/new">
                    Add a new bread
                </a>
            </div>
            <ul>
                {breads.map((bread) => (
                    <li key={bread.id}>
                        <a href={`/breads/${bread.id}`}>{bread.name}</a>
                    </li>
                ))}
                
            </ul>
        </Default>
    );
};

module.exports = Index;



// const React = require('react');
// const Default = require('./layouts/default');

// const Index = ({breads}) => {
//     return (
//         <Default>
//             <h2>Indx Page</h2>
//             <ul>
//                 {breads.map( (bread, index) => (
//                     <li key={index}>
//                         <a href={`/breads/${index}`}>{bread.name}</a>

//                     </li>
//                 ))}
//             </ul>
//         </Default>
//     )
// };

// module.exports = Index;

