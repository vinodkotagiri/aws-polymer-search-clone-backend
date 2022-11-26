const Repo = require('../models/Repo')
// -----------------------------------------------------------------------------
// Controller to get all repos
// -----------------------------------------------------------------------------
exports.repos = async (req, res) => {
	try {
		const repos = await Repo.find({})
		res.status(200).json(repos)
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!, ' + error })
	}
}
// -----------------------------------------------------------------------------
// Controller to get categories
// -----------------------------------------------------------------------------
exports.categories = async (req, res) => {
	try {
		const repos = await Repo.find({})
		const services = repos.map((repo) => ({ _id: repo._id, values: repo.name }))
		const language = repos.map((repo) => ({ _id: repo._id, values: repo.language }))
		const license = repos.map((repo) => ({ _id: repo._id, values: repo.license.name }))
		const topics = repos.map((repo) => ({ _id: repo._id, values: repo.topics }))
		const searchKeywords = repos.map((repo) => ({ _id: repo._id, values: repo.name.split('-') }))
		const data = [
			{ name: 'Service Names', slug: 'name', data: services },
			{ name: 'Languages', slug: 'language', data: language },
			{ name: 'Licenses', slug: 'license', data: license },
			{ name: 'Topics', slug: 'topics', data: topics },
			{ name: 'Search Keywords', slug: '', data: searchKeywords },
		]
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!, ' + error })
	}
}
// -----------------------------------------------------------------------------
// Controller to get Numericals
// -----------------------------------------------------------------------------
exports.numericals = async (req, res) => {
	try {
		const repos = await Repo.find({})
		const stars = repos.map((repo) => ({ _id: repo._id, values: repo.stargazers_count }))
		const watchers = repos.map((repo) => ({ _id: repo._id, values: repo.watchers_count }))
		const openIssues = repos.map((repo) => ({ _id: repo._id, values: repo.open_issues_count }))
		const forks = repos.map((repo) => ({ _id: repo._id, values: repo.forks_count }))
		const data = [
			{ name: 'Stars', slug: 'stargazers_count', data: stars },
			{ name: 'Watchers', slug: 'watchers_count', data: watchers },
			{ name: 'Open Issues', slug: 'open_issues_count', data: openIssues },
			{ name: 'Forks', slug: 'forks_count', data: forks },
		]
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!, ' + error })
	}
}
// -----------------------------------------------------------------------------
// Controller to get Links
// -----------------------------------------------------------------------------
exports.links = async (req, res) => {
	try {
		const repos = await Repo.find({})
		const repoLink = repos.map((repo) => ({ _id: repo._id, values: repo.url }))
		const languagesLink = repos.map((repo) => ({ _id: repo._id, values: repo.languages_url }))
		const contributorsLink = repos.map((repo) => ({ _id: repo._id, values: repo.contributors_url }))
		const gitLink = repos.map((repo) => ({ _id: repo._id, values: repo.git_url }))
		const data = [
			{ name: 'Repo Link', slug: 'url', data: repoLink },
			{ name: 'Git Url', slug: 'git_url', data: gitLink },
			{ name: 'Contributors Url', slug: 'contributors_url', data: contributorsLink },
			{ name: 'Languages Url', slug: 'languages_url', data: languagesLink },
		]
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!, ' + error })
	}
}
// -----------------------------------------------------------------------------
// Controller to get Dates
// -----------------------------------------------------------------------------
exports.dates = async (req, res) => {
	try {
		const repos = await Repo.find({})
		const createdAt = repos.map((repo) => ({ _id: repo._id, values: repo.created_at.toLocaleString().split(',')[0] }))
		const updatedAt = repos.map((repo) => ({ _id: repo._id, values: repo.updated_at.toLocaleString().split(',')[0] }))
		const pushedAt = repos.map((repo) => ({ _id: repo._id, values: repo.pushed_at.toLocaleString().split(',')[0] }))
		const data = [
			{ name: 'Created At', slug: 'created_at', data: createdAt },
			{ name: 'Updated At', slug: 'updated_at', data: updatedAt },
			{ name: 'Pushed At', slug: 'pushed_at', data: pushedAt },
		]
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!, ' + error })
	}
}
// -----------------------------------------------------------------------------
// Controller to get Booleans
// -----------------------------------------------------------------------------
exports.booleans = async (req, res) => {
	try {
		const repos = await Repo.find({})
		const hasIssues = repos.map((repo) => ({ _id: repo._id, values: repo.has_issues }))
		const hasWiki = repos.map((repo) => ({ _id: repo._id, values: repo.has_wiki }))
		const archived = repos.map((repo) => ({ _id: repo._id, values: repo.archived }))
		const data = [
			{ name: 'Has Issues', slug: 'has_issues', data: hasIssues },
			{ name: 'Has Wiki', slug: 'has_wiki', data: hasWiki },
			{ name: 'Archived', slug: 'archived', data: archived },
		]
		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!, ' + error })
	}
}
