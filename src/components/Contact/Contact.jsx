import React, { useState } from "react";
import "./Contact.css"; // Importing styles

const Contact = () => {
	const [selectedService, setSelectedService] = useState("");

	const handleServiceSelection = (service) => {
		setSelectedService(service);
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);

		formData.append("access_key", "40d33411-93ff-469a-bd98-89718a584bdf");

		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);

		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: json,
		}).then((res) => res.json());

		if (res.success) {
			console.log("Success", res);
		} else {
			console.log("Error", res);
		}
	};

	return (
		<section className="contact-section">
			<div className="contact-header">
				<h1>Contact us</h1>
				<h2>&mdash; Have a project?</h2>
			</div>
			<div className="contact-body">
				<div className="service-options">
					<h3>What can we do for you?</h3>
					<div className="service-buttons">
						{["DevOps", "Development", "Other"].map((service) => (
							<button
								key={service}
								className={`service-button ${
									selectedService === service ? "active" : ""
								}`}
								onClick={() => handleServiceSelection(service)}
							>
								{service}
							</button>
						))}
					</div>
				</div>
				<form className="contact-form" onSubmit={onSubmit}>
					<div className="input-group">
						<input
							className="fnt-30"
							name="name"
							type="text"
							placeholder="Your name"
							required
						/>
						<input
							className="fnt-30"
							name="email"
							type="email"
							placeholder="Your email"
							required
						/>
					</div>
					<textarea
						className="fnt-30"
						name="message"
						placeholder="Project details"
						rows="5"
						required
					></textarea>
					<button type="submit" className="submit-button">
						Send request
					</button>
				</form>
				<div className="contact-info">
					<p>
						Tell us about your vision: what challenges are you
						facing? What are your goals and expectations? What would
						success look like and how much are you planning to spend
						to get there?
					</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
