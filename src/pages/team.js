import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./team.module.css"

const teamMembers = [
  {
    name: "Jabari Martin",
    role: "Founder & CEO",
    bio: "Jabari has spent 15 years as a NASM-certified Personal Trainer and Corrective Movement Specialist, working with everyone from everyday gym-goers to professional athletes \u2014 including NBA Champion Shaun Livingston. Training 100+ clients per week across multiple gyms and studios gave him a front-row seat to how pervasive knee pain really is, and how poorly it\u2019s served by the current healthcare system. A former D1 football player and track athlete, he\u2019s experienced the frustration of joint pain firsthand. Jabari is also a Registered Dietitian, founder of GRIT Superfoods, and a software engineer with 13 years of development experience \u2014 a rare combination that makes him uniquely positioned to build neez.",
  },
  {
    name: "Bryn Murray",
    role: "Co-Founder & Head of Data",
    bio: "Bryn brings over a decade of experience turning data into products that work. Across nonprofit, private, and government sectors, she\u2019s specialized in productionizing machine learning models, building analytics infrastructure, and helping teams make better decisions with data. At neez, she leads operations, product strategy, and the data pipeline that powers the app\u2019s intelligence. Bryn holds an MPP from the University of Chicago Harris School of Public Policy.",
  },
  {
    name: "Laura Pierczynski",
    role: "Co-Founder, Head Designer",
    bio: "Laura is a design leader with 20 years of UX/UI experience building products people love to use. She specializes in unifying design language across products and leading teams to create AI-powered experiences that feel intuitive rather than intimidating. Her design thinking approach puts users at the center of every decision, ensuring neez feels approachable from the very first interaction. Laura holds an MFA from the Academy of Art University.",
  },
  {
    name: "Dr. David S.H. Chang, MD",
    role: "Medical Advisor",
    bio: "Dr. Chang is a board-certified orthopedic surgeon specializing in sports medicine, with a deep commitment to conservative care and injury prevention \u2014 a philosophy that aligns directly with neez\u2019s mission. A Stanford graduate who completed his orthopedic surgery training at Wake Forest, he has covered professional teams including the Oakland Ballers, U.S. Soccer National Teams, and MLS clubs. He is the founder of Bay Area Sports Orthopaedics (BASO) and brings clinical rigor and credibility to every recommendation neez delivers.",
  },
  {
    name: "Juliana Evans-Anfom",
    role: "Physical Therapy Advisor",
    bio: "Juliana is a physical therapist who brings the clinical perspective that keeps neez grounded in real patient needs. With a DPT from UC San Francisco, she understands the pain points \u2014 both literal and logistical \u2014 that clinicians and patients face with digital health tools. Her background in iterative treatment planning and user-centered care helps neez bridge the gap between what technology can do and what people in pain actually need.",
  },
  {
    name: "Wolfram Arnold",
    role: "AI / Engineering Advisor",
    bio: "Wolfram is a Staff ML Systems Engineer at Cruise, where he builds vector search infrastructure for autonomous vehicles. He previously spent nearly a decade at Twitter, rising to Staff Engineer and Senior ML Engineering Manager \u2014 founding the Feature Management team within Twitter\u2019s Cortex ML Platform and building the company\u2019s Feature Store from the ground up. With a Ph.D. in Physics from the University of Oregon and experience spanning Los Alamos National Laboratory, startup CTO roles, and large-scale production ML systems, he brings the infrastructure and engineering rigor that neez\u2019s AI decision engine needs to scale.",
  },
]

