import React from "react"

import "./tags.css"
import { Link } from "gatsby";

export const TechTag = (props) => {
    const { tag, tech, name, size, color } = props

    return (
        <div className="d-inline-block p-1">
            <Link to={`/tags/${tag}/`}>
                <button
                    className="tech-tag text-white">
                    <p className="d-inline">{tech} </p>
                    <div className="d-inline" style={{ fontSize: size, color: color }}><svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={size * 1.5} height={size * 1.5} style={{fill: `${color}`}}>
                            <title>{tech}</title>
                            <path
                                d={name} />
                        </svg></div>
                </button>
            </Link>

        </div>

    )
}


export const getTechTags0 = (tag, labels, i) => {
    
    let labelx = null;
    labels.forEach((label) => {
        
        if (tag === label.tag) {

            labelx = label;            
        }
    })

    if(labelx == null)
    {
        //console.log(tag)
        labelx = labels[0]
        var color = labelx.color
        if(tag == "Featured")
            color = "#D62900"

        return <TechTag key={i} tag={tag} tech={tag} name={labelx.name} size={labelx.size} color={color} />
    }
    else{
        return <TechTag key={i} tag={labelx.tag} tech={labelx.tech} name={labelx.name} size={labelx.size} color={labelx.color} />
    }

    
}

export default TechTag