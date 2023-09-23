import Button from "global/Button";
import landingFG from "landing/landing-fg.png";

function Hero() {
  return (
    <section className="flex flex-col-reverse md:bg-[url('landing/hero-bg.webp')] bg-cover bg-left-top bg-no-repeat pt-24 lg:pt-44 pb-0 gap-10" >
      {/* main body */}
      <div className="flex flex-col-reverse items-center min-[2100px]:justify-center md:flex-row-reverse lg:flex-row relative lg:py-[7.65rem] xl:py-[10rem] gap-16 md:gap-0">
        {/* Image */}
        <img className="h-[clamp(22.9665rem,45vw,45.3125rem)] w-[clamp(26.22931rem,55vw,51.75rem)] lg:absolute right-0 min-[2100px]:right-[calc((100vw/2)-35%)] bottom-0 lg:bottom-[7.65rem] lg:bg-[url('landing/landing-fg-bg.webp')] bg-contain bg-center bg-no-repeat bg-opacity-[200%]" src={landingFG} alt="" />
        {/* text */}
        <div className="flex flex-col items-center md:items-start gap-10 lg:gap-20 px-8 md:pr-0 md:pl-12 lg:pl-16 2xl:pl-32 lg:w-[70%] relative">
            <div className="flex flex-col gap-5 w-fit items-center md:items-start text-center md:text-left">
              <p className=" font-clash-display text-[2rem] lg:text-[3.5rem] xl:text-[5rem] font-bold flex flex-col [line-height:2.2rem] lg:[line-height:3.85rem] xl:[line-height:5.5rem]">
                <span className="relative w-fit self-center md:self-auto md:w-auto">
                  <i aria-description="bulb icon" className="inline-block bg-[url('landing/landing-bulb.svg')] bg-cover bg-left-top bg-no-repeat h-[1.625rem] lg:h-[3.217rem] xl:h-[4.5625rem] w-[1.225rem] lg:w-[2.265rem] xl:w-[3.3125rem] absolute -top-[1.2rem] lg:-top-10 xl:-top-14 left-[12.75rem] lg:left-[22.5rem] xl:left-[31.65rem]" />
                  getlinked Tech
                </span>
                <span>
                  Hackathon <b className=" text-orchid-gl">1.0 </b>
                  <i aria-description="chain link icon" className="inline-block bg-[url('landing/landing-chain.svg')] bg-cover bg-bottom-left bg-no-repeat h-[2.05rem] lg:h-[3.7rem] xl:h-[5.375rem] w-[2.05rem] lg:w-[3.7rem] xl:w-[5.375rem]" />
                  <i aria-description="explosion icon" className="inline-block bg-[url('landing/landing-boom.svg')] bg-cover bg-center bg-no-repeat h-[1.38rem] lg:h-[2.53rem] xl:h-[3.625rem] w-[1.38rem] lg:w-[2.53rem] xl:w-[3.625rem]" />
                </span>
              </p>
              <p className="text-[0.8125rem] [line-height:166%] w-[80%] lg:max-w-[50%]">
                Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize
              </p>
              <Button className="w-fit" default={true}>Register</Button>
            </div>
          <div className="[&_p]:font-unica-one [&_p]:text-[4rem] [&_p]:[line-height:3rem] [&_span]:[line-height:normal] flex gap-5">
            <div className="flex items-end">
              <p>00</p>
              <span>H</span>
            </div>
            <div className="flex items-end">
              <p>00</p>
              <span>M</span>
            </div>
            <div className="flex items-end">
              <p>00</p>
              <span>S</span>
            </div>
          </div>
        </div>
      </div>
      {/* tagline */}
      <p className="relative w-fit self-center lg:self-end font-bold italic lg:mr-8 xl:mr-16 text-[.75rem] sm:text-[1rem] lg:text-[2.25rem]">
        <span>Igniting a Revolution in HR Innovation</span>
        <i aria-description="line icon" className="inline-block bg-[url('landing/landing-line.svg')] bg-cover bg-left-top bg-no-repeat w-[7.1875rem] h-[.4375rem] lg:w-[15.8125rem] lg:h-[1rem] absolute bottom-[-.5rem] right-[.1rem]" />
      </p>
    </section>
  )
}     

export default Hero