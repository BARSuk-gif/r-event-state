export default function ProjectList({ projects }) {
  return (
    <div className="image-container">
      {projects.map((item, index) => (
				<div className="card" key={index}>
					<img src={item.img} 
					alt={item.category} />
				</div>
		 	))}
    </div>
  )
}