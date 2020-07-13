import pic1 from "../pics/safetyPagePic/1.jpg"
import pic2 from "../pics/safetyPagePic/2.jpg"
import pic3 from "../pics/safetyPagePic/3.jpg"
import pic4 from "../pics/safetyPagePic/4.jpg"
import pic5 from "../pics/safetyPagePic/5.jpg"
import pic6 from "../pics/safetyPagePic/6.jpg"
import pic7 from "../pics/safetyPagePic/7.jpg"
import pic8 from "../pics/safetyPagePic/8.jpg"
import safetyIcon from "../pics/safetyPagePic/Safety-Icon.png"

const safetyPageData = {
    intro: {
        title: "safety wiki",
        image: safetyIcon,
        texts: [
            "When we are doing the project, biosafety always comes first. We believe that It is always harder to keep the safety of the lab than promise, which is why it is necessary to reinforce and familiarize with the safety rules. ",
            "We strictly follow the requirements and guidelines provided by iGEM headquarters. Since we are only in a BSL 1 lab, we will not use pathogenesis, and any microorganisms that belongs to high risk levels. We would also never use parts that are harmful to any animals or our surroundings. ",
            "With procedures regarding sanitization and lab waste processing"
        ]
    },
    main: {
        text: "GUIDELINES IN mOLECULAR BIOLOGY LABORATORIES",
        items: [{
            text: "Bringing stuff in and out: ",
            items: [{
                image: pic1,
                text: "It is not allowed to bring the articles of daily use into the lab unless permitted, and in the same way, experimental tools are not allowed to be brought out of the lab.",
            }, {
                image: pic2,
                text: "Put your cell phone in a special-made bag if you want to bring your cell phone in the lab for the purposes of recording data.",
            }, {
                image: pic3,
                text: "Do not touch anything in non-contaminated area with gloves on",
            }]
        }, {
            text: "Safety rules in the lab: ",
            items: [{
                image: pic4,
                text: "Clothing requirements: ",
                items: [{
                    text: "We are going to be at a Safety Level 1 lab, so a white gown is required for every individual, as well as gloves. Wear a goggle if necessary. ",
                }, {
                    text: "Sandals and slippers are not allowed.",
                }, {
                    text: "If you need to take off the gloves, put the glove in your pocket inside-out.",
                }]
            }, {
                image: pic5,
                text: "Experimental tools and instruments: ",
                items: [{
                    text: "Do not touch any instruments that are not assigned to you without permission.",
                }, {
                    text: "Use a standardized method to hold instruments, for many of them are fragile.",
                }]
            }, {
                image: pic6,
                text: "Experiments Safety: ",
                items: [{
                    text: "Do not attempt to do unauthorized experiments.",
                }, {
                    text: "Never touch electrical wires or devices with hands wet",
                }, {
                    text: "In case of a fire, cut off all power sources and remove flammable substances. Call the police or 119 instantly.",
                }]
            }, {
                image: pic7,
                text: "Things to pay attention to: ",
                items: [{
                    text: "PCR and cells",
                }, {
                    text: "Electrophoresis",
                }, {
                    text: "Proteins, enzymes, and DTT",
                }, {
                    text: "TEMED",
                }, {
                    text: "Trizol",
                }, {
                    text: "DEPC",
                }]
            }, {
                image: pic8,
                text: "In the case of emergency: ",
                items: [{
                    text: "Report to your teacher immediately.",
                }, {
                    text: "Don’t attempt to solve the problem by yourself",
                }]
            }]
        }]
    }
}

export default safetyPageData