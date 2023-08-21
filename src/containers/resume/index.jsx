import React from 'react';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeaderContent from '../../components/pageHeaderContent';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { data } from './utils';
import './styles.css';
import {MdWork} from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';
const Resume = () => {
    return (
        <section id='resume' className='resume'>

            <PageHeaderContent
                headerText="My Resume"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className='timeline'>
                <div className='timeline__experience'>
                    <h3 className='timeline__experience__header-text'>
                        Experience
                    </h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor='#ffdd40'
                    >
                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className='timeline__experience__vertical-timeline-element'
                                    contentStyle = {{
                                        background: 'none',
                                        color:'white',
                                        border:'1.5px solid #ffdd40'
                                    }}
                                    // date = "2021-present"
                                    icon = {<MdWork/>}
                                    iconStyle={{
                                        background: '#181818',
                                        color:'#ffdd40',
                                    }}
                                >
                                    <div className='vertical-timeline-element-title-wrapper'>
                                        <h3 className='vertical-timeline-element-title'>
                                            {item.title}
                                        </h3>
                                        <h4 className='vertical-timeline-element-subtitle'>
                                            {item.subTitle}
                                        </h4>
                                        

                                    </div>
                                    <p className='paragraph'> {item.description}</p>

                                </VerticalTimelineElement>
                            ))
                        }

                    </VerticalTimeline>
                </div>
                <div className='timeline__education'>
                    <h3 className='timeline__education__header-text'>
                        Education
                    </h3>
                    <VerticalTimeline
                        layout={'1-column'}
                        lineColor='#ffdd40'
                    >
                        {
                            data.education.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className='timeline__experience__vertical-timeline-element'
                                    contentStyle = {{
                                        background: 'none',
                                        color:'white',
                                        border:'1.5px solid #ffdd40'
                                    }}
                                    // date = "2021-present"
                                    icon = {<MdWork/>}
                                    iconStyle={{
                                        background: '#181818',
                                        color:'#ffdd40',
                                    }}
                                >
                                    <div className='vertical-timeline-element-title-wrapper'>
                                        <h3 className='vertical-timeline-element-title'>
                                            {item.title}
                                        </h3>
                                        <h4 className='vertical-timeline-element-subtitle'>
                                            {item.subTitle}
                                        </h4>
                                       

                                    </div>
                                    <p className='paragraph'> {item.description}</p>

                                </VerticalTimelineElement>
                            ))
                        }
                     </VerticalTimeline>
                </div>

            </div>

        </section>
    )
}
export default Resume;