import React from "react";
import { useEffect, useState } from "react";
// axios is for api calls
import axios from "axios";

function Comments() {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		const fetchAllComments = async () => {
			try {
				const res = await axios.get("http://localhost:8800/comments");
				setComments(res.data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchAllComments();
	}, []);

	return (
		<div>
			<h1>Comments List</h1>
			<div className="comments">
				<table>
					<tr>
						<th>Author</th>
						<th>Comment</th>
					</tr>
					<tbody>
						{comments.map((comment) => (
							<tr className="comment" key={comment.id}>
								<td>{comment.author}</td>
								<td>{comment.comment}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Comments;
