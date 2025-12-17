import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Card, CardHeader } from "@/components/ui/card";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col">
      <section className="w-full flex flex-wrap relative">
        <div
          id="hero"
          className="w-full px-5 md:w-1/3 md:px-0 space-y-8 md:sticky top-24 h-max mb-10"
        >
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Accenture`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl mt-3"
                delay={BLUR_FADE_DELAY}
                text={"Application Development Senior Analyst"}
              />
              <BlurFadeText
                className="max-w-[600px] text-base mt-3"
                delay={BLUR_FADE_DELAY}
                text={"Apr 2023 - Present"}
              />
            </div>
          </div>
        </div>

        <div id="details" className="w-full px-5 md:w-2/3 md:px-16 h-auto">
          <div id="responsibilities">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-bold mb-3">
                My responsibilities at Accenture
              </h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <ul className=" list-disc pl-5 text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                <li>Develop the front-end for the TGO portal</li>
                <li>Collaborated with the product team for webpages designs</li>
                <li>Resolve other team’s front-end developers queries</li>
                <li>Designing BE-UI flows via flow and sequence diagrams</li>
                <li>Draft API responses with the back-end team</li>
                <li>Aligning UI team with correct coding standards</li>
                <li>
                  Ensure clear communication and understanding of User stories
                  within the team
                </li>
              </ul>
            </BlurFade>
          </div>
          <div id="impact" className="mt-10">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-bold mb-3">Impact</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <ul className=" list-disc pl-5 text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                <li>
                  Accelerated the development timeline, ensuring on-time
                  delivery of the project.
                </li>
                <li>
                  Test case driven approach helped to reduce defects during
                  testing phase.
                </li>
                <li>
                  Successfully developed webpages compliant with web
                  accessibility standards, achieving over 80% adherence.
                </li>
              </ul>
            </BlurFade>
          </div>

          <div id="projects" className="flex flex-col gap-y-3 mt-10">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8 + 0 * 0.05}>
              <Card className="flex py-3 px-5 bg-slate-900">
                <div className="flex-grow items-center flex-col group">
                  <CardHeader>
                    <h3 className="font-semibold leading-none text-xs sm:text-sm mb-2">
                      Termingeld online (TGO) for CommerzBank ( present )
                    </h3>
                  </CardHeader>
                  <div className="text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    As Lead Front-End Developer for a{" "}
                    <a
                      href="https://www.commerzbank.de/portal/en/englisch/english.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CommerzBank project
                    </a>
                    , I independently oversee all front-end operations,
                    involving strategic decision-making and collaboration with
                    back-end and product teams.
                    <br />
                    <br />
                    Seamlessly delivered various requirements of the bank listed
                    below:
                    <br />
                    <ul className=" list-disc pl-5 text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                      <li>Call Deposits</li>
                      <li>Individual Pricing for an advisor</li>
                      <li>Advisor Overview</li>
                      <li>
                        Creation of deposits exceeding 60 Million for various
                        foreign currencies
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 8 + 1 * 0.05}>
              <Card className="flex py-3 px-5 bg-slate-900">
                <div className="flex-grow items-center flex-col group">
                  <CardHeader>
                    <h3 className="font-semibold leading-none text-xs sm:text-sm mb-2">
                      Unilever
                    </h3>
                  </CardHeader>
                  <div className="text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                    Delivered a successful a category-driven Chinese e-commerce
                    website. For this, I was also awarded the Accenture
                    Celebrates Excellence award.
                  </div>
                </div>
              </Card>
            </BlurFade>
          </div>
        </div>
      </section>
    </main>
  );
}
