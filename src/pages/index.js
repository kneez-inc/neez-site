import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Clock, Calendar, Users, BarChart } from "react-feather"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className={styles.hero}>
      <div className="container flex flex-end">
        <div className={styles.heroContent + " flex flex-end"}>
            <h1 className={styles.heroTitle}>Move with <span className="text-primary">less pain</span></h1>
            {/* <p className={styles.heroSubtitle}>
              ... with an app so simple even your grandma can use it.
            </p>
            <Link to="#" className="button button-primary">
              GET STARTED
            </Link>
          <div className={styles.heroImage}>
            <StaticImage
              src="../images/squat.jpg"
              alt="Person wearing glasses"
              placeholder="blurred"
              layout="fixed"
              width={300}
              height={300}
            />
          </div> */}
        </div>
      </div>
    </section>

    <section className={styles.mission}>
      <div className="container">
        <h2 className={styles.missionTitle}>
          pain-free joints
          <br /> <span className="text-background">for everyone</span>
        </h2>
        <p className={styles.missionText}>
          We're solving an expensive problem — joint pain — with an affordable solution — AI technology.
        </p>
        <Link to="#" className="button button-primary">
          READ MEMO
        </Link>
      </div>
    </section>

    {/* <section className={styles.features}>
      <div className="container">
        <h3 className={styles.featuresTitle}>REVOLUTIONIZING VISION CARE ACCESS</h3>
        <div className={styles.featureGrid}>
          {[
            {
              Icon: Clock,
              title: "ALWAYS-ON",
              description:
                "We don't believe in business hours. Get your vision test any time and get the right care when you need it.",
            },
            {
              Icon: Calendar,
              title: "NO SCHEDULING, NO PLANNING",
              description:
                "Schedule-free vision care means you can access tests at higher frequencies and get real-time data about your vision.",
            },
            {
              Icon: Users,
              title: "NO SPECIALIZED STAFFING REQUIRED",
              description:
                "Eyebot eliminates the need for specialized staffing, reducing operational costs while maintaining quality.",
            },
            {
              Icon: BarChart,
              title: "UNMATCHED THROUGHPUT",
              description:
                "Traditional exam lanes test a maximum of 12 patients in a day — Eyebot machines deliver over 100 exams per day.",
            },
          ].map(({ Icon, title, description }, index) => (
            <div key={index} className={styles.featureItem}>
              <Icon className={styles.featureIcon} />
              <h4 className={styles.featureTitle}>{title}</h4>
              <p className={styles.featureDescription}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section> */}

    {/* <section className={styles.partners}>
      <div className="container">
        <div className={styles.partnerGrid}>
          <StaticImage
            src="../images/person-wearing-glasses-2.jpg"
            alt="Person wearing glasses"
            width={500}
            height={600}
            className="rounded-lg"
          />
          <div>
            <div className="flex items-center gap-4 mb-6">
              <StaticImage
                src="../images/partner-logo.png"
                alt="Partner logo"
                width={100}
                height={40}
                className="object-contain"
              />
              <span className="text-xl">×</span>
              <StaticImage
                src="../images/eyebot-logo.png"
                alt="Eyebot logo"
                width={100}
                height={40}
                className="object-contain"
              />
            </div>
            <h2 className={styles.partnerTitle}>FROM VISION TEST TO GLASSES PURCHASE IN MINUTES</h2>
            <p className={styles.partnerText}>
              Working with leading optical retailers and eyewear brands, we connect test results to inventory directly.
              After completing a vision test, customers can immediately browse available frames and place their order.
            </p>
          </div>
        </div>
      </div>
    </section> */}

    {/* <section className={styles.technology}>
      <div className="container">
        <div className={styles.technologyGrid}>
          <div>
            <h2 className={styles.technologyTitle}>FAST. EASY. ACCURATE.</h2>
            <p className={styles.technologyText}>
              Our revolutionary standardized vision testing method brings clinical-grade accuracy to automated testing.
              The patented process ensures consistent results across all testing conditions, making vision care more
              accessible.
            </p>
            <Link to="#" className="button button-primary">
              VIEW TECHNOLOGY
            </Link>
          </div>
          <StaticImage
            src="../images/eye-diagram.jpg"
            alt="Eye diagram"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section> */}
  </Layout>
)

export default IndexPage

