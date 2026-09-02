import type {ReactNode} from 'react';
export default function DetailPage({eyebrow,title,copy,children}:{eyebrow:string,title:string,copy:string,children:ReactNode}){return <main><section className="detail-hero"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p className="hero-copy">{copy}</p></div></section>{children}</main>}
