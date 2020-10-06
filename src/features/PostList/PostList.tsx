import React, { useCallback } from "react"
import { useAsync } from "hooks/useAsync"
import { fetchPosts } from "api/posts"


export const PostList = (): JSX.Element => {
	const fetcher = useCallback(fetchPosts, [])
	const { value = [], status, error } = useAsync(fetcher, true)

	if (status === "error") {
		throw error
	}

	if (status !== "success") {
		return <p>Loading...</p>
	}

	return (
		<ul>
			{value.map((post) => (
				<li key={post.id} data-userid={post.userId}>{post.title}</li>
			))}
		</ul>
	)
}

export default PostList