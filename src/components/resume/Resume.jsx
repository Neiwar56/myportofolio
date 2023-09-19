import React from "react";

const Resume = () => {
  return (
    <div id="Parcours" className="bg-gradient-to-r from-white to-blue-300 container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Parcours
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
        Voici mes expériences et qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-500">
              Expériences
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Stage Professionelle
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Global IT Service
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  Aout 2023 - Septembre 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                J'ai effectué un stage de 2 mois en tant que développeur web chez Global IT Service,
                 entreprise spécialisée dans les solutions digitales.
                  Intégré à l'équipe de développement, ce stage m'a permis d'appliquer les connaissances acquises pendant ma formation et de découvrir le monde professionnel.
                Les principales missions que j'ai menées consistaient à développer les nouvelles fonctionnalités d'applications web en PHP et JavaScript.
                 J'ai pu apprendre et pratiquer des frameworks tels que Symfony et React.
                J'ai également participé à la gestion technique de projets en utilisant la méthode agile Scrum.
                 J'ai ainsi pu apprendre à travailler en équipe, participer aux rituels Agiles et contribuer à la gestion d’un backlog produit.
                Enfin, j'ai pu mener de A à Z le projet de mon portofolio, en collaboration avec les équipes UX et graphisme.
                 Ce projet m'a permis d'avoir une expérience concrète sur le développement d'un site web sur mesure.
                Ce stage a été une expérience très enrichissante qui m'a permis de confirmer mon intérêt pour le métier de développeur web et d'acquérir de nouvelles compétences techniques et méthodologiques.
                </p>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Stage Professionelle
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Global IT Service
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  Aout 2023 - Septembre 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi nihil aut quae obcaecati alias placeat totam aperiam
                  pariatur quam? Accusantium minima aperiam error obcaecati
                  autem doloribus deserunt qui, laborum incidunt amet, numquam
                  eos cum tempora. Debitis, esse quae corporis deserunt officia
                  quos in a, quaerat vero odio vitae.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-blue-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Baccalauréat Scientifique
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  CCNDL
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                  2021
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                J'ai obtenu mon baccalauréat scientifique, série S, au Collège Catholique Notre Dame en 2021.
                 Cette formation m'a permis d'acquérir de solides bases dans les principales disciplines scientifiques que sont les mathématiques,
                  la physique-chimie, les sciences de la vie et de la Terre.
                J'ai approfondi mes connaissances en mathématiques en suivant l'enseignement de spécialité de mathématiques.
                 J'ai notamment étudié l'analyse, l'algèbre, les probabilités et statistiques, ainsi que la géométrie.
                L'enseignement de physique-chimie m'a apporté des connaissances approfondies en mécanique, électricité, chimie organique et inorganique.
                 J'ai réalisé de nombreux travaux pratiques pour consolider ces apprentissages théoriques.
                En sciences de la vie et de la Terre, je me suis familiarisé avec la démarche scientifique à travers l'étude de la Terre,
                 du vivant et de l'évolution.
                Cette formation équilibrée entre théorie et pratique m'a permis d'acquérir des bases solides dans les matières scientifiques
                 et des méthodes de travail qui me seront utiles pour la suite de mon parcours.
                </p>
              </div>
              <div className=" flex flex-col gap-1 border-2 border-blue-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                 
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  PIGIER BENIN
                </span>
                <span className=" text-[.9rem] font-semibold text-blue-500 sm:text-base">
                Année 2021 - Année 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                J'ai obtenu ma licence professionnelle en réseaux et génie logiciel à PIGIER BENIN en 2024. Cette formation de trois ans,
                  axée sur la pratique, m'a permis d'acquérir de solides compétences techniques dans le domaine des réseaux informatiques,
                  des systèmes d'exploitation et du développement logiciel.
                  Durant ces années, j'ai appris à concevoir, déployer et administrer des architectures réseaux complètes.
                  J'ai été formé aux protocoles et équipements réseaux (routeurs, commutateurs, pare-feux...),
                  à l'installation et la configuration de systèmes d'exploitation, ainsi qu'aux différents langages et frameworks de programmation.
                  J'ai également réalisé plusieurs projets de développement de sites web.
                  Ces mises en pratique m'ont permis d'acquérir de l'expérience sur des cas concrets et de consolider mes connaissances.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
