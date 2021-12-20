import React from "react";
import Header from "./common/topbar";
import Sidebar from "./common/sidebar";

import DownArrow from "../assets/images/downarrow.svg";
import SearchIcon from "../assets/images/searchicon.svg";
import MobileLogo from "../assets/images/mobilelogo.svg";


class Help extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			helpNo: ''
		};
	}

	render() {
		const { helpNo } = this.state
		return (
			<div>
				<section className="container-fluid">
					{/* header Starts here */}
					<Header  history={this.props.history} />
					<div className="row">
						<Sidebar history={this.props.history} />
						{/* Mobile menu overlay Starts here */}
						
						{/* Mobile menu overlay Ends here */}
						{/* Left Wrap Ends here */}
						<div className="col-lg-9 col-md-9 col-12 heigthfixing">
							<div className="row">
								<div className="col-12 mt-4">
									<div className="text-center">
										<h3>How can we help you?</h3>
									</div>
									<div className="text-center">
										<div className="search-wrap h-25 refercontent">
											<div className="form-group position-relative ">
												<input
													type="text"
													className="form-control searchinput"
													name
													placeholder="Search..."
												/>
												<img
													src={SearchIcon}
													className="searchicon "
													alt="icon"
												/>
											</div>
										</div>
										<h3 className="text-center w-100">Getting Started</h3>
										<p />

									</div>
									<div className={`faq ${helpNo === 1 && 'active'}`}>
										<h3 className="faq-title text-bold">
											Choose languages
										</h3>
										<div className="faq-text">


											<div className="snippet-hdr">
												<label>English</label>
												<div className=" hdr-rigth">
												<input type="radio" className="helpradio" name="fav_language"  />
												</div>
											</div>

										

					
												
											<div className="snippet-hdr">
												<label>French</label>
												<div className=" hdr-rigth">
												<input type="radio" className="helpradio" name="fav_language"  />
												</div>
											</div>
											
											<div className="text-right mt-4 mb-4">
												<button className="btn btn-green btnpadding ">Save</button>
											</div>
										</div>
										<button type='button' className="faq-toggle" onClick={() => this.setState({ helpNo: helpNo !== 1 ? 1 : '' })}>
											<img src={DownArrow} alt="icon" />
										</button>
									</div>
									<div className={`faq ${helpNo === 2 && 'active'}`}>
										<h3 className="faq-title text-bold">Policies</h3>
										<div className="faq-text">
											<h3 className="faq-title text-bold">Policies 1</h3>
											<p>
												{" "}
												Composer est un outil mis en place pour la communauté
												des développeurs de PHP. A l’image de « npm » pour
												nodejs ou « bundler » pour ruby, il sert de gestionnaire
												de dépendance entre applications et librairies. De façon
												plus précise, Composer permet de gérer pour chaque
												projet, la liste des modules et bibliothèques
												nécessaires à son fonctionnement ainsi que leurs
												versions. Il est utilisable via la console en ligne de
												commande. De plus, il permet de mettre en place un
												système d’autoload pour les bibliothèques compatibles.
											</p>
											<h3 className="faq-title text-bold">Policies 2</h3>
											<p>
												{" "}
												Composer est un outil mis en place pour la communauté
												des développeurs de PHP. A l’image de « npm » pour
												nodejs ou « bundler » pour ruby, il sert de gestionnaire
												de dépendance entre applications et librairies. De façon
												plus précise, Composer permet de gérer pour chaque
												projet, la liste des modules et bibliothèques
												nécessaires à son fonctionnement ainsi que leurs
												versions. Il est utilisable via la console en ligne de
												commande. De plus, il permet de mettre en place un
												système d’autoload pour les bibliothèques compatibles.
											</p>
											<h3 className="faq-title text-bold">Policies 3</h3>
											<p>
												{" "}
												Composer est un outil mis en place pour la communauté
												des développeurs de PHP. A l’image de « npm » pour
												nodejs ou « bundler » pour ruby, il sert de gestionnaire
												de dépendance entre applications et librairies. De façon
												plus précise, Composer permet de gérer pour chaque
												projet, la liste des modules et bibliothèques
												nécessaires à son fonctionnement ainsi que leurs
												versions. Il est utilisable via la console en ligne de
												commande. De plus, il permet de mettre en place un
												système d’autoload pour les bibliothèques compatibles.
											</p>
										</div>
										<button className="faq-toggle" onClick={() => this.setState({ helpNo: helpNo !== 2 ? 2 : '' })}>
											<img src={DownArrow} alt="icon" />
										</button>
									</div>
									<div className={`faq ${helpNo === 3 && 'active'}`}>
										<h3 className="faq-title text-bold">Community rules</h3>
										<p className="faq-text">
											Avec la technologie Docker, vous pouvez traiter les
											conteneurs comme des machines virtuelles très légères et
											modulaires. En outre, ces conteneurs vous offrent une
											grande flexibilité : vous pouvez les créer, déployer,
											copier et déplacer d'un environnement à un autre, ce qui
											vous permet d'optimiser vos applications pour le cloud.
										</p>
										<button className="faq-toggle" onClick={() => this.setState({ helpNo: helpNo !== 3 ? 3 : '' })}>
											<img src={DownArrow} alt="icon" />
										</button>
									</div>
									<div className={`faq ${helpNo === 4 && 'active'}`}>
										<h3 className="faq-title text-bold">About</h3>
										<div className="faq-text">
											<div className="text-center">
												<img
													src={MobileLogo}
													className="text-center"
													alt="icon"
												/>
											</div>
											<p className="mt-4">
												Amet minim mollit non deserunt ullamco est sit aliqua
												dolor do amet sint. Velit officia consequat duis enim
												velit mollit. Exercitation veniam consequat sunt nostrud
												amet. Amet minim mollit non deserunt ullamco est sit
												aliqua dolor do amet sint. Velit officia consequat duis
												enim velit mollit. Exercitation veniam consequat sunt
												nostrud amet. Amet minim mollit non deserunt ullamco est
												sit aAmet minim mollit non deserunt ullamco est sit
												aliqua dolor do amet sint. Velit officia consequat duis
												enim velit mollit. Exercitation veniam consequat sunt
												nostrud amet. Amet minim mollit non deserunt ullamco est
												sit aliqua dolor do amet sint. Velit officia consequat
												duis enim velit mollit. Exercitation veniam consequat
												sunt nostrud amet. Amet minim mollit non deserunt
												ullamco est sit aliqua dolor do amet sint. officia
												consequat duis enim velit mollit. Exercitation veniam
												consequat sunt nostrud amet.Amet minim mollit non
												deserunt ullamco est sit aliqua dolor do amet sint.
												Velit officia consequat duis enim velit mollit.
												Exercitation veniam consequat sunt nostrud amet. Amet
												minim mollit non deserunt ullamco est sit aliqua dolor
												do amet sint. Velit officia consequat duis enim velit
												mollit. Exercitation veniam consequat sunt nostrud amet.
												Amet minim mollit non deserunt ullamco est sit aliqua
												dolor do amet sint. Velit officia consequat duis enim
												velit mollit. Exercitation veniam consequat sunt nostrud
												amet.Amet minim mollit non deserunt ullamco est sit
												aliqua dolor do amet sint. Velit officia consequat duis
												enim velit mollit. Exercitation veniam consequat sunt
												nostrud amet. Amet minim mollit non deserunt ullamco est
												sit aliqua dolor do amet sint. Velit officia consequat
												duis enim velit mollit. Exercitation veniam consequat
												sunt nostrud amet. Amet minim mollit non deserunt
												ullamco est sit aliqua dolor do amet sint. Velit officia
												consequat duis enim velit mollit. Exercitation veniam
												consequat sunt nostrud amet.liqua dolor do amet sint.
												Velit officia consequat duis enim velit mollit.
												Exercitation veniam consequat sunt nostrud amet.
											</p>
										</div>
										<button className="faq-toggle" onClick={() => this.setState({ helpNo: helpNo !== 4 ? 4 : '' })}>
											<img src={DownArrow} alt="icon" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* MainSection Ends here */}
				</section>
			</div>
		);
	}
}

export default Help;
