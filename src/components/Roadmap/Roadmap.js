import React from 'react';
import '../Roadmap/Roadmap.scss'

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


function Roadmap() {
  return (
    <div className="timeline-content" id='roadmap'>
      <p className='roadmap__title'>Roadmap</p>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          //contentArrowStyle={{ borderRight: '7px solid  rgb(252, 163, 17)' }}
          iconStyle={{ background: 'rgb(252, 163, 17)', color: '#fff' }}

        >
          <h3 className="vertical-timeline-element-title">PRE-MINT</h3>
          <h4 className="vertical-timeline-element-subtitle">Marketing</h4>
          <p>
            Discord, Twitter and Website launch. Art sneak peek.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(252, 163, 17)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Marketing</h3>
          <p>
            Marketing campaign to publicize the project. Collaborations with other builders in the community.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(252, 163, 17)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">NFTMarketCap</h3>
          <p>
            Dev team 1 will showcase developments on the NFTMarketCap website.
            We will work with two-week sprints, there will be updates every Monday.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: 'rgb(252, 163, 17)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Launch DAY</h3>
          <p>
            Launch Ant NFTs on our own mint platform.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(252, 163, 17)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">POST-MINT</h3>
          <p>
            Create the DAO. Create a private group for holders who put the PFP on Twitter.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(252, 163, 17)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Social Network</h3>
          <p>
            Dev team 2 will start with the development of the social network. We will work with two-week sprints, there will be updates every Monday.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(252, 163, 17)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">$ANT</h3>
          <p>
            Staking platform and token launch.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(252, 163, 17)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Reward supporters</h3>
          <p>
            First batch of rewards to holders with PFP of our collection on Twitter
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          iconStyle={{ background: 'rgb(252, 163, 17)', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Hackathon</h3>
          <p>
            Launch of the first developer competition. It will consist of creating a DApp, with or without theme. There will be great prizes in SOL for the winners. 
            <p>If we believe that the project has a future, we will offer to work in our team and provide all the help to launch the project.</p>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  );
}

export default Roadmap;