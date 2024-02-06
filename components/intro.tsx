import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h5 className="ting-tighter leading-tight md:pr-8">
        Welcome to LaWayne's Blog.
      </h5>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Check out my {' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-black-600 duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>
    </section>
  )
}

export default Intro
