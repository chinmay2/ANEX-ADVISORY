import Image from 'next/image';
export default function ProjectCard({name,location,image}:{name:string,location:string,image:string}){return <article className="project-card"><Image src={image} alt={name} fill sizes="(max-width:900px) 100vw, 33vw"/><div className="project-info"><small>{location}</small><h3>{name}</h3></div></article>}
