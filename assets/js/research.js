/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "MISIÓN",
    authors:
      "DWD Solutions",
    conferences:
      "Crear experiencias digitales únicas mediante el desarrollo personalizado de aplicaciones web innovadoras, funcionales y escalables, con el fin de ayudar a nuestros clientes a destacarse en el mundo digital, optimizando sus procesos y alcanzando sus objetivos de negocio con éxito. ",
    researchYr: "",
    image: "assets/images/research-page/mision.png",

  },
  {
    title: "VISIÓN",
    authors:
      "DWD Solutions",
    conferences:
      "Ser una empresa reconocida internacionalmente para el año 2029 por nuestra labor y compromiso en ofrecer soluciones tecnológicas innovadoras que generen un impacto positivo y medible en nuestros clientes ",
    researchYr: "",
    image: "assets/images/research-page/vision.png",

  },
  {
    title: "NUESTROS VALORES",
    conferences:
    "",
    authors:
      "DWD Solutions",
    primer:
      "- Innovación Constante: Creemos en la importancia de estar a la vanguardia tecnológica, buscando continuamente nuevas formas de mejorar y ofrecer soluciones más eficientes y creativas para nuestros clientes",
    segundo:
      "- Agilidad y Adaptabilidad: Nos destacamos por nuestra capacidad de adaptarnos rápidamente a los cambios en el mercado y las necesidades de nuestros clientes, asegurando que nuestras soluciones sean siempre relevantes y efectivas",
    tercer:
      "- Integridad y Transparencia: Operamos con honestidad y transparencia en todas nuestras interacciones, construyendo relaciones de confianza con nuestros clientes",
    cuarto:
      "- Compromiso con el Éxito: Nos comprometemos a ser un socio estratégico para nuestros clientes, apoyándolos en su crecimiento digital y ayudándolos a destacar en el mercado",
    researchYr: "",
    image: "assets/images/research-page/valores.webp",

  },

];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      primer,
      segundo,
      tercer,
      cuarto
    }) =>
      (output += `
        <tr data-aos="zoom-in-left">
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class="researchTitleName">
                <div class="img-div">
                    <span class="imgResponsive">
                        <img src="${image}" class="imgRes">
                    </span>
                </div>
                <a href="#0" class="paperTitle" style="display: flex; justify-content: center;" > ${title} </a>
                <div class="authors" style="display: flex; justify-content: center;"> ${authors} </div>
                <br>
                ${conferences ? `<div class="rConferences">${conferences}</div>` : ""}
                ${researchYr ? `<div class="researchY">${researchYr}</div>` : ""}
                <br>
                ${primer ? `<div class="primer">${primer}</div>` : ""}
                <br>
                ${segundo ? `<div class="segundo">${segundo}</div>` : ""}
                <br>
                ${tercer ? `<div class="tercer">${tercer}</div>` : ""}
                <br>
                ${cuarto ? `<div class="tercer">${cuarto}</div>` : ""}
            </td>
        </tr>`)
);
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
