AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "JavaScript",
    cardImage: "assets/images/experience-page/javascript.png",
    place: "Lenguage de programación",
    desp: "<li>Desarrollamos aplicaciones web interactivas y dinámicas utilizando JavaScript, enfocándonos en mejorar la experiencia del usuario a través de interfaces intuitivas.</li> <li>Implementamos frameworks modernos como React y Vue.js para construir aplicaciones responsivas que se adaptan a diversas plataformas y dispositivos.</li> <li>Nuestra experiencia en programación asíncrona y técnicas de optimización del rendimiento nos permite ofrecer soluciones rápidas y eficientes para nuestros clientes.</li>",
    frameworks: ["React", "Vue.js", "Node.js"]
  },
  {
    title: "Python",
    cardImage: "assets/images/experience-page/python.png",
    place: "Lenguage de programación",
    desp: "<li>Utilizamos Python para desarrollar aplicaciones backend robustas y escalables, asegurando una integración eficiente con bases de datos y servicios externos.</li> <li>Implementamos metodologías ágiles que nos permiten adaptarnos rápidamente a los cambios de requisitos y mejorar continuamente nuestros procesos de desarrollo.</li> <li>Nuestra experiencia en análisis de datos y aprendizaje automático nos permite ofrecer soluciones innovadoras basadas en datos para ayudar a nuestros clientes a tomar decisiones informadas.</li>",
    frameworks: ["Django", "Flask", "Pandas"]
  },
  {
    title: "PHP",
    cardImage: "assets/images/experience-page/php.png",
    place: "Lenguage de programación",
    desp: "<li>Desarrollamos aplicaciones web personalizadas utilizando PHP, enfocándonos en crear soluciones a medida que cumplen con las necesidades específicas de nuestros clientes.</li> <li>Colaboramos en proyectos de desarrollo de sistemas de gestión y e-commerce, garantizando una experiencia de usuario fluida y eficiente.</li> <li>Nuestra experiencia en la optimización de rendimiento y seguridad en aplicaciones PHP nos permite entregar productos confiables y seguros.</li>",
    frameworks: ["Laravel", "Symfony", "CodeIgniter"]
  },
  {
    title: "Scrum",
    cardImage: "assets/images/experience-page/scrum.png",
    place: "Metodología de Gestión de Proyectos",
    desp: "<li>Implementamos Scrum para mejorar la eficiencia en nuestros equipos de desarrollo, logrando resultados rápidos y visibles en cada sprint.</li><li>Fomentamos reuniones diarias y retrospectivas para la mejora continua y la comunicación efectiva entre los miembros del equipo y con nuestros clientes.</li>",
    frameworks: ["JIRA", "Trello"]
  },
  {
    title: "Kanban",
    cardImage: "assets/images/experience-page/kanban.png",
    place: "Metodología de Gestión de Proyectos",
    desp: "<li>Adoptamos Kanban para visualizar y gestionar el flujo de trabajo en tiempo real, optimizando la entrega continua de tareas y el monitoreo de cargas de trabajo.</li><li>Con Kanban, mejoramos la capacidad de adaptarnos a cambios de prioridad y aumentamos la productividad mediante la optimización del trabajo en curso.</li>",
    frameworks: ["Trello", "Azure DevOps"]
  },
];


const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, desp, frameworks }) =>
      (output += `
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400">
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
            </p>
            <ol>
              ${desp}
            </ol>
            <p><strong>Frameworks:</strong> ${frameworks.join(", ")}</p>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCards2);
