import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Texts = () => {
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);
  const scrollRef4 = useRef(null);
  // const scrollRef5 = useRef(null);
  const fadeOut2 = useRef(null);
  const fadeOut3 = useRef(null);
  const fadeOut4 = useRef(null);
  // const fadeOut5 = useRef(null);
  const fadeOut6 = useRef(null);
  // const fadeOut7 = useRef(null);
  //ref 5 is bottom
  const scrollRef6 = useRef(null);
  const scrollRef7 = useRef(null);
  //ref 7 is bottom
  useGSAP(() => {
    const timeline1 = gsap.timeline();
    timeline1.from(scrollRef1.current, {
      opacity: 1,
    });

    // Fade out as you scroll up
    timeline1.to(scrollRef1.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef1.current,
        start: 'bottom bottom',
        end: '10% top',
        pin: scrollRef1.current,
        scrub: 2,
      },
    });

    const timeline2 = gsap.timeline();
    // timeline2.to(scrollRef2.current, {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: scrollRef2.current,
    //     start: 'top bottom',
    //     end: '20% top',
    //     scrub: 5,
    //     markers: true,
    //   },
    // });
    timeline2.from(fadeOut2.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef2.current,
        start: ' 10% top',
        end: 'bottom top',
        pin: fadeOut2.current,
        scrub: 2,
        // markers: true,
      },
    });

    timeline2.to(scrollRef2.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef2.current,
        start: 'bottom 30%', // Start the fade-out when the element reaches the bottom
        end: 'bottom 5%', // Adjust this value to control the fade-out distance
        pin: false, // Don't pin during fade-out
        scrub: 2,
        // markers: true,
      },
    });
    const timeline3 = gsap.timeline();
    timeline3.from(fadeOut3.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef3.current,
        start: ' 10% top',
        end: 'bottom top',
        pin: fadeOut3.current,
        scrub: 2,
        // markers: true,
      },
    });

    timeline3.to(scrollRef3.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef3.current,
        start: 'bottom 30%', // Start the fade-out when the element reaches the bottom
        end: 'bottom 5%', // Adjust this value to control the fade-out distance
        pin: false, // Don't pin during fade-out
        scrub: 2,
        // markers: true,
      },
    });
    const timeline4 = gsap.timeline();
    timeline4.from(fadeOut4.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef4.current,
        start: ' 10% top',
        end: 'bottom top',
        pin: fadeOut4.current,
        scrub: 2,
        // markers: true,
      },
    });

    timeline4.to(scrollRef4.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef4.current,
        start: 'bottom 30%', // Start the fade-out when the element reaches the bottom
        end: 'bottom 5%', // Adjust this value to control the fade-out distance
        pin: false, // Don't pin during fade-out
        scrub: 2,
        // markers: true,
      },
    });
    // const timeline5 = gsap.timeline();
    // timeline5.from(scrollRef4.current, {
    //   scrollTrigger: {
    //     trigger: scrollRef4.current,
    //     start: ' 10% top',
    //     end: 'bottom top',
    //     pin: scrollRef5.current,
    //     scrub: 2,
    //     // markers: true,
    //   },
    // });
    const timeline6 = gsap.timeline();
    timeline6.from(fadeOut6.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef6.current,
        start: ' 10% top',
        end: 'bottom top',
        pin: fadeOut6.current,
        scrub: 2,
        // markers: true,
      },
    });

    timeline6.to(scrollRef6.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef6.current,
        start: 'bottom 50%', // Start the fade-out when the element reaches the bottom
        end: 'bottom 5%', // Adjust this value to control the fade-out distance
        pin: false, // Don't pin during fade-out
        scrub: 2,
        // markers: true,
      },
    });
    const timeline7 = gsap.timeline();
    timeline7.from(scrollRef7.current, {
      opacity: 0,
      scrollTrigger: {
        trigger: scrollRef7.current,
        start: ' 30% top',
        end: 'bottom top',
        pin: scrollRef7.current,
        scrub: 2,
      },
    });
    // const timeline5 = gsap.timeline();
    // timeline5.from(scrollRef5.current, {
    //   opacity: 0,
    //   scrollTrigger: {
    //     trigger: scrollRef4.current,
    //     start: ' top 90%',
    //     end: 'bottom bottom',
    //     pin: scrollRef5.current,
    //     scrub: 2,
    //     markers: true,
    //   },
    // });
  }, []);
  return (
    <div style={{ display: 'flex', color: 'white' }}>
      <div style={{ width: '70px' }}></div>
      <div style={{ padding: '0 0 70px 70px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'end',
            fontSize: '75px',
            fontFamily: 'roboto',
            fontWeight: '400',
            width: '470px',
            lineHeight: '1',
            height: '100vh',
            overflow: 'hidden',
          }}
          className='scroll'
          ref={scrollRef1}
        >
          Missing action due to low end devices?
        </div>
        <div
          style={{
            // opacity: 0,
            fontFamily: 'roboto',
            fontSize: '60px',
            fontWeight: '300',
            width: '470px',
            lineHeight: '1.2',
            height: '100vh',
            overflow: 'hidden',
          }}
          ref={scrollRef2}
        >
          <div ref={fadeOut2}>Fed-up of Chasing every performant device?</div>
        </div>
        <div
          style={{
            fontFamily: 'roboto',
            fontSize: '60px',
            fontWeight: '300',
            width: '470px',
            lineHeight: '1.2',
            height: '100vh',
            overflow: 'hidden',
          }}
          ref={scrollRef3}
        >
          <div ref={fadeOut3}>
            Do you think your device is holding you back from showing off your
            talents?
          </div>
        </div>
        <div ref={scrollRef4}>
          <div
            style={{
              fontFamily: 'roboto',
              fontSize: '60px',
              fontWeight: '300',
              width: '470px',
              lineHeight: '1.2',
              height: '150vh',
              overflow: 'hidden',
            }}
          >
            <div
              ref={fadeOut4}
              // style={{
              //   display: 'flex',
              //   flexDirection: 'column',
              //   justifyContent: 'space-between',
              // }}
            >
              <div>
                Here comes "Gemdu" , the ultimate savior of potential gamers.
              </div>
              <div
                style={{
                  fontFamily: 'sans-serif',
                  fontSize: '16px',
                  fontWeight: '300',
                  lineHeight: '1.2',
                  width: 'auto',
                  // height: '100vh',
                  marginTop: '50vh',
                  overflow: 'hidden',
                }}
              >
                {/* So how does your business stand out, attract new customers and
                grow sales? */}
              </div>
            </div>
          </div>
          {/* <div
            style={{
              fontFamily: 'sans-serif',
              fontSize: '16px',
              fontWeight: '300',
              lineHeight: '1.2',
              width: '600px',
              marginTop: '50%',
            }}
          >
            So how does your business stand out, attract new customers and grow
            sales?
          </div> */}
        </div>
        {/* <div
          style={{
            fontFamily: 'sans-serif',
            fontSize: '16px',
            fontWeight: '300',
            lineHeight: '1.2',
            width: 'auto',
            height: '100vh',
            overflow: 'hidden',
          }}
          ref={scrollRef5}
        >
          So how does your business stand out, attract new customers and grow
          sales?
        </div> */}
        <div
          style={{
            fontFamily: 'roboto',
            fontSize: '60px',
            fontWeight: '300',
            width: '470px',
            lineHeight: '1.2',
            height: '450vh',
            overflow: 'hidden',
          }}
          ref={scrollRef6}
        >
          <div ref={fadeOut6}>Unleash your true potential with Gemdu.</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'end',
            fontSize: '60px',
            fontFamily: 'roboto',
            fontWeight: '400',
            lineHeight: '1.1',
            width: 'auto',
            height: '100vh',
            overflow: 'hidden',
          }}
          ref={scrollRef7}
        >
          Yeah
          <br />
          You got it right! <br />
          Gemdu.
        </div>
      </div>
    </div>
  );
};

export default Texts;
