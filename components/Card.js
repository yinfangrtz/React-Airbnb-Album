// // this part work with     in App.js
//             <Card
//                 key={item.id}
//                 item={item}
//             />

// import React from "react"

// export default function Card(props) {
//     let badgeText
//     if (props.item.openSpots === 0) {
//         badgeText = "SOLD OUT"
//     } else if (props.item.location === "Online") {
//         badgeText = "ONLINE"
//     }
    
//     return (
//         <div className="card">
//             {badgeText && <div className="card--badge">{badgeText}</div>}
//             <img src={`../images/${props.item.coverImg}`} className="card--image" />
//             <div className="card--stats">
//                 <img src="../images/star.png" className="card--star" />
//                 <span>{props.item.stats.rating}</span>
//                 <span className="gray">({props.item.stats.reviewCount}) • </span>
//                 <span className="gray">{props.item.location}</span>
//             </div>
//             <p className="card--title">{props.item.title}</p>
//             <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
//         </div>
//     )
// }





// option+shift 多行选择同时输入






import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {
                badgeText && 
                <div className="card--badge">{badgeText}</div>
            }
            <img 
                src={`../images/${props.coverImg}`} 
                className="card--image" 
            />
            <p className="card--title">{props.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.price}</span> / person
            </p>
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
        </div>
    )
}

// span inline element