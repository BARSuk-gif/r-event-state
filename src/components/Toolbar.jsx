export default function Toolbar({ filters, selected, onSelectFilter}) {
	return (
		<div className="toolbar">
			{filters.map((filter) => (
				<button
					type="button"
					className={`btn-filter ${filter === selected ? "active" : ""}`}
					onClick={() => onSelectFilter(filter)}
					key={filter}
				>
					{filter}
				</button>								
			))}
		</div>
	);
}