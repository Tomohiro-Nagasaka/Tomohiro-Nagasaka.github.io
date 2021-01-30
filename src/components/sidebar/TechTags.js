import React from "react"

import {getTechTags0} from "../tags/TechTag"


const TechTags = (props) => {
    const labels = props.labels
    const posts = props.posts

    const labelCount = labels.map(label => {
        let count = 0;
        posts.forEach(post => {
            if (post.node.frontmatter.tags.includes(label.tag)) {
                count = count + 1
            }
        })
        return [label.tag, count]
    })

    const categories = labelCount.filter(label => {
        return label[1] > 0
    })

    const techtags = categories.map(category => {
        return category[0]
    })

    let posttags = []
    posts.forEach(post => {
        post.node.frontmatter.tags.forEach(tag => {
            if (!posttags.includes(tag)) {
                posttags.push(tag)
            }
        })
    })

    const getOtherTags = (tags) => {
        const techTags = []
        tags.forEach((tag, i) => {

            if (!techtags.includes(tag)) {
                techTags.push(getTechTags0(tag, labels, i))
            }
        })
        return techTags
    }

    const getTechTags = (tags) => {
        const techTags = []
        tags.forEach((tag, i) => {
            techTags.push(getTechTags0(tag, labels, i))
        })
        return techTags
    }


    return (
        <>
            <h4>Topics/Language</h4>
            <div className="d-block">
                {getOtherTags(posttags)}
            </div>
            <br></br>
            <h4>Programming/Technology</h4>
            <div className="d-block">
                {getTechTags(techtags)}
            </div>
            
            
        </>
    )
}


export default TechTags