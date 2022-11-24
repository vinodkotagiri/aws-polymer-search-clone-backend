const Repo = require('../models/Repo')
exports.repos = async (req, res) => {
	try {
		const repos = await Repo.find({})
		const data = repos.map((repo) => ({
			_id: repo._id,
			lastUpdated: repo.updated_at,
			link: repo.clone_url,
			//Categorical Fields
			categories: {
				name: repo.name,
				description: repo.description,
				language: repo.language,
				topics: repo.topics,
				searchKeyWords: repo.topics.map((topic) => `aws-${topic}`),
				license: repo.license.name,
				owner: repo.owner.login,
			},
			//Numerical Fields
			numericals: {
				stars: repo.stargazers_count,
				forks: repo.forks_count,
				watchers: repo.watchers_count,
				commits: repo.commits_url,
				contributors: `${repo.commits_url}`.replace('{/sha}', ''),
				openIssues: repo.open_issues,
			},
			//Boolean Fields
			booleans: {
				has_issues: repo.has_issues,
				has_projects: repo.has_projects,
				has_downloads: repo.has_downloads,
				has_wiki: repo.has_wiki,
				has_pages: repo.has_pages,
				has_discussions: repo.has_discussions,
				archived: repo.archived,
				disabled: repo.disabled,
				allow_forking: repo.allow_forking,
				is_template: repo.is_template,
				web_commit_signoff_required: repo.web_commit_signoff_required,
			},
		}))
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!, ' + error })
	}
}
