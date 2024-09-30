import './Header.css';
function Header() {
	return (
		<div className="header">
			<h2 className=" logo logo-spin">
				<a href="#">Prateek</a>
			</h2>
			<ul>
				<li className="shd">
					<a href="#">About</a>
				</li>
				<li className="shd" >
					<a href="#">Projects</a>
				</li>
				<li className="shd">
					<a href="#">say Hello </a>
				</li>
			</ul>
		</div>
	);
}

export default Header;
