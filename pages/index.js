import Layout from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps(){
  const allPostsData = getSortedPostsData();
  return {
    props:{
      allPostsData
    }
  }
}

export default function Home({allPostsData}) {
  return (
    <Layout home>
      {/*<Head>
        <title>{siteName}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[My name is Angufibo Lincoln. I am a freelance software developer,
          digital marketere, community social practitioner, and human centered designer.
          I love travelling and giving a smile to the world.]
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on {' '}
           <a href="https://nextjs.org/learn">Our Next.js Tutorial</a>
          )
        </p>
      </section>*/}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br/>
              {id}
              <br/>
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
