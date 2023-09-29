import React from 'react'
import { useState, useEffect } from 'react';

import './Contact.scss'

export default function Contact() {
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		function handleResize() {
		  setWidth(window.innerWidth);
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	  }, [width]);

	return (
		<section className='contactPage'>
			{width > 1000 && (
				<div className='container_12 content'>
					<h2>Send email to Helena Masłowska</h2>

					<h1>Let's chat. Tell me about your project.</h1>

					<form className='grid_12' action="mailto:helena.maslowska17@gmail.com?Subject=[lol]+" method="get" enctype="text/plain">
						<label>Subject</label>
						<input type="text" name="subject" placeholder="John" />
						<label>Message:</label>
						<textarea name="body" placeholder="Your message, paste here mail to correspondence if you wish" required></textarea>
						<div className="pull_12 buttons">
							<input className='grid_6 alpha' type="submit" value="Send" />
							<input className='grid_6 omega' type="reset" value="Reset" />
						</div>
					</form>
				</div>
			)}

			{width <= 1000 && (
				<div className='content'>
					<h2>Send email to Helena Masłowska</h2>

					<h1>Let's chat. Tell me about your project.</h1>

					<form action="mailto:helena.maslowska17@gmail.com?Subject=[lol]+" method="get" enctype="text/plain">
						<label>Subject</label>
						<input type="text" name="subject" placeholder="John" />
						<label>Message:</label>
						<textarea name="body" placeholder="Your message, paste here mail to correspondence if you wish" required></textarea>
						<div className=" buttons">
							<input type="submit" value="Send" />
							<input type="reset" value="Reset" />
						</div>
					</form>
				</div>
			)}
		</section>
	)
}
