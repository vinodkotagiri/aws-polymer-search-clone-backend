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
			{ name: 'Service Names', data: services },
			{ name: 'Languages', data: language },
			{ name: 'Licenses', data: license },
			{ name: 'Topics', data: topics },
			{ name: 'Search Keywords', data: searchKeywords },
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
			{ name: 'Stars', data: stars },
			{ name: 'Watchers', data: watchers },
			{ name: 'Open Issues', data: openIssues },
			{ name: 'Forks', data: forks },
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
		const avatarLink = repos.map((repo) => ({ _id: repo._id, values: repo.owner.avatar_url }))
		const languagesLink = repos.map((repo) => ({ _id: repo._id, values: repo.languages_url }))
		const contributorsLink = repos.map((repo) => ({ _id: repo._id, values: repo.contributors_url }))
		const gitLink = repos.map((repo) => ({ _id: repo._id, values: repo.git_url }))
		const data = [
			{ name: 'Repo Link', data: repoLink },
			{ name: 'Git Url', data: gitLink },
			{ name: 'Contributors Url', data: contributorsLink },
			{ name: 'Owner Avatar Url', data: avatarLink },
			{ name: 'Languages Url', data: languagesLink },
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
			{ name: 'Created At', data: createdAt },
			{ name: 'Updated At', data: updatedAt },
			{ name: 'Pushed At', data: pushedAt },
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
		const disabled = repos.map((repo) => ({ _id: repo._id, values: repo.disabled }))
		const data = [
			{ name: 'Has Issues', data: hasIssues },
			{ name: 'Has Wiki', data: hasWiki },
			{ name: 'Archived', data: archived },
			{ name: 'Disabled', data: disabled },
		]

		res.status(200).json(data)
	} catch (error) {
		res.status(500).json({ error: 'Something went wrong!, ' + error })
	}
}
