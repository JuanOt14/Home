import "./index.css";

import logoLight from '../assets/Otech-logo-lg.svg'
import logoDark from '../assets/Otech-logo-dr.svg'
import profilePic from '../assets/1.png'
import webDraw from '../assets/undraw_online_stats_0g94.svg'
import webDevelop from '../assets/undraw_building_websites_i78t.svg'
import webDevice from '../assets/undraw_web_devices_re_m8sc.svg'
import webBuilder from '../assets/undraw_website_builder_re_ii6e.svg'
import instagram from '../assets/icons8-insta-50.png'
import linkedin from '../assets/icons8-linkedin-50.png'
import github from '../assets/icons8-github-48.png'

function Index() {
    return (
    <div className="index-root">
        <section className="index-header">
            <img alt="Logo" src={logoDark} />
            <div className="index-header-nav">
                <a href="#index-main">
                    <label>Home</label>
                </a>
                <a href="#index-personal-info">
                    <label>About me</label>
                </a>
                <a href="#index-mywork-section">
                    <label>Services</label>
                </a>
                <a href="#index-portfolio">
                    <label>Portfolio</label>
                </a>
            </div>
            <button><strong>Hire Me</strong></button>
        </section>
        <section className="index-main" id="index-main">
            <div className="index-main-info">
                <h3>Hi my name is</h3>
                <h1>Juan Fernando Otero Garcia</h1>
                <h2>I build things for the web</h2>
                <p>
                    Welcome to my portfolio! Here you can explore my projects and see my
                    skills as a Front-end developer with a degree in Multimedia
                    Engineering. I’m passionate about creating engaging, user-friendly
                    websites that are also visually stunning and perfectly responsive.
                    Let’s collaborate to bring your digital vision to life!
                </p>
                <button>Get My CV</button>
            </div>
            <div className="index-main-img">
                <img alt="Main Image" src={profilePic} />
            </div>
        </section>
        <section className="index-personal-info" id="index-personal-info">
            <h2 className="section-title">About Me</h2>
            <div className="line"></div>
            <div className="index-personal-info-detail">
                <img alt="Profile Photo" src={webDraw} />
                <div className="index-personal-info-detail-text">
                    <h3>Front-end Developer with a Creative Edge</h3>
                    <div className="line"></div>
                    <p>
                    I’m a Front-end Developer with a passion for creative problem
                    solving and a keen eye for design. With my degree in Multimedia
                    Engineering, I have a solid foundation in both programming and
                    design principles. I specialize in responsive web design,
                    interactive UI development, and cross-browser compatibility. My
                    goal is to create beautiful, engaging, and user-friendly websites
                    that exceed your expectations.
                    </p>
                </div>
            </div>
        </section>
        <section className="index-mywork-section" id="index-mywork-section">
            <h2 className="section-title">What Sevices I’m providing</h2>
            <div className="line"></div>
            <div className="index-mywork-services">
                <div className="index-mywork-services-card">
                    <img alt="Service Image" src={webDevice} />
                    <div className="index-mywork-services-card-text">
                        <h3>Responsive Web Design</h3>
                        <p>
                            Get a unique, visually stunning, and user-friendly website with
                            my responsive web design services.
                        </p>
                    </div>
                </div>
                <div className="index-mywork-services-card">
                    <img alt="Service Image" src={webBuilder} />
                    <div className="index-mywork-services-card-text">
                        <h3>Interactive UI Development</h3>
                        <p>
                            Make your website stand out with my interactive UI development
                            services.
                        </p>
                    </div>
                </div>
                <div className="index-mywork-services-card">
                    <img alt="Service Image" src={webDevelop} />
                    <div className="index-mywork-services-card-text">
                        <h3>Cross-browser Compatibility</h3>
                        <p>
                            Ensure a seamless user experience with my cross-browser
                            compatibility services.
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="section-title">Work Experience</h2>
            <div className="line"></div>
            <div className="index-work-experience">
                <div className="index-work-experience-card">
                    <h3>Frontend Developer</h3>
                    <p>
                    As a Front-end Developer, I create stunning and responsive
                    websites using the latest technologies and design principles. My
                    expertise in HTML, CSS, JavaScript, and jQuery ensures that your
                    website is visually stunning, fast, and user-friendly.
                    </p>
                    <div className="progress-bar-back"><div className="progress-bar" id="frontend"></div></div>
                </div>
                <div className="index-work-experience-card">
                    <h3>UI/UX Design</h3>
                    <p>
                    I specialize in UI/UX design, creating visually stunning and
                    interactive user interfaces that are intuitive and engaging. With
                    my keen eye for design, I ensure that your website is not only
                    functional but also aesthetically pleasing, with a focus on brand
                    consistency and user experience.
                    </p>
                    <div className="progress-bar-back"><div className="progress-bar" id="ui-ux"></div></div>
                </div>
                <div className="index-work-experience-card">
                    <h3>Multimedia Engineering</h3>
                    <p>
                    With my degree in Multimedia Engineering, I have a solid
                    foundation in both programming and design principles. This enables
                    me to create engaging and interactive websites that are both
                    visually stunning and technically sound.
                    </p>
                    <div className="progress-bar-back"><div className="progress-bar" id="multimedia"></div></div>
                </div>
            </div>
            <h2 className="section-title" id="index-portfolio">My Portfolio</h2>
            <div className="line"></div>
            <div className="index-portfolio">
                <a href="/restaurant">
                    <div className="index-project-card restaurant">
                        <h3>
                            Restaurant Website
                        </h3>
                    </div>
                </a>
                <a href="/weatherapp">
                    <div className="index-project-card">
                        weatherapp
                    </div>
                </a>
            </div>
        </section>
        <section className="index-footpage">
            <div className='index-footpage-social'>
                <a href="https://www.linkedin.com/in/juan-fernando-otero-82a4451ab/"><img alt="Linkedin Logo" src={linkedin}/></a>
                <a href="https://github.com/JuanOt14"><img alt="GitHub Logo" src={github}/></a>
                <a href="https://www.instagram.com/juan_ot14/"><img alt="Instagram Logo" src={instagram}/></a>
            </div>
            <img alt="Logo" src={logoLight} />
            <p>Juanfer1420@gmail.com</p>
        </section>
    </div>
    );
}

export default Index;
