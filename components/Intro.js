import React from 'react';

const Intro = () => (
  <section className="section has-text-centered">
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <h3 className="title is-spaced is-size-3-desktop is-size-4-mobile">
            Yo, I&apos;m Brandon. It&apos;s cool that you&apos;re here!
          </h3>
          <h5 className="subtitle is-size-5-desktop">
            I am a full stack engineer currently working at
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.redventures.com/"
            >
              {' '}
              Red|Ventures
            </a>
            . I work on large scale apps designed to help comsumers get the
            services and products they want faster for the best prices. In my
            freetime, I enjoy learning new technologies, going to concerts, &
            traveling. I&apos;m alway up for a new challenges so please{' '}
            <a
              href="mailto:brandon.cox@pm.me?Subject=Hey%20Brandon"
              target="_top"
            >
              contact me
            </a>
            !
          </h5>
        </div>
      </div>
    </div>
  </section>
);

export default Intro;
