import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 3

export default function Home({ posts }) {
  // get latest post
  const latestPost = posts[0]
  console.log(latestPost)

  // remove latest post from posts

  // return (
  //   <>
  //     <div className="divide-y divide-gray-200 dark:divide-gray-700">
  //       {/* <div className="pt-6 pb-8 space-y-2 md:space-y-5">
  //         <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
  //           Latest
  //         </h1>
  //         <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
  //           {siteMetadata.description}
  //         </p>
  //       </div> */}
  //       <ul className="divide-y divide-gray-200 dark:divide-gray-700">
  //         {!posts.length && 'No posts found.'}
  //         {posts.slice(1, MAX_DISPLAY).map((post) => {
  //           const { slug, date, title, summary, tags } = post
  //           return (
  //             <li key={slug} className="py-12">
  //               <article>
  //                 <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
  //                   <dl>
  //                     <dt className="sr-only">Published on</dt>
  //                     <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
  //                       <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
  //                     </dd>
  //                   </dl>
  //                   <div className="space-y-5 xl:col-span-3">
  //                     <div className="space-y-6">
  //                       <div>
  //                         <h2 className="text-2xl font-bold leading-8 tracking-tight">
  //                           <Link
  //                             href={`/blog/${slug}`}
  //                             className="text-gray-900 dark:text-gray-100"
  //                           >
  //                             {title}
  //                           </Link>
  //                         </h2>
  //                         <div className="flex flex-wrap">
  //                           {tags.map((tag) => (
  //                             <Tag key={tag} text={tag} />
  //                           ))}
  //                         </div>
  //                       </div>
  //                       <div className="prose text-gray-500 max-w-none dark:text-gray-400">
  //                         {summary}
  //                       </div>
  //                     </div>
  //                     <div className="text-base font-medium leading-6">
  //                       <Link
  //                         href={`/blog/${slug}`}
  //                         className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
  //                         aria-label={`Read "${title}"`}
  //                       >
  //                         Read more &rarr;
  //                       </Link>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </article>
  //             </li>
  //           )
  //         })}
  //       </ul>
  //     </div>

  //     {/* {posts.length > MAX_DISPLAY && (
  //       <div className="flex justify-end text-base font-medium leading-6">
  //         <Link
  //           href="/blog"
  //           className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
  //           aria-label="All posts"
  //         >
  //           All Posts &rarr;
  //         </Link>
  //       </div>
  //     )} */}
  //   </>
  // )

  return (
    <div className="py-24 bg-white sm:py-32">
      <div className="grid grid-cols-1 px-6 mx-auto max-w-7xl gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
        <article className="w-full max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
          <time dateTime={latestPost.date} className="block text-sm leading-6 text-gray-600">
            {latestPost.date}
          </time>
          <h2
            id="featured-post"
            className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            <Link href={latestPost.path} className="text-gray-900 dark:text-gray-100">
              {latestPost.title}
            </Link>
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-600">{latestPost.summary}</p>
          <div className="flex flex-col justify-between gap-6 mt-4 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
            <div className="flex">
              <a
                href={latestPost.path}
                className="text-sm font-semibold leading-6 text-indigo-600"
                aria-describedby="featured-post"
              >
                Continue reading <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
            {/* <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
              <a
                href={latestPost.author.href}
                className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
              >
                <img
                  src={latestPost.author.imageUrl}
                  alt=""
                  className="flex-none w-6 h-6 rounded-full bg-gray-50"
                />
                {latestPost.author.name}
              </a>
            </div> */}
          </div>
        </article>
        <div className="w-full max-w-2xl pt-12 mx-auto border-t border-gray-900/10 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
          <div className="-my-12 divide-y divide-gray-900/10">
            {posts.slice(1, MAX_DISPLAY).map((post) => (
              <article key={post.id} className="py-12">
                <div className="relative max-w-xl group">
                  <time dateTime={post.date} className="block text-sm leading-6 text-gray-600">
                    {post.date}
                  </time>
                  {/* <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                    <a href={post.path}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h2> */}
                  <h2 className="text-2xl font-bold leading-8 tracking-tight">
                    <Link href={post.path} className="text-gray-900 dark:text-gray-100">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="mt-4 text-sm leading-6 text-gray-600">{post.summary}</p>
                </div>
                {/* <div className="flex mt-4">
                  <a
                    href={post.author.href}
                    className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                  >
                    <img
                      src={post.author.imageUrl}
                      alt=""
                      className="flex-none w-6 h-6 rounded-full bg-gray-50"
                    />
                    {post.author.name}
                  </a>
                </div> */}
                <div className="flex flex-col justify-between gap-6 mt-4 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                  <div className="flex">
                    <a
                      href={latestPost.path}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                      aria-describedby="featured-post"
                    >
                      Continue reading <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                  {/* <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
              <a
                href={latestPost.author.href}
                className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
              >
                <img
                  src={latestPost.author.imageUrl}
                  alt=""
                  className="flex-none w-6 h-6 rounded-full bg-gray-50"
                />
                {latestPost.author.name}
              </a>
            </div> */}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
