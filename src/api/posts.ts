const wait = (ms: number) => new Promise((res) => setTimeout(res, ms))

interface Post {
	userId: number
	id: number
	title: string
	body: string
}

export const fetchPosts = async () => {
	const response = await fetch("http://jsonplaceholder.typicode.com/posts")
	const json: Post[] = await response.json()
	await wait(3000)
	return json
}