import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import './styles.css';
import profile from '../../myImage.jpg';

const personalDetails = [
    {
        label: "Name :",
        value: "Bokka Suresh",
    },
    {
        label: "Age :",
        value: "22",
    },
    {
        label: "Address :",
        value: "3-156A,Kalidindi,Eluru District,521344"
    },
    {
        label: "Email :",
        value: "developer.suresh.2406@gmail.com"
    },
    {
        label: "Contact No :",
        value: "9704979021"
    },
];

const jobSummary = "I am a dedicated and creative Front-End Developer with a strong passion for crafting engaging and intuitive user experiences on the web. With a solid foundation in HTML, CSS, and JavaScript, I bring a unique blend of technical expertise and artistic flair to every project I undertake. In a field that demands continuous growth, I am committed to staying ahead of the curve and embracing challenges as opportunities for innovation. I am excited to be part of a community that shares my enthusiasm for pushing the boundaries of what's possible on the web. Beyond my technical abilities, I am an effective communicator and team player. I understand the importance of active listening, which enables me to grasp project requirements accurately and contribute my insights effectively."

const About = () => {
    return (

        <section id='about' className='about'>

            <PageHeaderContent
                headerText="About Me"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='about__content'>
                <div className='about__content__personalWrapper'>
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateX(-900px)'
                    }}
                    end={{
                        transform: 'translateX(0px)'
                    }}
                >
                    <h3>Front End Developer</h3>
                    <p className='jobPara'>
                        {jobSummary}
                    </p>
                </Animate>
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateX(500px)'
                    }}
                    end={{
                        transform: 'translateX(0px)'
                    }}
                >
                <h3 className='personalInformationHeaderText'>Personal Information</h3>
                <ul>
                    {
                        personalDetails.map((item,i)=>(
                            <li key={i}>
                                <p className='title'>{item.label} &nbsp; {item.value}</p>
                            </li>
                        ))
                    }
                </ul>
                </Animate>
                </div>
                <Animate
                    play
                    duration={1.5}
                    delay={1}
                    start={{
                        transform: 'translateX(600px)'
                    }}
                    end={{
                        transform: 'translateX(0px)'
                    }}
                >
                <div className='about__content__image'>
                    <img src={profile}/>
                </div>
                </Animate>
                

            </div>

        </section>
    )
}
export default About;