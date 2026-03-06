import Image from "next/image";

export default function About() {
  return (
    <div className="font-karla text-black/80">
      {/* Header */}
      <header className="py-8">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <div>
              <a
                className="inline-block font-sans text-[36px] font-bold tracking-wide text-black no-underline"
                href="/"
              >
                Manuel Baez
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 md:py-40 relative overflow-hidden">
        {/* Background watermark */}
        <h2 className="absolute top-0 left-1/2 -translate-x-1/2 font-playfair text-[300px] leading-none text-black/5 pointer-events-none select-none whitespace-nowrap z-0">
          About
        </h2>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - Image */}
            <div className="md:w-5/12">
              <Image
                className="w-full h-auto object-cover"
                src="/images/about.jpg"
                alt="About photo"
                width={600}
                height={800}
              />
            </div>

            {/* Right Column - About Description */}
            <div className="md:w-1/2 md:ml-auto pt-12">
              <div>
                {/* Name */}
                <h2 className="font-playfair leading-snug mb-6">
                  <span className="block text-[50px]">Manuel</span>
                  <span className="block text-[50px]">Baez Gonzalez</span>
                </h2>

                {/* Description with rotated label */}
                <div className="relative pl-16">
                  <div className="absolute top-0 left-4 flex flex-col items-center">
                    <h2 className="rotate-heading font-karla text-s uppercase tracking-[0.5em] writing-vertical whitespace-nowrap">
                      About
                    </h2>
                  </div>
                  <p className="mb-4 leading-relaxed">
                    Manuel is a backend-focused full-stack developer with 4+
                    years of experience at Microsoft, where he built
                    microservices in the .NET/Azure ecosystem while owning CI/CD
                    pipelines and cloud infrastructure. Working in the DevSecOps
                    space, he delivered 4x performance improvements and
                    enterprise-scale authentication systems. Manuel also brings
                    experience in TypeScript and JavaScript across various
                    projects, is Azure certified (AZ-400, AZ-204), and is fluent
                    in English and Spanish.
                  </p>
                  <p className="flex gap-4 mb-4">
                    <a href="#" className="text-sky-400 text-2xl">
                      <i className="icon-facebook4" />
                    </a>
                    <a href="#" className="text-sky-400 text-2xl">
                      <i className="icon-twitter3" />
                    </a>
                    <a href="#" className="text-sky-400 text-2xl">
                      <i className="icon-googleplus" />
                    </a>
                    <a href="#" className="text-sky-400 text-2xl">
                      <i className="icon-dribbble2" />
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:manuel@manuelbg.com"
                      className="inline-block border-2 border-black text-black px-6 py-3 uppercase text-sm tracking-wider hover:bg-black hover:text-white transition-colors"
                    >
                      Contact Me!
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
