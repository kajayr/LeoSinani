import React from 'react';
import './side.css';
import Screen from './screen/screen';
import './App.css';
import LeoPic from './img/LeoSinani.jpg';
import {Skills} from './screen/skills';
import {Softskills} from './screen/softSkills';
import {Education} from './screen/education';
import {Links} from './screen/links';
import {Contact} from './screen/contact';
import {Start} from './screen/start';



class App extends React.Component{
  constructor(props){
      super(props);
      this.about = this.about.bind(this);
      this.skills = this.skills.bind(this);
      this.softSkills = this.softSkills.bind(this);
      this.education = this.education.bind(this);
      this.links = this.links.bind(this);
      this.contact = this.contact.bind(this);
      this.qoutes = this.qoutes.bind(this);
      this.state = {
        list : [],
        title: '',
        styling: {},
        PicDisplay: 'none',
        text: '',
        img: '',
        hardSkilldisplay: 'none',
        softSkilldisplay:'none',
        icons: '',
        addClassPic: '',
        addClassText: '',
        eduDisplay: 'none',
        linksDisplay: 'none',
        contactDisplay: 'none',
        displayText: 'none',
        welcomeDisplay: 'inline-block'
      }
  }
  // componentDidMount(){
  //   fetch("https://api.myjson.com/bins/1fvox9")
  //   .then(convert => convert.json())
  //   .then(data => this.setState({list: data}))
  // }

  about(){
    this.setState({styling: {backgroundColor:"#4baea0", color:'white'},
    PicDisplay: 'inline-block',
    text:"I've experience to contribute to long-range operational objectives in a Front-End Web Developer role. As such, I have a long-standing passion for web development and building websites since the age of 16; extensive history of designing websites in order to gain experience with a passion for a healthy lifestyle. I have proven success working with multiple tools to deliver seamless and error-free code, programming in HTML, CSS, JavaScript, React, Node.js, and developing user-friendly web pages and applications. I'm an effective communicator and collaborator with multidisciplinary teams, including back-end developers and web designers. I'm adept at incorporating user feedback into front-end designs, working with multiple teams, and delivering high quality results. I am an energetic and collaborative team player and individual contributor with a continuously positive energy and mindset.",
    img: LeoPic,
    displayText:'inline-block',
    welcomeDisplay: 'none'
    })
  }
  skills(){
   this.setState({styling:{backgroundColor:"#1fab89", color:'white' },
    hardSkilldisplay:'inline-block',
    addClassPic: 'pic2',
    welcomeDisplay: 'none'
    })
  }

  softSkills(){
    this.setState({styling:{backgroundColor:"#207561", color:'white' },
    softSkilldisplay:'inline-block',
    addClassText: 'p2',
    welcomeDisplay: 'none'
     }) 
   }

   education(){
    this.setState({styling:{backgroundColor:"#589167", color:'white' },
    eduDisplay:'inline-block',
    welcomeDisplay: 'none'
     }) 
   }
   links(){
    this.setState({styling:{backgroundColor:"#41aaa8", color:'white' },
    linksDisplay:'inline-block',
    welcomeDisplay: 'none'
     }) 
   }
   contact(){
    this.setState({styling:{backgroundColor:"#226b80", color:'white' },
    contactDisplay:'inline-block',
    welcomeDisplay: 'none'
     }) 
   }
   qoutes(){
    this.setState({
      PicDisplay: 'none',
      eduDisplay: 'none',
      linksDisplay: 'none',
      contactDisplay: 'none',
      displayText: 'none',
      hardSkilldisplay: 'none',
      softSkilldisplay:'none'
    })
    {
      //this.state.list.map(data => (<h1 key={data.id}>{data.name}</h1>))
      
    }
    // const randomNum = Math.floor(Math.random() * 10);

    // const dataApi = this.state.list;
     
   }
  render(){
    
return(
  <div className="App">
    
  <div className='bigScreen'>
  <div className='side'>
            <button onClick={this.about}  className='btn'>About Me</button>
            <button onClick={this.skills} className='btn'>Hard Skills</button>
            <button onClick={this.softSkills} className='btn'>Soft Skills</button>
            <button onClick={this.education} className='btn'>Education</button>
            <button onClick={this.links} className='btn'>Links</button>
            <button onClick={this.contact} className='btn'>Contact me</button>
            {/* <button onClick={this.qoutes} className='btn'>Read a few qoutes</button> */}
        </div>
        <Screen s={this.state.styling} text={this.state.text} img={this.state.img} display={this.state.PicDisplay} addClassPic={this.state.addClassPic} addClassText={this.state.addClassText} displayText={this.state.displayText}/>
        <Skills display={this.state.hardSkilldisplay} />
        <Softskills  display={this.state.softSkilldisplay} /> 
        <Education display={this.state.eduDisplay}/>
        <Links display={this.state.linksDisplay}/>
        <Contact display={this.state.contactDisplay}/>
        <Start display={this.state.welcomeDisplay}/> 
</div>
<div className='footer'>
  Designed by Leo Sinani 
</div>

 </div>
)
  }
}

export default App;