const TeamPage = () => (
  <Layout>
    <Seo
      title="Team"
      description="An orthopedic doctor, physical therapist, personal trainer, data scientist, and a designer building AI-powered knee care."
    />

    <section className={styles.teamHero}>
      <div className="container">
        <h1 className={styles.teamHeading}>Our Team</h1>
        <p className={styles.teamSubheading}>
          Trainers, data scientists, designers, doctors, and therapists
          — united by a mission to make joint care accessible to everyone.
        </p>
      </div>
    </section>

    <section className={styles.teamSection}>
      <div className="container">
        <div className={styles.teamGrid}>
          {/* Jabari Martin */}
          <div className={styles.teamCard}>
            <div className={styles.imageWrapper}>
              <StaticImage
                src="../images/team/Jabari.jpg"
                alt="Jabari Martin"
                placeholder="blurred"
                layout="constrained"
                width={120}
                height={150}
                className={styles.teamImage}
                imgClassName={styles.teamImageInner}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.memberName}>{teamMembers[0].name}</h2>
              <p className={styles.memberRole}>{teamMembers[0].role}</p>
              <p className={styles.memberBio}>{teamMembers[0].bio}</p>
            </div>
          </div>

          {/* Bryn Murray */}
          <div className={styles.teamCard}>
            <div className={styles.imageWrapper}>
              <StaticImage
                src="../images/team/Bryn.jpg"
                alt="Bryn Murray"
                placeholder="blurred"
                layout="constrained"
                width={120}
                height={150}
                className={styles.teamImage}
                imgClassName={styles.teamImageInner}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.memberName}>{teamMembers[1].name}</h2>
              <p className={styles.memberRole}>{teamMembers[1].role}</p>
              <p className={styles.memberBio}>{teamMembers[1].bio}</p>
            </div>
          </div>

          {/* Laura Pierczynski */}
          <div className={styles.teamCard}>
            <div className={styles.imageWrapper}>
              <StaticImage
                src="../images/team/Laura.jpg"
                alt="Laura Pierczynski"
                placeholder="blurred"
                layout="constrained"
                width={120}
                height={150}
                className={styles.teamImage}
                imgClassName={styles.teamImageInner}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.memberName}>{teamMembers[2].name}</h2>
              <p className={styles.memberRole}>{teamMembers[2].role}</p>
              <p className={styles.memberBio}>{teamMembers[2].bio}</p>
            </div>
          </div>

          {/* Dr. David S.H. Chang */}
          <div className={styles.teamCard}>
            <div className={styles.imageWrapper}>
              <StaticImage
                src="../images/team/DrChang.jpg"
                alt="Dr. David S.H. Chang"
                placeholder="blurred"
                layout="constrained"
                width={120}
                height={150}
                className={styles.teamImage}
                imgClassName={styles.teamImageInner}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.memberName}>{teamMembers[3].name}</h2>
              <p className={styles.memberRole}>{teamMembers[3].role}</p>
              <p className={styles.memberBio}>{teamMembers[3].bio}</p>
            </div>
          </div>

          {/* Juliana Evans-Anfom */}
          <div className={styles.teamCard}>
            <div className={styles.imageWrapper}>
              <StaticImage
                src="../images/team/Jules.jpg"
                alt="Juliana Evans-Anfom"
                placeholder="blurred"
                layout="constrained"
                width={120}
                height={150}
                className={styles.teamImage}
                imgClassName={styles.teamImageInner}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.memberName}>{teamMembers[4].name}</h2>
              <p className={styles.memberRole}>{teamMembers[4].role}</p>
              <p className={styles.memberBio}>{teamMembers[4].bio}</p>
            </div>
          </div>

          {/* Wolfram Arnold — uncomment when ready to publish
          <div className={styles.teamCard}>
            <div className={styles.imageWrapper}>
              <StaticImage
                src="../images/team/Wolfram.jpg"
                alt="Wolfram Arnold"
                placeholder="blurred"
                layout="constrained"
                width={120}
                height={150}
                className={styles.teamImage}
                imgClassName={styles.teamImageInner}
              />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.memberName}>{teamMembers[5].name}</h2>
              <p className={styles.memberRole}>{teamMembers[5].role}</p>
              <p className={styles.memberBio}>{teamMembers[5].bio}</p>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  </Layout>
)

export default TeamPage
