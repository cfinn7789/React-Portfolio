const resume = 'https://1drv.ms/w/s!Al49vfnHnIchgoor5RBFJCCpxWcifA?e=YbWFGh';

export default function Resume() {
    return (
      <div>
        <h1 className="title">Resume</h1>
        <a href={resume} rel="doc">Resume</a>
        <img src="./images/old-resume.png" className="image"></img>
        <h1 className="title">Front-end Proficiencies</h1>
        <p>
          HTML, CSS, JavaScript. Can use React and Handlebars.
        </p>
        <h1 className="title">Back-end Proficiencies</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Esse sapiente veritatis cumque? At corrupti, alias minima facilis perferendis 
          tempore praesentium esse quaerat cum soluta laborum asperiores omnis 
          sit, aspernatur molestiae.
        </p>
      </div>
    );
  }