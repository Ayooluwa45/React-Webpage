import { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  HeroVideo,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrap,
  ArrowForward,
  ArrowRight,
} from "./HeroStyledElement";
import Video from "../../assets/video.mp4";
import { Button } from "../button/ButtonElement";

function Hero() {
  const [hover, setHover] = useState(false);

   const onHover = () => {
    setHover(!hover);
  };  
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <HeroVideo
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          ></HeroVideo>
        </HeroBg>
        <HeroContent>
          <HeroH1>My Travel Blog</HeroH1>
          <HeroP>
            We are group of people who love and are ready to travel round
            Europe with the aim of catching cruise and fun together.
          </HeroP>
          <HeroBtnWrap>
            <Button
              to="signup"
            onMouseLeave={onHover}
             onMouseEnter={onHover}
              primary="true"
              dark="true"
            >
              Join our group  {hover ? <ArrowRight/> : <ArrowForward/>}
            </Button>
          </HeroBtnWrap>
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default Hero;
