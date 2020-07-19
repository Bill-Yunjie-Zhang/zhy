import homePic from '../pics/routePic/homePic.png'
import descriptionPic from "../pics/routePic/descriptionPic.jpg"
import modellingPic from "../pics/routePic/modellingPic.jpg"
import designPic from "../pics/routePic/designPic.jpg"
import safetyPic from "../pics/routePic/safetyPic.jpg"
import labBookPic from "../pics/routePic/labBookPic.jpg"
import demonstrationPic from "../pics/routePic/demonstrationPic.jpg"
import resultsPic from "../pics/routePic/resultsPic.jpg"
import teamPic from "../pics/routePic/teamPic.jpg"
import attributionPic from "../pics/routePic/attributionPic.jpg"
import partsOverviewPic from "../pics/routePic/partsOverviewPic.jpg"
import basicPartsPic from "../pics/routePic/basicPartsPic.jpg"
import humanPracticesPic from "../pics/routePic/humanPracticesPic.jpg"
import outreachAndEngagementPic from "../pics/routePic/outreachAndEngagementPic.jpg"
import medalsAndAwardsPic from "../pics/routePic/medalsAndAwardsPic.jpg"
import collaborationsPic from "../pics/routePic/collaborationsPic.jpg"
import protocolsPic from "../pics/routePic/protocolsPic.jpg"

import HomePage from '../../pages/HomePage'
import CollaborationsPage from "../../pages/CollaborationsPage"
import MedalsAndAwardsPage from "../../pages/MedalsAndAwardsPage"
import HumanPracticesPage from "../../pages/humanPractices/HumanPracticesPage"
import BasicPartsPage from "../../pages/parts/BasicPartsPage"
import PartsOverviewPage from "../../pages/parts/PartsOverviewPage"
import AttributionPage from "../../pages/people/AttributionPage"
import TeamPage from "../../pages/people/TeamPage"
import DemonstrationPage from "../../pages/projects/DemonstrationPage"
import DescriptionPage from "../../pages/projects/DescriptionPage"
import DesignPage from "../../pages/projects/DesignPage"
import LabBookPage from "../../pages/projects/LabBookPage"
import ModellingPage from "../../pages/projects/ModellingPage"
import ResultsPage from "../../pages/projects/ResultsPage"
import SafetyPage from "../../pages/projects/SafetyPage"
import OutreachAndEngagementPage from '../../pages/humanPractices/OurtreachAndEngagementPage'
import ProtocolsPage from '../../pages/projects/ProtocolsPage'

const routes = {
    home: [{
        title: "Home",
        img: homePic,
        route: "/",
        component: HomePage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }],

    projects: [{
        title: "Description",
        img: descriptionPic,
        route: "/Description",
        component: DescriptionPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }, {
        title: "Protocols",
        img: protocolsPic,
        route: "/Protocols",
        component: ProtocolsPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }, {
        title: "Modelling",
        img: modellingPic,
        route: "/Modelling",
        component: ModellingPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }, {
        title: "Design",
        img: designPic,
        route: "/Design",
        component: DesignPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }, {
        title: "Safety",
        img: safetyPic,
        route: "/Safety",
        component: SafetyPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }, {
        title: "Lab-Book",
        img: labBookPic,
        route: "/Lab-Book",
        component: LabBookPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }, {
        title: "Demonstration",
        img: demonstrationPic,
        route: "/Demonstration",
        component: DemonstrationPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }, {
        title: "Results",
        img: resultsPic,
        route: "/Results",
        component: ResultsPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }],

    people: [{
        title: "Team",
        img: teamPic,
        route: "/Team",
        component: TeamPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }, {
        title: "Attribution",
        img: attributionPic,
        route: "/Attribution",
        component: AttributionPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }],

    parts: [{
        title: "Parts Overview",
        img: partsOverviewPic,
        route: "/Parts-Overview",
        component: PartsOverviewPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }, {
        title: "Basic Parts",
        img: basicPartsPic,
        route: "/Basic-Parts",
        component: BasicPartsPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }],

    human_practices: [{
        title: "Human Practices",
        img: humanPracticesPic,
        route: "/Human-Practices",
        component: HumanPracticesPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }, {
        title: "Outreach and Engagement",
        img: outreachAndEngagementPic,
        route: "/Outreach-and-Engagement",
        component: OutreachAndEngagementPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }],

    medals_and_awards: [{
        title: "Medals and Awards",
        img: medalsAndAwardsPic,
        route: "/Medals-and-Awards",
        component: MedalsAndAwardsPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }],

    collaborations: [{
        title: "Collaborations",
        img: collaborationsPic,
        route: "/Collaborations",
        component: CollaborationsPage,
        teaser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis imperdiet felis in semper. Sed eu purus ut nisi rutrum aliquet. Donec aliquet nec magna sit amet congue. "
    }]
}

export default routes