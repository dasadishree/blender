'use client'
import {useState} from 'react';
export default function Popup() {
    const [open, setOpen] = useState(true)
    if(!open) return null
    return (
        <div className="popup-overlay" onClick={()=>setOpen(false)}>
            <div className="popup-box" onClick={e=>e.stopPropagation()}>
                <h2 className="popup-heading">read me!!!</h2>
                <div className="popup-body">
                    <p>Hi!! This is a temporary popup to explain my YSWS idea a little further or the reasoning behind it. Basically, this YSWS is somewhat a continuation or V2 of Construct (in that its focused on CAD), but there are definitely differences!</p>
                    <p>Throughout my time at Hack Club, I’ve noticed how vibrant and diverse the community is, and I especially love that everyone in Hack Club has interests and passions in different niches within or outside of technology: some I’ve encountered include art, photography, architecture, fashion, music, editing, animation, interior design / design in general, etc. I’m also really interested in industrial design and manufacturing, and it’s definitely something I want to pursue in college and beyond!</p>
                    <p>This would be a great way to reach out to Hack Club’s (many, many) artists, and also a beginner-friendly YSWS, and also something I feel like girls from the Athena Initiative would enjoy! Not to be stereotypical or anything (sob) but as a girl myself I feel like a art/design centered YSWS that still has technical elements like this one seems like a lot more fun but less intimidating way to get into tech/CAD.</p>
                    <p>So, this YSWS was my best attempt to combine these interests while still maintaining quality. Specifically, I want to do outreach for this YSWS to bring in people with passions in architecture, fashion, etc to help more people join Hack Club! I actually asked some of my friends outside of Hack Club who have interests in these subjects for advice on what type of prizes or YSWS program they would do, and I think they’d definitely be interested in participating in this YSWS if it runs. It’d be also be interesting to do outreach and reach out to youtubers/content creators like youtuber @mxddsie and some tiktokers/insta influencers I watch like @jessie.garcia27 and @innovativethanh ! </p>
                    
                <div className="popup-links">
                    <a href="https://www.figma.com/design/Q3jyx0zcUmSB6T05I8Ohz2/blender-ysws?node-id=0-1&t=YN2L4DLIS5AqnVa0-1" className="popup-link" style={{background: '#3ECFB0', color: "#0a3a2a"}}>
                        very VERY rough figma outline of how i wanted to layout content on this website, and also decided colorscheme - used the campfire template for efficiency but obviously on my real website changed it up!
                    </a>

                    <a href="https://www.canva.com/design/DAHEi5syEKE/r36pE2cwFtHkZB1mepMhNA/edit?utm_content=DAHEi5syEKE&utm_campaign=designshare&utm_medium=link2&utm_source=sharebuttons" className="popup-link" style={{background: "#FFD93D", color: "#4a3000"}}>
                        canva background design!
                    </a>

                    <a href="https://docs.google.com/document/d/1n_OFTRMn6i6tDXLufMNbXoL-rdzHwRs2-lmWeLClEWk/edit?usp=sharing" className="popup-link" style={{background:"#FF9A2E", color: "#5a2000"}}>
                        enitre planning process on google docs!
                    </a>
                </div>
                
                </div>
                <button className="popup-close" onClick={()=>setOpen(false)}>
                    close
                </button>
            </div>
        </div>
    )
}