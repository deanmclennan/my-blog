import Link from '@/components/Link'

import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  // get latest post
  const latestPost = posts[0]

  return (
    <div className="py-24 font-sans sm:py-32">
      <div className="grid grid-cols-1 px-6 mx-auto max-w-7xl gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
          <h2
            id="featured-post"
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            <Link
              href={latestPost.path}
              target="_self"
              className="text-gray-900 dark:text-gray-100"
            >
              {latestPost.title}
            </Link>
          </h2>
          <time
            dateTime={formatDate(latestPost.date)}
            className="block text-sm leading-6 text-gray-600"
          >
            {formatDate(latestPost.date)}
          </time>

          {/* tag */}
          <div className="flex flex-wrap mt-4 space-x-2 ">
            {latestPost.tags.map((tag) => (
              <Tag key={tag} text={tag} />
            ))}
          </div>

          <p className="mt-4 text-sm leading-6 text-gray-600">{latestPost.summary}</p>
          <div className="flex flex-col justify-between gap-6 mt-4 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
              <a
                href={latestPost.path}
                className="text-sm font-semibold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-describedby="featured-post"
              >
                Continue reading <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </article>
        <div className="w-full max-w-2xl pt-12 mx-auto border-t border-gray-900/10 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-12 divide-y divide-gray-900/10">
            {posts.slice(1, MAX_DISPLAY).map((post) => (
              <article key={post.id} className="py-12">
                <div className="relative max-w-xl group">
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link
                      href={post.path}
                      target="_self"
                      className="text-gray-900 dark:text-gray-100"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <time
                    dateTime={formatDate(post.date)}
                    className="block text-sm leading-6 text-gray-600"
                  >
                    {formatDate(post.date)}
                  </time>

                  <p className="mt-4 text-sm leading-6 text-gray-600">{post.summary}</p>
                </div>

                <div className="flex flex-col justify-between gap-6 mt-4 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                  <div className="flex">
                    <a
                      href={latestPost.path}
                      className="text-sm font-semibold leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      aria-describedby="featured-post"
                    >
                      Continue reading <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
