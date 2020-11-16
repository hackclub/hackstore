/**@jsx jsx*/

import { jsx, Button } from 'theme-ui'

import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown/with-html'

const Page = ({ newd, data }) => {
  const parseddata = JSON.parse(data)
  const name = parseddata.data.name

  return (
    <div sx={{ p: {} }}>
      <Head>
        <title>{name} - Hack Store</title>
      </Head>
      <div sx={{ width: '100vw', textAlign: 'center', mt: 2 }}>
        <div>
          <img
            sx={{ width: 150 }}
            src={parseddata.data.img}
            alt='Image Not Found'
          />
          <div>
            {looparray.map((ele) =>
              ele <= parseddata.data.ratings ? (
                <img sx={{ width: '20px' }} src='/starfilled.png' />
              ) : (
                <img sx={{ width: '20px' }} src='/starblank.png' />
              )
            )}
            <h1 sx={{ mx: 4 }}>{name}</h1>

            {parseddata.data.tags ? (
              <div
                sx={{
                  width: ['100vw', '80vw'],
                  display: 'flex',
                  flexWrap: 'wrap',
                  mx: 'auto',
                  justifyContent: 'center',
                }}>
                {parseddata.data.tags.split(',').map((element) => (
                  <span
                    sx={{
                      py: [2],
                      px: 3,
                      bg: 'primary',
                      color: 'white',
                      fontWeight: 'bold',
                      borderRadius: 8,
                      m: [2],
                    }}>
                    {element}
                  </span>
                ))}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div
        sx={{
          width: '80vw',
          marginX: 'auto',
          p: { fontSize: [2] },
          li: {
            fontSize: [2],
          },
          img: {
            width: ['280px', '450px', '600px', '700px', '850px'],
            textAlign: 'center',
            height: ['280px', '300px', '450px', '500px', '600px'],
            margin: 'auto',
            display: 'block',
            my: 4,
          },
          h1: {
            fontSize: 5,
            textAlign: 'center',
          },
        }}>
        <ReactMarkdown source={parseddata.content} escapeHtml={false} />
      </div>
      <div
        sx={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          pb: 4,
        }}>
        <Button
          as='a'
          sx={{
            background: `linear-gradient(101.23deg, #07FFD0 4.81%, rgba(47, 208, 57, 0.96) 94.34%)`,
            width: ['200px'],
            py: [3],
            mt: 3,
          }}
          href={parseddata.data.download}>
          Download
        </Button>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const content = await import(`../../apppages/${slug}/README.md`)
  const data = matter(content.default)

  return { props: { newd: slug, data: JSON.stringify(data) } }
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'apppages')
  const filenames = fs.readdirSync(postsDirectory)

  const paths = filenames.map((filename) => {
    return { params: { slug: filename } }
  })

  return { paths, fallback: false }
}

const looparray = [1, 2, 3, 4, 5]

export default Page
