import { Component } from "react";
import projects from '../projects.js'
import Toolbar from "./Toolbar.jsx";
import ProjectList from "./ProjectList.jsx";

export default class Portfolio extends Component {
	constructor(props){
		super(props);
		this.state = { selectedFilter: 'All' };
		this.filters = ['All', ...new Set(projects.map(project => project.category))];
	}

	handleFilterSelect = (filter) => {
		this.setState({ selectedFilter: filter });	
	}

	getFilteredProjects() {
		if (this.state.selectedFilter === "All") {
			return projects.slice();
		} else {
			return projects.filter(project => project.category === this.state.selectedFilter);
		}
	}

	render() {
		const filtered = this.getFilteredProjects();
		return (
			<div className="portfolio">
				<Toolbar filters={this.filters}
								selected={this.state.selectedFilter}
								onSelectFilter={this.handleFilterSelect} />
				<ProjectList projects={filtered} />
			</div>
		)
	}
}