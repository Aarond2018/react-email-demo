"use client";

import { useState } from "react";

export default function Home() {
	const [data, setData] = useState({});
	const [status, setStatus] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus('loading');
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      setStatus("Done, thank you!")
    } catch (e) {
      console.log(e)
      setStatus("An error occured")
    }
  }
 
	return (
		<main>
			<div className="card">
				<h1>Newsletter</h1>
				<p>Stay up to date with our latest news and products.</p>
				<form className="form" onSubmit={handleSubmit} autoComplete="off" >
					<input
						type="text"
						onChange={handleChange}
						id="uName"
						placeholder="Enter your Username"
					/>
					<input
						type="email"
						onChange={handleChange}
						id="email"
						placeholder="Enter your email"
					/>
					<button disabled={status === "loading"}>SUBSCRIBE</button>
          <p>{status}</p>
				</form>
			</div>
		</main>
	);
}