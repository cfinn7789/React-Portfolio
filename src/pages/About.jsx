import me from '../../images/Snapchat-1705161328.jpg';

export default function About() {
    return (
      <div>
        <h1 className="title">Chelsey Finn</h1>
        <figure class="image">
          <img src={me}></img>
        </figure>
        <p>
          Hello. I'm Chelsey, a 23-year old full-stack developer. Welcome to my page!
        </p>
      </div>
    );
  }