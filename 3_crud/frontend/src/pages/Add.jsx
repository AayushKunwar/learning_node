import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Add() {
	const [comment, setComment] = useState({
		author: "",
		comment: "",
	});

	const navigate = useNavigate();

	function handleChange(e) {
		setComment((prev) => ({ ...prev, [e.target.name]: e.target.value }));
	}
	async function handleClick(e) {
		e.preventDefault();
		try {
			await axios.post("http://localhost:8800/comments", comment);
			navigate("/");
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className="form">
			<h1>Add a comment</h1>
			<input
				type="text"
				placeholder="author"
				onChange={handleChange}
				name="author"
			/>
			<input
				type="text"
				onChange={handleChange}
				placeholder="comment"
				name="comment"
			/>
			<button onClick={handleClick}>Add</button>
		</div>
	);
}

export default Add;
