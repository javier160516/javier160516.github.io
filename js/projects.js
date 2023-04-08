document.addEventListener('DOMContentLoaded', () => {
    getProjects();
});

const getProjects = async () => {
    const containerProjects = document.querySelector('.container_projects');
    const projects = await fetch('../projects.json').then(res => res.json());

    projects.projects.forEach(project => {
        containerProjects.innerHTML += `
        <!-- CARD -->
        <div class="project" data-aos="${randomEffects()}">
          <div class="project_image">
            <img src="${project.image}" alt="..." loading="lazy">
          </div>
          <div class="project_description">
            <h3>${project.title}</h3>
            <p>
                ${project.description}
            </p>
            <div class="project_description_button">
              <a href="${project.link_git}">
                <img src="./img/github-white.svg" alt="..." width="18">
                GitHub
              </a>
              ${project.web == '' ? `<a href="#">
              <img src="./img/web-white.svg" alt="..." width="18">
              Web
            </a>` : ''}
            </div>
          </div>
          
        </div>
        <!-- END CARD -->
        `;
    });

}

const randomEffects = () => {
  const effects = ['flip-left', 'flip-right', 'flip-up', 'flip-down'];
  const random = Math.floor(Math.random() * effects.length);

  return effects[random];
}