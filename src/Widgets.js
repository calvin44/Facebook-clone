import './Widgets.css'
import React from 'react'

const Widgets = () => {
    return (
        <div className="widgets">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=2039837906265625" 
            title="facebook widget"
            width="300" 
            height="500" 
            style={{border: "none", overflow:"scroll"}}
            scrolling="yes" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
        </div>
    )
}

export default Widgets
