export default function Navbar() {
    return(
        <nav style={{backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.25)'}} className="flex items-center justify-between px-8 py-4 sticky top-0 z-50">
            <span className="font-bold text-white text-lg" style={{fontFamily: 'var(--font-dynapuff)'}}>blender</span>
            <div className="flex gap-8">
                {['how it works', 'prizes', 'faq'].map(link=>(
                    <a key={link} href={`#${link.replace(/ /g, '-')}`} className='text-white font-bold text-sm hover:opacity:60 transition-opacity'> {link} </a>
                ))}
            </div>
        </nav>
    )
}