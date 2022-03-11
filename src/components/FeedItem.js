import React from 'react'
import styled from "styled-components";
import './FeedItem.css'

const FeedImage = styled.div`
    width: 300px;
    height: 220px;
    background-color: black;
    background-image: url("${props => props.img}");
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin: 10px auto;
`

function FeedItem({ data }) {
    console.log(data)
    return (
        <FeedImage img={data.image}>
            <span class="tag">{data.tags[0]}</span>
            <span class="tag">{data.tags[1]}</span>
            <span class="tag">{data.tags[2]}</span>
        </FeedImage>
    )

}

export default FeedItem