import { Link, useLocation } from 'react-router-dom';

function Project() {
  const currentPage = useLocation().pathname;

  return (
    <div>
        <div className="image-container">
            <div className="image-box">
                <img src="./images/SoundQuest.png" width="50%"></img>
                <div className="bottom-left">
                <a className="project" href="https://holdenmg.github.io/sound-quest/">Sound Quest</a>
                </div>
            </div>

            <div className="image-box">
                <img src="./images/02-portfolio-1.png" width="50%"></img>
                <div className="bottom-left">
                <a className="project" href="https://shrouded-springs-93967-4ef63984c8fc.herokuapp.com/">An App Called Quest</a>
                </div>
            </div>

            <div className="image-box">
                <img src="./images/localhost_3000_.png" width="50%"></img>
                <div className="bottom-left">
                <a className="project" href="https://holdenmg.github.io/sound-quest/">IGR</a>
                </div>
            </div>

            <div className="image-box">
                <img src="./images/notetaker.png" width="50%"></img>
                <div className="bottom-left">
                <a className="project" href="https://holdenmg.github.io/sound-quest/">Note Taker</a>
                </div>
            </div>

            <div className="image-box">
                <img src="./images/image.jpg" width="50%"></img>
                <div className="bottom-left">
                <a className="project" href="https://holdenmg.github.io/sound-quest/">Placeholder</a>
                </div>
            </div>

            <div className="image-box">
                <img src="./images/image.jpg" width="50%"></img>
                <div className="bottom-left">
                <a className="project" href="https://holdenmg.github.io/sound-quest/">Placeholder</a>
                </div>
            </div>

        </div>
    </div>
  );
}

export default Project;